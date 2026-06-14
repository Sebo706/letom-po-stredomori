const navToggle = document.querySelector(".nav-toggle");
const navPanel = document.querySelector(".nav-panel");
const navLinks = document.querySelectorAll(".nav-panel a");

function closeMenu() {
  navToggle?.classList.remove("is-open");
  navPanel?.classList.remove("is-open");
  document.body.classList.remove("menu-open");
  navToggle?.setAttribute("aria-expanded", "false");
}

navToggle?.addEventListener("click", () => {
  const isOpen = navPanel?.classList.toggle("is-open");
  navToggle.classList.toggle("is-open", Boolean(isOpen));
  document.body.classList.toggle("menu-open", Boolean(isOpen));
  navToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 820) {
    closeMenu();
  }
});

const latestUpdates = [
  {
    kind: "article",
    type: "Nový článok",
    title: "Amalfské pobrežie bez stresu",
    publishedAt: "2026-06-14",
    date: "Pridané 14. 6. 2026",
    image: "images/blog/amalfi/amalfi-hero.webp",
    imageAlt: "Amalfské pobrežie pri mori",
    description:
      "Praktický sprievodca od Neapola po Salerno s dopravou, Ravellom a 3-dňovým itinerárom.",
    url: "blog-amalfi-pobrezie.html",
    label: "Čítať článok",
  },
  {
    kind: "audio",
    type: "Nový podcast",
    title: "Amalfi - Ravello",
    publishedAt: "2026-06-14",
    date: "Pridané 14. 6. 2026",
    marker: "Podcast",
    description:
      "Spotify podcast k Taliansku a Amalfskému pobrežiu.",
    url: "audio.html?krajina=taliansko",
    label: "Vypočuť podcast",
  },
  {
    kind: "audio",
    type: "Nový podcast",
    title: "Malaga - Španielsko",
    publishedAt: "2026-06-14",
    date: "Pridané 14. 6. 2026",
    marker: "Podcast",
    description:
      "Spotify podcast o Malage, mori a cestovaní mimo hlavnej sezóny.",
    url: "audio.html?krajina=spanielsko",
    label: "Vypočuť podcast",
  },
];

function renderLatestUpdates() {
  const grid = document.querySelector("#latest-grid");
  if (!grid) {
    return;
  }

  const newestUpdates = [...latestUpdates].sort(
    (first, second) => new Date(second.publishedAt) - new Date(first.publishedAt)
  );

  grid.innerHTML = newestUpdates
    .slice(0, 3)
    .map(
      (item, index) => {
        const media = item.image
          ? `
            <a class="latest-card-media" href="${item.url}" aria-label="${item.label}: ${item.title}">
              <img src="${item.image}" alt="${item.imageAlt || item.title}" loading="lazy" />
            </a>
          `
          : `
            <div class="latest-card-media latest-card-symbol" aria-hidden="true">
              <span>${item.marker || item.type}</span>
            </div>
          `;

        return `
        <article class="latest-card latest-card-${item.kind || "update"}${index === 0 ? " latest-card-featured" : ""}">
          ${media}
          <div class="latest-card-content">
            <div class="latest-card-topline">
              <span class="content-badge">${item.type}</span>
              <small class="latest-date">${item.date}</small>
            </div>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <a class="button ${index === 0 ? "button-primary" : "button-light"}" href="${item.url}">
              ${item.label}
            </a>
          </div>
        </article>
      `;
      }
    )
    .join("");
}

renderLatestUpdates();

function formatSiteDate(dateValue) {
  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) {
    return "";
  }

  const months = [
    "január",
    "február",
    "marec",
    "apríl",
    "máj",
    "jún",
    "júl",
    "august",
    "september",
    "október",
    "november",
    "december",
  ];

  return `${date.getDate()}. ${months[date.getMonth()]} ${date.getFullYear()}`;
}

function renderLastUpdated() {
  const lastUpdatedElements = document.querySelectorAll(".last-updated");
  if (!lastUpdatedElements.length) {
    return;
  }

  const newestUpdate = [...latestUpdates].sort(
    (first, second) => new Date(second.publishedAt) - new Date(first.publishedAt)
  )[0];
  const formattedDate = formatSiteDate(newestUpdate?.publishedAt);

  if (!formattedDate) {
    return;
  }

  lastUpdatedElements.forEach((element) => {
    element.textContent = `Posledná aktualizácia: ${formattedDate}`;
  });
}

renderLastUpdated();

function itineraryDay(title, plan, realistic, avoid, transport, alternative) {
  return { title, plan, realistic, avoid, transport, alternative };
}

