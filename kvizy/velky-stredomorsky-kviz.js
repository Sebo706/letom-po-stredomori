(() => {
  "use strict";

  const questions = [
    {
      question: "Na ktorom gréckom ostrove sa nachádza známa zátoka Navagio?",
      answers: ["Korfu", "Zakynthos", "Kos", "Kréta"],
      correct: 1,
      category: "Ostrovy a pobrežie",
      difficulty: "Ľahká",
      country: "Grécko",
      explanation: "Navagio, známe aj ako Shipwreck Beach, leží na severozápadnom pobreží Zakynthosu."
    },
    {
      question: "Ktorá sopka sa týči nad sicílskym mestom Catania?",
      answers: ["Vezuv", "Stromboli", "Etna", "Santorini"],
      correct: 2,
      category: "Krajiny a geografia",
      difficulty: "Ľahká",
      country: "Taliansko",
      explanation: "Etna je aktívna sopka na východnom pobreží Sicílie a patrí medzi najvyššie aktívne sopky Európy."
    },
    {
      question: "Ktorý z týchto ostrovov patrí k španielskym Baleárskym ostrovom?",
      answers: ["Mallorca", "Tenerife", "Lanzarote", "La Palma"],
      correct: 0,
      category: "Krajiny a geografia",
      difficulty: "Ľahká",
      country: "Španielsko",
      explanation: "Mallorca je najväčší z Baleárskych ostrovov v Stredozemnom mori. Tenerife, Lanzarote a La Palma patria ku Kanárskym ostrovom v Atlantiku."
    },
    {
      question: "Pri ktorom mori leží väčšina chorvátskeho pobrežia?",
      answers: ["Čiernom mori", "Iónskom mori", "Jadranskom mori", "Egejskom mori"],
      correct: 2,
      category: "Krajiny a geografia",
      difficulty: "Ľahká",
      country: "Chorvátsko",
      explanation: "Chorvátske pobrežie s množstvom ostrovov leží pri Jadranskom mori."
    },
    {
      question: "Ktorý cyperský syr je známy tým, že sa dá grilovať bez roztopenia?",
      answers: ["Pecorino", "Halloumi", "Feta", "Manchego"],
      correct: 1,
      category: "Jedlo a kultúra",
      difficulty: "Ľahká",
      country: "Cyprus",
      explanation: "Halloumi je tradičný cyperský syr s vysokým bodom topenia, preto je obľúbený na grile aj panvici."
    },
    {
      question: "Ktorý ostrov je po hlavnom ostrove Malta druhým najväčším v štáte Malta?",
      answers: ["Comino", "Gozo", "Filfla", "Lampedusa"],
      correct: 1,
      category: "Ostrovy a pobrežie",
      difficulty: "Stredná",
      country: "Malta",
      explanation: "Gozo leží severozápadne od Malty a je pokojnejší ostrov známy vidieckou krajinou, zátokami a historickými miestami."
    },
    {
      question: "V ktorom francúzskom meste sa prechádzate po Promenade des Anglais?",
      answers: ["Marseille", "Nice", "Montpellier", "Toulouse"],
      correct: 1,
      category: "Mestá a pamiatky",
      difficulty: "Ľahká",
      country: "Francúzsko",
      explanation: "Promenade des Anglais je známa prímorská promenáda v Nice na Azúrovom pobreží."
    },
    {
      question: "Ktoré slovinské mesto pri Jadrane je známe Tartiniho námestím a benátskou architektúrou?",
      answers: ["Piran", "Maribor", "Bled", "Ptuj"],
      correct: 0,
      category: "Mestá a pamiatky",
      difficulty: "Stredná",
      country: "Slovinsko",
      explanation: "Piran je historické prímorské mesto na krátkom slovinskom pobreží Jadranu."
    },
    {
      question: "Prečo sú na hniezdnych plážach korytnačiek na Zakynthose po západe slnka obmedzenia?",
      answers: ["Aby sa opravili ležadlá", "Kvôli nočnému hniezdeniu korytnačiek Caretta caretta", "Pre zákaz lodí", "Kvôli prílivu"],
      correct: 1,
      category: "Príroda a ochrana",
      difficulty: "Mierne náročná",
      country: "Grécko",
      explanation: "Samice karety obyčajnej kladú vajcia v noci. Umelé svetlo, hluk a prekážky na pláži ich môžu rušiť."
    },
    {
      question: "S ktorým talianskym mestom sa najviac spája pizza Margherita?",
      answers: ["Benátky", "Neapol", "Bologna", "Florencia"],
      correct: 1,
      category: "Jedlo a kultúra",
      difficulty: "Ľahká",
      country: "Taliansko",
      explanation: "Neapol je kolískou pizze v štýle napoletana a s príbehom pizze Margherita sa spája práve toto mesto."
    },
    {
      question: "V ktorom španielskom meste stojí bazilika Sagrada Família?",
      answers: ["Madrid", "Valencia", "Barcelona", "Sevilla"],
      correct: 2,
      category: "Mestá a pamiatky",
      difficulty: "Ľahká",
      country: "Španielsko",
      explanation: "Sagrada Família je ikonická bazilika Antonia Gaudího v Barcelone."
    },
    {
      question: "Ktoré chorvátske mesto je známe mohutnými hradbami okolo historického centra?",
      answers: ["Zadar", "Dubrovník", "Pula", "Šibenik"],
      correct: 1,
      category: "Mestá a pamiatky",
      difficulty: "Stredná",
      country: "Chorvátsko",
      explanation: "Hradby Dubrovníka patria k jeho najznámejším pamiatkam a ponúkajú pohľady na historické centrum aj Jadran."
    },
    {
      question: "Medzi ktorými dvoma letoviskami sa nachádza prírodný park Cape Greco na Cypre?",
      answers: ["Pafos a Polis", "Larnaka a Limassol", "Ayia Napa a Protaras", "Nikosia a Kyrenia"],
      correct: 2,
      category: "Ostrovy a pobrežie",
      difficulty: "Stredná",
      country: "Cyprus",
      explanation: "Cape Greco leží na juhovýchodnom cípe Cypru medzi Ayia Napou a Protarasom a je známe útesmi a morskými jaskyňami."
    },
    {
      question: "Ako sa volá maltské slané pečivo, ktoré sa často plní ricottou alebo hráškovou kašou?",
      answers: ["Pastizzi", "Baklava", "Tapenade", "Socca"],
      correct: 0,
      category: "Jedlo a kultúra",
      difficulty: "Mierne náročná",
      country: "Malta",
      explanation: "Pastizzi je obľúbené maltské lístkové pečivo, ktoré sa predáva v malých pekárňach a stánkoch."
    },
    {
      question: "Čím je francúzsky región Camargue pri Stredozemnom mori typický?",
      answers: ["Sopečnými krátermi", "Soľnými mokraďami a plameniakmi", "Tropickým pralesom", "Ľadovcami"],
      correct: 1,
      category: "Príroda a ochrana",
      difficulty: "Stredná",
      country: "Francúzsko",
      explanation: "Camargue je rozsiahla mokraď v delte Rhôny, známa plameniakmi, bielymi koňmi a soľnými pláňami."
    }
  ];

  const storageKey = "letom-med-quiz-best-score-v1";
  const elements = {
    intro: document.querySelector("#quiz-intro"),
    play: document.querySelector("#quiz-play"),
    result: document.querySelector("#quiz-result"),
    start: document.querySelector("#quiz-start"),
    counter: document.querySelector("#quiz-counter"),
    category: document.querySelector("#quiz-category"),
    progress: document.querySelector("#quiz-progress-fill"),
    country: document.querySelector("#quiz-country"),
    difficulty: document.querySelector("#quiz-difficulty"),
    question: document.querySelector("#quiz-question"),
    answers: document.querySelector("#quiz-answers"),
    feedback: document.querySelector("#quiz-feedback"),
    next: document.querySelector("#quiz-next"),
    scoreNumber: document.querySelector("#quiz-score-number"),
    scorePercent: document.querySelector("#quiz-score-percent"),
    level: document.querySelector("#quiz-level"),
    resultCopy: document.querySelector("#quiz-result-copy"),
    bestScore: document.querySelector("#quiz-best-score"),
    reviewSummary: document.querySelector("#quiz-review-summary"),
    reviewList: document.querySelector("#quiz-review-list"),
    restart: document.querySelector("#quiz-restart"),
    share: document.querySelector("#quiz-share"),
    shareFeedback: document.querySelector("#quiz-share-feedback"),
    shareFallback: document.querySelector("#quiz-share-fallback"),
    shareUrl: document.querySelector("#quiz-share-url")
  };

  let currentIndex = 0;
  let score = 0;
  let answered = false;
  let selectedAnswers = [];

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
      // The quiz stays fully usable when local storage is unavailable.
    }
  }

  function showScreen(screen) {
    [elements.intro, elements.play, elements.result].forEach((item) => {
      item.hidden = item !== screen;
    });
  }

  function resetQuiz() {
    currentIndex = 0;
    score = 0;
    answered = false;
    selectedAnswers = [];
    elements.shareFeedback.hidden = true;
    elements.shareFallback.hidden = true;
    showScreen(elements.play);
    renderQuestion();
  }

  function renderQuestion() {
    const item = questions[currentIndex];
    answered = false;
    elements.counter.textContent = `Otázka ${currentIndex + 1} z ${questions.length}`;
    elements.category.textContent = item.category;
    elements.progress.style.width = `${((currentIndex + 1) / questions.length) * 100}%`;
    elements.country.textContent = item.country;
    elements.difficulty.textContent = item.difficulty;
    elements.question.textContent = item.question;
    elements.answers.innerHTML = "";
    elements.feedback.hidden = true;
    elements.feedback.innerHTML = "";
    elements.next.hidden = true;
    elements.next.textContent = currentIndex === questions.length - 1 ? "Zobraziť výsledok" : "Ďalšia otázka";

    item.answers.forEach((answer, index) => {
      const button = document.createElement("button");
      button.className = "quiz-answer";
      button.type = "button";
      button.dataset.answerIndex = String(index);
      button.innerHTML = `<span class="quiz-answer-letter" aria-hidden="true">${String.fromCharCode(65 + index)}</span><span>${answer}</span>`;
      button.addEventListener("click", () => answerQuestion(index));
      elements.answers.appendChild(button);
    });

    window.setTimeout(() => elements.question.focus({ preventScroll: true }), 0);
  }

  function answerQuestion(selectedIndex) {
    if (answered) return;
    answered = true;

    const item = questions[currentIndex];
    const isCorrect = selectedIndex === item.correct;
    selectedAnswers[currentIndex] = selectedIndex;
    if (isCorrect) score += 1;

    [...elements.answers.querySelectorAll("button")].forEach((button, index) => {
      button.disabled = true;
      if (index === item.correct) {
        button.classList.add("is-correct");
        button.insertAdjacentHTML("beforeend", '<span class="quiz-answer-status">Správne</span>');
      } else if (index === selectedIndex) {
        button.classList.add("is-incorrect");
        button.insertAdjacentHTML("beforeend", '<span class="quiz-answer-status">Nesprávne</span>');
      }
    });

    elements.feedback.className = `quiz-feedback ${isCorrect ? "is-correct" : "is-incorrect"}`;
    elements.feedback.innerHTML = isCorrect
      ? `<strong>Správne.</strong><p>${item.explanation}</p>`
      : `<strong>Nesprávne.</strong><p><b>Správna odpoveď:</b> ${item.answers[item.correct]}. ${item.explanation}</p>`;
    elements.feedback.hidden = false;
    elements.next.hidden = false;
    elements.next.focus({ preventScroll: true });
  }

  function levelForScore(value) {
    if (value === 15) return ["Majster Stredomoria", "Perfektné skóre. Mapa európskeho Stredomoria vám zjavne nie je cudzia."];
    if (value >= 13) return ["Stredomorský expert", "Výborný prehľad. Poznáte miesta aj príbehy, ktoré sa za nimi skrývajú."];
    if (value >= 9) return ["Znalec Stredomoria", "Veľmi pekný výsledok. Stačí pár ďalších ciest alebo článkov a bude to expertiza."];
    if (value >= 5) return ["Dovolenkový objaviteľ", "Dobrá práca. Stredomorie má ešte veľa miest, ktoré sa oplatí objaviť."];
    return ["Stredomorský začiatočník", "Každá dobrá cesta sa začína prvým krokom. Skúste si kvíz ešte raz a popri tom objavujte naše tipy."];
  }

  function renderAnswerReview() {
    elements.reviewSummary.textContent = `${score} správnych z ${questions.length}`;
    elements.reviewList.innerHTML = "";

    questions.forEach((item, index) => {
      const selectedIndex = selectedAnswers[index];
      const isCorrect = selectedIndex === item.correct;
      const reviewItem = document.createElement("li");
      reviewItem.className = `quiz-review-item ${isCorrect ? "is-correct" : "is-incorrect"}`;

      const title = document.createElement("h4");
      title.textContent = `${index + 1}. ${item.question}`;

      const status = document.createElement("p");
      status.className = "quiz-review-status";
      status.textContent = isCorrect ? "Správne" : "Nesprávne";

      const selected = document.createElement("p");
      selected.className = "quiz-review-answer";
      selected.innerHTML = `<strong>Vaša odpoveď:</strong> ${item.answers[selectedIndex] || "Bez odpovede"}`;

      reviewItem.append(title, status, selected);

      if (!isCorrect) {
        const correct = document.createElement("p");
        correct.className = "quiz-review-answer quiz-review-correct-answer";
        correct.innerHTML = `<strong>Správna odpoveď:</strong> ${item.answers[item.correct]}`;
        reviewItem.appendChild(correct);
      }

      const explanation = document.createElement("p");
      explanation.className = "quiz-review-explanation";
      explanation.textContent = item.explanation;
      reviewItem.appendChild(explanation);
      elements.reviewList.appendChild(reviewItem);
    });
  }

  function showResult() {
    const percent = Math.round((score / questions.length) * 100);
    const [level, copy] = levelForScore(score);
    const previousBest = safeReadBestScore();
    const bestScore = Math.max(previousBest, score);

    if (bestScore > previousBest) safeWriteBestScore(bestScore);

    elements.scoreNumber.textContent = `${score} z ${questions.length}`;
    elements.scorePercent.textContent = `${percent} %`;
    elements.level.textContent = level;
    elements.resultCopy.textContent = copy;
    elements.bestScore.textContent = bestScore === score && score > previousBest
      ? `Nový osobný rekord: ${bestScore} z ${questions.length}.`
      : `Najlepší výsledok v tomto prehliadači: ${bestScore} z ${questions.length}.`;
    elements.bestScore.hidden = false;
    elements.shareFeedback.hidden = true;
    elements.shareFallback.hidden = true;
    renderAnswerReview();
    showScreen(elements.result);
    elements.result.querySelector("h2").focus({ preventScroll: true });
  }

  async function shareResult() {
    const text = `Vo Veľkom stredomorskom kvíze som získal/a ${score} z ${questions.length}. Skúsite to tiež?`;
    const url = window.location.href;
    elements.shareFeedback.hidden = true;
    elements.shareFallback.hidden = true;

    if (navigator.share) {
      try {
        await navigator.share({ title: "Veľký stredomorský kvíz", text, url });
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
        // Show a selectable fallback below.
      }
    }

    elements.shareUrl.value = `${text} ${url}`;
    elements.shareFallback.hidden = false;
    elements.shareUrl.select();
    elements.shareFeedback.textContent = "Zdieľanie nie je dostupné automaticky. Text si môžete skopírovať ručne.";
    elements.shareFeedback.hidden = false;
  }

  elements.start.addEventListener("click", resetQuiz);
  elements.restart.addEventListener("click", resetQuiz);
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
