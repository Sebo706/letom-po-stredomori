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
          <a href="spravy.html">Aktuálne správy</a>
          <a href="lety.html">Lety zo Slovenska</a>
        </div>
      </div>`;
    const fallback = document.querySelector("#map-tile-fallback");
    if (fallback) fallback.hidden = false;
    return;
  }

  const state = { content: "all", country: "all", query: "", selectedId: null };
  const labels = {
    all: "Všetko",
    trips: "Moje cesty",
    article: "Články",
    video: "Videá",
    podcast: "Podcasty",
    itinerary: "Itineráre",
    flights: "Letecké linky",
    alerts: "Aktuálne upozornenia"
  };
  const statusLabels = {
    personal: "Osobná skúsenosť",
    research: "AI prieskum",
    visual: "Vizuálna inšpirácia",
    alert: "Aktuálne upozornenie"
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
  const routeLayer = L.layerGroup().addTo(map);
  const tileFallback = document.querySelector("#map-tile-fallback");
  const resultSummary = document.querySelector("#map-results-summary");
  const emptyState = document.querySelector("#map-empty-state");
  const detailPanel = document.querySelector("#map-detail-panel");
  const searchInput = document.querySelector("#map-search");
  const resultList = document.querySelector("#map-search-results");
  const countrySelect = document.querySelector("#map-country");
  const activeAlerts = mapData.alerts.filter((alert) => !alert.expiresAt || new Date(`${alert.expiresAt}T23:59:59`) >= new Date());

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap contributors</a>'
  }).on("tileerror", () => {
    if (tileFallback) tileFallback.hidden = false;
  }).addTo(map);

  function normalize(value) {
    return String(value || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  function destinationHasActiveAlert(destination) {
    return activeAlerts.some((alert) => alert.destinationId === destination.id);
  }

  function matchesContent(destination) {
    if (state.content === "all") return true;
    if (state.content === "trips") return destination.status === "personal";
    if (state.content === "flights") return false;
    if (state.content === "alerts") return destinationHasActiveAlert(destination);
    return destination.content.some((item) => item.type === state.content);
  }

  function visibleDestinations() {
    const query = normalize(state.query).trim();
    return mapData.destinations.filter((destination) => {
      const searchable = normalize(`${destination.name} ${destination.country} ${destination.summary} ${destination.keywords}`);
      return (
        matchesContent(destination) &&
        (state.country === "all" || destination.countryId === state.country) &&
        (!query || searchable.includes(query))
      );
    });
  }

  function markerIcon(destination) {
    const type = destinationHasActiveAlert(destination) ? "alert" : destination.status;
    const symbol = type === "personal" ? "◆" : type === "alert" ? "!" : "●";
    return L.divIcon({
      className: "map-marker-shell",
      html: `<span class="map-marker map-marker-${type}" aria-hidden="true">${symbol}</span>`,
      iconSize: [34, 34],
      iconAnchor: [17, 17]
    });
  }

  function makeAction(item) {
    const link = document.createElement("a");
    link.className = "map-action";
    link.href = item.url;
    link.textContent = `${item.label}: ${item.title}`;
    if (/^https?:/i.test(item.url)) {
      link.target = "_blank";
      link.rel = "noopener";
    }
    return link;
  }

  function openDestination(destination, shouldFocus) {
    state.selectedId = destination.id;
    document.querySelector("#map-detail-title").textContent = destination.name;
    document.querySelector("#map-detail-country").textContent = destination.country;
    document.querySelector("#map-detail-summary").textContent = destination.summary;
    const image = document.querySelector("#map-detail-image");
    image.src = destination.image;
    image.alt = destination.imageAlt;
    const badge = document.querySelector("#map-detail-badge");
    const activeAlert = destinationHasActiveAlert(destination);
    badge.textContent = activeAlert ? statusLabels.alert : statusLabels[destination.status];
    badge.className = `map-status map-status-${activeAlert ? "alert" : destination.status}`;
    const actions = document.querySelector("#map-detail-actions");
    actions.replaceChildren(...destination.content.map(makeAction));
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
    const query = normalize(state.query).trim();
    if (!query) return;
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

  function renderRoutes(destinations) {
    routeLayer.clearLayers();
    if (state.content !== "trips") return;
    mapData.routes.forEach((route) => {
      const points = route.destinationIds
        .map((id) => destinations.find((destination) => destination.id === id))
        .filter(Boolean)
        .map((destination) => destination.coordinates);
      if (points.length < 2) return;
      const line = L.polyline(points, { color: "#c99b3f", weight: 4, dashArray: "8 8", opacity: 0.9 }).addTo(routeLayer);
      line.bindTooltip(route.label, { sticky: true, direction: "top" });
      line.on("click", () => { window.location.href = route.url; });
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
    renderRoutes(destinations);
    emptyState.hidden = destinations.length > 0 || state.content === "flights";
    if (state.content === "flights") {
      resultSummary.textContent = "Overené letecké linky pripravujeme. V mapovej vrstve zatiaľ nezobrazujeme žiadne demo údaje.";
    } else if (state.content === "alerts") {
      resultSummary.textContent = activeAlerts.length ? `Zobrazené sú ${activeAlerts.length} aktuálne upozornenia.` : "Momentálne nemáme aktívne upozornenie na mape.";
    } else {
      resultSummary.textContent = `Zobrazené miesta: ${destinations.length}. Filter: ${labels[state.content]}.`;
    }
    renderSearchResults(destinations);
    if (state.selectedId && !destinations.some((destination) => destination.id === state.selectedId)) closeDestination();
  }

  document.querySelectorAll("[data-map-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.content = button.dataset.mapFilter;
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
    state.content = "all";
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