const itineraryTemplates = {
  amalfi: {
    name: "Amalfi a Ravello",
    country: "Taliansko",
    intro:
      "Amalfské pobrežie je krásne, ale logisticky citlivé. Plán preto mení dni podľa toho, či ideš bez auta, kombinovane alebo autom.",
    link: { label: "Čítať článok o Amalfi", url: "blog-amalfi-pobrezie.html" },
    audio: { label: "Vypočuť podcast Amalfi", url: "audio.html?krajina=taliansko" },
    plans: {
      "bez-auta": {
        pohodovo: [
          itineraryDay("Salerno a ľahký vstup do Amalfi", "Ráno Salerno, potom presun loďou alebo autobusom do Amalfi a krátka prechádzka do Atrani.", "Salerno, Amalfi, Atrani a pokojný večer.", "Positano aj Ravello v rovnaký deň.", "Trajekt je najpríjemnejší, autobus nechaj ako náhradný plán. Nechaj si 60 minút rezervu.", "Ak nepremávajú lode, zostaň pri Salerne, Vietri sul Mare alebo Amalfi."),
          itineraryDay("Positano bez naháňania", "Jeden deň venuj Positanu. Choď skoro, prejdi sa po meste a vráť sa skôr, než sa dopravné špičky zhoršia.", "Positano, pláž, výhľady a návrat.", "Positano, Ravello a Amalfi naraz.", "Loď je ideálna. Autobus je možný, ale počítaj s čakaním.", "Pri zlom počasí vymeň deň za Ravello alebo Salerno."),
          itineraryDay("Ravello a výhľady", "Presuň sa do Ravella, vyber si jednu hlavnú vilu a zvyšok dňa nechaj na pomalý návrat.", "Ravello, jedna vila, káva, výhľady.", "Cestu bohov poobede po Ravelle.", "Autobus z Amalfi býva úzky a pomalší. Počítaj s rezervou.", "Ak je veľa ľudí, ostaň v Minori alebo Maiori."),
          itineraryDay("Voľnejšie pobrežie", "Vyber si Minori, Maiori alebo Cetaru ako pokojnejší deň mimo najväčšieho tlaku.", "Jedno menšie mesto, jedlo, more, návrat.", "Preskakovanie medzi tromi mestečkami.", "Krátke presuny autobusom alebo loďou, podľa sezóny.", "Ak si unavený, nechaj deň len na Amalfi a Atrani."),
        ],
        "prva-navsteva": [
          itineraryDay("Salerno - Amalfi - Atrani", "Začni prakticky zo Salerna, presuň sa do Amalfi a večer si nechaj Atrani.", "Salerno ako základňa, Amalfi, Atrani.", "Pridávať Positano v ten istý deň.", "Trajekt alebo autobus. Rezerva aspoň 60-90 minút.", "Ak sú spoje slabé, urob Amalfi a Atrani bez Salerna."),
          itineraryDay("Positano z mora", "Ak premávajú trajekty, choď do Positana loďou a ber ho ako hlavný cieľ dňa.", "Positano, krátka pláž, výhľady, návrat.", "Positano autom alebo kombináciu s Ravellom.", "Loď výrazne znižuje stres. Autobus je záloha.", "Pri daždi presuň Positano na iný deň."),
          itineraryDay("Ravello alebo Cesta bohov", "Vyber si len jednu hlavnú verziu: Ravello pre pokoj, Cestu bohov pre aktívny deň.", "Ravello alebo turistika, nie oboje naplno.", "Turistiku, Ravello a Positano naraz.", "Autobus plus peší pohyb. Pri turistike začni skoro.", "Ak je teplo alebo zlé spoje, zvoľ Ravello."),
          itineraryDay("Rezervný deň pri mori", "Nechaj si deň na obľúbené miesto, kúpanie, citróny alebo pomalý návrat.", "Jedno miesto a rezerva.", "Naháňanie všetkého, čo nevyšlo.", "Dopravu vyber podľa predpovede a spojov.", "Ak všetko vyšlo, prejdi si Salerno alebo Vietri."),
        ],
        aktivne: [
          itineraryDay("Amalfi, Atrani a výškové schody", "Začni Amalfi, pokračuj do Atrani a pridaj krátke schodové trasy alebo vyhliadky nad pobrežím.", "Amalfi, Atrani, jeden aktívny výšľap.", "Positano v ten istý deň.", "Bez auta, pešo plus autobus/loď.", "Pri horúčave vynechaj výšľap."),
          itineraryDay("Cesta bohov ako hlavný deň", "Naplánuj Sentiero degli Dei ako jadro dňa. Začni skoro a nerob z toho len doplnok k iným mestám.", "Turistika, výhľady, návrat.", "Dlhú turistiku po neskorom štarte.", "Autobusové napojenia si over vopred. Rezerva aspoň 90 minút.", "Ak je zlé počasie, daj Ravello."),
          itineraryDay("Positano a pobrežný návrat", "Positano si nechaj ako samostatný deň po aktívnej túre, ideálne s lodným návratom.", "Positano a pobrežie z mora.", "Ďalšiu veľkú túru v ten deň.", "Loď alebo autobus podľa sezóny.", "Pri dave sa vráť skôr do Amalfi."),
          itineraryDay("Ravello, Minori a Maiori", "Spoj Ravello s peším zostupom alebo kratším presunom do Minori/Maiori.", "Ravello plus jedno pobrežné mesto.", "Tri mestá a dlhý presun navyše.", "Autobus hore, peší zostup len ak máš energiu.", "Pri únave zostaň v Ravelle."),
        ],
      },
      kombinovane: {
        pohodovo: [
          itineraryDay("Salerno a Amalfi bez auta", "Prvý deň nechaj bez auta: Salerno, Amalfi, Atrani a pomalý návrat.", "Tri ľahko kombinovateľné zastávky.", "Hľadať parkovanie v Amalfi.", "Loď/autobus, auto nechaj stáť.", "Ak je more rozbúrené, zostaň pri Salerne."),
          itineraryDay("Ravello s cieleným presunom", "Auto alebo taxi použi len cielene na Ravello a zvyšok dňa nechaj pokojný.", "Ravello a jeden výhľadový blok.", "Ravello plus Positano.", "Parkovanie rieš skoro ráno.", "Náhradou je autobus z Amalfi."),
          itineraryDay("Minori, Maiori alebo Cetara", "Vyber jedno menšie pobrežné mesto, kde auto dáva väčší zmysel než v Positane.", "Jedno až dve pokojné miesta.", "Vchádzať autom do najrušnejších miest.", "Kombinuj krátku jazdu a peší pohyb.", "Pri probléme s parkovaním sa vráť do Salerna."),
          itineraryDay("Rezerva na obľúbené miesto", "Použi deň na návrat tam, kde sa ti páčilo, alebo na jednoduchú plavbu.", "Jeden hlavný cieľ.", "Doháňať celý zoznam.", "Dopravu voľ podľa aktuálnych spojov.", "Ak si unavený, nechaj deň bez auta."),
        ],
        "prva-navsteva": [
          itineraryDay("Amalfi a Atrani bez auta", "Prvý deň rieš pobrežie verejnou dopravou a pešo, aby si pochopil rytmus oblasti.", "Amalfi, Atrani, základná orientácia.", "Auto v úzkych centrách.", "Loď/autobus, rezerva 60 minút.", "Ak je veľa ľudí, skráť Amalfi."),
          itineraryDay("Positano loďou, nie autom", "Aj pri kombinovanej doprave nechaj Positano radšej na loď alebo autobus.", "Positano ako hlavný cieľ.", "Parkovanie v Positane.", "Loď, prípadne autobus.", "Pri slabých spojoch zvoľ Ravello."),
          itineraryDay("Ravello autom alebo autobusom", "Ravello je vhodnejšie na cielenejší presun než Positano. Nechaj si čas na výhľady.", "Ravello a jeden doplnok.", "Ravello plus dlhý presun na druhý koniec pobrežia.", "Auto pomôže, ale parkuj skoro.", "Alternatíva: Minori/Maiori."),
          itineraryDay("Menšie pobrežie", "Pridaj Cetaru, Vietri alebo Maiori podľa základne.", "Jedno menšie miesto plus jedlo.", "Tri krátke zastávky bez času.", "Krátke jazdy mimo špičiek.", "Ak nechceš šoférovať, zostaň pri lodiach."),
        ],
        aktivne: [
          itineraryDay("Amalfi a aktívne Atrani", "Bez auta prejdi Amalfi a Atrani, pridaj schody alebo krátky výhľad.", "Dve mestá a jeden aktívny prvok.", "Positano navyše.", "Pešo plus loď/autobus.", "Pri horúčave nechaj len mestá."),
          itineraryDay("Cesta bohov s presunom", "Auto/taxi môže pomôcť dostať sa k začiatku túry, ale deň stále venuj hlavne turistike.", "Turistika a návrat.", "Ravello aj Positano po túre.", "Začni skoro, počítaj s návratom.", "Pri zlom počasí Ravello."),
          itineraryDay("Ravello a zostup k moru", "Spoj Ravello s peším zostupom alebo kratším výletom do Minori.", "Ravello, výhľady, pohyb.", "Dlhé prejazdy po pobreží.", "Auto len na časť presunu.", "Pri únave vynechaj zostup."),
          itineraryDay("Aktívny pobrežný mix", "Vyber jedno menej rušné miesto a pridaj krátky výhľad alebo kúpanie.", "Jedna oblasť, nie celé pobrežie.", "Naháňať všetky mestečká.", "Jazdi mimo špičiek.", "Náhradou je voľný deň v Salerne."),
        ],
      },
      autom: {
        pohodovo: [
          itineraryDay("Vietri sul Mare a Salerno", "Začni autom mimo najväčšieho tlaku: Vietri, Salerno a jednoduchý večer.", "Vietri, Salerno, jedlo.", "Vjazd do Amalfi hneď prvý deň.", "Parkovanie rieš dopredu, jazdi mimo špičky.", "Ak je cesta plná, nechaj auto stáť."),
          itineraryDay("Ravello skoro ráno", "Ravello je s autom zvládnuteľnejšie než Positano, ak prídeš skoro.", "Ravello, vila, výhľady.", "Ravello plus Positano autom.", "Parkuj skoro a rátaj s úzkymi cestami.", "Alternatíva: Minori/Maiori."),
          itineraryDay("Minori, Maiori a Cetara", "Autom si vyber pokojnejšie pobrežné miesta s menším tlakom než Positano.", "Dve menšie miesta a pauza.", "Vchádzať do preplnených centier.", "Jazdi krátke úseky a nechaj rezervu.", "Pri plných parkoviskách sa vráť do základne."),
          itineraryDay("Deň bez šoférovania", "Aj pri aute si nechaj deň na loď, autobus alebo peší pohyb.", "Oddych a jedno známe miesto.", "Šoférovať každý deň.", "Auto nechaj zaparkované.", "Ak premáva loď, použi ju."),
        ],
        "prva-navsteva": [
          itineraryDay("Salerno/Vietri ako bezpečný štart", "Nezačínaj autom priamo v Positane. Zvoľ Salerno alebo Vietri a získaj orientáciu.", "Jednoduchý štart a pobrežná atmosféra.", "Positano autom v špičke.", "Parkovanie a úzke cesty sú hlavný limit.", "Ak chceš Amalfi, choď radšej loďou."),
          itineraryDay("Ravello a výhľady", "Autom choď cielene do Ravella a neprepájaj deň s veľkým počtom ďalších miest.", "Ravello a jeden doplnok.", "Ravello, Amalfi, Positano v jeden deň.", "Skorý odchod, rezervované parkovanie ak sa dá.", "Alternatíva: Maiori/Minori."),
          itineraryDay("Amalfi bez auta alebo krátko", "Ak chceš Amalfi, zváž nechať auto bokom a ísť loďou/autobusom.", "Amalfi a Atrani.", "Dlhé státie v zápchach.", "Auto skôr nepoužívaj v jadre dňa.", "Ak musíš autom, choď veľmi skoro."),
          itineraryDay("Pokojnejšie pobrežie", "Štvrtý deň použi auto na Cetaru, Vietri alebo širšie okolie.", "Jedna pokojnejšia oblasť.", "Doháňať Positano za každú cenu.", "Krátke jazdy a rezerva.", "Pri strese z ciest zvoľ vlak/loď."),
        ],
        aktivne: [
          itineraryDay("Ravello a peší zostup", "Autom sa dostaň k Ravellu, potom pridaj peší úsek podľa energie.", "Ravello a aktívny zostup.", "Dlhý prejazd na Positano.", "Auto nechaj ako logistickú podporu.", "Pri únave len Ravello."),
          itineraryDay("Cesta bohov s autom ako podporou", "Auto môže pomôcť s logistikou, ale túra a návrat si pýtajú dobrý plán.", "Túra a návrat, nie veľa miest.", "Turistika bez vyriešeného návratu.", "Parkovanie a presuny over vopred.", "Pri zlom počasí zruš túru."),
          itineraryDay("Menej známe pobrežné miesta", "Vyber Maiori, Minori alebo Cetaru a pridaj krátky výhľad.", "Dve miesta max.", "Positano autom po túre.", "Jazdi mimo najrušnejších časov.", "Alternatíva: deň bez auta."),
          itineraryDay("Rezerva na cesty", "Nechaj posledný deň flexibilný, pretože auto na pobreží často berie viac času, než čakáš.", "Jedno miesto a návrat.", "Plán bez časovej rezervy.", "Rezerva 90 minút je rozumná.", "Ak sú cesty plné, ostaň v základni."),
        ],
      },
    },
    tips: ["Pri Amalfi je najväčší limit doprava a parkovanie.", "Positano autom je často najstresovejšia voľba.", "Menej miest znamená lepší zážitok."],
  },
  barcelona: {
    name: "Barcelona",
    country: "Španielsko",
    intro:
      "Barcelona je najlepšia pešo a metrom. Auto mení plán hlavne pri výletoch mimo mesta.",
    link: { label: "Pozrieť videá zo Španielska", url: "videa.html?krajina=spanielsko" },
    audio: { label: "Vypočuť podcast Španielsko", url: "audio.html?krajina=spanielsko" },
    plans: {
      "bez-auta": {
        pohodovo: [
          itineraryDay("Gotická štvrť a prístav", "Pomalý deň v centre: gotické uličky, káva, prístav a večer pri mori.", "Centrum, prístav, večerná prechádzka.", "Sagrada Família aj Park Güell v ten istý pohodový deň.", "Pešo a metro, krátke presuny.", "Pri daždi pridaj tržnicu alebo múzeum."),
          itineraryDay("Sagrada Família bez stresu", "Rezervuj jeden hlavný vstup a zvyšok dňa nechaj na okolie a jedlo.", "Sagrada Família, Eixample, pokojný obed.", "Park Güell s presným časom hneď po tom.", "Metro, vstup vopred.", "Ak nie sú lístky, vymeň deň za Montjuïc."),
          itineraryDay("Pláž a Barceloneta", "Daj si pomalý deň pri mori a len ľahký mestský program.", "Pláž, promenáda, tapas.", "Veľké atrakcie s presnými časmi.", "Pešo/metro, bez auta.", "Pri vetre zvoľ Montjuïc."),
          itineraryDay("Gràcia a lokálnejšia Barcelona", "Štvrte, kaviarne, menšie námestia a menej turistický rytmus.", "Gràcia, trhy, oddych.", "Dlhé presuny cez celé mesto.", "Metro a pešo.", "Pri málo času vynechaj."),
        ],
        "prva-navsteva": [
          itineraryDay("Centrum, La Rambla a prístav", "Začni v centre, prejdi gotickú štvrť, La Ramblu ber len ako priechod a skonči pri prístave.", "Centrum, prístav, prvá orientácia.", "Pláž, Sagradu aj Park Güell naraz.", "Pešo a metro.", "Ak je centrum preplnené, prejdi do Bornu."),
          itineraryDay("Sagrada Família a Park Güell", "Tento deň postav na Gaudího miestach, ale rezervuj vstupy s dostatočnou medzerou.", "Dve veľké atrakcie a presuny.", "Pridávať Camp Nou alebo pláž ako veľký blok.", "Metro, vstupy vopred, rezerva 60 minút.", "Ak chýbajú lístky, nechaj Park Güell len zvonka."),
          itineraryDay("Pláž, Montjuïc alebo futbal", "Vyber si jeden silný doplnok: pláž, Montjuïc alebo futbalovú stopu.", "Jedna téma plus večer.", "Všetky tri možnosti naraz.", "Metro/lanovka/pešo podľa výberu.", "Pri zlom počasí múzeá alebo trhy."),
          itineraryDay("Štvrte a jedlo", "Štvrtý deň zjemni: Gràcia, trhy, kaviarne, návrat na obľúbené miesto.", "Lokálnejší program.", "Ďalší preplnený zoznam pamiatok.", "Pešo a metro.", "Ak odlietaš, nechaj len krátky blok."),
        ],
        aktivne: [
          itineraryDay("Centrum a Montjuïc", "Spoj ranné centrum s výstupom alebo presunom na Montjuïc.", "Centrum, výhľady, večer.", "Sagrada Família s presným vstupom v rovnaký deň.", "Veľa pešo plus metro.", "Pri horúčave Montjuïc skráť."),
          itineraryDay("Gaudí deň naplno", "Sagrada Família, exteriéry Eixample a Park Güell s dobrou rezervou.", "Gaudího hlavné body.", "Pláž ako ďalší veľký program.", "Metro a presné vstupy.", "Ak nestíhaš, Park Güell presuň."),
          itineraryDay("Pláž a pobrežný pohyb", "Barceloneta, pobrežie, bicykel alebo dlhšia prechádzka, večer tapas.", "More a aktívny pohyb.", "Dlhé múzeá v ten istý deň.", "Pešo/bicykel/metro.", "Pri vetre zvoľ štvrte."),
          itineraryDay("Montserrat bez auta", "Ak chceš výlet, daj Montserrat ako samostatný aktívny deň.", "Jeden výlet mimo mesta.", "Montserrat plus veľké atrakcie po návrate.", "Vlak a lanovka/zubačka, skorý štart.", "Pri slabom počasí zostaň v meste."),
        ],
      },
      kombinovane: {
        pohodovo: [
          itineraryDay("Mesto bez auta", "Auto nechaj stáť a prvý deň rieš centrum pešo a metrom.", "Centrum a prístav.", "Jazdenie po centre.", "Parkuj mimo centra.", "Ak bývaš mimo mesta, choď vlakom/metrom."),
          itineraryDay("Gaudí s MHD", "Aj pri aute je MHD lepšia na Sagradu a Park Güell.", "Jedna až dve atrakcie.", "Prejazdy autom medzi atrakciami.", "Metro, vstupy vopred.", "Ak nechceš davy, zvoľ menej známe domy zvonka."),
          itineraryDay("Pobrežie alebo Montjuïc", "Vyber si ľahký mestský deň bez komplikovaného parkovania.", "Pláž alebo Montjuïc.", "Pláž aj Montserrat naraz.", "MHD a pešo.", "Pri daždi trhy/múzeá."),
          itineraryDay("Krátky výlet mimo mesta", "Auto použi až na pokojný výlet mimo Barcelony, napríklad pobrežie alebo Montserrat.", "Jeden výlet.", "Vracať sa cez špičku bez rezervy.", "Auto cielene, nie po centre.", "Ak nechceš šoférovať, vlak."),
        ],
        "prva-navsteva": [
          itineraryDay("Historické centrum bez auta", "Prvý deň auto nepoužívaj. Centrum je najlepšie pešo.", "Gotická štvrť, Born, prístav.", "Hľadať parkovanie pri La Rambla.", "Metro/pešo.", "Pri dave sa presuň do Bornu."),
          itineraryDay("Sagrada Família a Park Güell", "Presuny rieš MHD, aj keď máš auto.", "Dve hlavné miesta.", "Autom medzi vstupmi.", "Metro/bus, rezervy medzi vstupmi.", "Ak meškáš, zruš Park Güell."),
          itineraryDay("Montjuïc a pláž", "Jeden deň nechaj na výhľady a more, bez potreby auta.", "Montjuïc alebo pláž, nie všetko do detailu.", "Auto v rušných zónach.", "MHD, pešo.", "Pri vetre vymeň za štvrte."),
          itineraryDay("Výlet autom mimo mesta", "Ak chceš auto využiť, daj mu samostatný deň mimo centra.", "Montserrat alebo pobrežie.", "Výlet plus večerný veľký vstup.", "Skorý odchod, návrat s rezervou.", "Ak nechceš riešiť parkovanie, vlak."),
        ],
        aktivne: [
          itineraryDay("Centrum a Montjuïc", "Aktívne spoj centrum s výhľadmi, ale stále bez auta.", "Veľa pešo a jeden výhľad.", "Prejazdy autom v centre.", "Metro a pešo.", "Pri horúčave skráť."),
          itineraryDay("Gaudí a dlhší mestský okruh", "Sagrada, Eixample, Park Güell a večerný presun podľa energie.", "Hlavné Gaudího body.", "Pridávať výlet mimo mesta.", "MHD a rezervované vstupy.", "Pri únave vynechaj Park Güell."),
          itineraryDay("Montserrat autom alebo vlakom", "Aktívny výlet mimo Barcelony ako samostatný deň.", "Montserrat a návrat.", "Veľký večerný program po návrate.", "Auto alebo vlak, skorý štart.", "Pri hmle zostaň v meste."),
          itineraryDay("Pobrežie mimo centra", "Auto použi na jednoduchý pobrežný výlet, nie na presuny po Barcelone.", "Jedna pobrežná oblasť.", "Viac pláží a Montserrat spolu.", "Auto mimo centra.", "Pri zápchach zvoľ vlak."),
        ],
      },
      autom: {
        pohodovo: [
          itineraryDay("Zaparkuj a choď pešo", "Auto nechaj na parkovisku a prvý deň venuj centru bez šoférovania.", "Centrum, prístav, večer.", "Jazdu cez centrum.", "Parkovanie mimo jadra, MHD.", "Ak bývaš ďaleko, použi vlak."),
          itineraryDay("Sagrada Família bez auta", "Do hlavných atrakcií choď metrom, auto nepridáva hodnotu.", "Sagrada a okolie.", "Parkovanie pri atrakciách.", "Metro, vstup vopred.", "Náhradou sú exteriéry."),
          itineraryDay("Výlet mimo mesta", "Auto má zmysel na jeden výlet mimo centra: Montserrat alebo pobrežie.", "Jeden výlet a návrat.", "Výlet plus veľa mesta.", "Skorý štart a rezerva.", "Ak nechceš šoférovať, vlak."),
          itineraryDay("Pomalý návrat cez štvrte", "Posledný deň drž auto bokom a vyber si jednu štvrť.", "Gràcia alebo pláž.", "Prejazdy medzi štvrťami autom.", "Pešo/MHD.", "Ak odchádzaš autom, nechaj rezervu."),
        ],
        "prva-navsteva": [
          itineraryDay("Centrum bez auta", "Auto je v Barcelone skôr príťaž. Začni pešo v centre.", "Gotická štvrť, prístav.", "Parkovanie v centre.", "MHD/pešo.", "Pri dave Born alebo Gràcia."),
          itineraryDay("Gaudí metrom", "Sagrada Família a Park Güell rieš metrom alebo taxíkom, nie autom.", "Dve hlavné miesta.", "Autom medzi vstupmi.", "Rezervy a vstupy vopred.", "Ak nestíhaš, Park Güell skráť."),
          itineraryDay("Montjuïc alebo pláž", "Tretí deň vyber jeden mestský doplnok bez auta.", "Výhľady alebo more.", "Auto na krátke presuny.", "MHD/pešo.", "Pri daždi múzeá."),
          itineraryDay("Výlet autom", "Štvrtý deň je ideálny na použitie auta mimo mesta.", "Montserrat alebo pobrežie.", "Návrat na večerný vstup bez rezervy.", "Skorý odchod.", "Ak sú zápchy, skráť výlet."),
        ],
        aktivne: [
          itineraryDay("Centrum a výhľady bez auta", "Aj aktívny deň je lepší pešo a MHD.", "Centrum plus Montjuïc.", "Auto v meste.", "Pešo/metro.", "Pri horúčave zvoľ kratší okruh."),
          itineraryDay("Gaudí vo vyššom tempe", "Rezervuj vstupy a presuny rieš metrom.", "Sagrada, Park Güell, Eixample.", "Auto medzi atrakciami.", "MHD a presné časy.", "Ak meškáš, škrtni jeden bod."),
          itineraryDay("Montserrat autom", "Auto použi na aktívny výlet mimo Barcelony.", "Montserrat a návrat.", "Ďalší veľký program večer.", "Skorý štart, rezerva.", "Pri hmle pobrežie alebo mesto."),
          itineraryDay("Pobrežná trasa mimo mesta", "Vyber jednu pobrežnú oblasť a nesnaž sa spraviť celý katalánsky okruh.", "Jedno pobrežie.", "Viac vzdialených pláží.", "Auto mimo centra.", "Pri zápchach vlak."),
        ],
      },
    },
    tips: ["V Barcelone auto väčšinou nepomáha v centre.", "Rezervované vstupy sú dôležitejšie než dlhý zoznam miest.", "Najlepší plán má veľké atrakcie oddelené oddychom."],
  },
  malaga: {
    name: "Malaga",
    country: "Španielsko",
    intro:
      "Malaga dobre funguje bez auta v meste, ale auto alebo vlak mení možnosti výletov do Andalúzie.",
    link: { label: "Pozrieť videá zo Španielska", url: "videa.html?krajina=spanielsko" },
    audio: { label: "Vypočuť podcast Malaga", url: "audio.html?krajina=spanielsko" },
    plans: {
      "bez-auta": {
        pohodovo: [
          itineraryDay("Centrum a prístav", "Pomalý deň v centre, Alcazaba zvonka alebo krátko, prístav a večerné tapas.", "Centrum, prístav, jedlo.", "Ronda alebo Nerja v ten istý deň.", "Pešo, všetko blízko.", "Pri daždi múzeá."),
          itineraryDay("Pláž a Gibralfaro", "Plážový deň s výhľadom na Gibralfaro podľa energie.", "Pláž, vyhliadka, pomalé mesto.", "Dlhý výlet mimo mesta.", "Pešo/bus.", "Pri vetre vynechaj pláž."),
          itineraryDay("Nerja autobusom", "Ak chceš výlet bez auta, vyber jednu destináciu a nechaj si rezervu na spoje.", "Nerja alebo blízke okolie.", "Nerja aj Ronda v jeden deň.", "Autobus, skorší štart.", "Ak sú spoje slabé, zostaň v Malage."),
          itineraryDay("Rezervný mestský deň", "Daj si trhy, múzeum alebo návrat na pláž podľa počasia.", "Jedna mestská téma.", "Doháňať všetky výlety.", "Pešo/MHD.", "Pri slnku pláž, pri daždi múzeá."),
        ],
        "prva-navsteva": [
          itineraryDay("Centrum, Alcazaba a prístav", "Začni historickým centrom, pokračuj k Alcazabe a večer zakonči pri prístave.", "Centrum, Alcazaba, prístav.", "Pláž aj vzdialený výlet.", "Pešo.", "Pri únave Alcazabu skráť."),
          itineraryDay("Pláž, vyhliadka a tapas", "Druhý deň nechaj na more, Gibralfaro a jedlo.", "Pláž, vyhliadka, tapas.", "Ronda poobede.", "Pešo/bus.", "Pri zlom počasí múzeá."),
          itineraryDay("Nerja alebo Ronda", "Bez auta si vyber len jeden výlet. Ronda je dlhšia, Nerja jednoduchšia.", "Jeden výlet mimo Malagy.", "Dva výlety v jeden deň.", "Autobus/vlak podľa cieľa.", "Ak nechceš presuny, zostaň v meste."),
          itineraryDay("Mestský bonus", "Štvrtý deň použi na pokojné štvrte, pláž alebo nákupy pred odchodom.", "Jedna ľahká téma.", "Veľký výlet pred odletom.", "Pešo/MHD.", "Pri skorom odchode skráť."),
        ],
        aktivne: [
          itineraryDay("Centrum a Gibralfaro", "Spoj centrum s výstupom na vyhliadku a večerným prístavom.", "Centrum, Alcazaba, Gibralfaro.", "Pláž ako veľký blok.", "Veľa pešo.", "Pri horúčave výstup skráť."),
          itineraryDay("Pobrežie a dlhšia prechádzka", "Daj si pobrežný pohyb, pláž a tapas bez veľkých presunov.", "More a aktívny pohyb.", "Múzeá na celý deň.", "Pešo/bus.", "Pri vetre centrum."),
          itineraryDay("Ronda ako hlavný výlet", "Ak chceš aktívnejší program bez auta, Ronda nech je celý deň.", "Ronda a návrat.", "Ronda aj Nerja.", "Vlak/bus, skorý štart.", "Pri slabých spojoch Nerja."),
          itineraryDay("Nerja alebo Caminito podľa možností", "Vyber jeden aktívny doplnok podľa spojov a sezóny.", "Jeden výlet.", "Dva veľké výlety.", "Organizovaný presun môže pomôcť.", "Ak je komplikovaná doprava, Malaga."),
        ],
      },
      kombinovane: {
        pohodovo: [
          itineraryDay("Malaga bez auta", "Mesto rieš pešo, auto nechaj až na výlet.", "Centrum, prístav.", "Parkovanie v centre.", "Pešo.", "Pri daždi múzeá."),
          itineraryDay("Pláž a vyhliadka", "Druhý deň stále bez auta, nech je plán ľahký.", "Pláž, Gibralfaro.", "Výlet mimo mesta.", "Pešo/bus.", "Pri vetre centrum."),
          itineraryDay("Nerja autom alebo busom", "Auto použi na jednoduchý výlet do Nerje a okolia.", "Nerja, jaskyne alebo pobrežie.", "Ronda aj Nerja.", "Auto cielene, rezerva na parkovanie.", "Ak nechceš auto, autobus."),
          itineraryDay("Pomalý deň po výlete", "Po výlete nechaj voľnejší deň v Malage.", "Jedlo, more, trhy.", "Ďalší dlhý výlet.", "Bez auta.", "Pri dobrom počasí pláž."),
        ],
        "prva-navsteva": [
          itineraryDay("Centrum a Alcazaba", "Začni bez auta v centre a pri Alcazabe.", "Centrum, Alcazaba, prístav.", "Výlet v ten istý deň.", "Pešo.", "Múzeá pri daždi."),
          itineraryDay("Pláž a Gibralfaro", "Daj si more a výhľad, aby mesto nepôsobilo len ako prestup.", "Pláž, vyhliadka.", "Ronda poobede.", "Pešo/bus.", "Centrum pri vetre."),
          itineraryDay("Ronda alebo Nerja", "Auto dáva zmysel na jeden jasný výlet, vyber si podľa nálady.", "Jeden výlet mimo mesta.", "Oba výlety spolu.", "Auto alebo organizovaný presun.", "Ak nechceš šoférovať, Nerja busom."),
          itineraryDay("Rezerva podľa počasia", "Štvrtý deň nechaj na to, čo nevyšlo, alebo krátku pláž.", "Jedna ľahká téma.", "Dlhý výlet pred odletom.", "Flexibilná doprava.", "Múzeá pri daždi."),
        ],
        aktivne: [
          itineraryDay("Centrum a výšľap", "Spoj centrum s Gibralfarom a dlhšou prechádzkou.", "Centrum plus pohyb.", "Výlet mimo mesta.", "Pešo.", "Pri horúčave skráť."),
          itineraryDay("Caminito alebo Ronda", "Kombinovaná doprava dáva zmysel na väčší aktívny výlet.", "Jeden veľký výlet.", "Veľký výlet plus večerný veľký program.", "Auto/organizovaný presun.", "Pri nedostupnosti Nerja."),
          itineraryDay("Nerja a pobrežie", "Druhý výlet drž kratší a pobrežný.", "Nerja alebo pobrežie.", "Ronda aj Nerja spolu.", "Auto s parkovacou rezervou.", "Ak si unavený, pláž v Malage."),
          itineraryDay("Malaga oddychovo", "Po aktívnych dňoch nechaj mesto a tapas.", "Mesto a jedlo.", "Ďalší dlhý presun.", "Bez auta.", "Múzeá pri daždi."),
        ],
      },
      autom: {
        pohodovo: [
          itineraryDay("Mesto bez auta", "Aj keď máš auto, centrum Malagy rieš pešo.", "Centrum, prístav.", "Parkovanie pri každej zastávke.", "Zaparkuj a choď pešo.", "Múzeá pri daždi."),
          itineraryDay("Nerja a pobrežie", "Autom zvoľ jeden pobrežný výlet, nie viac oblastí.", "Nerja a jedna pauza.", "Nerja aj Ronda.", "Rezerva na parkovanie.", "Pri zlom počasí Ronda."),
          itineraryDay("Ronda samostatne", "Ronda je s autom výborná, ale potrebuje vlastný deň.", "Ronda a návrat.", "Ronda plus plážový okruh.", "Skorý štart.", "Ak nechceš dlhú cestu, zostaň pri pobreží."),
          itineraryDay("Oddych v Malage", "Po jazdách nechaj deň v meste.", "Pláž, jedlo, centrum.", "Ďalší dlhý výlet.", "Auto nechaj stáť.", "Pri dobrom počasí pláž."),
        ],
        "prva-navsteva": [
          itineraryDay("Malaga pešo", "Prvý deň bez auta: centrum, Alcazaba, prístav.", "Hlavné mesto.", "Jazdenie po centre.", "Parkuj raz.", "Pri daždi múzeá."),
          itineraryDay("Nerja alebo Frigiliana", "Autom vyber pobrežný výlet s jednou dedinou navyše.", "Nerja plus Frigiliana alebo pobrežie.", "Ronda v ten istý deň.", "Parkovanie a rezerva.", "Ak nechceš dedinu, ostaň pri Nerje."),
          itineraryDay("Ronda", "Ronda potrebuje samostatný deň a skorý štart.", "Ronda, most, centrum.", "Návrat cez veľa ďalších miest.", "Auto, časová rezerva.", "Pri zlom počasí Malaga."),
          itineraryDay("Pomalý návrat", "Posledný deň nechaj na pláž, tapas alebo krátke okolie.", "Jedna ľahká téma.", "Ďalší dlhý výlet.", "Krátke jazdy alebo pešo.", "Múzeá pri daždi."),
        ],
        aktivne: [
          itineraryDay("Malaga a Gibralfaro", "Prvý deň aktívne v meste bez potreby auta.", "Centrum a výhľady.", "Výlet mimo mesta.", "Pešo.", "Skráť pri horúčave."),
          itineraryDay("Caminito del Rey", "Ak je dostupný a máš rezerváciu, nech je to hlavný deň.", "Caminito a návrat.", "Caminito plus Ronda.", "Auto, rezervácia, skorý štart.", "Bez lístkov Ronda alebo Nerja."),
          itineraryDay("Ronda alebo biele dediny", "Auto použi na vnútrozemie ako samostatný aktívny deň.", "Jedna oblasť.", "Veľa dedín naraz.", "Dlhšia jazda, rezerva.", "Pri únave len Ronda."),
          itineraryDay("Nerja a pobrežný oddych", "Po aktívnych výletoch zvoľ kratšie pobrežie.", "Nerja alebo pláž.", "Ďalší dlhý presun.", "Auto s rezervou.", "Pri vetre centrum."),
        ],
      },
    },
    tips: ["V Malage auto využiješ hlavne mimo mesta.", "Bez auta je mesto veľmi jednoduché.", "Ronda a Nerja nech sú samostatné rozhodnutia, nie jeden preplnený deň."],
  },
  cyprus: {
    name: "Cyprus v zime",
    country: "Cyprus",
    intro:
      "Na Cypre doprava výrazne mení plán. Bez auta drž program pri mestách a organizovaných presunoch, autom sa otvorí príroda.",
    link: { label: "Pozrieť video o Cypre", url: "videa.html?krajina=cyprus" },
    audio: { label: "Vypočuť podcast Cyprus", url: "audio.html?krajina=cyprus" },
    plans: {
      "bez-auta": {
        pohodovo: [
          itineraryDay("Larnaka a soľné jazero", "Pomalý štart: promenáda, soľné jazero, plameniaky v sezóne a večer pri mori.", "Larnaka, jazero, večer.", "Pafos v ten istý deň.", "Pešo/taxi/MHD lokálne.", "Pri vetre centrum a kaviarne."),
          itineraryDay("Pafos ako samostatný výlet", "Bez auta zvoľ Pafos len ak máš jasný autobus alebo organizovaný presun.", "Pafos a pobrežie.", "Pafos plus Troodos.", "Autobus/organizovaný presun, skorý štart.", "Ak sú spoje slabé, zostaň v Larnake."),
          itineraryDay("Limassol alebo pobrežie", "Vyber jednu dostupnú oblasť, nie veľký ostrovný okruh.", "Jedno mesto alebo pobrežie.", "Tri mestá v jeden deň.", "Bus/taxi podľa možností.", "Pri daždi múzeá alebo Larnaka."),
          itineraryDay("Voľný deň podľa počasia", "Zima na Cypre si pýta flexibilitu: pláž, mesto alebo krátka prechádzka.", "Jedna ľahká téma.", "Dlhý presun bez rezervy.", "Krátke lokálne presuny.", "Pri slnku pláž, pri daždi mesto."),
        ],
        "prva-navsteva": [
          itineraryDay("Larnaka a plameniaky", "Začni Larnakou, soľným jazerom a jednoduchou orientáciou.", "Larnaka, jazero, promenáda.", "Hneď prvý deň ďaleký presun.", "Pešo/MHD/taxi.", "Ak plameniaky nie sú, zvoľ pobrežie."),
          itineraryDay("Pafos cez organizovaný presun", "Pafos bez auta ber ako hlavný celodenný výlet.", "Pafos, archeológia, pobrežie.", "Troodos v ten istý deň.", "Organizovaný výlet alebo autobus.", "Ak nie je spoj, Limassol."),
          itineraryDay("Limassol alebo Nikózia", "Vyber si jedno mestské doplnenie podľa počasia a spojov.", "Jedno mesto.", "Pafos, Nikózia aj Limassol naraz.", "Autobus s rezervou.", "Pri zlom počasí Nikózia."),
          itineraryDay("Rezerva na slnko", "Nechaj deň na to, čo počasie dovolí: pláž, jazero alebo krátke pobrežie.", "Flexibilný program.", "Pevný plán bez rezervy.", "Lokálne presuny.", "Pri daždi kaviareň/múzeum."),
        ],
        aktivne: [
          itineraryDay("Larnaka a dlhšia prechádzka", "Spoj jazero, pobrežie a dlhší peší blok.", "Larnaka aktívne.", "Ďaleký výlet poobede.", "Pešo/taxi.", "Pri vetre skráť pobrežie."),
          itineraryDay("Organizovaný Troodos alebo Pafos", "Bez auta vyber jeden organizovaný aktívny výlet.", "Jeden veľký výlet.", "Dva vzdialené regióny.", "Organizovaný presun, skorý štart.", "Pri zlom počasí mesto."),
          itineraryDay("Pobrežný deň", "Vyber pobrežie dostupné bez auta a pridaj chôdzu.", "Jedna pobrežná oblasť.", "Troodos poobede.", "Bus/taxi.", "Pri daždi Nikózia."),
          itineraryDay("Voľný aktívny blok", "Daj si kratší pohyb podľa počasia, nie ďalší veľký presun.", "Krátka turistika alebo mesto.", "Veľký presun pred odletom.", "Lokálne presuny.", "Pri únave oddych."),
        ],
      },
      kombinovane: {
        pohodovo: [
          itineraryDay("Larnaka bez auta", "Prvý deň nechaj auto bokom a zorientuj sa pri mori a jazere.", "Larnaka, jazero.", "Dlhý presun hneď po prílete.", "Pešo/taxi.", "Pri daždi centrum."),
          itineraryDay("Pafos autom alebo výletom", "Jeden cielenejší výlet na západ ostrova, bez pridávania Troodosu.", "Pafos a pobrežie.", "Pafos plus hory.", "Auto/organizovaný presun, rezerva.", "Ak sa nechce šoférovať, organizovaný výlet."),
          itineraryDay("Troodos ľahko", "Hory nech sú samostatný deň, s krátkymi zastávkami.", "Jedna horská oblasť.", "Troodos plus vzdialené pláže.", "Auto alebo výlet, počasie overiť.", "Pri zlom počasí Limassol."),
          itineraryDay("Pobrežná rezerva", "Posledný deň voľ podľa slnka: pláž, Larnaka alebo Limassol.", "Jedna ľahká téma.", "Dlhý prejazd pred odletom.", "Flexibilne.", "Pri daždi mesto."),
        ],
        "prva-navsteva": [
          itineraryDay("Larnaka a soľné jazero", "Ľahký prvý deň bez dlhých presunov.", "Larnaka, jazero, večer.", "Pafos poobede.", "Pešo/taxi.", "Pri vetre centrum."),
          itineraryDay("Pafos a západné pobrežie", "Auto alebo výlet použi na Pafos, pobrežie a archeologické miesta.", "Pafos a pobrežie.", "Troodos v rovnaký deň.", "Skorý štart, rezerva.", "Pri daždi Nikózia."),
          itineraryDay("Troodos alebo Nikózia", "Vyber hory pri dobrom počasí, Nikóziu pri slabšom.", "Jeden hlavný región.", "Hory a vzdialené pobrežie.", "Auto/výlet, počasie rozhoduje.", "Alternatíva Nikózia."),
          itineraryDay("Pláž alebo Limassol", "Doplň pobyt o ľahký pobrežný deň.", "Jedno mesto/pláž.", "Veľký ostrovný okruh.", "Krátke presuny.", "Pri daždi múzeá."),
        ],
        aktivne: [
          itineraryDay("Larnaka aktívne", "Jazero, pobrežie a dlhšia prechádzka bez veľkého presunu.", "Larnaka a pohyb.", "Ďaleký výlet.", "Pešo/taxi.", "Pri vetre skráť."),
          itineraryDay("Troodos", "Hory daj ako samostatný aktívny deň.", "Troodos a krátka turistika.", "Pafos v ten istý deň.", "Auto/výlet, skorý štart.", "Pri zlom počasí Pafos."),
          itineraryDay("Pafos pobrežie", "Západné pobrežie nech je ďalší veľký deň, nie doplnok.", "Pafos a pobrežie.", "Ďalšia horská túra.", "Auto, rezerva.", "Pri únave Limassol."),
          itineraryDay("Flexibilný deň", "Vyber kratší výlet podľa počasia a energie.", "Jedna oblasť.", "Naháňať celý ostrov.", "Flexibilne.", "Oddych pri mori."),
        ],
      },
      autom: {
        pohodovo: [
          itineraryDay("Larnaka a ľahký štart", "Aj s autom začni pokojne v Larnake a okolí.", "Larnaka, jazero, večer.", "Dlhý prejazd po prílete.", "Krátke jazdy.", "Pri daždi centrum."),
          itineraryDay("Pafos a pobrežie", "Autom zvládneš Pafos pohodlne, ale nech je to hlavný cieľ dňa.", "Pafos a pobrežie.", "Troodos v rovnaký deň.", "Skorý štart, rezerva.", "Pri zlom počasí Limassol."),
          itineraryDay("Troodos ľahko", "Hory plánuj podľa počasia a nesnaž sa stihnúť celý región.", "Jedna horská oblasť.", "Veľa dedín naraz.", "Auto, kratší deň v zime.", "Pri snehu/daždi zmeň plán."),
          itineraryDay("Pobrežná rezerva", "Posledný deň nechaj na pláž alebo kratší presun.", "Jedna ľahká oblasť.", "Dlhý okruh pred odletom.", "Auto len krátko.", "Pri únave Larnaka."),
        ],
        "prva-navsteva": [
          itineraryDay("Larnaka a soľné jazero", "Získaj pokojný štart a nechaj auto len na krátke presuny.", "Larnaka, jazero, promenáda.", "Pafos v ten istý deň.", "Krátke jazdy.", "Pri vetre centrum."),
          itineraryDay("Pafos a západ", "Autom daj Pafos ako hlavný deň s pobrežím.", "Pafos, archeológia, pobrežie.", "Troodos navyše.", "Auto, skorý štart.", "Pri daždi Nikózia."),
          itineraryDay("Troodos alebo príroda", "Pri dobrom počasí hory, pri slabšom počasí Nikózia alebo Limassol.", "Jeden hlavný región.", "Hory a pláže na opačnej strane.", "Auto, počasie rozhoduje.", "Nikózia ako záloha."),
          itineraryDay("Pláže alebo menšie miesta", "Štvrtý deň vyber ľahší okruh podľa počasia.", "Jedna až dve blízke miesta.", "Celý ostrovný okruh.", "Auto s rezervou.", "Pri únave Larnaka."),
        ],
        aktivne: [
          itineraryDay("Larnaka a pobrežie", "Krátky aktívny štart pri mori a jazere.", "Larnaka, jazero, chôdza.", "Dlhý prejazd.", "Krátke jazdy.", "Pri vetre skráť."),
          itineraryDay("Troodos aktívne", "Auto využi na hory, ale zvoľ jednu trasu a jeden región.", "Troodos a turistika.", "Pafos v rovnaký deň.", "Skorý štart, počasie.", "Pri zlom počasí Pafos."),
          itineraryDay("Akamas alebo západné pobrežie", "Ak chceš prírodu, zvoľ západ ako samostatný deň.", "Jedna prírodná oblasť.", "Troodos aj Akamas spolu.", "Auto, dlhšie presuny.", "Pri únave Pafos."),
          itineraryDay("Flexibilná rezerva", "Posledný deň nechaj kratší a bezpečný podľa odletu a počasia.", "Jedna ľahká téma.", "Ďalší veľký okruh.", "Rezerva na návrat.", "Oddych pri mori."),
        ],
      },
    },
    tips: ["V zime rozhoduje počasie viac než v lete.", "Bez auta drž plán pri mestách alebo organizovaných výletoch.", "Autom si nechaj kratšie dni, lebo svetla je menej."],
  },
};

