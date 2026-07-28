(() => {
  "use strict";

  // Návrh otázok je pripravený na samostatnú redakčnú a faktickú kontrolu.
  const questions = [
    {
      clues: [
        "Tento ostrov patrí do súostrovia pri východnom okraji Egejského mora.",
        "S jeho dejinami sa spája lekár Hippokrates a rozsiahly antický liečebný areál.",
        "Na juhovýchode ostrova vyvierajú horúce pramene priamo pri mori."
      ],
      answers: ["Kos", "Rodos", "Naxos", "Korfu"],
      correct: 0,
      type: "Ostrov",
      country: "Grécko",
      difficulty: "Stredná",
      explanation: "Kos je dodekanézsky ostrov spájaný s Hippokratom; pri Agios Fokas ležia termálne pramene Therma.",
      relatedUrl: "../blog/kos-osobne.html",
      relatedLabel: "Objaviť Kos"
    },
    {
      clues: [
        "Tento iónsky ostrov leží veľmi blízko pevniny a neoddeľuje ho od nej otvorené more.",
        "Jeho západné pobrežie je známe strmými útesmi a dlhými plážami pod nimi.",
        "S pevninou ho spája krátky pohyblivý most ponad úzky kanál."
      ],
      answers: ["Kefalónia", "Lefkada", "Korfu", "Zakynthos"],
      correct: 1,
      type: "Ostrov",
      country: "Grécko",
      difficulty: "Stredná",
      explanation: "Lefkada je iónsky ostrov spojený s pevninou pohyblivým mostom; na západe má pláže ako Kathisma a Porto Katsiki.",
      relatedUrl: "../blog/lefkada-autom-3-ubytovania-agios-nikitas.html",
      relatedLabel: "Prečítať článok o Lefkade"
    },
    {
      clues: [
        "Tento ostrov je jedným z najväčších v súostroví pri pobreží Malej Ázie.",
        "V jeho historickom centre vedie ulica pomenovaná po stredovekých rytieroch.",
        "Pri jeho prístave mal v staroveku stáť obrovský bronzový kolos."
      ],
      answers: ["Kos", "Samos", "Rodos", "Lesbos"],
      correct: 2,
      type: "Ostrov",
      country: "Grécko",
      difficulty: "Stredná",
      explanation: "Rodos je dodekanézsky ostrov so zachovaným rytierskym mestom; s jeho prístavom sa spája legenda o Kolose rodskom."
    },
    {
      clues: [
        "Tento ostrov má tvar oblúka, ktorý obopína veľkú zatopenú sopečnú kalderu.",
        "Jeho dediny stoja vysoko na tmavých sopečných útesoch nad morom.",
        "Charakteristické biele domy s modrými kupolami sú obľúbeným motívom západov slnka."
      ],
      answers: ["Milos", "Mykonos", "Naxos", "Santorini"],
      correct: 3,
      type: "Ostrov",
      country: "Grécko",
      difficulty: "Ľahšia",
      explanation: "Santorini je sopečný ostrovný komplex; dnešná kaldera vznikla po veľkej erupcii a dediny ležia na jej okraji."
    },
    {
      clues: [
        "Toto mesto leží na severozápadnom pobreží veľkého stredomorského ostrova.",
        "V jeho uliciach je dodnes počuť osobitnú podobu katalánčiny.",
        "Z opevneného starého mesta je výhľad smerom ku vápencovým útesom Capo Caccia."
      ],
      answers: ["Cagliari", "Alghero", "Olbia", "Palermo"],
      correct: 1,
      type: "Mesto",
      country: "Taliansko",
      difficulty: "Stredná",
      explanation: "Alghero má katalánske historické väzby, ktoré sa zachovali v miestnom jazyku aj kultúre; leží na severozápade Sardínie."
    },
    {
      clues: [
        "Toto mesto leží pod horou Monte Pellegrino na severnom pobreží najväčšieho ostrova Stredomoria.",
        "Jeho pouličné jedlo zahŕňa vyprážané ryžové guľky a plnené žemle so sezamom.",
        "V kráľovskom paláci sa nachádza kaplnka preslávená zlatými byzantskými mozaikami."
      ],
      answers: ["Catania", "Cagliari", "Palermo", "Bari"],
      correct: 2,
      type: "Mesto",
      country: "Taliansko",
      difficulty: "Ľahšia",
      explanation: "Palermo je hlavné mesto Sicílie; Cappella Palatina v Normanskom paláci patrí k jeho najvýraznejším pamiatkam.",
      relatedUrl: "../blog/5-zaujimavosti-stredomoria-3.html",
      relatedLabel: "Prečítať o Palerme"
    },
    {
      clues: [
        "Toto prístavné mesto leží pri Jadrane v regióne známom olivovým olejom a trulli domami.",
        "V jeho románskej bazilike sú uložené relikvie svätca spájaného s mikulášskou tradíciou.",
        "Pre miestnu kuchyňu sú typické cestoviny v tvare malých ušiek."
      ],
      answers: ["Bari", "Brindisi", "Ancona", "Neapol"],
      correct: 0,
      type: "Mesto",
      country: "Taliansko",
      difficulty: "Stredná",
      explanation: "Bari je významný jadranský prístav v Apúlii; Bazilika svätého Mikuláša a orecchiette patria k jeho typickým znakom.",
      relatedUrl: "../blog/5-zaujimavosti-stredomoria-1.html",
      relatedLabel: "Objaviť Apúliu"
    },
    {
      clues: [
        "Toto mesto je známe pravidelnou sieťou mestských blokov so skosenými rohmi.",
        "Jeho modernistická architektúra sa spája s tvorbou Antonia Gaudího.",
        "Slávna trieda La Rambla spája centrum s prístavom pri Stredozemnom mori."
      ],
      answers: ["Valencia", "Málaga", "Sevilla", "Barcelona"],
      correct: 3,
      type: "Mesto",
      country: "Španielsko",
      difficulty: "Ľahšia",
      explanation: "Barcelona je známa štvrťou Eixample, Gaudího stavbami a triedou La Rambla vedúcou smerom k prístavu."
    },
    {
      clues: [
        "Tento ostrov patrí do súostrovia v západnej časti Stredozemného mora.",
        "V jeho krajine stoja praveké kamenné stavby vrátane navety v tvare obrátenej lode.",
        "Na východe ostrova leží jedno z najväčších prírodných prístavných zálivov v Európe."
      ],
      answers: ["Mallorca", "Ibiza", "Menorca", "Sardínia"],
      correct: 2,
      type: "Ostrov",
      country: "Španielsko",
      difficulty: "Stredná",
      explanation: "Menorca je balearský ostrov so silným talayotickým dedičstvom; pri Mahóne má rozsiahly prírodný prístav.",
      relatedUrl: "../blog/5-zaujimavosti-stredomoria-1.html",
      relatedLabel: "Prečítať o Menorce"
    },
    {
      clues: [
        "Toto mesto leží na pobreží, kde sa historické centrum skladá z rímskych zvyškov a benátskych vrstiev.",
        "Na jeho nábreží vytvárajú morské vlny hudbu v sústave kamenných schodov a píšťal.",
        "Vedľa mora žiari veľký kruhový svetelný monument, ktorý zbiera energiu slnka."
      ],
      answers: ["Split", "Zadar", "Šibenik", "Pula"],
      correct: 1,
      type: "Mesto",
      country: "Chorvátsko",
      difficulty: "Ľahšia",
      explanation: "Zadar je známy Morskými organmi a inštaláciou Pozdrav slnku na nábreží pri historickom centre."
    },
    {
      clues: [
        "Toto prímorské mesto bolo po stáročia samostatnou republikou známou aj talianskym menom Ragusa.",
        "Jeho hlavná ulica Stradun má svetlú kamennú dlažbu a vedie stredom starého mesta.",
        "Nad mestom sa dvíha kopec Srđ, na ktorý vedie lanovka s výhľadom na more."
      ],
      answers: ["Split", "Zadar", "Trogir", "Dubrovník"],
      correct: 3,
      type: "Mesto",
      country: "Chorvátsko",
      difficulty: "Mierne náročnejšia",
      explanation: "Dubrovník bol historickou Republikou Ragusa; Stradun a lanovka na Srđ patria k jeho rozpoznateľným zážitkom.",
      relatedUrl: "../blog/5-zaujimavosti-stredomoria-3.html",
      relatedLabel: "Prečítať o Dubrovníku"
    },
    {
      clues: [
        "Toto prímorské mesto leží pri veľkom slanom jazere, ktoré v chladnejšej časti roka navštevujú plameniaky.",
        "S jeho tradíciou sa spája biblická postava, ktorej hrob ukazuje miestny pravoslávny chrám.",
        "Nábrežie pri pláži lemujú datľové palmy a nesie názov Finikoudes."
      ],
      answers: ["Larnaka", "Limassol", "Pafos", "Ayia Napa"],
      correct: 0,
      type: "Mesto",
      country: "Cyprus",
      difficulty: "Stredná",
      explanation: "Larnaka leží pri slanom jazere a pri promenáde Finikoudes; Chrám svätého Lazára patrí k jej hlavným pamiatkam.",
      relatedUrl: "../blog/solne-panvy-stredomoria.html",
      relatedLabel: "Prečítať o slanom jazere pri Larnake"
    },
    {
      clues: [
        "Toto opevnené hlavné mesto stojí na úzkom polostrove medzi dvoma prirodzenými prístavmi.",
        "Jeho pravidelný plán ulíc vytvorili rytieri po veľkom obliehaní v 16. storočí.",
        "V bohato zdobenej konkatedrále visí slávny obraz Caravaggia s výjavom sťatia."
      ],
      answers: ["Sliema", "Mdina", "Valletta", "Victoria"],
      correct: 2,
      type: "Mesto",
      country: "Malta",
      difficulty: "Ľahšia",
      explanation: "Valletta je opevnené hlavné mesto Malty založené rytiermi svätého Jána; v Konkatedrále svätého Jána je Caravaggiovo Sťatie svätého Jána Krstiteľa.",
      relatedUrl: "../blog/malta-jul-isle-of-mtv-more-horucavy.html",
      relatedLabel: "Objaviť Vallettu"
    },
    {
      clues: [
        "Toto veľké prístavné mesto sa rozprestiera okolo starého prístavu na južnom pobreží Francúzska.",
        "Na ostrove pred jeho pobrežím stojí pevnosť preslávená románom Gróf Monte Cristo.",
        "K jeho kuchyni patrí hustá rybacia polievka bouillabaisse."
      ],
      answers: ["Nice", "Marseille", "Toulon", "Montpellier"],
      correct: 1,
      type: "Mesto",
      country: "Francúzsko",
      difficulty: "Mierne náročnejšia",
      explanation: "Marseille je starobylý prístav pri Stredozemnom mori; Château d'If a bouillabaisse patria k jeho najznámejším symbolom."
    },
    {
      clues: [
        "Toto mesto leží pri hlboko zarezanej zátoke obkolesenej strmými vápencovými horami.",
        "Z jeho starého mesta vedie chodník k pevnosti svätého Jána vysoko nad zálivom.",
        "Hlavná mestská katedrála je zasvätená svätému Tryfonovi."
      ],
      answers: ["Budva", "Herceg Novi", "Perast", "Kotor"],
      correct: 3,
      type: "Mesto",
      country: "Čierna Hora",
      difficulty: "Mierne náročnejšia",
      explanation: "Kotor leží v Kotorskej zátoke; staré mesto, pevnosť svätého Jána a Katedrála svätého Tryfona tvoria jeho typické pamiatky."
    }
  ];

  const storageKey = "letom-destination-clues-best-score-v1";
  const maxScore = questions.length * 3;
  const elements = {
    intro: document.querySelector("#quiz-intro"),
    play: document.querySelector("#destination-quiz-play"),
    result: document.querySelector("#destination-quiz-result"),
    start: document.querySelector("#destination-quiz-start"),
    counter: document.querySelector("#destination-quiz-counter"),
    type: document.querySelector("#destination-quiz-type"),
    progress: document.querySelector("#destination-quiz-progress-fill"),
    points: document.querySelector("#destination-quiz-points"),
    difficulty: document.querySelector("#destination-quiz-difficulty"),
    question: document.querySelector("#destination-quiz-question"),
    clues: document.querySelector("#destination-quiz-clues"),
    reveal: document.querySelector("#destination-quiz-reveal"),
    answers: document.querySelector("#destination-quiz-answers"),
    feedback: document.querySelector("#destination-quiz-feedback"),
    next: document.querySelector("#destination-quiz-next"),
    scoreNumber: document.querySelector("#destination-quiz-score-number"),
    scorePercent: document.querySelector("#destination-quiz-score-percent"),
    correctCount: document.querySelector("#destination-quiz-correct-count"),
    level: document.querySelector("#destination-quiz-level"),
    resultCopy: document.querySelector("#destination-quiz-result-copy"),
    bestScore: document.querySelector("#destination-quiz-best-score"),
    reviewSummary: document.querySelector("#destination-quiz-review-summary"),
    reviewList: document.querySelector("#destination-quiz-review-list"),
    restart: document.querySelector("#destination-quiz-restart"),
    share: document.querySelector("#destination-quiz-share"),
    shareFeedback: document.querySelector("#destination-quiz-share-feedback"),
    shareFallback: document.querySelector("#destination-quiz-share-fallback"),
    shareUrl: document.querySelector("#destination-quiz-share-url")
  };

  let currentIndex = 0;
  let score = 0;
  let revealedCount = 1;
  let answered = false;
  let results = [];

  function safeReadBestScore() {
    try {
      const stored = Number.parseInt(window.localStorage.getItem(storageKey), 10);
      return Number.isFinite(stored) ? stored : 0;
    } catch (_) {
      return 0;
    }
  }

  function safeWriteBestScore(value) {
    try {
      window.localStorage.setItem(storageKey, String(value));
    } catch (_) {
      // The quiz remains playable when the browser blocks localStorage.
    }
  }

  function showScreen(screen) {
    [elements.intro, elements.play, elements.result].forEach((item) => {
      item.hidden = item !== screen;
    });
  }

  function clearElement(element) {
    element.replaceChildren();
  }

  function makeTextElement(tagName, className, text) {
    const element = document.createElement(tagName);
    if (className) element.className = className;
    element.textContent = text;
    return element;
  }

  function resetQuiz() {
    currentIndex = 0;
    score = 0;
    revealedCount = 1;
    answered = false;
    results = [];
    elements.shareFeedback.hidden = true;
    elements.shareFallback.hidden = true;
    showScreen(elements.play);
    renderQuestion();
  }

  function renderClues(item) {
    clearElement(elements.clues);
    item.clues.slice(0, revealedCount).forEach((clue, index) => {
      const clueCard = document.createElement("article");
      clueCard.className = "destination-quiz-clue";
      const label = makeTextElement("span", "destination-quiz-clue-label", `${index + 1}. indícia`);
      const copy = makeTextElement("p", "", clue);
      clueCard.append(label, copy);
      elements.clues.appendChild(clueCard);
    });
  }

  function renderAnswers(item) {
    clearElement(elements.answers);
    item.answers.forEach((answer, index) => {
      const button = document.createElement("button");
      button.className = "quiz-answer";
      button.type = "button";
      button.dataset.answerIndex = String(index);
      const letter = makeTextElement("span", "quiz-answer-letter", String.fromCharCode(65 + index));
      letter.setAttribute("aria-hidden", "true");
      const label = makeTextElement("span", "", answer);
      button.append(letter, label);
      button.addEventListener("click", () => answerQuestion(index));
      elements.answers.appendChild(button);
    });
  }

  function renderQuestion() {
    const item = questions[currentIndex];
    answered = false;
    revealedCount = 1;
    elements.counter.textContent = `Destinácia ${currentIndex + 1} z ${questions.length}`;
    elements.type.textContent = item.type;
    elements.difficulty.textContent = item.difficulty;
    elements.progress.style.width = `${((currentIndex + 1) / questions.length) * 100}%`;
    elements.question.textContent = "Ktorú destináciu hľadáme?";
    elements.points.textContent = "Hráte o 3 body";
    elements.reveal.hidden = false;
    elements.reveal.textContent = "Ukázať 2. indíciu";
    elements.feedback.hidden = true;
    clearElement(elements.feedback);
    elements.next.hidden = true;
    elements.next.textContent = currentIndex === questions.length - 1 ? "Zobraziť výsledok" : "Ďalšia destinácia";
    renderClues(item);
    renderAnswers(item);
    window.setTimeout(() => elements.question.focus({ preventScroll: true }), 0);
  }

  function revealNextClue() {
    if (answered || revealedCount >= 3) return;
    revealedCount += 1;
    const item = questions[currentIndex];
    renderClues(item);
    const possiblePoints = 4 - revealedCount;
    elements.points.textContent = `Hráte o ${possiblePoints} ${possiblePoints === 1 ? "bod" : "body"}`;
    if (revealedCount === 2) {
      elements.reveal.textContent = "Ukázať 3. indíciu";
    } else {
      elements.reveal.hidden = true;
    }
  }

  function appendRelatedLink(container, item) {
    if (!item.relatedUrl || !item.relatedLabel) return;
    const link = document.createElement("a");
    link.className = "destination-quiz-related-link";
    link.href = item.relatedUrl;
    link.textContent = item.relatedLabel;
    container.appendChild(link);
  }

  function answerQuestion(selectedIndex) {
    if (answered) return;
    answered = true;
    const item = questions[currentIndex];
    const possiblePoints = 4 - revealedCount;
    const isCorrect = selectedIndex === item.correct;
    const earnedPoints = isCorrect ? possiblePoints : 0;
    if (isCorrect) score += earnedPoints;

    results[currentIndex] = { selectedIndex, isCorrect, earnedPoints, revealedCount };
    elements.reveal.hidden = true;

    [...elements.answers.querySelectorAll("button")].forEach((button, index) => {
      button.disabled = true;
      if (index === item.correct) {
        button.classList.add("is-correct");
        button.appendChild(makeTextElement("span", "quiz-answer-status", "Správne"));
      } else if (index === selectedIndex) {
        button.classList.add("is-incorrect");
        button.appendChild(makeTextElement("span", "quiz-answer-status", "Nesprávne"));
      }
    });

    elements.feedback.className = `quiz-feedback ${isCorrect ? "is-correct" : "is-incorrect"}`;
    const status = makeTextElement(
      "strong",
      "",
      isCorrect ? `Správne. Získavate ${earnedPoints} ${earnedPoints === 1 ? "bod" : "body"}.` : "Nesprávne. Získavate 0 bodov."
    );
    const correct = makeTextElement("p", "destination-quiz-correct-answer", `Správna destinácia: ${item.answers[item.correct]} (${item.country}).`);
    const explanation = makeTextElement("p", "", item.explanation);
    elements.feedback.append(status, correct, explanation);
    appendRelatedLink(elements.feedback, item);
    elements.feedback.hidden = false;
    elements.next.hidden = false;
    elements.next.focus({ preventScroll: true });
  }

  function levelForScore(value) {
    if (value >= 40) return ["Stredomorský stopár", "Výborne čítate krajinu, mestá aj ostrovy. Väčšinu miest ste rozpoznali veľmi skoro."];
    if (value >= 32) return ["Lovec destinácií", "Skvelý výsledok. Máte cit pre detaily, ktoré robia stredomorské miesta nezameniteľnými."];
    if (value >= 22) return ["Dovolenkový objaviteľ", "Pekné pátranie. Poznáte veľa miest a pri ďalšej ceste budete mať ešte viac záchytných bodov."];
    if (value >= 12) return ["Cestovateľský pátrač", "Dobrá práca. Každá ďalšia indícia môže byť pozvánkou objaviť nové miesto na mape."];
    return ["Začínajúci objaviteľ", "Každá cesta sa začína jednou stopou. Skúste kvíz znova a nechajte sa inšpirovať miestami, ktoré vás zaujali."];
  }

  function renderAnswerReview() {
    const correctDestinations = results.filter((result) => result?.isCorrect).length;
    elements.reviewSummary.textContent = `${correctDestinations} z ${questions.length} destinácií`;
    clearElement(elements.reviewList);

    questions.forEach((item, index) => {
      const result = results[index];
      const reviewItem = document.createElement("li");
      reviewItem.className = `quiz-review-item ${result?.isCorrect ? "is-correct" : "is-incorrect"}`;
      const title = makeTextElement("h4", "", `${index + 1}. ${item.answers[item.correct]} · ${item.country}`);
      const status = makeTextElement("p", "quiz-review-status", result?.isCorrect ? "Správne" : "Nesprávne");
      const scoreLine = makeTextElement("p", "quiz-review-answer", `Získané body: ${result?.earnedPoints || 0} z 3`);
      const selected = makeTextElement("p", "quiz-review-answer", `Vaša odpoveď: ${item.answers[result?.selectedIndex] || "Bez odpovede"}`);
      const correct = makeTextElement("p", "quiz-review-answer quiz-review-correct-answer", `Správna odpoveď: ${item.answers[item.correct]}`);
      const clues = document.createElement("ol");
      clues.className = "destination-quiz-review-clues";
      item.clues.forEach((clue) => clues.appendChild(makeTextElement("li", "", clue)));
      const explanation = makeTextElement("p", "quiz-review-explanation", item.explanation);
      reviewItem.append(title, status, scoreLine, selected, correct, clues, explanation);
      appendRelatedLink(reviewItem, item);
      elements.reviewList.appendChild(reviewItem);
    });
  }

  function showResult() {
    const correctDestinations = results.filter((result) => result?.isCorrect).length;
    const percent = Math.round((score / maxScore) * 100);
    const [level, copy] = levelForScore(score);
    const previousBest = safeReadBestScore();
    const bestScore = Math.max(previousBest, score);
    if (bestScore > previousBest) safeWriteBestScore(bestScore);

    elements.scoreNumber.textContent = `${score} z ${maxScore}`;
    elements.scorePercent.textContent = `${percent} %`;
    elements.correctCount.textContent = `${correctDestinations} správne uhádnutých destinácií z ${questions.length}`;
    elements.level.textContent = level;
    elements.resultCopy.textContent = copy;
    elements.bestScore.textContent = bestScore === score && score > previousBest
      ? `Nový osobný rekord: ${bestScore} z ${maxScore} bodov.`
      : `Najlepší výsledok v tomto prehliadači: ${bestScore} z ${maxScore} bodov.`;
    elements.bestScore.hidden = false;
    elements.shareFeedback.hidden = true;
    elements.shareFallback.hidden = true;
    renderAnswerReview();
    showScreen(elements.result);
    elements.result.querySelector("h2").focus({ preventScroll: true });
    elements.result.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  async function shareResult() {
    const correctDestinations = results.filter((result) => result?.isCorrect).length;
    const text = `V kvíze Uhádnite stredomorskú destináciu podľa troch indícií som získal/a ${score} z ${maxScore} bodov a spoznal/a ${correctDestinations} z ${questions.length} destinácií. Koľko dáte vy?`;
    const url = window.location.href;
    elements.shareFeedback.hidden = true;
    elements.shareFallback.hidden = true;

    if (navigator.share) {
      try {
        await navigator.share({ title: "Uhádnite stredomorskú destináciu podľa troch indícií", text, url });
        return;
      } catch (error) {
        if (error && error.name === "AbortError") return;
      }
    }

    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(`${text} ${url}`);
        elements.shareFeedback.textContent = "Text a odkaz na kvíz sú skopírované do schránky.";
        elements.shareFeedback.hidden = false;
        return;
      } catch (_) {
        // The selectable fallback below remains available.
      }
    }

    elements.shareUrl.value = `${text} ${url}`;
    elements.shareFallback.hidden = false;
    elements.shareUrl.select();
    elements.shareFeedback.textContent = "Automatické zdieľanie nie je dostupné. Text si môžete skopírovať ručne.";
    elements.shareFeedback.hidden = false;
  }

  elements.start.addEventListener("click", resetQuiz);
  elements.restart.addEventListener("click", resetQuiz);
  elements.reveal.addEventListener("click", revealNextClue);
  elements.next.addEventListener("click", () => {
    if (currentIndex === questions.length - 1) {
      showResult();
      return;
    }
    currentIndex += 1;
    renderQuestion();
  });
  elements.share.addEventListener("click", shareResult);
})();
