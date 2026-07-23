(function () {
  "use strict";

  const mapData = window.LETOM_MAP_DATA;
  const mapRoot = document.querySelector("#mediterranean-map");
  if (!mapRoot || !mapData) return;

  if (!window.L) {
    mapRoot.classList.add("map-unavailable");
    mapRoot.innerHTML = `
      <div class="map-static-fallback">
        <p class="eyebrow">Záložné zobrazenie</p>
        <h2>Mapa sa teraz nenačítala</h2>
        <p>Obsah je stále dostupný cez výber krajiny, vyhľadávanie na webe a odkazy nižšie.</p>
        <div class="map-static-links">
          <a href="blog/5-zaujimavosti-stredomoria-3.html">Články zo Stredomoria</a>
          <a href="spravy.html">Flash správy</a>
          <a href="lety.html">Lety zo Slovenska</a>
        </div>
      </div>`;
    const fallback = document.querySelector("#map-tile-fallback");
    if (fallback) fallback.hidden = false;
    return;
  }

  const state = { filter: "all", country: "all", query: "", selectedId: null };
  const labels = {
    all: "Všetko",
    trips: "Moje cesty",
    content: "Obsah",
    flash: "Flash správy"
  };
  const actionLabels = {
    article: "Prečítať článok",
    video: "Pozrieť video",
    podcast: "Vypočuť podcast"
  };
  const map = L.map(mapRoot, {
    scrollWheelZoom: false,
    zoomControl: true,
    minZoom: 3,
    maxZoom: 10,
    preferCanvas: true
  }).setView([38.2, 16.4], 4);
  const bounds = L.latLngBounds([[30.5, -10], [46.9, 36.8]]);
  map.setMaxBounds(bounds.pad(0.12));
  map.fitBounds(bounds, { padding: [24, 24] });

  const markerLayer = L.layerGroup().addTo(map);
  const tileFallback = document.querySelector("#map-tile-fallback");
  const resultSummary = document.querySelector("#map-results-summary");
  const emptyState = document.querySelector("#map-empty-state");
  const detailPanel = document.querySelector("#map-detail-panel");
  const detailBadge = document.querySelector("#map-detail-badge");
  const detailActions = document.querySelector("#map-detail-actions");
  const searchInput = document.querySelector("#map-search");
  const resultList = document.querySelector("#map-search-results");
  const countrySelect = document.querySelector("#map-country");

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap contributors</a>'
  }).on("tileerror", () => {
    if (tileFallback) tileFallback.hidden = false;
  }).addTo(map);

  function normalize(value) {
    return String(value || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  function getContent(destination) {
    return Array.isArray(destination.content)
      ? destination.content.filter((item) => actionLabels[item.type])
      : [];
  }

  function getFlash(destination) {
    return Array.isArray(destination.flash) ? destination.flash : [];
  }

  function hasPersonal(destination) {
    return Boolean(destination.personal);
  }

  function hasContent(destination) {
    return getContent(destination).length > 0;
  }

  function hasFlash(destination) {
    return getFlash(destination).length > 0;
  }

  function markerType(destination) {
    if (hasPersonal(destination)) return "trip";
    if (hasFlash(destination)) return "flash";
    return "content";
  }

  function matchesFilter(destination) {
    if (state.filter === "trips") return hasPersonal(destination);
    if (state.filter === "content") return hasContent(destination);
    if (state.filter === "flash") return hasFlash(destination);
    return hasPersonal(destination) || hasContent(destination) || hasFlash(destination);
  }

  function visibleDestinations() {
    const query = normalize(state.query).trim();
    return mapData.destinations.filter((destination) => {
      const searchable = normalize(`${destination.name} ${destination.country} ${destination.summary} ${destination.keywords}`);
      return matchesFilter(destination)
        && (state.country === "all" || destination.countryId === state.country)
        && (!query || searchable.includes(query));
    });
  }

  function markerIcon(destination) {
    const type = markerType(destination);
    const symbol = type === "trip" ? "★" : type === "flash" ? "!" : "●";
    return L.divIcon({
      className: "map-marker-shell",
      html: `<span class="map-marker map-marker-${type}" aria-hidden="true">${symbol}</span>`,
      iconSize: [34, 34],
      iconAnchor: [17, 17]
    });
  }

  function formatDate(value) {
    if (!value) return "";
    const date = new Date(`${value}T12:00:00`);
    return Number.isNaN(date.getTime()) ? value : new Intl.DateTimeFormat("sk-SK", {
      day: "numeric",
      month: "numeric",
      year: "numeric"
    }).format(date);
  }

  function createBadge(className, text) {
    const badge = document.createElement("span");
    badge.className = `map-status map-status-${className}`;
    badge.textContent = text;
    return badge;
  }

  function createAction(item) {
    const link = document.createElement("a");
    link.className = "map-action";
    link.href = item.url;
    link.textContent = actionLabels[item.type];
    if (/^https?:/i.test(item.url)) {
      link.target = "_blank";
      link.rel = "noopener";
    }
    return link;
  }

  function createFlashItem(item) {
    const wrapper = document.createElement("div");
    wrapper.className = "map-flash-item";
    const link = document.createElement("a");
    link.className = "map-action map-action-flash";
    link.href = item.url;
    link.textContent = "Prečítať flash správu";
    if (/^https?:/i.test(item.url)) {
      link.target = "_blank";
      link.rel = "noopener";
    }
    const title = document.createElement("strong");
    title.textContent = item.title;
    const meta = document.createElement("p");
    meta.className = "map-flash-meta";
    meta.textContent = `Publikované: ${formatDate(item.publishedAt)}`;
    wrapper.append(title, meta);
    if (item.updatedAt) {
      const updated = document.createElement("p");
      updated.className = "map-flash-meta";
      updated.textContent = `Aktualizované: ${formatDate(item.updatedAt)}`;
      wrapper.append(updated);
    }
    if (item.description) {
      const description = document.createElement("p");
      description.className = "map-flash-description";
      description.textContent = item.description;
      wrapper.append(description);
    }
    wrapper.append(link);
    return wrapper;
  }

  function openDestination(destination, shouldFocus) {
    state.selectedId = destination.id;
    document.querySelector("#map-detail-title").textContent = destination.name;
    document.querySelector("#map-detail-country").textContent = destination.country;
    document.querySelector("#map-detail-summary").textContent = destination.summary;
    const image = document.querySelector("#map-detail-image");
    image.src = destination.image;
    image.alt = destination.imageAlt;

    detailBadge.replaceChildren();
    if (hasPersonal(destination)) {
      const year = destination.personal.visitedYear;
      detailBadge.append(createBadge("trip", year ? `Navštívil som: ${year}` : "Navštívil som"));
    }
    if (hasContent(destination)) detailBadge.append(createBadge("content", "Obsah na webe"));
    if (hasFlash(destination)) detailBadge.append(createBadge("flash", "Flash správa"));

    const content = getContent(destination);
    const flash = getFlash(destination);
    detailActions.replaceChildren(...content.map(createAction), ...flash.map(createFlashItem));
    if (hasPersonal(destination) && !content.length && !flash.length) {
      const note = document.createElement("p");
      note.className = "map-personal-note";
      note.textContent = "Toto miesto som osobne navštívil. Obsah na web zatiaľ pripravujem.";
      detailActions.append(note);
    }

    detailPanel.hidden = false;
    map.flyTo(destination.coordinates, Math.max(map.getZoom(), 6), { duration: 0.55 });
    if (shouldFocus) document.querySelector("#map-detail-close").focus();
  }

  function closeDestination() {
    state.selectedId = null;
    detailPanel.hidden = true;
  }

  function renderSearchResults(destinations) {
    resultList.replaceChildren();
    if (!normalize(state.query).trim()) return;
    const matches = destinations.slice(0, 6);
    if (!matches.length) {
      const item = document.createElement("p");
      item.className = "map-search-empty";
      item.textContent = "Nenašli sme žiadne miesto. Skúste názov krajiny, ostrova alebo mesta.";
      resultList.append(item);
      return;
    }
    matches.forEach((destination) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "map-search-result";
      button.textContent = `${destination.name} · ${destination.country}`;
      button.addEventListener("click", () => openDestination(destination, true));
      resultList.append(button);
    });
  }

  function render() {
    const destinations = visibleDestinations();
    markerLayer.clearLayers();
    destinations.forEach((destination) => {
      const marker = L.marker(destination.coordinates, {
        icon: markerIcon(destination),
        keyboard: true,
        title: `${destination.name}, ${destination.country}`,
        riseOnHover: true
      }).addTo(markerLayer);
      marker.bindTooltip(`${destination.name} · ${destination.country}`, {
        direction: "top",
        offset: [0, -18],
        opacity: 0.94
      });
      marker.on("click", () => openDestination(destination, false));
      marker.on("keypress", () => openDestination(destination, true));
    });
    emptyState.hidden = destinations.length > 0;
    resultSummary.textContent = `Zobrazené miesta: ${destinations.length}. Filter: ${labels[state.filter]}.`;
    renderSearchResults(destinations);
    if (state.selectedId && !destinations.some((destination) => destination.id === state.selectedId)) closeDestination();
  }

  document.querySelectorAll("[data-map-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.mapFilter;
      document.querySelectorAll("[data-map-filter]").forEach((item) => {
        const isActive = item === button;
        item.classList.toggle("is-active", isActive);
        item.setAttribute("aria-pressed", String(isActive));
      });
      render();
    });
  });
  countrySelect.addEventListener("change", (event) => { state.country = event.target.value; render(); });
  searchInput.addEventListener("input", (event) => { state.query = event.target.value; render(); });
  document.querySelector("#map-detail-close").addEventListener("click", closeDestination);
  document.querySelector("#map-reset").addEventListener("click", () => {
    state.filter = "all";
    state.country = "all";
    state.query = "";
    searchInput.value = "";
    countrySelect.value = "all";
    document.querySelectorAll("[data-map-filter]").forEach((button) => {
      const isActive = button.dataset.mapFilter === "all";
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
    closeDestination();
    map.fitBounds(bounds, { padding: [24, 24] });
    render();
  });
  map.on("click", () => { if (window.innerWidth > 720) closeDestination(); });
  render();
})();