const itineraryPaceLabels = {
  pohodovo: "Pohodové tempo",
  "prva-navsteva": "Prvá návšteva",
  aktivne: "Aktívne tempo",
};

const itineraryTransportLabels = {
  "bez-auta": "Bez auta",
  kombinovane: "Kombinovane",
  autom: "Autom",
};

function getItineraryDays(template, transport, pace, dayCount) {
  const selectedPlan =
    template.plans?.[transport]?.[pace] ||
    template.plans?.[transport]?.["prva-navsteva"] ||
    template.plans?.["bez-auta"]?.["prva-navsteva"] ||
    [];
  return selectedPlan.slice(0, dayCount);
}

function renderItinerary() {
  const form = document.querySelector("[data-itinerary-form]");
  const result = document.querySelector("[data-itinerary-result]");
  if (!form || !result) {
    return;
  }

  const data = new FormData(form);
  const template = itineraryTemplates[data.get("destination")] || itineraryTemplates.amalfi;
  const dayCount = Number(data.get("days") || 3);
  const pace = data.get("pace") || "prva-navsteva";
  const transport = data.get("transport") || "bez-auta";
  const days = getItineraryDays(template, transport, pace, dayCount);

  result.innerHTML = `
    <div class="itinerary-result-header">
      <span class="itinerary-result-kicker">${template.country} · ${dayCount} dni</span>
      <h3>${template.name}</h3>
      <p>${template.intro}</p>
      <div class="itinerary-badges" aria-label="Nastavenia itinerára">
        <span>${itineraryPaceLabels[pace]}</span>
        <span>${itineraryTransportLabels[transport]}</span>
      </div>
    </div>

    <div class="itinerary-days">
      ${days
        .map(
          (day, index) => `
            <section class="itinerary-day">
              <span>Deň ${index + 1}</span>
              <h4>${day.title}</h4>
              <p>${day.plan}</p>
              <dl class="itinerary-day-details">
                <div>
                  <dt>Reálne stihneš</dt>
                  <dd>${day.realistic}</dd>
                </div>
                <div>
                  <dt>Radšej nekombinovať</dt>
                  <dd>${day.avoid}</dd>
                </div>
                <div>
                  <dt>Doprava a rezerva</dt>
                  <dd>${day.transport}</dd>
                </div>
                <div>
                  <dt>Alternatíva</dt>
                  <dd>${day.alternative}</dd>
                </div>
              </dl>
            </section>
          `
        )
        .join("")}
    </div>

    <div class="itinerary-tips">
      <strong>Praktické poznámky</strong>
      <p>Výber tempa aj dopravy mení samotný denný plán, nielen poznámku pod itinerárom.</p>
      <p>Plán počíta s realistickým rytmom, ale pred cestou si vždy over otváracie hodiny, spoje a počasie.</p>
      <p>${template.tips.join(" ")}</p>
    </div>

    <div class="itinerary-result-actions">
      <a class="button button-primary" href="${template.link.url}">${template.link.label}</a>
      <a class="button button-light" href="${template.audio.url}">${template.audio.label}</a>
    </div>
  `;
}

