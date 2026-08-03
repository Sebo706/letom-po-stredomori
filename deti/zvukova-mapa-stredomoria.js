(() => {
  "use strict";

  const storageKey = "letom-po-stredomori-deti-zvukova-mapa-v2";
  const femaleVoicePattern = /(zuzana|laura|helena|katarina|katka|maria|mária|natasha|susan|female|woman)/i;
  const destinations = {
    italy: { name: "Taliansko", icon: "🍕", questions: [
      { prompt: "Vitaj v Taliansku! Nájdeš jedlo, ktoré sa volá pizza?", answers: [{ icon: "🍕", label: "Pizza" }, { icon: "🍎", label: "Jablko" }, { icon: "🥕", label: "Mrkva" }], correct: 0, explanation: "Pizza je známe talianske jedlo." },
      { prompt: "Výborne! A teraz nájdeš studenú dobrotu, ktorá sa volá gelato?", answers: [{ icon: "🍦", label: "Zmrzlina" }, { icon: "🥦", label: "Brokolica" }, { icon: "🥖", label: "Pečivo" }], correct: 0, explanation: "Gelato je talianska zmrzlina." },
    ] },
    greece: { name: "Grécko", icon: "⛵", questions: [
      { prompt: "Vitaj v Grécku! Nájdeš loďku, ktorá nás odvezie na ostrov?", answers: [{ icon: "⛵", label: "Loď" }, { icon: "🚌", label: "Autobus" }, { icon: "🚲", label: "Bicykel" }], correct: 0, explanation: "Loďkou sa môžeme plaviť medzi gréckymi ostrovmi." },
      { prompt: "Ešte jeden obrázok! Ktorý plod rastie na olivovníku?", answers: [{ icon: "🫒", label: "Oliva" }, { icon: "🍓", label: "Jahoda" }, { icon: "🥔", label: "Zemiak" }], correct: 0, explanation: "Olivy rastú na stromoch a sú obľúbené aj v Grécku." },
    ] },
    spain: { name: "Španielsko", icon: "🧢", questions: [
      { prompt: "Vitaj v Španielsku! Čo nás ochráni pred silným slnkom?", answers: [{ icon: "🧢", label: "Čiapka" }, { icon: "🧤", label: "Zimné rukavice" }, { icon: "🥾", label: "Gumáky" }], correct: 0, explanation: "Čiapka chráni hlavu pred slnkom." },
      { prompt: "A ktorý sladký plod má farbu slnka?", answers: [{ icon: "🍊", label: "Pomaranč" }, { icon: "🍇", label: "Hrozno" }, { icon: "🫐", label: "Čučoriedka" }], correct: 0, explanation: "Pomaranče rastú v teplých španielskych krajoch." },
    ] },
    croatia: { name: "Chorvátsko", icon: "🐬", questions: [
      { prompt: "Vitaj v Chorvátsku! Ktoré zvieratko môžeme stretnúť v mori?", answers: [{ icon: "🐬", label: "Delfín" }, { icon: "🐄", label: "Krava" }, { icon: "🐓", label: "Kohút" }], correct: 0, explanation: "Delfíny žijú v mori." },
      { prompt: "Pozri na pláž. Čo môžeš nájsť pri vode?", answers: [{ icon: "🐚", label: "Mušľa" }, { icon: "🧸", label: "Medvedík" }, { icon: "🚂", label: "Vláčik" }], correct: 0, explanation: "Mušle môžeme nájsť na pláži pri mori." },
    ] },
    cyprus: { name: "Cyprus", icon: "🍋", questions: [
      { prompt: "Vitaj na Cypre! Nájdeš žltý kyslý plod?", answers: [{ icon: "🍋", label: "Citrón" }, { icon: "🍒", label: "Čerešňa" }, { icon: "🥥", label: "Kokos" }], correct: 0, explanation: "Citróny dozrievajú v teplom podnebí." },
      { prompt: "A čo si otvoríme nad hlavou na slnečnej pláži?", answers: [{ icon: "⛱️", label: "Slnečník" }, { icon: "🪥", label: "Zubná kefka" }, { icon: "🧦", label: "Ponožka" }], correct: 0, explanation: "Slnečník nám na pláži robí tieň." },
    ] },
    france: { name: "Francúzsko", icon: "🥐", questions: [
      { prompt: "Vitaj vo Francúzsku pri mori! Nájdeš pečivo v tvare mesiačika?", answers: [{ icon: "🥐", label: "Croissant" }, { icon: "🍔", label: "Hamburger" }, { icon: "🍉", label: "Melón" }], correct: 0, explanation: "Croissant je známe francúzske pečivo." },
      { prompt: "Čo si vezmeme na výlet, aby sme videli ďaleko?", answers: [{ icon: "🔭", label: "Ďalekohľad" }, { icon: "🍴", label: "Vidlička" }, { icon: "🎈", label: "Balón" }], correct: 0, explanation: "Ďalekohľad nám priblíži vzdialené lode a vtáky." },
    ] },
    malta: { name: "Malta", icon: "🐢", questions: [
      { prompt: "Vitaj na Malte! Ktoré zvieratko môže plávať dlho v mori?", answers: [{ icon: "🐢", label: "Korytnačka" }, { icon: "🐴", label: "Kôň" }, { icon: "🐔", label: "Sliepka" }], correct: 0, explanation: "Morské korytnačky žijú vo vode." },
      { prompt: "Čím sa bezpečne plavíme po modrej vode?", answers: [{ icon: "⛵", label: "Loďka" }, { icon: "🚜", label: "Traktor" }, { icon: "🚀", label: "Raketa" }], correct: 0, explanation: "Loďka sa plaví po mori." },
    ] },
    slovenia: { name: "Slovinsko", icon: "🪨", questions: [
      { prompt: "Vitaj v Slovinsku! Nájdeš miesto pod zemou s kamennými kvapkami?", answers: [{ icon: "🪨", label: "Jaskyňa" }, { icon: "🏠", label: "Dom" }, { icon: "🎪", label: "Stan" }], correct: 0, explanation: "V jaskyniach rastú kamenné kvaple." },
      { prompt: "A ktorým obrázkom pozdravíme malé rybky pri mori?", answers: [{ icon: "🐟", label: "Ryba" }, { icon: "🐕", label: "Psík" }, { icon: "🦋", label: "Motýľ" }], correct: 0, explanation: "Ryby žijú vo vode." },
    ] },
  };

  const elements = {
    game: document.querySelector(".kids-game"), stampCount: document.querySelector("#stamp-count"), stampStrip: document.querySelector("#passport-stamps"), soundToggle: document.querySelector("#sound-toggle"), soundLabel: document.querySelector("#sound-toggle-label"), countryName: document.querySelector("#country-name"), questionTitle: document.querySelector("#question-title"), questionStep: document.querySelector("#question-step"), questionText: document.querySelector("#question-text"), answers: document.querySelector("#answer-options"), feedback: document.querySelector("#game-feedback"), repeat: document.querySelector("#repeat-prompt"), next: document.querySelector("#next-round"), completion: document.querySelector("#kids-complete"), summary: document.querySelector("#adventure-summary"), summaryList: document.querySelector("#summary-list"), diploma: document.querySelector("#kids-diploma"), print: document.querySelector("#print-diploma"), restart: document.querySelector("#restart-game"), countryButtons: Array.from(document.querySelectorAll("[data-country]")),
  };

  let soundEnabled = true;
  let activeCountry = null;
  let activeRound = null;
  let voices = [];
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

  function loadVoices() { voices = "speechSynthesis" in window ? window.speechSynthesis.getVoices() : []; }
  function preferredVoice() { const slovak = voices.filter((voice) => /^sk([-_]|$)/i.test(voice.lang)); return slovak.find((voice) => femaleVoicePattern.test(voice.name)) || slovak[0] || voices.find((voice) => femaleVoicePattern.test(voice.name)) || null; }
  function say(text) { if (!soundEnabled || !("speechSynthesis" in window)) return; const utterance = new SpeechSynthesisUtterance(text); utterance.lang = "sk-SK"; utterance.rate = 0.84; utterance.pitch = 1.16; const voice = preferredVoice(); if (voice) utterance.voice = voice; window.speechSynthesis.cancel(); window.speechSynthesis.speak(utterance); }
  function setFeedback(text, success = false) { elements.feedback.textContent = text; elements.feedback.classList.toggle("is-success", success); }
  function playSuccessChime() {
    if (!soundEnabled || !(window.AudioContext || window.webkitAudioContext)) return;
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    const context = new AudioContextClass();
    [523.25, 659.25].forEach((frequency, index) => {
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = "sine";
      oscillator.frequency.value = frequency;
      gain.gain.setValueAtTime(0.0001, context.currentTime + index * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.08, context.currentTime + index * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + index * 0.08 + 0.25);
      oscillator.connect(gain).connect(context.destination);
      oscillator.start(context.currentTime + index * 0.08);
      oscillator.stop(context.currentTime + index * 0.08 + 0.27);
    });
    window.setTimeout(() => context.close(), 420);
  }
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
    say(question.prompt);
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
      setFeedback("Výborne! Už máš všetky dva obrázky z tejto krajiny.", true);
      say("Výborne! Túto krajinu už máš v pase.");
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
      selected.classList.add("is-try-again"); setFeedback("Takmer! Skús ešte jeden obrázok."); say("Takmer! Skús ešte jeden obrázok."); window.setTimeout(() => selected.classList.remove("is-try-again"), 650); return;
    }
    buttons.forEach((button) => { button.disabled = true; }); selected.classList.add("is-correct");
    countryProgress.completedRounds = [...new Set([...countryProgress.completedRounds, activeRound])]; saveProgress(); celebrate(); playSuccessChime();
    const nextRound = firstOpenRound(activeCountry);
    if (nextRound !== -1) {
      setFeedback("Výborne! Ešte jeden obrázok a získaš pečiatku.", true); say("Výborne! Ešte jeden obrázok a získaš pečiatku."); elements.next.hidden = false; return;
    }
    updatePassport();
    const message = isAdventureComplete() ? "Výborne! Stal si sa Malým objaviteľom Stredomoria!" : `Výborne! Získavaš pečiatku za ${destinations[activeCountry].name}!`;
    setFeedback(message, true); say(message);
  }

  elements.countryButtons.forEach((button) => button.addEventListener("click", () => chooseCountry(button.dataset.country)));
  elements.repeat.addEventListener("click", () => { if (activeCountry && activeRound !== null) say(destinations[activeCountry].questions[activeRound].prompt); });
  elements.next.addEventListener("click", () => { if (activeCountry) showRound(activeCountry, firstOpenRound(activeCountry)); });
  elements.soundToggle.addEventListener("click", () => { soundEnabled = !soundEnabled; if (!soundEnabled && "speechSynthesis" in window) window.speechSynthesis.cancel(); elements.soundToggle.setAttribute("aria-pressed", String(soundEnabled)); elements.soundToggle.setAttribute("aria-label", soundEnabled ? "Vypnúť zvuk" : "Zapnúť zvuk"); elements.soundLabel.textContent = soundEnabled ? "Zvuk zapnutý" : "Zvuk vypnutý"; elements.soundToggle.querySelector("span").textContent = soundEnabled ? "🔊" : "🔇"; if (soundEnabled) say("Zvuk je zapnutý."); });
  elements.print.addEventListener("click", () => { elements.diploma.hidden = false; window.print(); });
  elements.restart.addEventListener("click", () => {
    if (!window.confirm("Naozaj chceš začať dobrodružstvo odznova? Všetkých osem pečiatok sa vymaže.")) return;
    progress = blankProgress(); activeCountry = null; activeRound = null; try { window.localStorage.removeItem(storageKey); } catch (_) { /* Bez úložiska netreba nič mazať. */ }
    elements.countryButtons.forEach((button) => button.classList.remove("is-active")); elements.countryName.textContent = "Čajka Leto čaká"; elements.questionTitle.textContent = "Vyber si krajinu na mape"; elements.questionStep.textContent = "V každej krajine nájdeš dva obrázky."; elements.questionText.textContent = "Potom ti Čajka Leto ukáže tri veľké možnosti."; elements.answers.replaceChildren(); elements.repeat.disabled = true; elements.next.hidden = true; elements.diploma.hidden = true; setFeedback("Pečiatky sú pripravené na nové dobrodružstvo."); updatePassport(); say("Poďme na nové dobrodružstvo!");
  });

  if ("speechSynthesis" in window) { loadVoices(); window.speechSynthesis.addEventListener("voiceschanged", loadVoices); }
  updatePassport();
  window.setTimeout(() => say("Ahoj! Som Čajka Leto. Vyber si krajinu a nájdi správny obrázok."), 350);
})();
