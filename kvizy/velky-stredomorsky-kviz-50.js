(() => {
  "use strict";

  const levels = [
    { id: 1, name: "Cestovateľský rozbeh", points: 10 },
    { id: 2, name: "Už sa vyznáš", points: 15 },
    { id: 3, name: "Skúsený cestovateľ", points: 20 },
    { id: 4, name: "Znalec Stredomoria", points: 25 },
    { id: 5, name: "Majster Stredomoria", points: 30 }
  ];

  const questions = [
    { id: 1, level: 1, points: 10, question: "Aké je hlavné mesto ostrova Mallorca?", answers: ["Mahón", "Palma", "Ibiza", "Alcúdia"], correctAnswer: 1, funFact: "Palma je zároveň hlavným mestom celého autonómneho spoločenstva Baleárske ostrovy." },
    { id: 2, level: 1, points: 10, question: "Na ktorom ostrove sa nachádza sopka Etna?", answers: ["Sicília", "Sardínia", "Korzika", "Kréta"], correctAnswer: 0, funFact: "Etna patrí medzi najaktívnejšie sopky Európy a jej krajinu neustále menia nové erupcie." },
    { id: 3, level: 1, points: 10, question: "V ktorej krajine sa nachádza Dubrovník?", answers: ["Slovinsko", "Taliansko", "Chorvátsko", "Grécko"], correctAnswer: 2, funFact: "Historické jadro Dubrovníka obklopujú mohutné hradby, po ktorých sa dá prejsť okolo veľkej časti starého mesta." },
    { id: 4, level: 1, points: 10, question: "S ktorým gréckym ostrovom je spojený Kolos, jeden zo siedmich divov antického sveta?", answers: ["Kréta", "Korfu", "Rodos", "Kos"], correctAnswer: 2, funFact: "Kolos bol obrovskou sochou boha Hélia a stál iba niekoľko desaťročí, kým ho nezničilo zemetrasenie." },
    { id: 5, level: 1, points: 10, question: "Aké je hlavné mesto Malty?", answers: ["Valletta", "Mdina", "Sliema", "Victoria"], correctAnswer: 0, funFact: "Valletta patrí rozlohou medzi najmenšie hlavné mestá Európy." },
    { id: 6, level: 1, points: 10, question: "Na ktorom stredomorskom ostrove leží mesto Pafos?", answers: ["Malta", "Cyprus", "Kréta", "Sardínia"], correctAnswer: 1, funFact: "Pafos je veľmi úzko spojený s kultom a legendami o bohyni Afrodite." },
    { id: 7, level: 1, points: 10, question: "V ktorom francúzskom meste nájdeš Promenade des Anglais?", answers: ["Marseille", "Cannes", "Nice", "Montpellier"], correctAnswer: 2, funFact: "Slávna promenáda vedie priamo popri azúrovom pobreží mesta." },
    { id: 8, level: 1, points: 10, question: "V ktorej krajine leží prímorské mesto Piran?", answers: ["Chorvátsko", "Slovinsko", "Taliansko", "Francúzsko"], correctAnswer: 1, funFact: "Na architektúre Piranu je dodnes výrazne viditeľný vplyv Benátskej republiky." },
    { id: 9, level: 1, points: 10, question: "Na ktorom gréckom ostrove sa nachádza pláž Navagio?", answers: ["Zakynthos", "Rodos", "Santorini", "Korfu"], correctAnswer: 0, funFact: "Pláž preslávil vrak lode, podľa ktorého dostala pomenovanie Navagio – stroskotanie." },
    { id: 10, level: 1, points: 10, question: "V ktorom stredomorskom meste stojí bazilika Sagrada Família?", answers: ["Valencia", "Málaga", "Barcelona", "Palma"], correctAnswer: 2, funFact: "Stavba Gaudího chrámu sa začala už v roku 1882." },
    { id: 11, level: 2, points: 15, question: "V ktorom talianskom regióne sa nachádza Cinque Terre?", answers: ["Toskánsko", "Ligúria", "Kampánia", "Kalábria"], correctAnswer: 1, funFact: "Názov Cinque Terre znamená „päť zemí“ a označuje päť historických dedín na ligúrskom pobreží." },
    { id: 12, level: 2, points: 15, question: "Na ktorom gréckom ostrove sa nachádza roklina Samaria?", answers: ["Kréta", "Kos", "Rodos", "Lefkada"], correctAnswer: 0, funFact: "Celá klasická trasa od Xyloskala až k pobrežiu Agia Roumeli meria približne 16 kilometrov." },
    { id: 13, level: 2, points: 15, question: "Pri ktorom z Maltských ostrovov sa nachádza slávna Blue Lagoon?", answers: ["Malta", "Gozo", "Comino", "Filfla"], correctAnswer: 2, funFact: "Blue Lagoon je známa mimoriadne priezračnou tyrkysovou vodou medzi Cominom a malým ostrovčekom Cominotto." },
    { id: 14, level: 2, points: 15, question: "Ktoré chorvátske mesto je preslávené Diokleciánovým palácom?", answers: ["Zadar", "Split", "Dubrovník", "Pula"], correctAnswer: 1, funFact: "Dnešné centrum Splitu doslova vyrástlo vo vnútri a okolo rozsiahleho palácového komplexu rímskeho cisára Diokleciána." },
    { id: 15, level: 2, points: 15, question: "Dalt Vila je historické opevnené centrum ktorého ostrovného mesta?", answers: ["Palma", "Ibiza", "Mahón", "Alicante"], correctAnswer: 1, funFact: "Opevnené Dalt Vila je súčasťou lokality Ibiza zapísanej na zozname UNESCO." },
    { id: 16, level: 2, points: 15, question: "S ktorou bohyňou je v cyperskej mytológii spájaná Petra tou Romiou?", answers: ["Aténa", "Afrodita", "Artemis", "Héra"], correctAnswer: 1, funFact: "Miesto sa často nazýva aj Afroditina skala a legenda ho spája s jej zrodením z morskej peny." },
    { id: 17, level: 2, points: 15, question: "Medzi Marseille a Cassis sa nachádza známa prírodná oblasť:", answers: ["Camargue", "Calanques", "Esterel", "Verdon"], correctAnswer: 1, funFact: "Calanques tvoria dramatické vápencové útesy, medzi ktoré sa zarezávajú úzke zátoky." },
    { id: 18, level: 2, points: 15, question: "Na ktorom ostrove sa nachádza pláž La Pelosa pri Stintine?", answers: ["Sicília", "Korzika", "Sardínia", "Elba"], correctAnswer: 2, funFact: "La Pelosa je známa plytkou tyrkysovou vodou a výhľadom smerom k ostrovu Asinara." },
    { id: 19, level: 2, points: 15, question: "Do ktorej skupiny gréckych ostrovov patrí Santorini?", answers: ["Dodekanézy", "Iónske ostrovy", "Sporady", "Kyklady"], correctAnswer: 3, funFact: "Dnešný tvar Santorini výrazne ovplyvnila obrovská sopečná erupcia v staroveku." },
    { id: 20, level: 2, points: 15, question: "Ktoré chorvátske mesto je známe atrakciou Sea Organ – Morské organy?", answers: ["Zadar", "Rijeka", "Šibenik", "Rovinj"], correctAnswer: 0, funFact: "Morské vlny tlačia vzduch cez systém potrubí a vytvárajú tak meniace sa tóny." },
    { id: 21, level: 3, points: 20, question: "V ktorej provincii leží Costa Brava?", answers: ["Girona", "Barcelona", "Tarragona", "Lleida"], correctAnswer: 0, funFact: "Costa Brava sa tiahne od Blanes na juhu až po Portbou pri francúzskej hranici." },
    { id: 22, level: 3, points: 20, question: "Pri ktorom talianskom zálive leží Amalfitánske pobrežie?", answers: ["Janovskom", "Tarantskom", "Salernskom", "Benátskom"], correctAnswer: 2, funFact: "Útesy Amalfitánskeho pobrežia sa dvíhajú priamo nad Salernským zálivom." },
    { id: 23, level: 3, points: 20, question: "V ktorom korzickom meste sa narodil Napoleon Bonaparte?", answers: ["Bastia", "Calvi", "Ajaccio", "Bonifacio"], correctAnswer: 2, funFact: "Napoleon sa v Ajacciu narodil 15. augusta 1769 a mesto dodnes výrazne pripomína svojho najslávnejšieho rodáka." },
    { id: 24, level: 3, points: 20, question: "Na ktorom Maltskom ostrove nájdeš pláž Ramla l-Ħamra?", answers: ["Comino", "Gozo", "Malta", "Manoel"], correctAnswer: 1, funFact: "Ramla l-Ħamra je charakteristická nezvyčajne červenkastým až zlatým pieskom." },
    { id: 25, level: 3, points: 20, question: "S ktorým slávnym hudobníkom je úzko späté slovinské mesto Piran?", answers: ["Antonio Vivaldi", "Giuseppe Tartini", "Gioachino Rossini", "Ennio Morricone"], correctAnswer: 1, funFact: "Hlavné Tartiniho námestie v Pirane nesie meno huslistu a skladateľa, ktorý sa tu narodil." },
    { id: 26, level: 3, points: 20, question: "Ktorá z týchto archeologických lokalít sa nachádza v Pafose?", answers: ["Hrobky kráľov", "Knóssos", "Akrotiri", "Mykény"], correctAnswer: 0, funFact: "Napriek názvu tu nepochovávali kráľov, ale najmä vysokých úradníkov a aristokraciu." },
    { id: 27, level: 3, points: 20, question: "Ako sa volá najvyššia hora ostrova Rodos?", answers: ["Profitis Ilias", "Attavyros", "Pantokrator", "Dikti"], correctAnswer: 1, funFact: "Attavyros je najvyššou horou ostrova Rodos." },
    { id: 28, level: 3, points: 20, question: "Historické jadro ktorého chorvátskeho mesta leží medzi Splitom a Šibenikom a je zapísané v UNESCO?", answers: ["Makarska", "Trogir", "Omiš", "Brela"], correctAnswer: 1, funFact: "Trogir je výnimočný mimoriadne zachovaným historickým centrom s vrstvami architektúry z rôznych období." },
    { id: 29, level: 3, points: 20, question: "Pri ktorom sicílskom meste sa nachádza Údolie chrámov – Valle dei Templi?", answers: ["Catania", "Trapani", "Agrigento", "Messina"], correctAnswer: 2, funFact: "Napriek názvu neležia chrámy na dne údolia, ale prevažne na vyvýšenom hrebeni." },
    { id: 30, level: 3, points: 20, question: "Hlavné oslavy valencijských Fallas vrcholia tradične v ktorom mesiaci?", answers: ["Január", "Marec", "Jún", "September"], correctAnswer: 1, funFact: "Festival vrcholí spaľovaním obrovských umeleckých figurín nazývaných fallas." },
    { id: 31, level: 4, points: 25, question: "Celá klasická trasa roklinou Samaria až k Agia Roumeli meria približne:", answers: ["8 km", "12 km", "16 km", "24 km"], correctAnswer: 2, funFact: "Samotná roklina má približne 12,5 kilometra, ale chodník pokračuje ďalej až k pobrežiu." },
    { id: 32, level: 4, points: 25, question: "Ktorá z piatich dedín Cinque Terre neleží priamo pri hladine mora?", answers: ["Vernazza", "Corniglia", "Manarola", "Riomaggiore"], correctAnswer: 1, funFact: "Corniglia leží približne 100 metrov nad morom a od železničnej stanice k nej vedie dlhé schodisko." },
    { id: 33, level: 4, points: 25, question: "Bonifácky prieliv oddeľuje:", answers: ["Sicíliu a Maltu", "Korziku a Sardíniu", "Sardíniu a Sicíliu", "Korziku a Elbu"], correctAnswer: 1, funFact: "Medzi Bonifaciom na Korzike a Santa Teresa Gallura na Sardínii premávajú trajekty." },
    { id: 34, level: 4, points: 25, question: "Na ktorom ostrove sa nachádzajú megalitické chrámy Ġgantija?", answers: ["Malta", "Gozo", "Comino", "Sicília"], correctAnswer: 1, funFact: "Ġgantija patrí medzi mimoriadne staré voľne stojace kamenné stavby sveta." },
    { id: 35, level: 4, points: 25, question: "Paklené ostrovy – Pakleni Islands – ležia pri ktorom chorvátskom ostrove?", answers: ["Brač", "Korčula", "Hvar", "Krk"], correctAnswer: 2, funFact: "Malé ostrovčeky ležia priamo pred mestom Hvar a patria k jeho najznámejším prírodným symbolom." },
    { id: 36, level: 4, points: 25, question: "Sečovľské soľné polia nájdeš neďaleko ktorého slovinského mesta?", answers: ["Piran", "Bled", "Maribor", "Celje"], correctAnswer: 0, funFact: "Piran je so soľou spätý celé stáročia a miestna tradičná výroba soli má viac ako 700-ročnú tradíciu." },
    { id: 37, level: 4, points: 25, question: "Choirokoitia na Cypre je známa predovšetkým ako:", answers: ["rímsky amfiteáter", "neolitické sídlisko", "križiacky hrad", "byzantský kláštor"], correctAnswer: 1, funFact: "Choirokoitia patrí k najvýznamnejším dokladom neolitického osídlenia Cypru." },
    { id: 38, level: 4, points: 25, question: "Historický Camí de Cavalls, ktorý obchádza celý ostrov, sa nachádza na:", answers: ["Mallorce", "Ibize", "Menorce", "Formentere"], correctAnswer: 2, funFact: "Trasa má približne 185 kilometrov a dnes ju možno absolvovať pešo, na bicykli či na koni." },
    { id: 39, level: 4, points: 25, question: "Kto navrhol slávnu budovu Casino de Monte-Carlo?", answers: ["Antoni Gaudí", "Charles Garnier", "Gustave Eiffel", "Le Corbusier"], correctAnswer: 1, funFact: "Charles Garnier je zároveň architektom slávnej parížskej opery Palais Garnier." },
    { id: 40, level: 4, points: 25, question: "Ktorý hydrotermálny kráter na Nisyrose je najväčší a má približne 330 × 260 metrov?", answers: ["Stefanos", "Polyvotis", "Nea Kameni", "Vulcano"], correctAnswer: 0, funFact: "Stefanos je hlboký približne 27 metrov a návštevníci môžu zostúpiť priamo na jeho dno." },
    { id: 41, level: 5, points: 30, question: "Ako sa nazývajú typické kamenné domy ostrova Pantelleria s kupolovitou strechou?", answers: ["Nuraghi", "Dammusi", "Trulli", "Sesi"], correctAnswer: 1, funFact: "Dammusi sa tradične stavajú z miestneho lávového kameňa a ich kupolovité strechy sú jedným zo symbolov Pantellerie." },
    { id: 42, level: 5, points: 30, question: "Ako sa volá najvyšší vrch Korziky?", answers: ["Monte Cinto", "Monte Rotondo", "Monte Limbara", "Monte Pellegrino"], correctAnswer: 0, funFact: "Monte Cinto sa často označuje ako „strecha Korziky“." },
    { id: 43, level: 5, points: 30, question: "Serra de Tramuntana vedie pozdĺž ktorej časti Mallorky?", answers: ["juhovýchodného pobrežia", "severozápadného pobrežia", "južného pobrežia", "východného pobrežia"], correctAnswer: 1, funFact: "UNESCO oceňuje nielen jej hory, ale aj stáročia budované terasy, kamenné stavby a systémy hospodárenia s vodou." },
    { id: 44, level: 5, points: 30, question: "Ktorá z týchto maltských pamiatok UNESCO je rozsiahlym podzemným prehistorickým komplexom?", answers: ["Ħal Saflieni Hypogeum", "Ħaġar Qim", "Tarxien Temples", "Ġgantija"], correctAnswer: 0, funFact: "Hypogeum má tri podzemné úrovne vytesané do vápenca a pôvodne obsahovalo pozostatky približne 7 000 ľudí." },
    { id: 45, level: 5, points: 30, question: "Na ktorom chorvátskom ostrove sa v národnom parku nachádzajú Veliko jezero a Malo jezero?", answers: ["Mljet", "Brač", "Pag", "Krk"], correctAnswer: 0, funFact: "Obe „jazerá“ sú v skutočnosti spojené s morom úzkymi kanálmi." },
    { id: 46, level: 5, points: 30, question: "Ktorá z nasledujúcich lokalít NIE JE súčasťou archeologického celku Pafosu zapísaného v UNESCO?", answers: ["Kato Pafos", "Kouklia", "Hrobky kráľov", "Kláštor Kykkos"], correctAnswer: 3, funFact: "UNESCO komplex Pafosu zahŕňa Kato Pafos, Hrobky kráľov a lokalitu Palaipafos pri Kouklia." },
    { id: 47, level: 5, points: 30, question: "Samotná roklina Samaria – bez pokračovania k pláži Agia Roumeli – má približne:", answers: ["6,5 km", "9 km", "12,5 km", "18 km"], correctAnswer: 2, funFact: "Pri Samarii sa preto možno stretnúť s dvoma číslami – približne 12,5 kilometra pre roklinu a 16 kilometrov pre celú turistickú trasu." },
    { id: 48, level: 5, points: 30, question: "Slávny Sentiero degli Dei – Cesta bohov – na Amalfitánskom pobreží spája Agerolu s:", answers: ["Positanom", "Sorrentom", "Salernom", "Vietri sul Mare"], correctAnswer: 0, funFact: "Cesta bohov patrí k najznámejším peším trasám nad Amalfitánskym pobrežím." },
    { id: 49, level: 5, points: 30, question: "Ktoré mesto tvorí severný koniec Costa Brava pri francúzskej hranici?", answers: ["Sitges", "Cadaqués", "Portbou", "Blanes"], correctAnswer: 2, funFact: "Costa Brava sa tiahne od Blanes na juhu po Portbou pri francúzskej hranici." },
    { id: 50, level: 5, points: 30, question: "Najvyšším vrchom pohoria Troodos na Cypre je:", answers: ["Olympus", "Pentadaktylos", "Stavrovouni", "Akamas"], correctAnswer: 0, funFact: "Vrchol Olympus dosahuje približne 1 952 metrov a v zime sa v oblasti dokonca lyžuje." }
  ];

  const progressKey = "letom-velky-stredomorsky-kviz-50-progress-v1";
  const bestKey = "letom-velky-stredomorsky-kviz-50-best-v1";
  const maxScore = 1000;
  const letters = ["A", "B", "C", "D"];
  const elements = {
    intro: document.querySelector("#grand-quiz-intro"), play: document.querySelector("#grand-quiz-play"), levelSummary: document.querySelector("#grand-level-summary"), result: document.querySelector("#grand-quiz-result"), start: document.querySelector("#grand-start"), resume: document.querySelector("#grand-resume"), restartIntro: document.querySelector("#grand-restart-intro"), record: document.querySelector("#grand-record"), level: document.querySelector("#grand-level"), questionNumber: document.querySelector("#grand-question-count"), score: document.querySelector("#grand-score"), progress: document.querySelector("#grand-progress-bar"), question: document.querySelector("#grand-question"), answers: document.querySelector("#grand-answers"), feedback: document.querySelector("#grand-feedback"), next: document.querySelector("#grand-next"), summaryTitle: document.querySelector("#grand-level-summary-title"), summaryStats: document.querySelector("#grand-level-summary-stats"), summaryText: document.querySelector("#grand-level-summary-text"), summaryContinue: document.querySelector("#grand-next-level"), resultScore: document.querySelector("#grand-result-score"), resultTitle: document.querySelector("#grand-result-title"), resultText: document.querySelector("#grand-result-copy"), levelResults: document.querySelector("#grand-level-results"), review: document.querySelector("#grand-review"), restart: document.querySelector("#grand-restart-result"), share: document.querySelector("#grand-share"), shareFeedback: document.querySelector("#grand-share-feedback"), shareFallback: document.querySelector("#grand-share-fallback"), shareUrl: document.querySelector("#grand-share-url"), confetti: document.querySelector("#grand-confetti")
  };
  let state = createNewState();

  function createNewState() { return { version: 1, currentQuestion: 0, currentLevel: 1, score: 0, answers: {}, levelResults: {}, completed: false }; }
  function safelyRead(key) { try { return window.localStorage.getItem(key); } catch (_) { return null; } }
  function safelyWrite(key, value) { try { window.localStorage.setItem(key, value); } catch (_) { /* The game also works without storage. */ } }
  function safelyRemove(key) { try { window.localStorage.removeItem(key); } catch (_) { /* The game also works without storage. */ } }
  function saveProgress() { safelyWrite(progressKey, JSON.stringify(state)); }
  function getBestScore() { const score = Number.parseInt(safelyRead(bestKey), 10); return Number.isFinite(score) && score >= 0 && score <= maxScore ? score : 0; }
  function updateLevelResult(levelId) {
    const level = levels[levelId - 1];
    const correct = questions.filter((item) => item.level === levelId && state.answers[item.id] === item.correctAnswer).length;
    const result = { correct, score: correct * level.points };
    state.levelResults[levelId] = result;
    return result;
  }
  function updateScoreIndicator() {
    const possibleScore = questions.slice(0, state.currentQuestion + 1).reduce((sum, item) => sum + item.points, 0);
    const attainableScore = maxScore - (possibleScore - state.score);
    elements.score.innerHTML = `<span>🏆 ${state.score} / ${possibleScore}</span><small>Možné maximum: ${attainableScore} bodov</small>`;
    elements.score.setAttribute("aria-label", `Získané body: ${state.score} z aktuálne možných ${possibleScore}. Stále je možné získať maximálne ${attainableScore} bodov.`);
  }

  function readProgress() {
    const raw = safelyRead(progressKey);
    if (!raw) return null;
    try {
      const saved = JSON.parse(raw);
      if (!saved || saved.version !== 1 || saved.completed || !Number.isInteger(saved.currentQuestion) || saved.currentQuestion < 0 || saved.currentQuestion >= questions.length || typeof saved.answers !== "object") return null;
      const answers = {};
      let score = 0;
      Object.keys(saved.answers).forEach((id) => {
        const question = questions.find((item) => item.id === Number(id));
        const answer = Number(saved.answers[id]);
        if (question && Number.isInteger(answer) && answer >= 0 && answer < 4) {
          answers[question.id] = answer;
          if (answer === question.correctAnswer) score += question.points;
        }
      });
      const levelResults = {};
      levels.forEach((level) => {
        const levelQuestions = questions.filter((item) => item.level === level.id);
        const correct = levelQuestions.filter((item) => answers[item.id] === item.correctAnswer).length;
        levelResults[level.id] = { correct, score: correct * level.points };
      });
      return { version: 1, currentQuestion: saved.currentQuestion, currentLevel: questions[saved.currentQuestion].level, score, answers, levelResults, completed: false };
    } catch (_) { return null; }
  }

  function showScreen(screen) { [elements.intro, elements.play, elements.levelSummary, elements.result].forEach((item) => { item.hidden = item !== screen; }); }
  function updateIntro() {
    const saved = readProgress();
    const best = getBestScore();
    elements.resume.hidden = !saved;
    elements.restartIntro.hidden = !saved;
    elements.record.hidden = best === 0;
    elements.record.textContent = `Tvoj rekord: ${best} / ${maxScore} bodov`;
  }
  function beginNewGame() {
    state = createNewState();
    saveProgress();
    elements.shareFeedback.hidden = true;
    elements.shareFallback.hidden = true;
    elements.confetti.innerHTML = "";
    showScreen(elements.play);
    renderQuestion();
  }
  function resumeGame() { state = readProgress() || createNewState(); showScreen(elements.play); renderQuestion(); }

  function renderQuestion() {
    const item = questions[state.currentQuestion];
    const level = levels[item.level - 1];
    const selected = state.answers[item.id];
    elements.level.textContent = `LEVEL ${item.level} / 5 · ${level.name}`;
    elements.questionNumber.textContent = `OTÁZKA ${state.currentQuestion + 1} / ${questions.length}`;
    updateScoreIndicator();
    elements.progress.style.width = `${((state.currentQuestion + 1) / questions.length) * 100}%`;
    elements.question.textContent = item.question;
    elements.answers.innerHTML = "";
    elements.feedback.hidden = true;
    elements.next.hidden = true;
    item.answers.forEach((answer, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "grand-answer";
      button.setAttribute("aria-label", `${letters[index]}. ${answer}`);
      button.innerHTML = `<span class="grand-answer-letter" aria-hidden="true">${letters[index]}</span><span>${answer}</span>`;
      button.addEventListener("click", () => answerQuestion(index));
      elements.answers.appendChild(button);
    });
    if (Number.isInteger(selected)) showAnsweredState(item, selected);
    window.setTimeout(() => elements.question.focus({ preventScroll: true }), 0);
  }

  function answerQuestion(selected) {
    const item = questions[state.currentQuestion];
    if (Object.prototype.hasOwnProperty.call(state.answers, item.id)) return;
    state.answers[item.id] = selected;
    if (selected === item.correctAnswer) state.score += item.points;
    updateLevelResult(item.level);
    updateScoreIndicator();
    saveProgress();
    showAnsweredState(item, selected);
  }

  function showAnsweredState(item, selected) {
    const correct = selected === item.correctAnswer;
    [...elements.answers.querySelectorAll("button")].forEach((button, index) => {
      button.disabled = true;
      if (index === item.correctAnswer) button.classList.add("is-correct");
      if (index === selected && !correct) button.classList.add("is-incorrect");
      if (index === item.correctAnswer || index === selected) {
        const status = document.createElement("span");
        status.className = "grand-answer-status";
        status.textContent = index === item.correctAnswer ? "Správna odpoveď" : "Tvoja odpoveď";
        button.appendChild(status);
      }
    });
    elements.feedback.className = `grand-feedback ${correct ? "is-correct" : "is-incorrect"}`;
    elements.feedback.innerHTML = `<strong>${correct ? `✓ Správne! +${item.points} bodov` : "✕ Tentoraz nie."}</strong><p>${correct ? "Dobrá odpoveď." : `Správna odpoveď: ${letters[item.correctAnswer]}. ${item.answers[item.correctAnswer]}.`}</p><h3>Vedeli ste, že?</h3><p>${item.funFact}</p>`;
    elements.feedback.hidden = false;
    const endOfLevel = (state.currentQuestion + 1) % 10 === 0;
    elements.next.textContent = endOfLevel ? (state.currentQuestion === questions.length - 1 ? "Zobraziť výsledok" : "Dokončiť level") : "Ďalšia otázka";
    elements.next.hidden = false;
  }

  function goNext() {
    const completedLevel = questions[state.currentQuestion].level;
    const endOfLevel = (state.currentQuestion + 1) % 10 === 0;
    state.currentQuestion += 1;
    state.currentLevel = state.currentQuestion < questions.length ? questions[state.currentQuestion].level : 5;
    saveProgress();
    if (state.currentQuestion >= questions.length) finishQuiz();
    else if (endOfLevel) renderLevelSummary(completedLevel);
    else renderQuestion();
  }

  function renderLevelSummary(levelId) {
    const level = levels[levelId - 1];
    const levelResult = updateLevelResult(levelId);
    const correct = levelResult.correct;
    const levelScore = levelResult.score;
    elements.summaryTitle.textContent = `LEVEL ${levelId} DOKONČENÝ`;
    elements.summaryStats.innerHTML = "";
    [["Správne odpovede", `${correct} / 10`], ["Body v tomto leveli", `${levelScore} / ${level.points * 10}`], ["Celkové skóre", `${state.score} / ${maxScore}`]].forEach(([label, value]) => {
      const row = document.createElement("div");
      row.innerHTML = `<span>${label}</span><strong>${value}</strong>`;
      elements.summaryStats.appendChild(row);
    });
    elements.summaryText.textContent = `Výborne, ${level.name.toLowerCase()} je za tebou. Ďalší level bude o trochu náročnejší.`;
    elements.summaryContinue.textContent = `Pokračovať na level ${levelId + 1}`;
    showScreen(elements.levelSummary);
    elements.summaryTitle.focus({ preventScroll: true });
  }

  function scoreTitle(score) {
    if (score === maxScore) return "LEGENDA STREDOMORIA";
    if (score >= 950) return "Expert na Stredomorie";
    if (score >= 800) return "Majster Stredomoria";
    if (score >= 650) return "Znalec Stredomoria";
    if (score >= 450) return "Skúsený cestovateľ";
    if (score >= 250) return "Dovolenkár";
    return "Stredomorský nováčik";
  }
  function finishQuiz() {
    state.completed = true;
    safelyRemove(progressKey);
    if (state.score > getBestScore()) safelyWrite(bestKey, String(state.score));
    elements.resultScore.textContent = `${state.score} / ${maxScore} BODOV`;
    elements.resultTitle.textContent = scoreTitle(state.score);
    elements.resultText.textContent = state.score === maxScore ? "Zvládol si všetkých 50 otázok bez chyby. To je výnimočný stredomorský výkon." : "Každý level ťa zaviedol do inej časti Stredomoria. Pozri si, ktoré odpovede si mal správne.";
    renderLevelResults();
    renderReview();
    elements.confetti.innerHTML = "";
    if (state.score === maxScore) createConfetti();
    showScreen(elements.result);
    elements.resultTitle.focus({ preventScroll: true });
  }
  function renderLevelResults() {
    elements.levelResults.innerHTML = "";
    levels.forEach((level) => {
      const result = updateLevelResult(level.id);
      const correct = result.correct;
      const row = document.createElement("li");
      row.innerHTML = `<span>Level ${level.id}: ${level.name}</span><strong>${correct}/10 · ${result.score}/${level.points * 10} bodov</strong>`;
      elements.levelResults.appendChild(row);
    });
  }
  function renderReview() {
    elements.review.innerHTML = "";
    questions.forEach((item) => {
      const selected = state.answers[item.id];
      const correct = selected === item.correctAnswer;
      const row = document.createElement("li");
      row.className = `grand-review-item ${correct ? "is-correct" : "is-incorrect"}`;
      row.innerHTML = `<p class="grand-review-level">Level ${item.level} · otázka ${item.id}</p><h4>${item.question}</h4><p class="grand-review-status">${correct ? "✓ Správne" : "✕ Nesprávne"}</p><p><strong>Tvoja odpoveď:</strong> ${Number.isInteger(selected) ? `${letters[selected]}. ${item.answers[selected]}` : "Bez odpovede"}</p><p><strong>Správna odpoveď:</strong> ${letters[item.correctAnswer]}. ${item.answers[item.correctAnswer]}</p><p class="grand-review-fact"><strong>Vedeli ste, že?</strong> ${item.funFact}</p>`;
      elements.review.appendChild(row);
    });
  }
  function createConfetti() {
    for (let index = 0; index < 32; index += 1) {
      const piece = document.createElement("span");
      piece.style.setProperty("--x", `${(index * 29) % 100}%`);
      piece.style.setProperty("--delay", `${(index % 8) * 70}ms`);
      piece.style.setProperty("--rotate", `${index * 23}deg`);
      elements.confetti.appendChild(piece);
    }
  }
  async function shareResult() {
    const text = `Vo Veľkom stredomorskom kvíze som získal ${state.score} z ${maxScore} bodov. Koľko zvládneš ty?`;
    const url = window.location.href;
    elements.shareFeedback.hidden = true;
    elements.shareFallback.hidden = true;
    if (navigator.share) {
      try { await navigator.share({ title: "Veľký stredomorský kvíz", text, url }); elements.shareFeedback.textContent = "Výsledok je pripravený na zdieľanie."; elements.shareFeedback.hidden = false; return; } catch (error) { if (error && error.name === "AbortError") return; }
    }
    try { await navigator.clipboard.writeText(`${text} ${url}`); elements.shareFeedback.textContent = "Výsledok bol skopírovaný do schránky."; elements.shareFeedback.hidden = false; }
    catch (_) { elements.shareUrl.value = `${text} ${url}`; elements.shareFallback.hidden = false; elements.shareUrl.focus(); elements.shareUrl.select(); }
  }

  elements.start.addEventListener("click", beginNewGame);
  elements.resume.addEventListener("click", resumeGame);
  elements.restartIntro.addEventListener("click", beginNewGame);
  elements.next.addEventListener("click", goNext);
  elements.summaryContinue.addEventListener("click", () => { showScreen(elements.play); renderQuestion(); });
  elements.restart.addEventListener("click", beginNewGame);
  elements.share.addEventListener("click", shareResult);
  updateIntro();
})();