const itineraryForm = document.querySelector("[data-itinerary-form]");
if (itineraryForm) {
  const itineraryParams = new URLSearchParams(window.location.search);
  ["destination", "days", "pace", "transport"].forEach((name) => {
    const value = itineraryParams.get(name);
    const field = itineraryForm.elements[name];
    if (value && field && [...field.options].some((option) => option.value === value)) {
      field.value = value;
    }
  });
}

itineraryForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  renderItinerary();
});
itineraryForm?.addEventListener("change", renderItinerary);
renderItinerary();

const videoLibrary = {
  taliansko: {
    name: "Taliansko",
    description: "Videá z miest, pobrežia a ostrovov pravého juhu Európy.",
    videos: [
      {
        title: "Palermo & Vianoce – TOP miesta, ktoré musíš vidieť",
        url: "https://www.youtube.com/watch?v=h5Hn9ItSpoY",
      },
      {
        title: "Bari v januári: oplatí sa začať rok pri mori?",
        url: "https://www.youtube.com/watch?v=wPtgol_7OiY&t=7s",
      },
    ],
  },
  grecko: {
    name: "Grécko",
    description: "Videá z gréckych ostrovov a pobrežia pribudnú neskôr.",
    videos: [],
  },
  spanielsko: {
    name: "Španielsko",
    description: "Videá zo španielskych miest, pobrežia a dovolenkovej atmosféry.",
    videos: [
      {
        title: "Malaga - Teplo aj bez leta",
        url: "https://youtu.be/mAg95BKPIP8?si=Ny9kddADkhVZtmP0",
      },
      {
        title: "Barcelona - Ako si užiť Barcelonu za 3 dni – pláž, mesto, futbal",
        url: "https://youtu.be/_kLS2SJ5WeI?si=NjSKAL4IBzav5IC3",
      },
    ],
  },
  francuzsko: {
    name: "Francúzsko",
    description: "Videá z Azúrového pobrežia a francúzskeho Stredomoria pribudnú neskôr.",
    videos: [],
  },
  chorvatsko: {
    name: "Chorvátsko",
    description: "Videá z Jadranu, ostrovov a historických miest pribudnú neskôr.",
    videos: [],
  },
  malta: {
    name: "Malta",
    description: "Videá z Malty a jej farebných miest pribudnú neskôr.",
    videos: [],
  },
  cyprus: {
    name: "Cyprus",
    description: "Videá zo slnečného Cypru, pláží a praktického cestovania.",
    videos: [
      {
        title: "Cyprus v zime – kompletný cestovateľský sprievodca na január",
        url: "https://youtu.be/xkRKo8hhslY?si=M9tD-aIFYRBql9SO",
      },
    ],
  },
  slovinsko: {
    name: "Slovinsko",
    description: "Videá zo slovinského pobrežia pribudnú neskôr.",
    videos: [],
  },
};

