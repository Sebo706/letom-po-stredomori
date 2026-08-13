(() => {
  "use strict";

  const levels = [
    { miles: "100 míľ", tier: "Ľahká plavba" },
    { miles: "200 míľ", tier: "Ľahká plavba" },
    { miles: "300 míľ", tier: "Ľahká plavba" },
    { miles: "500 míľ", tier: "Ľahká plavba" },
    { miles: "1 000 míľ", tier: "Ľahká plavba", safe: true },
    { miles: "2 000 míľ", tier: "Stredomorská výzva" },
    { miles: "4 000 míľ", tier: "Stredomorská výzva" },
    { miles: "8 000 míľ", tier: "Stredomorská výzva" },
    { miles: "16 000 míľ", tier: "Stredomorská výzva" },
    { miles: "32 000 míľ", tier: "Stredomorská výzva", safe: true },
    { miles: "64 000 míľ", tier: "Náročná plavba" },
    { miles: "125 000 míľ", tier: "Náročná plavba" },
    { miles: "250 000 míľ", tier: "Náročná plavba" },
    { miles: "500 000 míľ", tier: "Pre znalcov" },
    { miles: "1 000 000 stredomorských míľ", tier: "Vrchol Stredomoria" }
  ];

  // Každé pole predstavuje jednu úroveň. Neskôr sem možno pridať ďalšie
  // otázky rovnakej náročnosti; pri novej hre sa jedna z nich vyberie náhodne.
  /* PLACES_QUESTION_POOLS_START */
  const originalQuestionPools = [
    [{
      question: "Ktoré mesto je hlavným mestom Talianska?",
      answers: ["Rím", "Miláno", "Neapol", "Florencia"],
      correct: 0,
      hint: "Hľadaj mesto Kolosea, Forum Romanum a Vatikánu.",
      audience: [86, 6, 5, 3],
      difficulty: "Ľahká plavba",
      explanation: "Hlavným mestom Talianska je Rím."
    }],
    [{
      question: "Ktorý z týchto ostrovov patrí Španielsku?",
      answers: ["Mallorca", "Korfu", "Sardínia", "Cyprus"],
      correct: 0,
      hint: "Je súčasťou Baleárskych ostrovov v západnom Stredomorí.",
      audience: [82, 5, 8, 5],
      difficulty: "Ľahká plavba",
      explanation: "Mallorca je najväčší z Baleárskych ostrovov patriacich Španielsku."
    }],
    [{
      question: "Ktoré more leží medzi pevninským Talianskom a Sardíniou?",
      answers: ["Tyrhénske more", "Egejské more", "Jadranské more", "Čierne more"],
      correct: 0,
      hint: "Názov mora pripomína staroveký ľud na západnom pobreží Apeninského polostrova.",
      audience: [70, 9, 16, 5],
      difficulty: "Ľahká plavba",
      explanation: "Tyrhénske more leží západne od Talianska, medzi pevninou a Sardíniou."
    }],
    [{
      question: "Akropola s Parthenónom sa nachádza v ktorom meste?",
      answers: ["Atény", "Solún", "Sparta", "Korint"],
      correct: 0,
      hint: "Je to dnešné hlavné mesto Grécka.",
      audience: [88, 4, 3, 5],
      difficulty: "Ľahká plavba",
      explanation: "Aténska Akropola je dominantou hlavného mesta Grécka."
    }],
    [{
      question: "Ktorý nápoj je tradične spojený s Gréckom a po pridaní vody sa zakalí?",
      answers: ["Ouzo", "Limoncello", "Sangria", "Pastis"],
      correct: 0,
      hint: "Má anízovú chuť a často sa podáva s ľadom pri mori.",
      audience: [72, 7, 8, 13],
      difficulty: "Ľahká plavba",
      explanation: "Ouzo je grécky anízový destilát, ktorý po zriedení vodou zbelie."
    }],
    [{
      question: "Diokleciánov palác je historickým srdcom ktorého chorvátskeho mesta?",
      answers: ["Split", "Zadar", "Pula", "Dubrovník"],
      correct: 0,
      hint: "Mesto leží na dalmatínskom pobreží a jeho centrum vyrástlo priamo v rímskom paláci.",
      audience: [68, 12, 7, 13],
      difficulty: "Stredomorská výzva",
      explanation: "Diokleciánov palác z prelomu 3. a 4. storočia tvorí jadro historického Splitu."
    }],
    [{
      question: "Ako sa volá úžina medzi Španielskom a Marokom?",
      answers: ["Gibraltársky prieliv", "Messinská úžina", "Dardanely", "Bosporská úžina"],
      correct: 0,
      hint: "Spája Atlantický oceán so Stredozemným morom.",
      audience: [62, 14, 11, 13],
      difficulty: "Stredomorská výzva",
      explanation: "Gibraltársky prieliv oddeľuje Európu od Afriky pri vstupe do Stredozemného mora."
    }],
    [{
      question: "Ktorý ostrovný štát leží južne od Sicílie?",
      answers: ["Malta", "Cyprus", "Korzika", "Kréta"],
      correct: 0,
      hint: "Jeho hlavné mesto Valletta patrí medzi najmenšie európske metropoly.",
      audience: [73, 8, 7, 12],
      difficulty: "Stredomorská výzva",
      explanation: "Malta leží v strednej časti Stredozemného mora, južne od Sicílie."
    }],
    [{
      question: "Ktorá morská rastlina s dlhými pásovitými listami vytvára podmorské lúky a je dôležitá pre Stredomorie?",
      answers: ["Posidonia oceanica", "Levanduľa lekárska", "Korkový dub", "Myrta obyčajná"],
      correct: 0,
      hint: "Nerastie na súši. Jej lúky poskytujú úkryt mnohým morským živočíchom.",
      audience: [51, 17, 15, 17],
      difficulty: "Stredomorská výzva",
      explanation: "Posidonia oceanica je endemická morská kvitnúca rastlina Stredozemného mora."
    }],
    [{
      question: "Ktoré francúzske mesto založili Gréci pod názvom Massalia?",
      answers: ["Marseille", "Nice", "Toulon", "Montpellier"],
      correct: 0,
      hint: "Je to najväčší francúzsky prístav pri Stredozemnom mori.",
      audience: [58, 16, 13, 13],
      difficulty: "Stredomorská výzva",
      explanation: "Starovekú Massaliu založili Fóčania približne v roku 600 pred n. l.; dnes je to Marseille."
    }],
    [{
      question: "Kde sa nachádza tiesňava Samaria, jedna z najznámejších roklín Grécka?",
      answers: ["Kréta", "Rodos", "Korfu", "Peloponéz"],
      correct: 0,
      hint: "Tento najväčší grécky ostrov je známy aj minojským palácom Knóssos.",
      audience: [47, 21, 17, 15],
      difficulty: "Náročná plavba",
      explanation: "Tiesňava Samaria leží v Bielych horách na juhozápade Kréty."
    }],
    [{
      question: "Ktorý materiál tvorí väčšinu tradičných maltských historických budov a dáva im medový odtieň?",
      answers: ["Vápenec", "Žula", "Mramor", "Čadič"],
      correct: 0,
      hint: "Je to usadená hornina, ktorú možno ťažiť priamo na ostrovoch.",
      audience: [50, 16, 20, 14],
      difficulty: "Náročná plavba",
      explanation: "Maltský globigerinový vápenec je charakteristický pre architektúru Valletty aj starších miest."
    }],
    [{
      question: "Ktorý taliansky ostrov je známy nuragmi – pravekými kamennými vežami?",
      answers: ["Sardínia", "Sicília", "Elba", "Ischia"],
      correct: 0,
      hint: "Je známy aj Costa Smeralda a mestom Alghero.",
      audience: [46, 28, 13, 13],
      difficulty: "Náročná plavba",
      explanation: "Nuragy sú jedinečné kamenné stavby bronzovej doby roztrúsené po Sardínii."
    }],
    [{
      question: "Ktorý slávny obraz Caravaggia je vystavený v Konkatedrále sv. Jána vo Vallette?",
      answers: ["Sťatie svätého Jána Krstiteľa", "Zrodenie Venuše", "Posledná večera", "Guernica"],
      correct: 0,
      hint: "Ide o monumentálne dielo s biblickou scénou, vytvorené počas maliarskeho pobytu na Malte.",
      audience: [40, 24, 20, 16],
      difficulty: "Pre znalcov",
      explanation: "Caravaggiovo Sťatie svätého Jána Krstiteľa je jedným z najcennejších umeleckých diel na Malte."
    }],
    [{
      question: "Ktoré tri ostrovy tvoria hlavné obývané jadro Malty?",
      answers: ["Malta, Gozo a Comino", "Malta, Lampedusa a Pantelleria", "Gozo, Korfu a Paxos", "Comino, Rodos a Kos"],
      correct: 0,
      hint: "Dva väčšie ostrovy poznajú trajekty a ten najmenší je preslávený Modrou lagúnou.",
      audience: [41, 20, 19, 20],
      difficulty: "Pre znalcov",
      explanation: "Súostrovie tvorí Malta, Gozo a Comino; Comino je najmenší z troch hlavných obývaných ostrovov."
    }]
  ];

  /* PLACES_QUESTION_POOLS_END */
  const questionPools = [
    [{ question: "Na ktorom gréckom ostrove leží známa pláž Navagio s vrakom lode?", answers: ["Zakynthos", "Kefalónia", "Kréta", "Rodos"], correct: 0, hint: "Hľadaj jeden z Iónskych ostrovov, známy aj modrými jaskyňami a korytnačkami caretta caretta.", audience: [83, 6, 5, 6], difficulty: "Ľahká plavba", explanation: "Navagio, často nazývané Shipwreck Beach, leží na severozápadnom pobreží Zakynthosu." }],
    [{ question: "Ktorá cyperská pláž je známa bielym pieskom a plytkou tyrkysovou vodou pri Ayia Nape?", answers: ["Nissi Beach", "Fig Tree Bay", "Coral Bay", "Lara Beach"], correct: 0, hint: "Jej názov sa spája s malým ostrovčekom, ku ktorému sa dá pri nízkej hladine prejsť plytčinou.", audience: [76, 8, 9, 7], difficulty: "Ľahká plavba", explanation: "Nissi Beach sa nachádza pri Ayia Nape na juhovýchode Cypru a preslávila sa jemným pieskom i azúrovou vodou." }],
    [{ question: "Ktorý ostrov je druhým najväčším ostrovom Stredozemného mora a preslávila ho Costa Smeralda?", answers: ["Sardínia", "Korzika", "Sicília", "Mallorca"], correct: 0, hint: "Patrí Taliansku a leží západne od pevniny, južne od francúzskeho ostrova Korzika.", audience: [74, 8, 11, 7], difficulty: "Ľahká plavba", explanation: "Sardínia je po Sicílii druhým najväčším ostrovom Stredozemného mora; Costa Smeralda leží na jej severovýchode." }],
    [{ question: "Ktorá dvojica pláž – ostrov je správna?", answers: ["Es Trenc – Mallorca", "Elafonissi – Malta", "Zlatni Rat – Cyprus", "Navagio – Sardínia"], correct: 0, hint: "Hľadaj dlhú piesočnú pláž na juhu najväčšieho Baleárskeho ostrova.", audience: [68, 12, 11, 9], difficulty: "Ľahká plavba", explanation: "Es Trenc je prírodná piesočná pláž na Mallorce. Elafonissi leží na Kréte, Zlatni Rat na ostrove Brač a Navagio na Zakynthose." }],
    [{ question: "Čím je Elafonissi na Kréte výnimočné?", answers: ["Ružovkastým pieskom", "Čiernymi lávovými balvanmi", "Vysokými vápencovými útesmi", "Termálnymi prameňmi"], correct: 0, hint: "Farbu piesku vytvárajú drobné úlomky morských organizmov s ružovými schránkami.", audience: [71, 9, 10, 10], difficulty: "Ľahká plavba", explanation: "Elafonissi je lagúnová pláž na juhozápade Kréty, známa miestami ružovkastým odtieňom piesku." }],
    [{ question: "Ktorý prírodný útvar na Malte je známy ako Modrá lagúna?", answers: ["Zátoka medzi Cominom a Cominottom", "Jaskyňa pri Marsaxlokku", "Útes na ostrove Gozo", "Slané jazero pri Mdine"], correct: 0, hint: "Hľadaj malý ostrov medzi Maltou a Gozom; do tejto zátoky jazdia výletné lode.", audience: [62, 14, 13, 11], difficulty: "Stredomorská výzva", explanation: "Modrá lagúna leží v kanáli medzi ostrovmi Comino a Cominotto v maltskom súostroví." }],
    [{ question: "Ktoré chorvátske pobrežie charakterizujú dlhé reťaze ostrovov a veľmi členité vápencové brehy?", answers: ["Dalmátske pobrežie", "Amalfské pobrežie", "Costa Brava", "Azúrové pobrežie"], correct: 0, hint: "Tiahne sa popri Jadrane a pomenovanie nesie podľa historického regiónu Chorvátska.", audience: [59, 15, 14, 12], difficulty: "Stredomorská výzva", explanation: "Dalmátske pobrežie je typické ostrovmi, zálivmi a vápencovým krasom popri chorvátskom Jadrane." }],
    [{ question: "Ktorá z týchto lokalít NIE JE na gréckom ostrove?", answers: ["Cala Goloritzé", "Navagio", "Elafonissi", "Sarakiniko"], correct: 0, hint: "Hľadaj vápencovú zátoku na východnom pobreží Sardínie.", audience: [55, 17, 15, 13], difficulty: "Stredomorská výzva", explanation: "Cala Goloritzé leží na Sardínii. Navagio je na Zakynthose, Elafonissi na Kréte a Sarakiniko na ostrove Milos." }],
    [{ question: "Sarakiniko na ostrove Milos pôsobí takmer mesačne najmä vďaka čomu?", answers: ["Bielym sopečným horninám", "Ružovým koralovým plážam", "Ľadovcovým údoliam", "Vysokým pieskovým dunám"], correct: 0, hint: "Milos je ostrov so silnou vulkanickou minulosťou; povrch pri tejto zátoke vyzerá ako svetlé vyhladené skaly.", audience: [51, 16, 17, 16], difficulty: "Stredomorská výzva", explanation: "Sarakiniko je známe hladkými bielymi vulkanickými horninami, ktoré vytvárajú nezvyčajnú pobrežnú scenériu ostrova Milos." }],
    [{ question: "Ktorý francúzsky národný park pri Stredozemnom mori zahŕňa dramatické vápencové calanques medzi Marseille a Cassis?", answers: ["Národný park Calanques", "Národný park Cévennes", "Národný park Mercantour", "Národný park Écrins"], correct: 0, hint: "Jeho názov nesie označenie pre úzke skalnaté zálivy, do ktorých sa zarezáva more.", audience: [48, 18, 17, 17], difficulty: "Stredomorská výzva", explanation: "Národný park Calanques chráni pobrežné vápencové zálivy a útesy medzi Marseille, Cassis a La Ciotat." }],
    [{ question: "Ktorý prírodný útvar na Sardínii vytvára Cala Goloritzé pri mori?", answers: ["Vápencový oblúk a skalná ihla", "Aktívny sopečný kráter", "Ružové slané jazero", "Podmorský kaňon"], correct: 0, hint: "Zátoka leží v oblasti Baunei na východnom pobreží ostrova a preslávila sa vysokou vápencovou skalou nad vodou.", audience: [43, 20, 18, 19], difficulty: "Náročná plavba", explanation: "Cala Goloritzé pri Baunei je známa vápencovým oblúkom aj výraznou skalnou ihlou nad zátokou." }],
    [{ question: "Ktorý chorvátsky národný park tvorí sústava šestnástich terasovitých jazier spojených vodopádmi?", answers: ["Plitvické jazerá", "Krka", "Paklenica", "Mljet"], correct: 0, hint: "Leží vo vnútrozemí Chorvátska a jeho názov sa spája s jazerami, nie s pobrežným ostrovom alebo riečnym kaňonom.", audience: [45, 20, 18, 17], difficulty: "Náročná plavba", explanation: "Národný park Plitvické jazerá je známy šestnástimi kaskádovito prepojenými jazerami a početnými vodopádmi." }],
    [{ question: "Ktorá zátoka na Goze je známa priehľadnou vodou a leží neďaleko bývalého Azúrového okna?", answers: ["Dwejra Bay", "Ramla Bay", "Mellieħa Bay", "Golden Bay"], correct: 0, hint: "Hľadaj západné pobrežie Goza pri Vnútrozemskom mori a Fungus Rock.", audience: [40, 23, 19, 18], difficulty: "Náročná plavba", explanation: "Dwejra Bay leží na západe Goza pri lokalite, kde stálo skalné Azúrové okno pred zrútením v roku 2017." }],
    [{ question: "Ktorý baleársky ostrov je biosférickou rezerváciou UNESCO a preslávili ho početné úzke zátoky nazývané calas?", answers: ["Menorca", "Ibiza", "Mallorca", "Formentera"], correct: 0, hint: "Hľadaj pokojnejší ostrov východne od Mallorky; medzi jeho prírodné symboly patrí záliv Cala Macarella.", audience: [38, 25, 19, 18], difficulty: "Pre znalcov", explanation: "Menorca je biosférickou rezerváciou UNESCO a jej členité pobrežie je známe množstvom malých zátok – calas." }],
    [{ question: "Prírodná rezervácia Scandola, známa červenými porfýrovými útesmi, leží na ktorom ostrove?", answers: ["Korzika", "Sardínia", "Menorca", "Kréta"], correct: 0, hint: "Hľadaj francúzsky ostrov západne od Talianska; rezervácia je súčasťou prírodnej oblasti pri zálive Porto.", audience: [33, 28, 20, 19], difficulty: "Vrchol Stredomoria", explanation: "Scandola je prísna prírodná rezervácia na západnom pobreží Korziky, známa vulkanickým porfýrom a dramatickými útesmi." }]
  ];
  const letters = ["A", "B", "C", "D"];
  const storageKey = "letom-majster-stredomoria-plaze-priroda-sound";
  const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const elements = {
    intro: document.querySelector('[data-screen="intro"]'),
    play: document.querySelector('[data-screen="play"]'),
    result: document.querySelector('[data-screen="result"]'),
    start: document.querySelector("[data-start]"),
    question: document.querySelector("[data-question]"),
    difficulty: document.querySelector("[data-tier-label]"),
    status: document.querySelector("[data-status]"),
    answers: document.querySelector("[data-answers]"),
    count: document.querySelector("[data-question-count]"),
    miles: document.querySelector("[data-current-miles]"),
    ladder: document.querySelector("[data-ladder]"),
    ladderMobile: document.querySelector("[data-ladder-mobile]"),
    lifelines: [...document.querySelectorAll("[data-lifeline]")],
    soundToggle: document.querySelector("[data-sound-toggle]"),
    quit: document.querySelector("[data-quit]"),
    resultKicker: document.querySelector("[data-result-brand]"),
    resultTitle: document.querySelector("[data-result-title]"),
    resultText: document.querySelector("[data-result-copy]"),
    resultMiles: document.querySelector("[data-result-miles]"),
    review: document.querySelector("[data-review]"),
    replay: document.querySelector("[data-restart]"),
    confetti: document.querySelector("[data-confetti]"),
    modal: document.querySelector("[data-modal]"),
    modalTitle: document.querySelector("[data-modal-title]"),
    modalKicker: document.querySelector("[data-modal-eyebrow]"),
    modalContent: document.querySelector("[data-modal-content]"),
    modalActions: document.querySelector("[data-modal-actions]"),
    modalClose: document.querySelector("button[data-modal-close]"),
    modalCloseTargets: [...document.querySelectorAll("[data-modal-close]")]
  };

  let questions = [];
  let currentIndex = 0;
  let answersHistory = [];
  let isLocked = false;
  let audioContext = null;
  let lastFocusedElement = null;
  let soundOn = localStorage.getItem(storageKey) !== "off";
  const lifelines = { fifty: false, audience: false, hint: false };

  function randomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  function shuffle(items) {
    const shuffled = [...items];
    for (let index = shuffled.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
    }
    return shuffled;
  }

  function buildQuestionSet() {
    return questionPools.map((pool) => {
      const question = { ...randomItem(pool) };
      const shuffledAnswers = shuffle(question.answers.map((answer, index) => ({
        answer,
        audience: question.audience[index],
        isCorrect: index === question.correct
      })));
      return {
        ...question,
        answers: shuffledAnswers.map((item) => item.answer),
        audience: shuffledAnswers.map((item) => item.audience),
        correct: shuffledAnswers.findIndex((item) => item.isCorrect)
      };
    });
  }

  function initAudio() {
    if (!soundOn || audioContext) return;
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    audioContext = new AudioContextClass();
    if (audioContext.state === "suspended") audioContext.resume();
  }

  function tone(frequency, start, duration, type = "sine", volume = 0.035) {
    if (!soundOn || !audioContext) return;
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, start);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(volume, start + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    oscillator.connect(gain).connect(audioContext.destination);
    oscillator.start(start);
    oscillator.stop(start + duration + 0.025);
  }

  function playSound(kind) {
    if (!soundOn || !audioContext) return;
    const now = audioContext.currentTime;
    const melodies = {
      select: [[380, 0, 0.07, "triangle", 0.022]],
      drama: [[176, 0, 0.18, "sine", 0.018], [208, 0.24, 0.12, "sine", 0.016]],
      correct: [[523, 0, 0.09, "sine", 0.035], [659, 0.1, 0.11, "sine", 0.04], [784, 0.22, 0.16, "sine", 0.045]],
      wrong: [[200, 0, 0.14, "sawtooth", 0.026], [154, 0.14, 0.22, "sawtooth", 0.025]],
      lifeline: [[494, 0, 0.08, "triangle", 0.026], [740, 0.1, 0.12, "triangle", 0.026]],
      checkpoint5: [[523, 0, 0.1, "sine", 0.04], [659, 0.1, 0.1, "sine", 0.04], [784, 0.2, 0.13, "sine", 0.045], [1047, 0.34, 0.24, "sine", 0.045]],
      checkpoint10: [[392, 0, 0.1, "triangle", 0.04], [523, 0.1, 0.1, "triangle", 0.04], [659, 0.2, 0.1, "triangle", 0.045], [784, 0.3, 0.12, "triangle", 0.05], [1047, 0.44, 0.28, "sine", 0.055]],
      win: [[523, 0, 0.1, "triangle", 0.045], [659, 0.12, 0.1, "triangle", 0.045], [784, 0.24, 0.1, "triangle", 0.05], [1047, 0.36, 0.16, "triangle", 0.055], [1319, 0.56, 0.36, "sine", 0.06]]
    };
    (melodies[kind] || []).forEach(([frequency, delay, duration, type, volume]) => {
      tone(frequency, now + delay, duration, type, volume);
    });
  }

  function updateSoundToggle() {
    elements.soundToggle.textContent = soundOn ? "🔊" : "🔇";
    elements.soundToggle.setAttribute("aria-label", soundOn ? "Vypnúť zvuky hry" : "Zapnúť zvuky hry");
    elements.soundToggle.setAttribute("title", soundOn ? "Vypnúť zvuky" : "Zapnúť zvuky");
  }

  function setScreen(name) {
    [elements.intro, elements.play, elements.result].forEach((screen) => {
      screen.hidden = screen.dataset.screen !== name;
    });
  }

  function scrollToGameTop() {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  }

  function createLadder(container) {
    if (!container) return;
    container.textContent = "";
    [...levels].reverse().forEach((level, reverseIndex) => {
      const levelIndex = levels.length - 1 - reverseIndex;
      const item = document.createElement("li");
      item.className = `${level.safe ? "is-safe" : ""} ${levelIndex === currentIndex ? "is-current" : ""}`.trim();
      const miles = document.createElement("span");
      miles.textContent = level.miles;
      item.append(miles);
      container.append(item);
    });
  }

  function renderLadders() {
    createLadder(elements.ladder);
    createLadder(elements.ladderMobile);
  }

  function renderLifelines() {
    elements.lifelines.forEach((button) => {
      const used = lifelines[button.dataset.lifeline];
      button.disabled = used || isLocked;
      button.classList.toggle("is-used", used);
      button.setAttribute("aria-pressed", String(used));
    });
  }

  function renderQuestion() {
    const question = questions[currentIndex];
    isLocked = false;
    elements.question.textContent = question.question;
    elements.difficulty.textContent = `${question.difficulty} · otázka ${currentIndex + 1} z 15`;
    elements.status.textContent = "Vyber odpoveď A, B, C alebo D.";
    elements.count.textContent = `Otázka ${currentIndex + 1} / 15`;
    elements.miles.textContent = `Hráš o ${levels[currentIndex].miles}`;
    elements.answers.textContent = "";
    question.answers.forEach((answer, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "master-answer";
      button.dataset.answerIndex = String(index);
      button.setAttribute("aria-label", `${letters[index]}: ${answer}`);
      const letter = document.createElement("span");
      letter.className = "master-answer-letter";
      letter.textContent = letters[index];
      const label = document.createElement("span");
      label.textContent = answer;
      button.append(letter, label);
      button.addEventListener("click", () => selectAnswer(index, button));
      elements.answers.append(button);
    });
    renderLadders();
    renderLifelines();
  }

  function selectAnswer(answerIndex, button) {
    if (isLocked) return;
    isLocked = true;
    button.classList.add("is-selected");
    [...elements.answers.querySelectorAll("button")].forEach((answerButton) => {
      answerButton.disabled = true;
    });
    renderLifelines();
    elements.status.textContent = "Odpoveď je vybraná…";
    playSound("select");
    window.setTimeout(() => playSound("drama"), 240);
    window.setTimeout(() => evaluateAnswer(answerIndex, button), 1450);
  }

  function evaluateAnswer(answerIndex, button) {
    const question = questions[currentIndex];
    const isCorrect = answerIndex === question.correct;
    const answerButtons = [...elements.answers.querySelectorAll("button")];
    const correctButton = answerButtons.find((item) => Number(item.dataset.answerIndex) === question.correct);
    answersHistory[currentIndex] = { selected: answerIndex, correct: isCorrect };

    if (isCorrect) {
      button.classList.remove("is-selected");
      button.classList.add("is-correct");
      elements.status.textContent = "Správne! Plavba pokračuje.";
      playSound("correct");
      if (currentIndex === 4) playSound("checkpoint5");
      if (currentIndex === 9) playSound("checkpoint10");
      window.setTimeout(() => {
        if (currentIndex === levels.length - 1) {
          finishGame("win");
          return;
        }
        currentIndex += 1;
        renderQuestion();
      }, 1350);
      return;
    }

    button.classList.remove("is-selected");
    button.classList.add("is-wrong");
    if (correctButton) correctButton.classList.add("is-correct");
    elements.status.textContent = "Táto odpoveď nebola správna.";
    playSound("wrong");
    window.setTimeout(() => finishGame("wrong"), 1500);
  }

  function useFifty() {
    if (isLocked || lifelines.fifty) return;
    const question = questions[currentIndex];
    const wrongOptions = question.answers.map((_, index) => index).filter((index) => index !== question.correct);
    const keepWrong = randomItem(wrongOptions);
    [...elements.answers.querySelectorAll("button")].forEach((button) => {
      const index = Number(button.dataset.answerIndex);
      if (index !== question.correct && index !== keepWrong) {
        button.disabled = true;
        button.classList.add("is-removed");
      }
    });
    lifelines.fifty = true;
    renderLifelines();
    elements.status.textContent = "50 : 50 odstránilo dve nesprávne možnosti.";
    playSound("lifeline");
  }

  function clearModal() {
    elements.modalContent.textContent = "";
    elements.modalActions.textContent = "";
  }

  function openModal({ kicker, title, content, actions = [] }) {
    lastFocusedElement = document.activeElement;
    clearModal();
    elements.modalKicker.textContent = kicker || "MAJSTER STREDOMORIA";
    elements.modalTitle.textContent = title;
    if (typeof content === "string") {
      const paragraph = document.createElement("p");
      paragraph.textContent = content;
      elements.modalContent.append(paragraph);
    } else if (content) {
      elements.modalContent.append(content);
    }
    actions.forEach((action) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = action.secondary ? "master-modal-cancel" : "master-modal-confirm";
      button.textContent = action.label;
      button.addEventListener("click", action.onClick);
      elements.modalActions.append(button);
    });
    elements.modal.hidden = false;
    elements.modalClose.focus();
  }

  function closeModal() {
    elements.modal.hidden = true;
    if (lastFocusedElement && typeof lastFocusedElement.focus === "function") lastFocusedElement.focus();
  }

  function useAudience() {
    if (isLocked || lifelines.audience) return;
    lifelines.audience = true;
    renderLifelines();
    playSound("lifeline");
    const chart = document.createElement("div");
    chart.className = "master-audience-chart";
    const question = questions[currentIndex];
    question.audience.forEach((percentage, index) => {
      const row = document.createElement("div");
      row.className = "master-audience-row";
      const label = document.createElement("span");
      label.textContent = letters[index];
      const track = document.createElement("span");
      track.className = "master-audience-track";
      const bar = document.createElement("span");
      bar.className = "master-audience-fill";
      track.append(bar);
      const value = document.createElement("strong");
      value.textContent = `${percentage} %`;
      row.append(label, track, value);
      chart.append(row);
      window.requestAnimationFrame(() => {
        bar.style.width = `${percentage}%`;
      });
    });
    const note = document.createElement("p");
    note.className = "master-modal-note";
    note.textContent = "Simulovaná nápoveda cestovateľov.";
    const content = document.createDocumentFragment();
    content.append(chart, note);
    openModal({
      kicker: "ŽOLÍK POUŽITÝ",
      title: "Čo si myslia cestovatelia",
      content,
      actions: [{ label: "Pokračovať v hre", onClick: closeModal }]
    });
  }

  function useHint() {
    if (isLocked || lifelines.hint) return;
    lifelines.hint = true;
    renderLifelines();
    playSound("lifeline");
    const note = document.createElement("p");
    note.className = "master-modal-note";
    note.textContent = "Nápoveda má iba nasmerovať, nie povedať odpoveď.";
    const content = document.createDocumentFragment();
    const hint = document.createElement("p");
    hint.textContent = questions[currentIndex].hint;
    content.append(hint, note);
    openModal({
      kicker: "ŽOLÍK POUŽITÝ",
      title: "Nápoveda na cestu",
      content,
      actions: [{ label: "Pokračovať v hre", onClick: closeModal }]
    });
  }

  function useLifeline(type) {
    if (type === "fifty") useFifty();
    if (type === "audience") useAudience();
    if (type === "hint") useHint();
  }

  function currentMiles() {
    if (currentIndex < 1) return "0 míľ";
    return levels[currentIndex - 1].miles;
  }

  function safeMilesAfterLoss() {
    if (currentIndex >= 10) return levels[9].miles;
    if (currentIndex >= 5) return levels[4].miles;
    return "0 míľ";
  }

  function renderReview() {
    elements.review.textContent = "";
    questions.forEach((question, index) => {
      const result = answersHistory[index];
      const item = document.createElement("li");
      item.className = result?.correct ? "is-correct" : "is-wrong";
      const heading = document.createElement("strong");
      heading.textContent = `${index + 1}. ${question.question}`;
      const response = document.createElement("p");
      const correctText = `${letters[question.correct]}. ${question.answers[question.correct]}`;
      if (!result) {
        response.textContent = `Tvoja odpoveď: bez odpovede · Správna odpoveď: ${correctText}`;
        response.className = "is-unanswered";
      } else {
        response.textContent = `Tvoja odpoveď: ${letters[result.selected]}. ${question.answers[result.selected]} · Správna odpoveď: ${correctText}`;
        response.className = "master-review-answer";
      }
      const explanation = document.createElement("span");
      explanation.textContent = question.explanation;
      item.append(heading, response, explanation);
      elements.review.append(item);
    });
  }

  function createConfetti() {
    elements.confetti.textContent = "";
    for (let index = 0; index < 22; index += 1) {
      const piece = document.createElement("i");
      piece.style.left = `${(index * 19) % 100}%`;
      piece.style.animationDelay = `${(index % 6) * 0.12}s`;
      elements.confetti.append(piece);
    }
  }

  function finishGame(state) {
    setScreen("result");
    elements.confetti.textContent = "";
    if (state === "win") {
      elements.resultKicker.textContent = "🏆 FINÁLE";
      elements.resultTitle.textContent = "SI MAJSTER STREDOMORIA! PLÁŽE A PRÍRODNÉ KRÁSY";
      elements.resultText.textContent = "Zvládol si všetkých 15 otázok o plážach a prírodných divoch Stredomoria.";
      elements.resultMiles.textContent = "Získal si 1 000 000 stredomorských míľ.";
      createConfetti();
      playSound("win");
    } else if (state === "quit") {
      elements.resultKicker.textContent = "CESTA UKONČENÁ";
      elements.resultTitle.textContent = "Plavbu si ukončil včas.";
      elements.resultText.textContent = "Kedykoľvek sa môžeš vrátiť a skúsiť novú cestu až na vrchol.";
      elements.resultMiles.textContent = `Dosiahol si ${currentMiles()}.`;
    } else {
      elements.resultKicker.textContent = "KONIEC HRY";
      elements.resultTitle.textContent = "Tvoja cesta sa tu končí.";
      elements.resultText.textContent = "Aj skúsený cestovateľ niekedy zvolí nesprávny smer.";
      elements.resultMiles.textContent = `Dosiahol si ${safeMilesAfterLoss()}.`;
    }
    renderReview();
    scrollToGameTop();
  }

  function requestQuit() {
    if (isLocked) return;
    openModal({
      kicker: "UKONČENIE HRY",
      title: "Chceš ukončiť plavbu?",
      content: `Odídeš s aktuálne získanou úrovňou: ${currentMiles()}.`,
      actions: [
        { label: "Pokračovať v hre", secondary: true, onClick: closeModal },
        { label: "Ukončiť hru", onClick: () => { closeModal(); finishGame("quit"); } }
      ]
    });
  }

  function startGame() {
    initAudio();
    playSound("lifeline");
    questions = buildQuestionSet();
    currentIndex = 0;
    answersHistory = [];
    isLocked = false;
    Object.keys(lifelines).forEach((key) => { lifelines[key] = false; });
    setScreen("play");
    renderQuestion();
    scrollToGameTop();
  }

  elements.start.addEventListener("click", startGame);
  elements.replay.addEventListener("click", startGame);
  elements.soundToggle.addEventListener("click", () => {
    soundOn = !soundOn;
    localStorage.setItem(storageKey, soundOn ? "on" : "off");
    if (soundOn) {
      initAudio();
      playSound("lifeline");
    }
    updateSoundToggle();
  });
  elements.lifelines.forEach((button) => {
    button.addEventListener("click", () => useLifeline(button.dataset.lifeline));
  });
  elements.quit.addEventListener("click", requestQuit);
  elements.modalCloseTargets.forEach((target) => target.addEventListener("click", closeModal));
  elements.modal.addEventListener("click", (event) => {
    if (event.target === elements.modal) closeModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !elements.modal.hidden) closeModal();
  });

  updateSoundToggle();
  renderLadders();
})();
