(() => {
  "use strict";

  const destinations = {
    kreta: { name: "Kréta", country: "Grécko", profile: "pláže, hory a sloboda objavovať", why: "Máte radi, keď sa pláž, taverna, horská cesta a malá dedina zmestia do jedného dňa.", perfect: "Aktívny pár, samostatný cestovateľ alebo rodina, ktorá chce kombinovať kúpanie s výletmi.", watch: "Najlepšie funguje s autom; vzdialenosti a horské cesty netreba podceniť.", stay: "Apartmán alebo menší hotel, prenajaté auto a voľný plán s priestorom na odbočky.", url: "../clanky.html?krajina=grecko" },
    mallorca: { name: "Mallorca", country: "Španielsko", profile: "pohodlné pláže, výlety a živšia atmosféra", why: "Vyhovuje vám dostupná, dobre zorganizovaná dovolenka s voľbou medzi pokojnou zátokou, mestom aj večerným životom.", perfect: "Rodina, pár alebo partia, ktorá chce pohodlie bez úplného vzdania sa objavovania.", watch: "V najznámejších letoviskách a počas hlavnej sezóny treba rátať s ruchom.", stay: "Hotel pri pláži alebo apartmán; auto na pár dní stačí na hory, zátoky a Palmu.", url: "../clanky.html?krajina=spanielsko" },
    sicilia: { name: "Sicília", country: "Taliansko", profile: "veľké chute, história a živelná cesta", why: "Lákajú vás trhy, výrazná kuchyňa, staré mestá a dovolenka, ktorá nie je sterilne naplánovaná.", perfect: "Zvedavý pár alebo cestovateľ, ktorý dá prednosť atmosfére, jedlu a pamiatkam pred rezortným komfortom.", watch: "Pohyb po ostrove býva pomalší a rušnejší; na väčšiu časť ostrova sa hodí auto.", stay: "Ubytovanie v meste či agroturistike, auto na vlastnú päsť a plán s rezervou na spontánne zastávky.", url: "../clanky.html?krajina=taliansko" },
    malta: { name: "Malta", country: "Malta", profile: "kompaktné mestá, história a more na dosah", why: "Chcete veľa vidieť aj bez dlhých presunov a baví vás miešanie prístavov, pevností, kaviarní a kúpania.", perfect: "Víkendový cestovateľ, pár alebo sólo objaviteľ, ktorý má rád mestá aj výlety loďou.", watch: "V lete býva horúco a rušno; pokojnejšie pláže nie sú hlavnou silou ostrova.", stay: "Mestský hotel alebo apartmán, autobusové spojenia a organizované výlety bez potreby auta.", url: "../clanky.html?krajina=malta" },
    korfu: { name: "Korfu", country: "Grécko", profile: "zelený ostrov, taverny a pokojnejšie tempo", why: "Hľadáte mäkší rytmus, zelenú krajinu, príjemné kúpanie a večery, pri ktorých nejde o program každú minútu.", perfect: "Pár, rodina alebo pomalší cestovateľ, ktorý chce striedať pláže, dediny a dobré jedlo.", watch: "Sever a juh ostrova majú odlišnú atmosféru; oplatí sa vybrať si základňu podľa typu pláží.", stay: "Menší hotel alebo apartmán, auto na výlety a taverny mimo najrušnejších miest.", url: "../clanky.html?krajina=grecko" },
    cyprus: { name: "Cyprus", country: "Cyprus", profile: "veľa slnka, pláže a jednoduchý oddych", why: "Najviac vám vyhovuje istota slnka, jednoduché presuny a dovolenka, v ktorej sa dá naozaj vypnúť.", perfect: "Rodina, pár alebo človek, ktorý chce mať pláž, hotelové služby a výlety pohodlne po ruke.", watch: "V lete sú teploty veľmi vysoké; na poznávanie si radšej nechajte ráno alebo večer.", stay: "All inclusive alebo plážový hotel; auto je dobrý doplnok na výlety, nie nevyhnutnosť.", url: "../clanky.html?krajina=cyprus" },
    dalmacia: { name: "Stredná Dalmácia", country: "Chorvátsko", profile: "Jadran, ostrovy a aktívne dni pri mori", why: "Oceňujete čisté more, výlety loďou, večerné promenády a možnosť tráviť každý deň trochu inak.", perfect: "Aktívna rodina, pár alebo partia, ktorá rada strieda pláž, mestá, ostrovy a pohyb.", watch: "V júli a auguste bývajú cesty aj prístavy vyťažené; pri ostrovoch sa oplatí plánovať trajekty.", stay: "Apartmán alebo menší hotel; výlety loďou, auto na pobrežie a voľnejší denný režim.", url: "../clanky.html?krajina=chorvatsko" },
    apulia: { name: "Apúlia", country: "Taliansko", profile: "pomalé Taliansko, chute a dediny pri mori", why: "Najviac vás ťahá lokálny život: raňajky v bare, trhy, olivové háje, malé mestá a večera bez zhonu.", perfect: "Pár alebo pomalší objaviteľ, pre ktorého je gastronómia a atmosféra rovnako dôležitá ako pláž.", watch: "Najkrajšie miesta sú roztrúsené; bez auta sa k nim dostáva výrazne ťažšie.", stay: "Masseria, apartmán alebo malé B&B, prenajaté auto a pomalé presuny medzi mestami a pobrežím.", url: "../clanky.html?krajina=taliansko" }
  };

  const questions = [
    { dimension: "Štýl dovolenky", question: "Ako chcete bývať najčastejšie?", options: [
      { label: "Plážový hotel s polpenziou alebo all inclusive", insight: "Hľadáte pohodlie, predvídateľný režim a oddych bez každodenného riešenia logistiky.", scores: { cyprus: 3, mallorca: 3, korfu: 1 } },
      { label: "Apartmán alebo menší hotel a vlastný program", insight: "Chcete voľnosť pri výbere pláží, reštaurácií aj času návratu.", scores: { kreta: 3, apulia: 3, dalmacia: 2, korfu: 2 } },
      { label: "Mestský hotel, z ktorého chodím pešo po pamiatkach", insight: "Priťahuje vás energia mesta, prístavy, architektúra a kaviarne.", scores: { malta: 3, sicilia: 3, mallorca: 1 } },
      { label: "Viac miest počas jednej cesty", insight: "Dovolenku vnímate ako objavnú trasu, nie iba pobyt na jednom mieste.", scores: { sicilia: 3, kreta: 2, dalmacia: 2, apulia: 2 } }
    ] },
    { dimension: "Pláže", question: "Čo od pláže očakávate najviac?", options: [
      { label: "Pohodlný piesok, služby a jednoduchý vstup do mora", insight: "Dôležité je pre vás bezstarostné kúpanie a komfort počas celého dňa.", scores: { mallorca: 3, cyprus: 3, korfu: 1 } },
      { label: "Menšie zátoky, kam sa treba trochu vydať", insight: "Nevadí vám cesta navyše, ak odmenou bude krajší a pokojnejší výhľad.", scores: { kreta: 3, korfu: 3, dalmacia: 2 } },
      { label: "Čisté more, kamene a šnorchlovanie", insight: "Skôr než lehátko hľadáte priezračnú vodu a pohyb pri pobreží.", scores: { dalmacia: 3, malta: 2, kreta: 2, cyprus: 1 } },
      { label: "Pláž ako doplnok k mestám a jedlu", insight: "Kúpanie vás teší, no nie je jediným dôvodom, prečo cestujete.", scores: { sicilia: 3, apulia: 3, malta: 2 } }
    ] },
    { dimension: "Jedlo", question: "Ktorý večer pri jedle vás láka najviac?", options: [
      { label: "Taverna, čerstvá ryba a dlhé sedenie bez zhonu", insight: "Máte radi jednoduché, poctivé jedlo a pokojný večerný rytmus.", scores: { kreta: 3, korfu: 3, cyprus: 1 } },
      { label: "Trh, pouličné jedlo a výrazné miestne chute", insight: "Jedlo je pre vás spôsob, ako pochopiť miesto a jeho ľudí.", scores: { sicilia: 3, malta: 2, apulia: 2 } },
      { label: "Malé trattorie, olivový olej, víno a regionálne recepty", insight: "Vyhľadávate lokálnosť, pomalé večere a jedlo s príbehom.", scores: { apulia: 3, sicilia: 2, kreta: 1 } },
      { label: "Široký výber, pohodlie a reštaurácie priamo pri hoteli", insight: "Chcete mať všetko jednoduché, no stále s možnosťou vybrať si podľa chuti.", scores: { mallorca: 3, cyprus: 2, malta: 1 } }
    ] },
    { dimension: "Príroda", question: "Ktorá krajina vás pri výlete priťahuje najviac?", options: [
      { label: "Hory, rokliny a cesty s veľkými výhľadmi", insight: "Oddychujete aj pohybom a chcete, aby krajina mala charakter.", scores: { kreta: 3, dalmacia: 2, sicilia: 1 } },
      { label: "Zelené kopce, olivovníky a pokojné dediny", insight: "Blízka je vám mäkšia, zelenšia a pomalšia podoba Stredomoria.", scores: { korfu: 3, apulia: 3, mallorca: 1 } },
      { label: "Skaly, prístavy a ostrovy dostupné loďou", insight: "Najviac vás nabíja more, horizont a presuny medzi pobrežiami.", scores: { dalmacia: 3, malta: 2, korfu: 1 } },
      { label: "Sopečná krajina, pamiatky a dramatické mestá", insight: "Radi spájate prírodu s históriou, ktorá je cítiť na každom kroku.", scores: { sicilia: 3, malta: 2, kreta: 1 } }
    ] },
    { dimension: "Večery", question: "Ako vyzerá váš ideálny večer?", options: [
      { label: "Pokojná promenáda, zmrzlina a večera pri mori", insight: "Vyhovuje vám príjemná atmosféra bez potreby plánovať nočný program.", scores: { korfu: 3, apulia: 2, dalmacia: 2, mallorca: 1 } },
      { label: "Živé mesto, bary, hudba a veľa možností", insight: "Máte radi, keď sa po západe slnka deň ešte len začína.", scores: { mallorca: 3, malta: 3, sicilia: 1 } },
      { label: "Dlhá večera v miestnej štvrti", insight: "Váš ideálny večer je o chuti, rozhovore a autentickej atmosfére.", scores: { sicilia: 3, apulia: 3, kreta: 2 } },
      { label: "Západ slnka a skorý oddych pred ďalším výletom", insight: "Ráno chcete mať energiu na more, hory alebo nové miesto.", scores: { kreta: 3, cyprus: 2, dalmacia: 2, korfu: 1 } }
    ] },
    { dimension: "Tempo", question: "Koľko programu chcete mať naplánovaného?", options: [
      { label: "Minimum — chcem vypnúť a rozhodovať sa podľa nálady", insight: "Dovolenka má byť predovšetkým oddych, nie ďalší projekt.", scores: { cyprus: 3, korfu: 2, mallorca: 2 } },
      { label: "Jeden hlavný výlet denne mi stačí", insight: "Chcete rovnováhu medzi oddychom a objavovaním bez naháňania.", scores: { mallorca: 3, dalmacia: 2, korfu: 2, apulia: 1 } },
      { label: "Chcem mať každý deň nové miesto alebo zážitok", insight: "Najviac vás baví pohyb, rozmanitosť a pocit, že ste krajinu naozaj spoznali.", scores: { sicilia: 3, kreta: 3, malta: 2 } },
      { label: "Chcem mať plán len ako smer, nie ako záväzok", insight: "Páči sa vám sloboda, ale s istotou, že máte kam ísť, keď chcete.", scores: { apulia: 3, dalmacia: 2, kreta: 2, korfu: 1 } }
    ] },
    { dimension: "Presuny", question: "Ako sa najradšej pohybujete po destinácii?", options: [
      { label: "Prenajatým autom — zastaviť sa tam, kde sa mi páči", insight: "Nechcete byť viazaní na cestovný poriadok a radi objavujete mimo hlavných trás.", scores: { kreta: 3, sicilia: 3, apulia: 3, korfu: 2 } },
      { label: "Pešo, autobusom alebo taxíkom — bez šoférovania", insight: "Ceníte si jednoduchú logistiku a chcete si cestu užiť bez riadenia.", scores: { malta: 3, mallorca: 2, cyprus: 1 } },
      { label: "Loďou, trajektom a medzi ostrovmi", insight: "Samotné presuny po mori sú pre vás súčasťou dovolenky.", scores: { dalmacia: 3, korfu: 2, malta: 2 } },
      { label: "Väčšinou zostanem pri hoteli a dohodnem si pár výletov", insight: "Chcete mať pokojné zázemie a pohodlné výlety bez organizovania.", scores: { cyprus: 3, mallorca: 3, korfu: 1 } }
    ] },
    { dimension: "Mestá a história", question: "Čo vás v meste zaujme ako prvé?", options: [
      { label: "Pevnosti, prístavy a stopy veľkých dejín", insight: "Baví vás čítať mesto cez jeho architektúru a príbehy.", scores: { malta: 3, sicilia: 2, dalmacia: 2 } },
      { label: "Trhy, každodenný život a neuhladené uličky", insight: "Pri cestovaní hľadáte skôr život miestnych než dokonalú kulisu.", scores: { sicilia: 3, apulia: 3, kreta: 1 } },
      { label: "Kompaktné mesto, ktoré sa dá prejsť za deň", insight: "Chcete kultúru bez preťaženia a s priestorom na more či kaviareň.", scores: { malta: 3, mallorca: 2, dalmacia: 1 } },
      { label: "Menej mesta, viac pobrežia a dedín", insight: "Mestský ruch vám stačí v malých dávkach; bližšie je vám krajina a more.", scores: { korfu: 3, cyprus: 2, kreta: 2, dalmacia: 1 } }
    ] },
    { dimension: "Sezóna", question: "Kedy by ste cestovali najradšej?", options: [
      { label: "Máj alebo jún, keď je ešte príjemne a sviežo", insight: "Chcete stihnúť krajinu v pohode, pred vrcholom letnej sezóny.", scores: { apulia: 3, mallorca: 2, dalmacia: 2, korfu: 2 } },
      { label: "Júl alebo august — chcem istotu plného leta", insight: "Nevadí vám živšia sezóna, ak je vymenená za dlhé dni pri mori.", scores: { cyprus: 3, mallorca: 2, dalmacia: 2 } },
      { label: "September alebo október, stále pri mori, ale pokojnejšie", insight: "Vážite si teplé more, menej ľudí a priestor na pomalšie objavovanie.", scores: { kreta: 3, cyprus: 3, sicilia: 2, malta: 2 } },
      { label: "Termín je druhoradý, rozhoduje atmosféra miesta", insight: "Nechcete sa viazať iba na pláž; destinácia má fungovať aj mimo hlavnej sezóny.", scores: { malta: 3, sicilia: 2, apulia: 2 } }
    ] },
    { dimension: "Spoločnosť", question: "S kým si najviac predstavujete túto cestu?", options: [
      { label: "S rodinou a deťmi", insight: "Hľadáte kombináciu bezpečného kúpania, pohodlia a jednoduchého programu.", scores: { mallorca: 3, cyprus: 3, korfu: 2 } },
      { label: "Vo dvojici", insight: "Záleží vám na atmosfére, dobrých večeroch a miestach, ktoré sa dajú objavovať vo vlastnom tempe.", scores: { apulia: 3, korfu: 2, sicilia: 2, malta: 1 } },
      { label: "S partiou priateľov", insight: "Chcete mať na výber medzi plážou, aktivitami, mestom a večernou zábavou.", scores: { mallorca: 3, malta: 3, dalmacia: 2 } },
      { label: "Sám alebo sama, s chuťou objavovať", insight: "Vyhovuje vám vlastný rytmus, bezpečné presuny a miesta s obsahom aj mimo pláže.", scores: { malta: 3, kreta: 2, sicilia: 2, apulia: 1 } }
    ] },
    { dimension: "Pamiatka na cestu", question: "Čo by ste si najradšej odniesli domov?", options: [
      { label: "Olivový olej, víno alebo potraviny z trhu", insight: "Najdlhšie vám v pamäti ostávajú chute a rituály bežného života.", scores: { apulia: 3, sicilia: 2, kreta: 2 } },
      { label: "Fotky z prístavov, pláží a lodí", insight: "Vaša dovolenka je o mori, svetle a o miestach, kde sa dá byť vonku celý deň.", scores: { dalmacia: 3, korfu: 2, mallorca: 2, cyprus: 1 } },
      { label: "Príbeh o pevnosti, chráme alebo starom meste", insight: "Krajina vás osloví najmä vtedy, keď má silný historický kontext.", scores: { malta: 3, sicilia: 3, kreta: 1 } },
      { label: "Pocit, že som si naozaj oddýchol alebo oddýchla", insight: "Najvyššou hodnotou je pre vás regenerácia, slnko a jednoduchý rytmus.", scores: { cyprus: 3, mallorca: 2, korfu: 2 } }
    ] },
    { dimension: "Rozpočet a komfort", question: "Ktorý prístup k výdavkom na dovolenke vám vyhovuje?", options: [
      { label: "Radšej mám väčšinu služieb vopred a bez prekvapení", insight: "Pokoj vám dáva jasný rozpočet, hotelové zázemie a minimum každodenného rozhodovania.", scores: { cyprus: 3, mallorca: 3, korfu: 1 } },
      { label: "Ušetrím na ubytovaní, aby som viac minul(a) na jedlo a výlety", insight: "Dôležitejšie než hotelový štandard sú pre vás zážitky mimo neho.", scores: { apulia: 3, sicilia: 3, kreta: 2, dalmacia: 1 } },
      { label: "Chcem dobrý kompromis: pohodlie, ale aj vlastný program", insight: "Najviac vám sedí flexibilita bez toho, aby ste museli riešiť každý detail sami.", scores: { mallorca: 3, malta: 2, dalmacia: 2, korfu: 1 } },
      { label: "Rozpočet prispôsobím ceste, ak mi dá viac slobody", insight: "Ste ochotní investovať do auta, lodí alebo presunov, keď sa tým otvorí viac krajiny.", scores: { kreta: 3, dalmacia: 3, malta: 1, sicilia: 1 } }
    ] }
  ];

  const storageKey = "letom-destination-match-quiz-v1";
  const $ = (selector) => document.querySelector(selector);
  const elements = {
    intro: $("#match-quiz-intro"), play: $("#match-quiz-play"), result: $("#match-quiz-result"), start: $("#match-quiz-start"), resume: $("#match-quiz-resume"), counter: $("#match-quiz-counter"), dimension: $("#match-quiz-dimension"), progress: $("#match-quiz-progress-fill"), number: $("#match-quiz-question-number"), question: $("#match-quiz-question"), answers: $("#match-quiz-answers"), back: $("#match-quiz-back"), next: $("#match-quiz-next"), saveNote: $("#match-quiz-save-note"), percent: $("#match-quiz-percent"), country: $("#match-quiz-country"), destination: $("#match-quiz-destination"), profile: $("#match-quiz-profile"), tags: $("#match-quiz-tags"), summary: $("#match-quiz-summary"), why: $("#match-quiz-why"), perfect: $("#match-quiz-perfect"), watch: $("#match-quiz-watch"), style: $("#match-quiz-style"), destinationLink: $("#match-quiz-destination-link"), alternatives: $("#match-quiz-alternatives"), review: $("#match-quiz-review-list"), restart: $("#match-quiz-restart"), share: $("#match-quiz-share"), shareFeedback: $("#match-quiz-share-feedback"), shareFallback: $("#match-quiz-share-fallback"), shareUrl: $("#match-quiz-share-url")
  };
  let state = { step: 0, answers: Array(questions.length).fill(null), complete: false };

  function readSavedState() {
    try {
      const saved = JSON.parse(window.localStorage.getItem(storageKey));
      if (!saved || !Array.isArray(saved.answers) || saved.answers.length !== questions.length) return null;
      return { step: Math.max(0, Math.min(Number(saved.step) || 0, questions.length - 1)), answers: saved.answers.map((value) => Number.isInteger(value) && value >= 0 && value < 4 ? value : null), complete: Boolean(saved.complete) };
    } catch (_) { return null; }
  }
  function saveState() { try { window.localStorage.setItem(storageKey, JSON.stringify(state)); } catch (_) { /* Kvíz funguje aj bez úložiska. */ } }
  function clearState() { try { window.localStorage.removeItem(storageKey); } catch (_) { /* nič */ } }
  function show(screen) { [elements.intro, elements.play, elements.result].forEach((item) => { item.hidden = item !== screen; }); }
  function clear(element) { element.replaceChildren(); }
  function text(tag, className, value) { const node = document.createElement(tag); if (className) node.className = className; node.textContent = value; return node; }

  function renderQuestion(focusQuestion = false) {
    const question = questions[state.step];
    const selected = state.answers[state.step];
    show(elements.play);
    elements.counter.textContent = `Otázka ${state.step + 1} z ${questions.length}`;
    elements.dimension.textContent = question.dimension;
    elements.number.textContent = `Oblasť: ${question.dimension}`;
    elements.question.textContent = question.question;
    elements.progress.style.width = `${((state.step + (selected === null ? 0 : 1)) / questions.length) * 100}%`;
    elements.back.hidden = state.step === 0;
    elements.next.disabled = selected === null;
    elements.next.textContent = state.step === questions.length - 1 ? "Zobraziť moju destináciu" : "Pokračovať";
    elements.saveNote.textContent = selected === null ? "" : "Voľba je uložená. Môžete ju ešte zmeniť.";
    clear(elements.answers);
    question.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "quiz-answer match-quiz-answer";
      button.setAttribute("role", "radio");
      button.setAttribute("aria-checked", String(index === selected));
      button.dataset.option = String(index);
      if (index === selected) button.classList.add("is-selected");
      button.append(text("span", "quiz-answer-letter", String.fromCharCode(65 + index)), text("span", "", option.label), text("span", "match-answer-insight", option.insight));
      button.addEventListener("click", () => { state.answers[state.step] = index; state.complete = false; saveState(); renderQuestion(); const current = elements.answers.querySelector(`[data-option="${index}"]`); if (current) current.focus(); });
      elements.answers.appendChild(button);
    });
    if (focusQuestion) elements.question.focus();
  }

  function calculate() {
    const totals = Object.fromEntries(Object.keys(destinations).map((id) => [id, 0]));
    const contribution = Object.fromEntries(Object.keys(destinations).map((id) => [id, []]));
    const maximum = Object.fromEntries(Object.keys(destinations).map((id) => [id, 0]));
    questions.forEach((question, questionIndex) => {
      Object.keys(destinations).forEach((id) => { maximum[id] += Math.max(...question.options.map((option) => option.scores[id] || 0)); });
      const option = question.options[state.answers[questionIndex]];
      Object.entries(option.scores).forEach(([id, score]) => { totals[id] += score; contribution[id].push({ dimension: question.dimension, score }); });
    });
    return Object.keys(destinations).map((id, order) => ({ id, order, score: totals[id], percent: Math.round((totals[id] / maximum[id]) * 100), contributions: contribution[id] })).sort((a, b) => b.score - a.score || b.percent - a.percent || a.order - b.order);
  }

  function renderResult() {
    const ranking = calculate();
    const top = ranking[0];
    const destination = destinations[top.id];
    const topDimensions = [...top.contributions].sort((a, b) => b.score - a.score).slice(0, 3).map((item) => item.dimension);
    show(elements.result);
    elements.percent.textContent = `${top.percent} %`;
    elements.country.textContent = destination.country;
    elements.destination.textContent = destination.name;
    elements.profile.textContent = destination.profile;
    elements.summary.textContent = `Vaše odpovede najviac sedia na ${destination.name}. Silné signály vo vašom profile sú: ${topDimensions.join(", ").toLowerCase()}. Výsledok berte ako praktický kompas pri výbere, nie ako jedinú možnosť.`;
    elements.why.textContent = destination.why;
    elements.perfect.textContent = destination.perfect;
    elements.watch.textContent = destination.watch;
    elements.style.textContent = destination.stay;
    elements.destinationLink.href = destination.url;
    elements.destinationLink.textContent = `Objaviť ${destination.name}`;
    clear(elements.tags);
    topDimensions.forEach((dimension) => elements.tags.appendChild(text("span", "", dimension)));
    clear(elements.alternatives);
    ranking.slice(1, 3).forEach((item) => { const alternative = destinations[item.id]; const card = document.createElement("article"); card.className = "match-alternative-card"; card.append(text("p", "match-alternative-score", `${item.percent} % zhoda`), text("h4", "", alternative.name), text("p", "", alternative.profile)); const link = document.createElement("a"); link.href = alternative.url; link.textContent = "Pozrieť destináciu"; card.appendChild(link); elements.alternatives.appendChild(card); });
    clear(elements.review);
    questions.forEach((question, index) => { const option = question.options[state.answers[index]]; const item = document.createElement("li"); item.className = "quiz-review-item match-review-item"; item.append(text("p", "quiz-review-question", `${index + 1}. ${question.question}`), text("p", "quiz-review-answer", `Vaša odpoveď: ${option.label}`), text("p", "quiz-review-correct match-review-no-correct", "Správna odpoveď: neexistuje — ide o osobnú preferenciu."), text("p", "quiz-review-explanation", option.insight)); elements.review.appendChild(item); });
    state.complete = true;
    saveState();
    elements.destination.focus();
  }

  function beginFresh() { state = { step: 0, answers: Array(questions.length).fill(null), complete: false }; clearState(); renderQuestion(true); }
  function resume() { const saved = readSavedState(); if (!saved) return; state = saved; if (state.complete && state.answers.every((answer) => answer !== null)) renderResult(); else renderQuestion(true); }
  function next() { if (state.answers[state.step] === null) return; if (state.step === questions.length - 1) { renderResult(); return; } state.step += 1; saveState(); renderQuestion(true); }
  function back() { if (state.step === 0) return; state.step -= 1; saveState(); renderQuestion(true); }
  function shareResult() {
    const top = calculate()[0]; const destination = destinations[top.id]; const url = window.location.href; const shareText = `Mne v kvíze „Kam k moru?“ vyšla ${destination.name} (${top.percent} % zhoda). Kam by vyšiel vám? ${url}`;
    const copied = () => { elements.shareFeedback.textContent = "Text s odkazom je skopírovaný do schránky."; elements.shareFeedback.hidden = false; };
    if (navigator.share) { navigator.share({ title: "Kam k moru?", text: shareText, url }).catch(() => {}); return; }
    if (navigator.clipboard && window.isSecureContext) { navigator.clipboard.writeText(shareText).then(copied).catch(() => { elements.shareUrl.value = shareText; elements.shareFallback.hidden = false; }); return; }
    elements.shareUrl.value = shareText; elements.shareFallback.hidden = false; elements.shareUrl.select(); elements.shareFeedback.textContent = "Odkaz je pripravený na skopírovanie."; elements.shareFeedback.hidden = false;
  }

  elements.start.addEventListener("click", beginFresh);
  elements.resume.addEventListener("click", resume);
  elements.next.addEventListener("click", next);
  elements.back.addEventListener("click", back);
  elements.restart.addEventListener("click", () => { if (window.confirm("Chcete vymazať svoje odpovede a začať odznova?")) beginFresh(); });
  elements.share.addEventListener("click", shareResult);
  if (readSavedState()) elements.resume.hidden = false;
})();