function getYouTubeId(url) {
  try {
    const parsedUrl = new URL(url);
    if (parsedUrl.hostname.includes("youtu.be")) {
      return parsedUrl.pathname.replace("/", "");
    }
    return parsedUrl.searchParams.get("v") || "";
  } catch (error) {
    const match = url.match(/(?:youtu\.be\/|v=)([a-zA-Z0-9_-]+)/);
    return match ? match[1] : "";
  }
}

function getYouTubeThumbnail(url) {
  const videoId = getYouTubeId(url);
  return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : "";
}

const audioLibrary = {
  taliansko: {
    name: "Taliansko",
    description: "Spotify podcasty z Talianska, juhu krajiny, pobrežia a miest s dovolenkovou atmosférou.",
    audios: [
      {
        title: "Amalfi - Ravello",
        description:
          "Podcast z Talianska o atmosfére pobrežia Amalfi a mestečku Ravello.",
        spotifyUrl: "https://open.spotify.com/episode/49aahaviPcqiQ7wcGvxEx4?si=rJvJozQKQRqleVAaBTferQ",
        spotifyEmbedUrl: "https://open.spotify.com/embed/episode/49aahaviPcqiQ7wcGvxEx4",
      },
    ],
  },
  grecko: {
    name: "Grécko",
    description: "Podcasty z Grécka pribudnú neskôr.",
    audios: [],
  },
  spanielsko: {
    name: "Španielsko",
    description: "Spotify podcasty zo Španielska, miest, pobrežia a dovolenkovej reality.",
    audios: [
      {
        title: "Malaga – Španielsko",
        description:
          "Podcast o Malage, španielskej dovolenkovej atmosfére a cestovaní mimo hlavnej sezóny.",
        spotifyUrl: "https://open.spotify.com/episode/6fOaPxVBsxW8hdcBekNAgX?si=Q2_oEMSITQGMU3hH_o4F4g",
        spotifyEmbedUrl: "https://open.spotify.com/embed/episode/6fOaPxVBsxW8hdcBekNAgX",
      },
    ],
  },
  francuzsko: {
    name: "Francúzsko",
    description: "Podcasty z Francúzska pribudnú neskôr.",
    audios: [],
  },
  chorvatsko: {
    name: "Chorvátsko",
    description: "Podcasty z Chorvátska pribudnú neskôr.",
    audios: [],
  },
  malta: {
    name: "Malta",
    description: "Podcasty z Malty pribudnú neskôr.",
    audios: [],
  },
  cyprus: {
    name: "Cyprus",
    description: "Spotify podcasty z Cypru, zimného cestovania a aktívneho objavovania ostrova.",
    audios: [
      {
        title: "Cyprus v januári – skrytý poklad pre aktívnych cestovateľov",
        description:
          "Cyprus v januári ponúka príjemné teploty, krásnu prírodu, plameniaky, turistiku bez davov a často aj veľmi výhodné letenky. V tejto epizóde sa pozrieme na dôvody, prečo môže byť Cyprus ideálnou voľbou pre každého, kto chce uniknúť slovenskej zime a objaviť Stredomorie mimo hlavnej sezóny. Epizóda vznikla z vlastných cestovateľských podkladov projektu Letom po Stredomorí.",
        spotifyUrl: "https://open.spotify.com/episode/22J0tjJcMahTJehBxFFMRR",
        spotifyEmbedUrl: "https://open.spotify.com/embed/episode/22J0tjJcMahTJehBxFFMRR",
      },
    ],
  },
  slovinsko: {
    name: "Slovinsko",
    description: "Podcasty zo Slovinska pribudnú neskôr.",
    audios: [],
  },
};

