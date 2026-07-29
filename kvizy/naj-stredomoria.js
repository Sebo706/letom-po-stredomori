(() => {
  "use strict";

  // Dáta sú oddelené od ovládania, aby sa dali neskôr jednoducho doplniť ďalšie otázky.
  const questions = [
    { type: "Najväčší ostrov", country: "Taliansko", difficulty: "Ľahšia", clues: ["Tento ostrov leží pri južnom cípe Apeninského polostrova.", "Jeho hlavným mestom je Palermo.", "Je najväčším ostrovom Stredozemného mora."], answers: ["Sicília", "Sardínia", "Kréta", "Cyprus"], correct: 0, explanation: "Sicília je najväčší ostrov Stredozemného mora a Palermo je jej hlavným mestom." },
    { type: "Najväčší ostrov", country: "Grécko", difficulty: "Ľahšia", clues: ["Na ostrove vznikla minojská civilizácia.", "Ležia tu paláce Knossos a Faistos.", "Je to najväčší grécky ostrov."], answers: ["Rodos", "Kréta", "Korfu", "Naxos"], correct: 1, explanation: "Kréta je najväčší grécky ostrov; s jej dejinami sa spája minojská civilizácia a Knossos." },
    { type: "Najväčší ostrov", country: "Grécko", difficulty: "Stredná", clues: ["Jeho stredoveké mesto vytvorili rytieri svätého Jána.", "Pri jeho prístave mal podľa legendy stáť Kolos.", "Je najväčším ostrovom Dodekanéz."], answers: ["Kos", "Rodos", "Samos", "Karpathos"], correct: 1, explanation: "Rodos je najväčší ostrov Dodekanéz a preslávil sa rytierskym mestom aj legendou o Kolose rodskom." },
    { type: "Najväčší ostrov", country: "Grécko", difficulty: "Stredná", clues: ["Na ostrove stojí výrazná mramorová brána Portara.", "V minulosti bol dôležitým centrom výroby mramoru a smirku.", "Je najväčším ostrovom Kyklád."], answers: ["Paros", "Milos", "Naxos", "Santorini"], correct: 2, explanation: "Naxos je najväčší ostrov Kyklád; Portara je nedokončený chrámový portál pri jeho prístave." },
    { type: "Najväčší ostrov", country: "Grécko", difficulty: "Stredná", clues: ["Ostrov je známy dramatickou plážou Myrtos.", "Jeho názov sa spája s hrdinom z Homérovej Odysey.", "Je najväčším ostrovom Iónskych ostrovov."], answers: ["Korfu", "Kefalónia", "Lefkada", "Zakynthos"], correct: 1, explanation: "Kefalónia je najväčší z Iónskych ostrovov; medzi jej najznámejšie miesta patrí pláž Myrtos." },
    { type: "Najväčší ostrov", country: "Španielsko", difficulty: "Ľahšia", clues: ["Hlavným mestom ostrova je Palma.", "Jeho pohorie Serra de Tramuntana je na zozname UNESCO.", "Je najväčším z Baleárskych ostrovov."], answers: ["Menorca", "Ibiza", "Malorka", "Formentera"], correct: 2, explanation: "Malorka je najväčší Baleársky ostrov a Palma je jej hlavné mesto." },
    { type: "Druhý najväčší ostrov", country: "Španielsko", difficulty: "Stredná", clues: ["Je známy pravekými stavbami talayotickej kultúry.", "Pri jeho hlavnom meste Mahón leží veľký prírodný prístav.", "Je druhým najväčším Baleárskym ostrovom."], answers: ["Menorca", "Ibiza", "Formentera", "Cabrera"], correct: 0, explanation: "Menorca je po Malorke druhým najväčším Baleárskym ostrovom; Mahón má jeden z najznámejších prírodných prístavov v Stredomorí." },
    { type: "Tretí najväčší ostrov", country: "Cyprus", difficulty: "Stredná", clues: ["Na jeho pobreží leží Pafos, spájaný s Afroditou.", "Hlavným mestom ostrova je Nikózia.", "Je tretím najväčším ostrovom Stredozemného mora."], answers: ["Kréta", "Cyprus", "Sardínia", "Malta"], correct: 1, explanation: "Cyprus je po Sicílii a Sardínii tretím najväčším ostrovom Stredozemného mora." },
    { type: "Najmenší obývaný ostrov", country: "Malta", difficulty: "Stredná", clues: ["Medzi Maltou a Gozom sa rozkladá známa Modrá lagúna.", "Ostrov má rozlohu necelé 3 km².", "Je najmenším obývaným ostrovom maltského súostrovia."], answers: ["Gozo", "Malta", "Comino", "Filfla"], correct: 2, explanation: "Comino je najmenší obývaný ostrov maltského súostrovia a preslávila ho Modrá lagúna." },
    { type: "Najvyššia aktívna sopka", country: "Taliansko", difficulty: "Ľahšia", clues: ["Stojí na východe Sicílie nad mestom Catania.", "Je zapísaná v zozname svetového dedičstva UNESCO.", "Je najvyššou aktívnou sopkou Európy."], answers: ["Vezuv", "Stromboli", "Etna", "Vulcano"], correct: 2, explanation: "Etna na východe Sicílie je najvyššou aktívnou sopkou Európy; jej výška sa po erupciách mierne mení." },
    { type: "Najvyššia hora", country: "Grécko", difficulty: "Ľahšia", clues: ["Podľa antických mýtov tu sídlili bohovia.", "Jeho najvyšší vrchol sa volá Mytikas.", "Je to najvyššia hora Grécka."], answers: ["Olymp", "Parnas", "Taygetos", "Athos"], correct: 0, explanation: "Olymp je najvyššia hora Grécka a Mytikas je jej najvyšší vrchol." },
    { type: "Najvyšší vrch", country: "Francúzsko", difficulty: "Náročnejšia", clues: ["Leží vo vnútrozemí ostrova Korzika.", "Vedie k nemu náročná horská trasa GR20.", "Je najvyšším vrchom Korziky."], answers: ["Monte d'Oro", "Monte Cinto", "Monte Stello", "Paglia Orba"], correct: 1, explanation: "Monte Cinto je najvyšší vrch Korziky; patrí k výrazným bodom náročnej trasy GR20." },
    { type: "Najvyšší vrch", country: "Slovinsko", difficulty: "Ľahšia", clues: ["Jeho silueta má tri výrazné vrcholy.", "Je národným symbolom Slovinska a je aj na štátnom znaku.", "Je najvyšším vrchom Slovinska."], answers: ["Mangart", "Triglav", "Škrlatica", "Grintovec"], correct: 1, explanation: "Triglav je najvyšší vrch Slovinska a jeho tri vrcholy sú súčasťou slovinského štátneho znaku." },
    { type: "Najstaršie mesto", country: "Francúzsko", difficulty: "Stredná", clues: ["Mesto založili grécki Fóčania približne v roku 600 pred n. l.", "Pred jeho pobrežím leží pevnosť Château d'If.", "Považuje sa za najstaršie mesto Francúzska."], answers: ["Nice", "Marseille", "Toulon", "Montpellier"], correct: 1, explanation: "Marseille vzniklo ako grécka kolónia Massalia približne okolo roku 600 pred n. l. a považuje sa za najstaršie francúzske mesto." },
    { type: "Najstaršie stavby", country: "Malta", difficulty: "Náročnejšia", clues: ["Komplex stojí na ostrove Gozo.", "Jeho názov v maltčine znamená „veža obrov“.", "Patrí k najstarším samostatne stojacim kamenným stavbám na svete."], answers: ["Ħaġar Qim", "Ġgantija", "Tarxien", "Mnajdra"], correct: 1, explanation: "Chrámový komplex Ġgantija na Goze patrí k najstarším samostatne stojacim kamenným stavbám na svete." },
    { type: "Najvyšší vrch", country: "Chorvátsko", difficulty: "Náročnejšia", clues: ["Leží pri hranici s Bosnou a Hercegovinou.", "Jeho najvyšší bod sa volá Sinjal.", "Je to najvyšší vrch Chorvátska."], answers: ["Biokovo", "Velebit", "Dinara", "Učka"], correct: 2, explanation: "Dinara s vrcholom Sinjal je najvyšším vrchom Chorvátska." }
  ];

  const storageKey = "letom-naj-stredomoria-best-score-v1";
  const maxScore = questions.length * 3;
  const $ = (selector) => document.querySelector(selector);
  const elements = {
    intro: $("#quiz-intro"), play: $("#naj-quiz-play"), result: $("#naj-quiz-result"), start: $("#naj-quiz-start"),
    counter: $("#naj-quiz-counter"), type: $("#naj-quiz-type"), progress: $("#naj-quiz-progress-fill"), points: $("#naj-quiz-points"), difficulty: $("#naj-quiz-difficulty"), question: $("#naj-quiz-question"), clues: $("#naj-quiz-clues"), reveal: $("#naj-quiz-reveal"), answers: $("#naj-quiz-answers"), feedback: $("#naj-quiz-feedback"), next: $("#naj-quiz-next"),
    scoreNumber: $("#naj-quiz-score-number"), scorePercent: $("#naj-quiz-score-percent"), correctCount: $("#naj-quiz-correct-count"), level: $("#naj-quiz-level"), resultCopy: $("#naj-quiz-result-copy"), bestScore: $("#naj-quiz-best-score"), reviewSummary: $("#naj-quiz-review-summary"), reviewList: $("#naj-quiz-review-list"), restart: $("#naj-quiz-restart"), share: $("#naj-quiz-share"), shareFeedback: $("#naj-quiz-share-feedback"), shareFallback: $("#naj-quiz-share-fallback"), shareUrl: $("#naj-quiz-share-url")
  };

  let currentIndex = 0;
  let score = 0;
  let revealedCount = 1;
  let answered = false;
  let results = [];

  function savedBestScore() {
    try { const value = Number.parseInt(window.localStorage.getItem(storageKey), 10); return Number.isFinite(value) ? value : 0; } catch (_) { return 0; }
  }
  function saveBestScore(value) { try { window.localStorage.setItem(storageKey, String(value)); } catch (_) { /* Kvíz funguje aj bez localStorage. */ } }
  function showScreen(screen) { [elements.intro, elements.play, elements.result].forEach((item) => { item.hidden = item !== screen; }); }
  function textElement(tag, className, content) { const element = document.createElement(tag); if (className) element.className = className; element.textContent = content; return element; }
  function clear(element) { element.replaceChildren(); }

  function resetQuiz() {
    currentIndex = 0; score = 0; revealedCount = 1; answered = false; results = [];
    elements.shareFeedback.hidden = true; elements.shareFallback.hidden = true;
    showScreen(elements.play); renderQuestion();
  }

  function renderClues(item) {
    clear(elements.clues);
    item.clues.slice(0, revealedCount).forEach((clue, index) => {
      const card = document.createElement("article"); card.className = "destination-quiz-clue";
      card.append(textElement("span", "destination-quiz-clue-label", `${index + 1}. indícia`), textElement("p", "", clue));
      elements.clues.appendChild(card);
    });
  }

  function renderAnswers(item) {
    clear(elements.answers);
    item.answers.forEach((answer, index) => {
      const button = document.createElement("button"); button.className = "quiz-answer"; button.type = "button";
      button.append(textElement("span", "quiz-answer-letter", String.fromCharCode(65 + index)), textElement("span", "", answer));
      button.querySelector(".quiz-answer-letter").setAttribute("aria-hidden", "true");
      button.addEventListener("click", () => answerQuestion(index)); elements.answers.appendChild(button);
    });
  }

  function renderQuestion() {
    const item = questions[currentIndex]; answered = false; revealedCount = 1;
    elements.counter.textContent = `Otázka ${currentIndex + 1} zo ${questions.length}`;
    elements.type.textContent = item.type; elements.difficulty.textContent = item.difficulty;
    elements.progress.style.width = `${((currentIndex + 1) / questions.length) * 100}%`;
    elements.question.textContent = "Ktorá odpoveď je správna?"; elements.points.textContent = "Hráte o 3 body";
    elements.reveal.hidden = false; elements.reveal.textContent = "Ukázať 2. indíciu";
    elements.feedback.hidden = true; clear(elements.feedback); elements.next.hidden = true;
    elements.next.textContent = currentIndex === questions.length - 1 ? "Zobraziť výsledok" : "Ďalšia otázka";
    renderClues(item); renderAnswers(item); window.setTimeout(() => elements.question.focus({ preventScroll: true }), 0);
  }

  function revealNextClue() {
    if (answered || revealedCount >= 3) return;
    revealedCount += 1; renderClues(questions[currentIndex]);
    const possiblePoints = 4 - revealedCount;
    elements.points.textContent = `Hráte o ${possiblePoints} ${possiblePoints === 1 ? "bod" : "body"}`;
    if (revealedCount === 2) elements.reveal.textContent = "Ukázať 3. indíciu"; else elements.reveal.hidden = true;
  }

  function answerQuestion(selectedIndex) {
    if (answered) return;
    answered = true;
    const item = questions[currentIndex]; const earnedPoints = selectedIndex === item.correct ? 4 - revealedCount : 0;
    const isCorrect = earnedPoints > 0; if (isCorrect) score += earnedPoints;
    results[currentIndex] = { selectedIndex, isCorrect, earnedPoints };
    elements.reveal.hidden = true;
    [...elements.answers.querySelectorAll("button")].forEach((button, index) => {
      button.disabled = true;
      if (index === item.correct) { button.classList.add("is-correct"); button.appendChild(textElement("span", "quiz-answer-status", "Správne")); }
      else if (index === selectedIndex) { button.classList.add("is-incorrect"); button.appendChild(textElement("span", "quiz-answer-status", "Nesprávne")); }
    });
    elements.feedback.className = `quiz-feedback ${isCorrect ? "is-correct" : "is-incorrect"}`;
    const status = textElement("strong", "", isCorrect ? `Správne. Získavate ${earnedPoints} ${earnedPoints === 1 ? "bod" : "body"}.` : "Nesprávne. Získavate 0 bodov.");
    elements.feedback.append(status, textElement("p", "destination-quiz-correct-answer", `Správna odpoveď: ${item.answers[item.correct]} (${item.country}).`), textElement("p", "", item.explanation));
    elements.feedback.hidden = false; elements.next.hidden = false; elements.next.focus({ preventScroll: true });
  }

  function levelForScore(value) {
    if (value >= 43) return ["Stredomorský rekordér", "V rekordoch Stredomoria sa vyznáte výborne a väčšinu odpovedí ste našli už po prvej stope."];
    if (value >= 34) return ["Skúsený objaviteľ", "Poznáte najväčšie ostrovy, najvyššie vrchy aj výnimočné pamiatky Stredomoria."];
    if (value >= 24) return ["Dovolenkový znalec", "Pekný výsledok. Pri ďalšej ceste budete mať o dôvod viac pozerať sa aj na rekordy miest a ostrovov."];
    if (value >= 13) return ["Zvedavý cestovateľ", "Máte dobrý základ. Každá ďalšia indícia je príležitosť objaviť nové miesto na mape."];
    return ["Začínajúci rekordér", "Stredomorie má ešte veľa rekordov, ktoré čakajú na objavenie. Skúste kvíz znova."];
  }

  function renderReview() {
    const correctCount = results.filter((result) => result?.isCorrect).length;
    elements.reviewSummary.textContent = `${correctCount} zo ${questions.length} správne`;
    clear(elements.reviewList);
    questions.forEach((item, index) => {
      const result = results[index]; const row = document.createElement("li"); row.className = `quiz-review-item ${result?.isCorrect ? "is-correct" : "is-incorrect"}`;
      const clues = document.createElement("ol"); clues.className = "destination-quiz-review-clues";
      item.clues.forEach((clue) => clues.appendChild(textElement("li", "", clue)));
      row.append(textElement("h4", "", `${index + 1}. ${item.type} · ${item.country}`), textElement("p", "quiz-review-status", result?.isCorrect ? "Správne" : "Nesprávne"), textElement("p", "quiz-review-answer", `Získané body: ${result?.earnedPoints || 0} z 3`), textElement("p", "quiz-review-answer", `Vaša odpoveď: ${item.answers[result?.selectedIndex] || "Bez odpovede"}`), textElement("p", "quiz-review-answer quiz-review-correct-answer", `Správna odpoveď: ${item.answers[item.correct]}`), clues, textElement("p", "quiz-review-explanation", item.explanation));
      elements.reviewList.appendChild(row);
    });
  }

  function showResult() {
    const correctCount = results.filter((result) => result?.isCorrect).length;
    const percent = Math.round((score / maxScore) * 100); const [level, copy] = levelForScore(score);
    const previousBest = savedBestScore(); const best = Math.max(previousBest, score); if (best > previousBest) saveBestScore(best);
    elements.scoreNumber.textContent = `${score} z ${maxScore}`; elements.scorePercent.textContent = `${percent} %`;
    elements.correctCount.textContent = `${correctCount} správnych odpovedí zo ${questions.length}`; elements.level.textContent = level; elements.resultCopy.textContent = copy;
    elements.bestScore.textContent = best === score && score > previousBest ? `Nový osobný rekord: ${best} z ${maxScore} bodov.` : `Najlepší výsledok v tomto prehliadači: ${best} z ${maxScore} bodov.`;
    elements.bestScore.hidden = false; elements.shareFeedback.hidden = true; elements.shareFallback.hidden = true; renderReview(); showScreen(elements.result);
    elements.result.querySelector("h2").focus({ preventScroll: true }); elements.result.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  async function shareResult() {
    const correctCount = results.filter((result) => result?.isCorrect).length;
    const text = `V NAJ kvíze o Stredomorí som získal/a ${score} z ${maxScore} bodov a správne odpovedal/a na ${correctCount} zo ${questions.length} otázok. Koľko dáte vy?`;
    const url = window.location.href; elements.shareFeedback.hidden = true; elements.shareFallback.hidden = true;
    if (navigator.share) { try { await navigator.share({ title: "NAJ kvíz o Stredomorí", text, url }); return; } catch (error) { if (error?.name === "AbortError") return; } }
    if (navigator.clipboard && window.isSecureContext) { try { await navigator.clipboard.writeText(`${text} ${url}`); elements.shareFeedback.textContent = "Text a odkaz na kvíz sú skopírované do schránky."; elements.shareFeedback.hidden = false; return; } catch (_) { /* Nasleduje ručné kopírovanie. */ } }
    elements.shareUrl.value = `${text} ${url}`; elements.shareFallback.hidden = false; elements.shareUrl.select(); elements.shareFeedback.textContent = "Automatické zdieľanie nie je dostupné. Text si môžete skopírovať ručne."; elements.shareFeedback.hidden = false;
  }

  elements.start.addEventListener("click", resetQuiz);
  elements.restart.addEventListener("click", resetQuiz);
  elements.reveal.addEventListener("click", revealNextClue);
  elements.next.addEventListener("click", () => { if (currentIndex === questions.length - 1) showResult(); else { currentIndex += 1; renderQuestion(); } });
  elements.share.addEventListener("click", shareResult);
})();
