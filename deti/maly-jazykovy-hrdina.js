(() => {
  'use strict';

  const storageKey = 'letom-po-stredomori-deti-jazykovy-hrdina-v2';
  const phrases = [
    { key: 'morning', sk: 'Dobré ráno', icon: '🌅' },
    { key: 'please', sk: 'Prosím', icon: '🙏' },
    { key: 'thanks', sk: 'Ďakujem', icon: '💛' },
    { key: 'goodbye', sk: 'Dovidenia', icon: '👋' },
    { key: 'icecream', sk: 'Zmrzlinu prosím', icon: '🍦' },
  ];
  const languages = {
    italy: { name: 'Taliansko', flag: '🇮🇹', art: '🍕', hero: 'malý taliansky hrdina', phrases: ['Buongiorno', 'Per favore', 'Grazie', 'Arrivederci', 'Un gelato, per favore'] },
    greece: { name: 'Grécko', flag: '🇬🇷', art: '🏛️', hero: 'malý grécky hrdina', phrases: ['Καλημέρα', 'Παρακαλώ', 'Ευχαριστώ', 'Αντίο', 'Ένα παγωτό, παρακαλώ'], pronunciation: ['Kaliméra', 'Parakaló', 'Efcharistó', 'Adío', 'Éna pagotó, parakaló'] },
    spain: { name: 'Španielsko', flag: '🇪🇸', art: '☀️', hero: 'malý španielsky hrdina', phrases: ['Buenos días', 'Por favor', 'Gracias', 'Adiós', 'Un helado, por favor'] },
    croatia: { name: 'Chorvátsko', flag: '🇭🇷', art: '⛵', hero: 'malý chorvátsky hrdina', phrases: ['Dobro jutro', 'Molim', 'Hvala', 'Doviđenja', 'Sladoled, molim'] },
    france: { name: 'Francúzsko', flag: '🇫🇷', art: '🥐', hero: 'malý francúzsky hrdina', phrases: ['Bonjour', 'S’il vous plaît', 'Merci', 'Au revoir', 'Une glace, s’il vous plaît'] },
  };
  const state = (() => {
    try { return JSON.parse(localStorage.getItem(storageKey)) || { sound: true, learned: {}, medals: [] }; }
    catch (_) { return { sound: true, learned: {}, medals: [] }; }
  })();

  const $ = (id) => document.getElementById(id);
  const screens = ['icon-tour', 'countries', 'lesson', 'practice', 'reward'];
  let activeLanguage = 'italy';
  let phraseIndex = 0;
  let tourIndex = 0;
  let practiceRound = 0;
  let practiceOrder = [];
  let audio;
  let answerLocked = false;

  const save = () => localStorage.setItem(storageKey, JSON.stringify(state));
  const announce = (text) => { $('language-live').textContent = text; };
  const allowedKeys = new Set(phrases.map((phrase) => phrase.key));
  const learnedSet = () => new Set((state.learned[activeLanguage] || []).filter((key) => allowedKeys.has(key)));
  const stopAudio = () => { if (audio) { audio.pause(); audio.currentTime = 0; } };
  const moveTo = (element) => window.setTimeout(() => element.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
  const say = (text, target) => {
    announce(text);
    if (target) moveTo(target);
    if (!state.sound || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const message = new SpeechSynthesisUtterance(text);
    message.lang = 'sk-SK';
    message.rate = 0.84;
    message.pitch = 1.08;
    window.speechSynthesis.speak(message);
  };
  const show = (screen, instruction) => {
    screens.forEach((name) => { $(`screen-${name}`).hidden = name !== screen; });
    stopAudio();
    const current = $(`screen-${screen}`);
    window.setTimeout(() => {
      current.focus({ preventScroll: true });
      if (instruction) say(instruction, current);
      else moveTo(current);
    }, 60);
  };
  const audioPath = () => `audio/maly-jazykovy-hrdina/${activeLanguage}-${phrases[phraseIndex].key}.mp3`;
  const playPhrase = () => {
    if (!state.sound) { say('Zvuk je vypnutý. Stlač hore reproduktor, ak ho chceš zapnúť.'); return; }
    stopAudio();
    audio = new Audio(audioPath());
    audio.play().catch(() => say(`Fráza znamená ${phrases[phraseIndex].sk}.`));
  };
  const setSoundButton = () => {
    const button = $('sound-toggle');
    button.setAttribute('aria-pressed', String(state.sound));
    button.setAttribute('aria-label', state.sound ? 'Vypnúť zvuk' : 'Zapnúť zvuk');
    button.innerHTML = `<span aria-hidden="true">${state.sound ? '🔊' : '🔇'}</span><span>${state.sound ? 'Zvuk' : 'Bez zvuku'}</span>`;
  };

  const tourInstruction = () => {
    const phrase = phrases[tourIndex];
    return `Pozri sa na obrázok. ${phrase.icon} znamená: ${phrase.sk}.`;
  };
  const renderTour = () => {
    const phrase = phrases[tourIndex];
    $('tour-icon').textContent = phrase.icon;
    $('tour-word').textContent = phrase.sk;
    $('tour-count').textContent = `${tourIndex + 1} / ${phrases.length}`;
    $('tour-dots').innerHTML = phrases.map((_, index) => `<span class="tour-dot${index === tourIndex ? ' is-current' : ''}" aria-label="${index === tourIndex ? 'Aktuálna' : 'Ďalšia'} ikona">${index < tourIndex ? '●' : '○'}</span>`).join('');
    $('tour-next-label').textContent = tourIndex === phrases.length - 1 ? 'Vyber jazyk' : 'Ďalej';
    $('next-tour').setAttribute('aria-label', tourIndex === phrases.length - 1 ? 'Vybrať jazyk' : 'Ďalšia ikona');
  };
  const renderCountries = () => {
    $('country-grid').innerHTML = Object.entries(languages).map(([id, language]) => `<button class="country-card${state.medals.includes(id) ? ' is-complete' : ''}" type="button" data-language="${id}" aria-label="Vybrať krajinu ${language.name}"><span class="country-flag" aria-hidden="true">${language.flag}</span><span class="country-art" aria-hidden="true">${language.art}</span><strong>${language.name}</strong><small>${state.medals.includes(id) ? '🏅 Hotovo' : '⭐ ⭐ ⭐ ⭐ ⭐'}</small></button>`).join('');
  };
  const renderStars = () => {
    const done = learnedSet();
    $('star-track').innerHTML = phrases.map((phrase) => `<span class="progress-star${done.has(phrase.key) ? ' is-earned' : ''}" aria-label="${done.has(phrase.key) ? 'Získaná' : 'Nezískaná'} hviezdička za ${phrase.sk}">${done.has(phrase.key) ? '★' : '☆'}</span>`).join('');
  };
  const lessonInstruction = () => {
    const phrase = phrases[phraseIndex];
    return `Pozri na obrázok. Znamená ${phrase.sk}. Stlač reproduktor, vypočuj si slovo a keď ho už poznáš, ťukni na hviezdu.`;
  };
  const renderLesson = () => {
    const language = languages[activeLanguage];
    const phrase = phrases[phraseIndex];
    $('lesson-country').textContent = language.name;
    $('lesson-count').textContent = `${phraseIndex + 1} z ${phrases.length}`;
    $('phrase-icon').textContent = phrase.icon;
    $('phrase-slovak').textContent = phrase.sk;
    $('phrase-foreign').textContent = language.phrases[phraseIndex];
    const pronunciation = $('phrase-pronunciation');
    pronunciation.hidden = !language.pronunciation;
    pronunciation.textContent = language.pronunciation ? `Čítaj približne: ${language.pronunciation[phraseIndex]}` : '';
    renderStars();
  };
  const openLesson = (languageId) => {
    activeLanguage = languageId;
    phraseIndex = 0;
    renderLesson();
    show('lesson', `Vybral si ${languages[activeLanguage].name}. ${lessonInstruction()}`);
  };
  const markLearned = () => {
    const phrase = phrases[phraseIndex];
    const learned = learnedSet();
    learned.add(phrase.key);
    state.learned[activeLanguage] = [...learned];
    save();
    say(`Výborne! Máš hviezdičku za ${phrase.sk}.`, $('phrase-card'));
    window.setTimeout(() => {
      if (phraseIndex < phrases.length - 1) {
        phraseIndex += 1;
        renderLesson();
        say(lessonInstruction(), $('phrase-card'));
      } else startPractice();
    }, 800);
  };

  const pickOptions = (correctIndex) => {
    const candidates = phrases.map((_, index) => index).filter((index) => index !== correctIndex);
    return [correctIndex, candidates[(correctIndex + 1) % candidates.length], candidates[(correctIndex + 3) % candidates.length]].sort(() => Math.random() - 0.5);
  };
  const practiceInstruction = () => 'Počúvaj. Potom ťukni na obrázok, ktorý k slovíčku patrí.';
  const renderPractice = () => {
    const correct = practiceOrder[practiceRound];
    const language = languages[activeLanguage];
    phraseIndex = correct;
    answerLocked = false;
    $('practice-language').textContent = language.name;
    $('practice-count').textContent = `${practiceRound + 1} z ${practiceOrder.length}`;
    $('practice-prompt').textContent = language.phrases[correct];
    $('answer-grid').innerHTML = pickOptions(correct).map((index) => `<button class="answer-button" type="button" data-answer="${index}" aria-label="Vybrať obrázok: ${phrases[index].sk}"><span class="answer-icon" aria-hidden="true">${phrases[index].icon}</span></button>`).join('');
  };
  const startPractice = () => {
    practiceOrder = phrases.map((_, index) => index);
    practiceRound = 0;
    renderPractice();
    show('practice', practiceInstruction());
    window.setTimeout(playPhrase, 700);
  };
  const choosePractice = (button) => {
    if (answerLocked) return;
    const answer = Number(button.dataset.answer);
    const correct = practiceOrder[practiceRound];
    if (answer !== correct) {
      button.classList.add('is-gentle');
      say('Skús ešte raz. Znovu si vypočuj slovíčko.', $('practice-card'));
      window.setTimeout(playPhrase, 700);
      return;
    }
    answerLocked = true;
    button.classList.add('is-correct');
    say('Výborne, našiel si správny obrázok!', $('practice-card'));
    window.setTimeout(() => {
      practiceRound += 1;
      if (practiceRound === practiceOrder.length) completeLanguage();
      else {
        renderPractice();
        say(practiceInstruction(), $('practice-card'));
        window.setTimeout(playPhrase, 700);
      }
    }, 900);
  };
  const completeLanguage = () => {
    if (!state.medals.includes(activeLanguage)) state.medals.push(activeLanguage);
    save();
    const language = languages[activeLanguage];
    $('reward-copy').textContent = `Zvládol si päť milých slov. Si ${language.hero}!`;
    show('reward', `Výborne! Zvládol si všetkých päť slov v krajine ${language.name}.`);
  };

  $('next-tour').addEventListener('click', () => {
    if (tourIndex < phrases.length - 1) {
      tourIndex += 1;
      renderTour();
      say(tourInstruction(), $('screen-icon-tour'));
      return;
    }
    renderCountries();
    show('countries', 'Výborne. Teraz ťukni na veľký obrázok krajiny, ktorú chceš navštíviť.');
  });
  $('repeat-tour').addEventListener('click', () => say(tourInstruction(), $('screen-icon-tour')));
  $('countries-back').addEventListener('click', () => { tourIndex = phrases.length - 1; renderTour(); show('icon-tour', tourInstruction()); });
  $('lesson-back').addEventListener('click', () => { renderCountries(); show('countries', 'Vyber si veľký obrázok krajiny.'); });
  $('practice-back').addEventListener('click', () => { renderLesson(); show('lesson', lessonInstruction()); });
  $('go-home').addEventListener('click', () => { location.href = 'index.html'; });
  $('play-again').addEventListener('click', () => { renderCountries(); show('countries', 'Vyber si ďalšiu krajinu.'); });
  $('sound-toggle').addEventListener('click', () => {
    state.sound = !state.sound;
    save();
    if (!state.sound && 'speechSynthesis' in window) window.speechSynthesis.cancel();
    setSoundButton();
    if (state.sound) say('Zvuk je zapnutý.');
  });
  $('play-normal').addEventListener('click', playPhrase);
  $('know-phrase').addEventListener('click', markLearned);
  $('repeat-practice').addEventListener('click', playPhrase);
  $('country-grid').addEventListener('click', (event) => {
    const button = event.target.closest('[data-language]');
    if (button) openLesson(button.dataset.language);
  });
  $('answer-grid').addEventListener('click', (event) => {
    const button = event.target.closest('[data-answer]');
    if (button) choosePractice(button);
  });
  document.querySelectorAll('[data-reset-progress]').forEach((resetButton) => resetButton.addEventListener('click', () => {
    if (!confirm('Naozaj vymazať všetky hviezdičky a medaily?')) return;
    state.learned = {};
    state.medals = [];
    save();
    tourIndex = 0;
    renderTour();
    show('icon-tour', 'Začíname znovu. Pozri sa na obrázok.');
  }));

  setSoundButton();
  renderTour();
  show('icon-tour', 'Ahoj, malý cestovateľ! Najprv sa spolu naučíme päť obrázkov, ktoré ti budú pomáhať v celej hre.');
})();