const articleLibrary = {
  taliansko: {
    name: "Taliansko",
    description: "Články z Talianska, pobrežia Amalfi, miest a praktického plánovania ciest.",
    articles: [
      {
        title: "Od Neapola po Salerno: ako si naplánovať Amalfské pobrežie bez stresu",
        description:
          "Praktický sprievodca pobrežím Amalfi, dopravou, bývaním, trajektmi, Ravellom a itinerárom na 3 dni.",
        url: "blog-amalfi-pobrezie.html",
        image: "images/blog/amalfi/amalfi-hero.webp",
        date: "13. jún 2026",
        audioUrl: "audio.html?krajina=taliansko",
      },
    ],
  },
  grecko: {
    name: "Grécko",
    description: "Články z Grécka, ostrovov a pobrežia pribudnú neskôr.",
    articles: [],
  },
  spanielsko: {
    name: "Španielsko",
    description: "Články zo Španielska, miest, pobrežia a dovolenkovej reality pribudnú neskôr.",
    articles: [],
  },
  francuzsko: {
    name: "Francúzsko",
    description: "Články z Azúrového pobrežia a francúzskeho Stredomoria pribudnú neskôr.",
    articles: [],
  },
  chorvatsko: {
    name: "Chorvátsko",
    description: "Články z Jadranu, ostrovov a historických miest pribudnú neskôr.",
    articles: [],
  },
  malta: {
    name: "Malta",
    description: "Články z Malty a jej farebných miest pribudnú neskôr.",
    articles: [],
  },
  cyprus: {
    name: "Cyprus",
    description: "Články z Cypru, zimného cestovania a aktívneho objavovania ostrova pribudnú neskôr.",
    articles: [],
  },
  slovinsko: {
    name: "Slovinsko",
    description: "Články zo slovinského pobrežia pribudnú neskôr.",
    articles: [],
  },
};

