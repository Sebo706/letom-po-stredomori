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

const audioLibrary = {
  taliansko: {
    name: "Taliansko",
    description: "Spotify audio prehľady z Talianska, juhu krajiny, pobrežia a miest s dovolenkovou atmosférou.",
    audios: [
      {
        title: "Amalfi - Ravello",
        description:
          "Audio epizóda z Talianska o atmosfére pobrežia Amalfi a mestečku Ravello.",
        spotifyUrl: "https://open.spotify.com/episode/49aahaviPcqiQ7wcGvxEx4?si=rJvJozQKQRqleVAaBTferQ",
        spotifyEmbedUrl: "https://open.spotify.com/embed/episode/49aahaviPcqiQ7wcGvxEx4",
      },
    ],
  },
  grecko: {
    name: "Grécko",
    description: "Audio prehľady z Grécka pribudnú neskôr.",
    audios: [],
  },
  spanielsko: {
    name: "Španielsko",
    description: "Spotify audio prehľady zo Španielska, miest, pobrežia a dovolenkovej reality.",
    audios: [
      {
        title: "Malaga – Španielsko",
        description:
          "Audio epizóda o Malage, španielskej dovolenkovej atmosfére a cestovaní mimo hlavnej sezóny.",
        spotifyUrl: "https://open.spotify.com/episode/6fOaPxVBsxW8hdcBekNAgX?si=Q2_oEMSITQGMU3hH_o4F4g",
        spotifyEmbedUrl: "https://open.spotify.com/embed/episode/6fOaPxVBsxW8hdcBekNAgX",
      },
    ],
  },
  francuzsko: {
    name: "Francúzsko",
    description: "Audio prehľady z Francúzska pribudnú neskôr.",
    audios: [],
  },
  chorvatsko: {
    name: "Chorvátsko",
    description: "Audio prehľady z Chorvátska pribudnú neskôr.",
    audios: [],
  },
  malta: {
    name: "Malta",
    description: "Audio prehľady z Malty pribudnú neskôr.",
    audios: [],
  },
  cyprus: {
    name: "Cyprus",
    description: "Spotify audio prehľady z Cypru, zimného cestovania a aktívneho objavovania ostrova.",
    audios: [
      {
        title: "Cyprus v januári – skrytý poklad pre aktívnych cestovateľov",
        description:
          "Cyprus v januári ponúka príjemné teploty, krásnu prírodu, plameniaky, turistiku bez davov a často aj veľmi výhodné letenky. V tejto epizóde sa pozrieme na dôvody, prečo môže byť Cyprus ideálnou voľbou pre každého, kto chce uniknúť slovenskej zime a objaviť Stredomorie mimo hlavnej sezóny. Podcast bol vytvorený pomocou AI z vlastných cestovateľských podkladov projektu Letom po Stredomorí.",
        spotifyUrl: "https://open.spotify.com/episode/22J0tjJcMahTJehBxFFMRR",
        spotifyEmbedUrl: "https://open.spotify.com/embed/episode/22J0tjJcMahTJehBxFFMRR",
      },
    ],
  },
  slovinsko: {
    name: "Slovinsko",
    description: "Audio prehľady zo Slovinska pribudnú neskôr.",
    audios: [],
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
      (video, index) => `
        <article class="country-video-card">
          <span>Video ${index + 1}</span>
          <h2>${video.title}</h2>
          <p>Otvorí sa priamo na YouTube kanáli Letom po Stredomorí.</p>
          <a class="button button-primary" href="${video.url}" target="_blank" rel="noopener">
            Pozrieť na YouTube
          </a>
        </article>
      `
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

  document.title = `${country.name} audio | Letom po Stredomorí`;
  if (title) {
    title.textContent = `${country.name} - audio prehľady`;
  }
  if (description) {
    const countText =
      country.audios.length === 1
        ? "1 audio prehľad"
        : country.audios.length > 1 && country.audios.length < 5
          ? `${country.audios.length} audio prehľady`
          : `${country.audios.length} audio prehľadov`;
    description.textContent = `${country.description} Aktuálne: ${countText}.`;
  }

  if (!country.audios.length) {
    grid.innerHTML = `
      <article class="empty-audio-card">
        <span>0 audio prehľadov</span>
        <h2>Audio prehľady pre túto krajinu ešte pripravujem</h2>
        <p>Keď pribudne prvá nahrávka, zobrazí sa tu ako samostatná položka s prehrávačom.</p>
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
          <span>Audio ${index + 1}</span>
          <h2>${audio.title}</h2>
          <details class="audio-description">
            <summary>Čítať popis epizódy</summary>
            <p>${audio.description}</p>
          </details>
          ${spotifyPlayer}
          <a class="button button-primary" href="${audio.spotifyUrl}" target="_blank" rel="noopener">
            Otvoriť odkaz
          </a>
        </article>
      `;
      }
    )
    .join("");
}

renderCountryAudios();
