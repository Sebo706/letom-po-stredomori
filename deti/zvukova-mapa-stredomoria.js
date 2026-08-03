(() => {
  "use strict";

  const storageKey = "letom-po-stredomori-deti-zvukova-mapa-v3";
  const destinations = {
    italy: { name: "Taliansko", icon: "🍕", questions: [
      { prompt: "Vitaj v Taliansku! Nájdeš jedlo, ktoré sa volá pizza?", answers: [{ icon: "🍕", label: "Pizza" }, { icon: "🍎", label: "Jablko" }, { icon: "🥕", label: "Mrkva" }], correct: 0, explanation: "Pizza je známe talianske jedlo." },
      { prompt: "Výborne! A teraz nájdeš studenú dobrotu, ktorá sa volá gelato?", answers: [{ icon: "🍦", label: "Zmrzlina" }, { icon: "🥦", label: "Brokolica" }, { icon: "🥖", label: "Pečivo" }], correct: 0, explanation: "Gelato je talianska zmrzlina." },
      { prompt: "Aké je hlavné mesto Talianska?", answers: [{ icon: "🏛️", label: "Rím" }, { icon: "🗼", label: "Paríž" }, { icon: "🏰", label: "Madrid" }], correct: 0, explanation: "Hlavné mesto Talianska je Rím." },
      { prompt: "Ktorá veža v Taliansku sa nakláňa do strany?", answers: [{ icon: "🗼", label: "Šikmá veža v Pise" }, { icon: "🗽", label: "Socha slobody" }, { icon: "🗿", label: "Veľká socha" }], correct: 0, explanation: "V meste Pisa stojí slávna šikmá veža." },
      { prompt: "V ktorom talianskom meste sa môžeme odviezť čiernou gondolou po vode?", answers: [{ icon: "🛶", label: "Benátky" }, { icon: "🏔️", label: "Alpy" }, { icon: "🏜️", label: "Púšť" }], correct: 0, explanation: "Benátky sú známe kanálmi a gondolami." },
    ] },
    greece: { name: "Grécko", icon: "⛵", questions: [
      { prompt: "Vitaj v Grécku! Nájdeš loďku, ktorá nás odvezie na ostrov?", answers: [{ icon: "⛵", label: "Loď" }, { icon: "🚌", label: "Autobus" }, { icon: "🚲", label: "Bicykel" }], correct: 0, explanation: "Loďkou sa môžeme plaviť medzi gréckymi ostrovmi." },
      { prompt: "Ešte jeden obrázok! Ktorý plod rastie na olivovníku?", answers: [{ icon: "🫒", label: "Oliva" }, { icon: "🍓", label: "Jahoda" }, { icon: "🥔", label: "Zemiak" }], correct: 0, explanation: "Olivy rastú na stromoch a sú obľúbené aj v Grécku." },
      { prompt: "Aké je hlavné mesto Grécka?", answers: [{ icon: "🏛️", label: "Atény" }, { icon: "🍕", label: "Rím" }, { icon: "🗼", label: "Paríž" }], correct: 0, explanation: "Hlavné mesto Grécka sú Atény." },
      { prompt: "Ako sa volajú veľké staré športové hry, ktoré začali v Grécku?", answers: [{ icon: "🏃", label: "Olympijské hry" }, { icon: "🎪", label: "Cirkus" }, { icon: "🎄", label: "Vianoce" }], correct: 0, explanation: "Prvé olympijské hry sa konali v starom Grécku." },
      { prompt: "Ktorý chrám s vysokými stĺpmi stojí v Aténach?", answers: [{ icon: "🏛️", label: "Parthenón" }, { icon: "🏰", label: "Rozprávkový zámok" }, { icon: "🛖", label: "Domček" }], correct: 0, explanation: "Parthenón je slávny starý chrám v Aténach." },
    ] },
    spain: { name: "Španielsko", icon: "🧢", questions: [
      { prompt: "Vitaj v Španielsku! Čo nás ochráni pred silným slnkom?", answers: [{ icon: "🧢", label: "Čiapka" }, { icon: "🧤", label: "Zimné rukavice" }, { icon: "🥾", label: "Gumáky" }], correct: 0, explanation: "Čiapka chráni hlavu pred slnkom." },
      { prompt: "A ktorý sladký plod má farbu slnka?", answers: [{ icon: "🍊", label: "Pomaranč" }, { icon: "🍇", label: "Hrozno" }, { icon: "🫐", label: "Čučoriedka" }], correct: 0, explanation: "Pomaranče rastú v teplých španielskych krajoch." },
      { prompt: "Aké je hlavné mesto Španielska?", answers: [{ icon: "🏰", label: "Madrid" }, { icon: "🏛️", label: "Atény" }, { icon: "🗼", label: "Paríž" }], correct: 0, explanation: "Hlavné mesto Španielska je Madrid." },
      { prompt: "Ktorý tanec s farebnými šatami a tlieskaním je známy v Španielsku?", answers: [{ icon: "💃", label: "Flamenco" }, { icon: "⛸️", label: "Korčuľovanie" }, { icon: "🏊", label: "Plávanie" }], correct: 0, explanation: "Flamenco je známy španielsky tanec." },
      { prompt: "Ktorý šport je v Španielsku veľmi obľúbený?", answers: [{ icon: "⚽", label: "Futbal" }, { icon: "🏒", label: "Hokej" }, { icon: "🎿", label: "Lyžovanie" }], correct: 0, explanation: "Futbal je v Španielsku veľmi obľúbený." },
    ] },
    croatia: { name: "Chorvátsko", icon: "🐬", questions: [
      { prompt: "Vitaj v Chorvátsku! Ktoré zvieratko môžeme stretnúť v mori?", answers: [{ icon: "🐬", label: "Delfín" }, { icon: "🐄", label: "Krava" }, { icon: "🐓", label: "Kohút" }], correct: 0, explanation: "Delfíny žijú v mori." },
      { prompt: "Pozri na pláž. Čo môžeš nájsť pri vode?", answers: [{ icon: "🐚", label: "Mušľa" }, { icon: "🧸", label: "Medvedík" }, { icon: "🚂", label: "Vláčik" }], correct: 0, explanation: "Mušle môžeme nájsť na pláži pri mori." },
      { prompt: "Aké je hlavné mesto Chorvátska?", answers: [{ icon: "🏙️", label: "Záhreb" }, { icon: "🏛️", label: "Rím" }, { icon: "🗼", label: "Paríž" }], correct: 0, explanation: "Hlavné mesto Chorvátska je Záhreb." },
      { prompt: "Ako sa volá more pri chorvátskom pobreží?", answers: [{ icon: "🌊", label: "Jadranské more" }, { icon: "❄️", label: "Ľadové more" }, { icon: "🏜️", label: "Púšť" }], correct: 0, explanation: "Chorvátsko leží pri Jadranskom mori." },
      { prompt: "Ktoré staré mesto pri mori má vysoké hradby a volá sa Dubrovník?", answers: [{ icon: "🏰", label: "Dubrovník" }, { icon: "🗼", label: "Paríž" }, { icon: "🏛️", label: "Atény" }], correct: 0, explanation: "Dubrovník je známe chorvátske mesto pri mori." },
    ] },
    cyprus: { name: "Cyprus", icon: "🍋", questions: [
      { prompt: "Vitaj na Cypre! Nájdeš žltý kyslý plod?", answers: [{ icon: "🍋", label: "Citrón" }, { icon: "🍒", label: "Čerešňa" }, { icon: "🥥", label: "Kokos" }], correct: 0, explanation: "Citróny dozrievajú v teplom podnebí." },
      { prompt: "A čo si otvoríme nad hlavou na slnečnej pláži?", answers: [{ icon: "⛱️", label: "Slnečník" }, { icon: "🪥", label: "Zubná kefka" }, { icon: "🧦", label: "Ponožka" }], correct: 0, explanation: "Slnečník nám na pláži robí tieň." },
      { prompt: "Aké je hlavné mesto Cypru?", answers: [{ icon: "🏙️", label: "Nikózia" }, { icon: "🏛️", label: "Atény" }, { icon: "🏰", label: "Madrid" }], correct: 0, explanation: "Hlavné mesto Cypru je Nikózia." },
      { prompt: "Cyprus je veľký ostrov. Ktorý obrázok ukazuje ostrov?", answers: [{ icon: "🏝️", label: "Ostrov" }, { icon: "🏔️", label: "Hora" }, { icon: "🚂", label: "Vláčik" }], correct: 0, explanation: "Cyprus je ostrov v Stredozemnom mori." },
      { prompt: "Ktorá bohyňa z dávnych príbehov je spojená s Cyprom?", answers: [{ icon: "🕊️", label: "Afrodita" }, { icon: "🎅", label: "Mikuláš" }, { icon: "🧙", label: "Čarodej" }], correct: 0, explanation: "V dávnych príbehoch sa Afrodita spája s Cyprom." },
    ] },
    france: { name: "Francúzsko", icon: "🥐", questions: [
      { prompt: "Vitaj vo Francúzsku pri mori! Nájdeš pečivo v tvare mesiačika?", answers: [{ icon: "🥐", label: "Croissant" }, { icon: "🍔", label: "Hamburger" }, { icon: "🍉", label: "Melón" }], correct: 0, explanation: "Croissant je známe francúzske pečivo." },
      { prompt: "Čo si vezmeme na výlet, aby sme videli ďaleko?", answers: [{ icon: "🔭", label: "Ďalekohľad" }, { icon: "🍴", label: "Vidlička" }, { icon: "🎈", label: "Balón" }], correct: 0, explanation: "Ďalekohľad nám priblíži vzdialené lode a vtáky." },
      { prompt: "Aké je hlavné mesto Francúzska?", answers: [{ icon: "🗼", label: "Paríž" }, { icon: "🏛️", label: "Rím" }, { icon: "🏰", label: "Madrid" }], correct: 0, explanation: "Hlavné mesto Francúzska je Paríž." },
      { prompt: "Ktorá vysoká veža stojí v Paríži?", answers: [{ icon: "🗼", label: "Eiffelova veža" }, { icon: "🗿", label: "Kamenná hlava" }, { icon: "⛩️", label: "Brána" }], correct: 0, explanation: "Eiffelova veža je slávny symbol Paríža." },
      { prompt: "Ktorý maliar maľoval lekná a bol z Francúzska?", answers: [{ icon: "🎨", label: "Claude Monet" }, { icon: "🚀", label: "Astronaut" }, { icon: "👨‍🍳", label: "Kuchár" }], correct: 0, explanation: "Claude Monet bol známy francúzsky maliar." },
    ] },
    malta: { name: "Malta", icon: "🐢", questions: [
      { prompt: "Vitaj na Malte! Ktoré zvieratko môže plávať dlho v mori?", answers: [{ icon: "🐢", label: "Korytnačka" }, { icon: "🐴", label: "Kôň" }, { icon: "🐔", label: "Sliepka" }], correct: 0, explanation: "Morské korytnačky žijú vo vode." },
      { prompt: "Čím sa bezpečne plavíme po modrej vode?", answers: [{ icon: "⛵", label: "Loďka" }, { icon: "🚜", label: "Traktor" }, { icon: "🚀", label: "Raketa" }], correct: 0, explanation: "Loďka sa plaví po mori." },
      { prompt: "Aké je hlavné mesto Malty?", answers: [{ icon: "🏰", label: "Valletta" }, { icon: "🏛️", label: "Atény" }, { icon: "🏙️", label: "Záhreb" }], correct: 0, explanation: "Hlavné mesto Malty sa volá Valletta." },
      { prompt: "Malta je krajina na ostrovoch. Ktorý obrázok ukazuje ostrov?", answers: [{ icon: "🏝️", label: "Ostrov" }, { icon: "🏔️", label: "Hora" }, { icon: "🚂", label: "Vláčik" }], correct: 0, explanation: "Malta je ostrovná krajina v Stredozemnom mori." },
      { prompt: "Ktoré staré stavby z veľkých kameňov nájdeme na Malte?", answers: [{ icon: "🏛️", label: "Chrámy" }, { icon: "🎢", label: "Horskú dráhu" }, { icon: "🚦", label: "Semafor" }], correct: 0, explanation: "Na Malte stoja veľmi staré kamenné chrámy." },
    ] },
    slovenia: { name: "Slovinsko", icon: "🪨", questions: [
      { prompt: "Vitaj v Slovinsku! Nájdeš miesto pod zemou s kamennými kvapkami?", answers: [{ icon: "🪨", label: "Jaskyňa" }, { icon: "🏠", label: "Dom" }, { icon: "🎪", label: "Stan" }], correct: 0, explanation: "V jaskyniach rastú kamenné kvaple." },
      { prompt: "A ktorým obrázkom pozdravíme malé rybky pri mori?", answers: [{ icon: "🐟", label: "Ryba" }, { icon: "🐕", label: "Psík" }, { icon: "🦋", label: "Motýľ" }], correct: 0, explanation: "Ryby žijú vo vode." },
      { prompt: "Aké je hlavné mesto Slovinska?", answers: [{ icon: "🐉", label: "Ľubľana" }, { icon: "🏛️", label: "Rím" }, { icon: "🏰", label: "Madrid" }], correct: 0, explanation: "Hlavné mesto Slovinska je Ľubľana." },
      { prompt: "Ktoré more je pri malom slovinskom pobreží?", answers: [{ icon: "🌊", label: "Jadranské more" }, { icon: "❄️", label: "Ľadové more" }, { icon: "🏜️", label: "Púšť" }], correct: 0, explanation: "Slovinsko má krátke pobrežie pri Jadranskom mori." },
      { prompt: "Ktoré krásne jazero v Slovinsku má malý ostrovček?", answers: [{ icon: "🏞️", label: "Bledské jazero" }, { icon: "🏜️", label: "Púšť" }, { icon: "🌋", label: "Sopka" }], correct: 0, explanation: "Bledské jazero je známe malým ostrovčekom." },
    ] },
  };
  const audioClips = {
    intro: "audio/intro.mp3",
    almost: "audio/almost.mp3",
    next: "audio/next.mp3",
    stamp: "audio/stamp.mp3",
    complete: "audio/complete.mp3",
    already: "audio/already.mp3",
    restart: "audio/restart.mp3",
    "sound-on": "audio/sound-on.mp3",
  };
  Object.keys(destinations).forEach((countryId) => {
    destinations[countryId].questions.forEach((_, index) => {
      audioClips[`${countryId}-${index + 1}`] = `audio/${countryId}-${index + 1}.mp3`;
    });
  });

  const elements = {
    game: document.querySelector(".kids-game"), stampCount: document.querySelector("#stamp-count"), stampStrip: document.querySelector("#passport-stamps"), soundToggle: document.querySelector("#sound-toggle"), soundLabel: document.querySelector("#sound-toggle-label"), audioWelcome: document.querySelector("#audio-welcome"), audioStart: document.querySelector("#audio-start"), audioSkip: document.querySelector("#audio-skip"), countryName: document.querySelector("#country-name"), questionTitle: document.querySelector("#question-title"), questionStep: document.querySelector("#question-step"), questionText: document.querySelector("#question-text"), answers: document.querySelector("#answer-options"), feedback: document.querySelector("#game-feedback"), repeat: document.querySelector("#repeat-prompt"), next: document.querySelector("#next-round"), completion: document.querySelector("#kids-complete"), summary: document.querySelector("#adventure-summary"), summaryList: document.querySelector("#summary-list"), diploma: document.querySelector("#kids-diploma"), print: document.querySelector("#print-diploma"), restart: document.querySelector("#restart-game"), countryButtons: Array.from(document.querySelectorAll("[data-country]")),
  };

  let soundEnabled = true;
  let audioReady = false;
  const audioVersion = "20260803-audio-v6";
  let activeAudio = null;
  let pendingAudioTimer = null;
  const audioPlayers = Object.fromEntries(Object.entries(audioClips).map(([key, source]) => {
    const player = new Audio(`${source}?v=${audioVersion}`);
    player.preload = "auto";
    player.addEventListener("ended", () => { if (activeAudio === player) activeAudio = null; });
    return [key, player];
  }));
  let activeCountry = null;
  let activeRound = null;
  let progress = readProgress();

  function blankCountryProgress() { return { completedRounds: [], attempts: {} }; }
  function blankProgress() { return { countries: Object.fromEntries(Object.keys(destinations).map((id) => [id, blankCountryProgress()])) }; }
  function readProgress() {
    try {
      const saved = JSON.parse(window.localStorage.getItem(storageKey) || "null");
      const base = blankProgress();
      if (!saved || typeof saved !== "object" || !saved.countries) return base;
      Object.keys(destinations).forEach((id) => {
        const country = saved.countries[id];
        if (!country || typeof country !== "object") return;
        base.countries[id].completedRounds = Array.isArray(country.completedRounds) ? country.completedRounds.filter((round) => Number.isInteger(round) && round >= 0 && round < destinations[id].questions.length) : [];
        base.countries[id].completedRounds = [...new Set(base.countries[id].completedRounds)];
        base.countries[id].attempts = country.attempts && typeof country.attempts === "object" ? country.attempts : {};
      });
      return base;
    } catch (_) { return blankProgress(); }
  }
  function saveProgress() { try { window.localStorage.setItem(storageKey, JSON.stringify(progress)); } catch (_) { /* Hra zostáva funkčná aj bez úložiska. */ } }
  function getCountryProgress(id) { return progress.countries[id]; }
  function isCountryComplete(id) { return getCountryProgress(id).completedRounds.length === destinations[id].questions.length; }
  function stampCount() { return Object.keys(destinations).filter(isCountryComplete).length; }
  function firstOpenRound(id) { return destinations[id].questions.findIndex((_, round) => !getCountryProgress(id).completedRounds.includes(round)); }
  function isAdventureComplete() { return stampCount() === Object.keys(destinations).length; }

  function stopCurrentClip() {
    if (pendingAudioTimer !== null) { window.clearTimeout(pendingAudioTimer); pendingAudioTimer = null; }
    if (!activeAudio) return;
    activeAudio.pause();
    activeAudio.currentTime = 0;
    activeAudio = null;
  }
  function playClip(key, delay = 0) {
    if (!audioReady || !soundEnabled || !audioPlayers[key]) return;
    stopCurrentClip();
    const player = audioPlayers[key];
    const start = () => {
      pendingAudioTimer = null;
      activeAudio = player;
      player.currentTime = 0;
      player.play().catch(() => { if (activeAudio === player) activeAudio = null; });
    };
    if (delay) pendingAudioTimer = window.setTimeout(start, delay); else start();
  }
  function setFeedback(text, success = false) { elements.feedback.textContent = text; elements.feedback.classList.toggle("is-success", success); }
  function celebrate() { elements.game.classList.remove("is-celebrating"); window.requestAnimationFrame(() => elements.game.classList.add("is-celebrating")); window.setTimeout(() => elements.game.classList.remove("is-celebrating"), 760); }

  function updatePassport() {
    const total = Object.keys(destinations).length;
    elements.stampCount.textContent = `${stampCount()} z ${total} pečiatok`;
    elements.stampStrip.replaceChildren();
    Object.entries(destinations).forEach(([id, destination]) => {
      const complete = isCountryComplete(id);
      const stamp = document.createElement("span");
      stamp.className = `passport-stamp${complete ? "" : " is-empty"}`;
      stamp.textContent = complete ? destination.icon : "☆";
      stamp.title = complete ? `${destination.name}: pečiatka získaná` : `${destination.name}: pečiatka čaká`;
      elements.stampStrip.appendChild(stamp);
    });
    elements.countryButtons.forEach((button) => { const complete = isCountryComplete(button.dataset.country); button.classList.toggle("is-complete", complete); button.querySelector("i").textContent = complete ? "✓" : "☆"; });
    const complete = isAdventureComplete();
    elements.completion.hidden = !complete;
    elements.summary.hidden = !complete;
    if (complete) renderSummary();
  }

  function renderSummary() {
    elements.summaryList.replaceChildren();
    Object.entries(destinations).forEach(([id, destination]) => destination.questions.forEach((question, round) => {
      const attempts = getCountryProgress(id).attempts[String(round)] || [];
      const card = document.createElement("article");
      card.className = "summary-card";
      const attemptLabels = attempts.map((index) => question.answers[index]?.label).filter(Boolean).join(" → ");
      card.innerHTML = `<h3>${destination.icon} ${destination.name} · ${round + 1}. obrázok</h3><p class="summary-attempt">Tvoje odpovede: ${attemptLabels || "—"}</p><p><strong>Správne:</strong> ${question.answers[question.correct].label}</p><p>${question.explanation}</p>`;
      elements.summaryList.appendChild(card);
    }));
  }

  function showRound(countryId, round) {
    const destination = destinations[countryId];
    const question = destination.questions[round];
    if (!question) return;
    activeCountry = countryId;
    activeRound = round;
    elements.countryButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.country === countryId));
    elements.countryName.textContent = destination.name;
    elements.questionTitle.textContent = question.prompt;
    elements.questionStep.textContent = `Obrázok ${round + 1} z ${destination.questions.length}`;
    elements.questionText.textContent = "Vyber správny obrázok.";
    elements.repeat.disabled = false;
    elements.next.hidden = true;
    setFeedback("Počúvaj Čajku Leto a vyber obrázok.");
    renderAnswers(question);
    playClip(`${countryId}-${round + 1}`);
    window.setTimeout(() => elements.questionTitle.focus(), 0);
  }

  function chooseCountry(countryId) {
    if (isCountryComplete(countryId)) {
      activeCountry = countryId; activeRound = null;
      elements.countryButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.country === countryId));
      elements.countryName.textContent = destinations[countryId].name;
      elements.questionTitle.textContent = "Táto pečiatka už je v pase!";
      elements.questionStep.textContent = "Krajina je hotová";
      elements.questionText.textContent = "Vyber si ďalšiu krajinu na mape.";
      elements.answers.replaceChildren(); elements.repeat.disabled = true; elements.next.hidden = true;
      setFeedback("Výborne! Už máš všetkých päť obrázkov z tejto krajiny.", true);
      playClip("already");
      return;
    }
    showRound(countryId, firstOpenRound(countryId));
  }

  function renderAnswers(question) {
    elements.answers.replaceChildren();
    question.answers.forEach((answer, index) => {
      const button = document.createElement("button");
      button.type = "button"; button.className = "kids-answer"; button.setAttribute("aria-label", `Vybrať: ${answer.label}`);
      button.innerHTML = `<span aria-hidden="true">${answer.icon}</span><span>${answer.label}</span>`;
      button.addEventListener("click", () => answerQuestion(index));
      elements.answers.appendChild(button);
    });
  }

  function answerQuestion(index) {
    if (!activeCountry || activeRound === null) return;
    const question = destinations[activeCountry].questions[activeRound];
    const countryProgress = getCountryProgress(activeCountry);
    const attempts = countryProgress.attempts[String(activeRound)] || [];
    countryProgress.attempts[String(activeRound)] = [...attempts, index];
    saveProgress();
    const buttons = Array.from(elements.answers.querySelectorAll("button"));
    const selected = buttons[index];
    if (index !== question.correct) {
      selected.classList.add("is-try-again"); setFeedback("Takmer! Skús ešte jeden obrázok."); playClip("almost", 160); window.setTimeout(() => selected.classList.remove("is-try-again"), 650); return;
    }
    buttons.forEach((button) => { button.disabled = true; }); selected.classList.add("is-correct");
    countryProgress.completedRounds = [...new Set([...countryProgress.completedRounds, activeRound])]; saveProgress(); celebrate();
    const nextRound = firstOpenRound(activeCountry);
    if (nextRound !== -1) {
      setFeedback("Výborne! Ešte jeden obrázok a získaš pečiatku.", true); playClip("next", 160); elements.next.hidden = false; return;
    }
    updatePassport();
    const message = isAdventureComplete() ? "Výborne! Stal si sa Malým objaviteľom Stredomoria!" : `Výborne! Získavaš pečiatku za ${destinations[activeCountry].name}!`;
    setFeedback(message, true); playClip(isAdventureComplete() ? "complete" : "stamp", 160);
  }

  elements.countryButtons.forEach((button) => button.addEventListener("click", () => chooseCountry(button.dataset.country)));
  function setSoundControl(enabled) { soundEnabled = enabled; elements.soundToggle.setAttribute("aria-pressed", String(enabled)); elements.soundToggle.setAttribute("aria-label", enabled ? "Vypnúť zvuk" : "Zapnúť zvuk"); elements.soundLabel.textContent = enabled ? "Zvuk zapnutý" : "Zvuk vypnutý"; elements.soundToggle.querySelector("span").textContent = enabled ? "🔊" : "🔇"; }
  function unlockAudio() { audioReady = true; elements.audioWelcome.hidden = true; setSoundControl(true); playClip("intro"); }
  elements.audioStart.addEventListener("click", unlockAudio);
  elements.audioSkip.addEventListener("click", () => { stopCurrentClip(); elements.audioWelcome.hidden = true; setSoundControl(false); setFeedback("Hráš bez hlasu. Všetky pokyny vidíš na obrazovke."); });
  elements.repeat.addEventListener("click", () => { if (activeCountry && activeRound !== null) playClip(`${activeCountry}-${activeRound + 1}`); });
  elements.next.addEventListener("click", () => { if (activeCountry) showRound(activeCountry, firstOpenRound(activeCountry)); });
  elements.soundToggle.addEventListener("click", () => { if (!audioReady) { unlockAudio(); return; } if (soundEnabled) { stopCurrentClip(); setSoundControl(false); } else { setSoundControl(true); playClip("sound-on"); } });
  elements.print.addEventListener("click", () => { elements.diploma.hidden = false; window.print(); });
  elements.restart.addEventListener("click", () => {
    if (!window.confirm("Naozaj chceš začať dobrodružstvo odznova? Všetkých osem pečiatok sa vymaže.")) return;
    progress = blankProgress(); activeCountry = null; activeRound = null; try { window.localStorage.removeItem(storageKey); } catch (_) { /* Bez úložiska netreba nič mazať. */ }
    elements.countryButtons.forEach((button) => button.classList.remove("is-active")); elements.countryName.textContent = "Čajka Leto čaká"; elements.questionTitle.textContent = "Vyber si krajinu na mape"; elements.questionStep.textContent = "V každej krajine nájdeš päť obrázkov."; elements.questionText.textContent = "Potom ti Čajka Leto ukáže tri veľké možnosti."; elements.answers.replaceChildren(); elements.repeat.disabled = true; elements.next.hidden = true; elements.diploma.hidden = true; setFeedback("Pečiatky sú pripravené na nové dobrodružstvo."); updatePassport(); playClip("restart");
  });

  updatePassport();
})();