function renderCountryVideos() {
  const grid = document.querySelector("#country-video-grid");
  if (!grid) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const countryKey = params.get("krajina") || "spanielsko";
  const country = videoLibrary[countryKey] || videoLibrary.spanielsko;
  const title = document.querySelector("#video-country-title");
  const description = document.querySelector("#video-country-description");

  document.title = `${country.name} videá | Letom po Stredomorí`;
  if (title) {
    title.textContent = `${country.name} - videá`;
  }
  if (description) {
    const countText =
      country.videos.length === 1
        ? "1 video"
        : country.videos.length > 1 && country.videos.length < 5
          ? `${country.videos.length} videá`
          : `${country.videos.length} videí`;
    description.textContent = `${country.description} Aktuálne: ${countText}.`;
  }

  if (!country.videos.length) {
    grid.innerHTML = `
      <article class="empty-video-card">
        <span>0 videí</span>
        <h2>Videá pre túto krajinu ešte pripravujem</h2>
        <p>Keď pribudne prvé video, zobrazí sa tu ako samostatná položka s odkazom na YouTube.</p>
      </article>
    `;
    return;
  }

  grid.innerHTML = country.videos
    .map(
      (video, index) => {
        const thumbnail = getYouTubeThumbnail(video.url);
        const thumbnailMarkup = thumbnail
          ? `
            <a class="video-thumbnail" href="${video.url}" target="_blank" rel="noopener" aria-label="Pozrieť video ${video.title} na YouTube">
              <img src="${thumbnail}" alt="Náhľad videa ${video.title}" loading="lazy" />
              <span class="video-play-badge" aria-hidden="true"></span>
            </a>
          `
          : "";

        return `
        <article class="country-video-card">
          ${thumbnailMarkup}
          <span>Video ${index + 1}</span>
          <h2>${video.title}</h2>
          <p>Klikni na náhľad a video sa otvorí priamo na YouTube.</p>
        </article>
      `;
      }
    )
    .join("");
}

renderCountryVideos();

function renderCountryAudios() {
  const grid = document.querySelector("#country-audio-grid");
  if (!grid) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const countryKey = params.get("krajina") || "taliansko";
  const country = audioLibrary[countryKey] || audioLibrary.taliansko;
  const title = document.querySelector("#audio-country-title");
  const description = document.querySelector("#audio-country-description");

  document.title = `${country.name} podcast | Letom po Stredomorí`;
  if (title) {
    title.textContent = `${country.name} - podcasty`;
  }
  if (description) {
    const countText =
      country.audios.length === 1
        ? "1 podcast"
        : country.audios.length > 1 && country.audios.length < 5
          ? `${country.audios.length} podcasty`
          : `${country.audios.length} podcastov`;
    description.textContent = `${country.description} Aktuálne: ${countText}.`;
  }

  if (!country.audios.length) {
    grid.innerHTML = `
      <article class="empty-audio-card">
        <span>0 podcastov</span>
        <h2>Podcasty pre túto krajinu ešte pripravujem</h2>
        <p>Keď pribudne prvá epizóda, zobrazí sa tu ako samostatná položka s prehrávačom.</p>
      </article>
    `;
    return;
  }

  grid.innerHTML = country.audios
    .map(
      (audio, index) => {
        const spotifyPlayer = audio.spotifyEmbedUrl
          ? `
          <iframe
            class="spotify-player"
            src="${audio.spotifyEmbedUrl}"
            width="100%"
            height="232"
            frameborder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="${audio.title}"
          ></iframe>`
          : `
          <div class="spotify-placeholder">
            Spotify prehrávač bude dostupný po doplnení verejného odkazu na epizódu.
          </div>`;

        return `
        <article class="country-audio-card">
          <span>Podcast ${index + 1}</span>
          <h2>${audio.title}</h2>
          <details class="audio-description">
            <summary>Čítať popis epizódy</summary>
            <p>${audio.description}</p>
          </details>
          ${spotifyPlayer}
          <a class="button button-primary" href="${audio.spotifyUrl}" target="_blank" rel="noopener">
            Otvoriť na Spotify
          </a>
        </article>
      `;
      }
    )
    .join("");
}

renderCountryAudios();

function renderCountryArticles() {
  const grid = document.querySelector("#country-article-grid");
  if (!grid) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const countryKey = params.get("krajina") || "taliansko";
  const country = articleLibrary[countryKey] || articleLibrary.taliansko;
  const title = document.querySelector("#article-country-title");
  const description = document.querySelector("#article-country-description");

  document.title = `${country.name} články | Letom po Stredomorí`;
  if (title) {
    title.textContent = `${country.name} - články`;
  }
  if (description) {
    const countText =
      country.articles.length === 1
        ? "1 článok"
        : country.articles.length > 1 && country.articles.length < 5
          ? `${country.articles.length} články`
          : `${country.articles.length} článkov`;
    description.textContent = `${country.description} Aktuálne: ${countText}.`;
  }

  if (!country.articles.length) {
    grid.innerHTML = `
      <article class="empty-article-card">
        <span>0 článkov</span>
        <h2>Články pre túto krajinu ešte pripravujem</h2>
        <p>Keď pribudne prvý blogový článok, zobrazí sa tu ako samostatná položka s odkazom na čítanie.</p>
      </article>
    `;
    return;
  }

  grid.innerHTML = country.articles
    .map(
      (article, index) => `
        <article class="country-article-card">
          <img src="${article.image}" alt="${article.title}" />
          <span>Článok ${index + 1} · ${article.date}</span>
          <h2>${article.title}</h2>
          <p>${article.description}</p>
          <div class="article-card-actions">
            <a class="button button-primary" href="${article.url}">
              Čítať článok
            </a>
            <a class="button button-light" href="${article.audioUrl}">
              Vypočuť podcast
            </a>
          </div>
        </article>
      `
    )
    .join("");
}

renderCountryArticles();
