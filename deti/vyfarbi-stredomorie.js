(() => {
  'use strict';
  const pictures = [
    { title: 'Lietadlo nad morom', x: '0%', y: '0%' }, { title: 'Delfín pri vlnách', x: '100%', y: '0%' },
    { title: 'Pláž so slnečníkom', x: '0%', y: '50%' }, { title: 'Loďka v prístave', x: '100%', y: '50%' },
    { title: 'Maják pri mori', x: '0%', y: '100%' }, { title: 'Ostrov s palmou', x: '100%', y: '100%' },
  ];
  const palette = [
    ['Modrá', '#3b9ed1'], ['Tyrkysová', '#47c4c1'], ['Žltá', '#f4c84f'], ['Oranžová', '#f39a4a'], ['Červená', '#e96e64'],
    ['Zelená', '#77b969'], ['Ružová', '#ed91ae'], ['Fialová', '#a786d1'], ['Hnedá', '#a66c43'], ['Čierna', '#263b45'],
  ];
  const storageKey = 'letom-po-stredomori-deti-vyfarbi-v1';
  const introText = 'Ahoj, malý cestovateľ! Vyber si obrázok, farbu a vymaľuj si Stredomorie po svojom!';
  const intro = document.getElementById('coloring-intro');
  const gallery = document.getElementById('picture-gallery');
  const studio = document.getElementById('coloring-studio');
  const galleryGrid = document.getElementById('picture-grid');
  const paletteGrid = document.getElementById('color-palette');
  const canvas = document.getElementById('coloring-canvas');
  const context = canvas.getContext('2d', { willReadFrequently: true });
  const pictureImage = new Image();
  let selectedPicture = 0;
  let selectedColor = palette[0];
  let originalImageData;
  let soundOn = localStorage.getItem(storageKey) !== 'off';
  let audioContext;
  let paintedActions = 0;
  let praised = false;

  const switchTo = (screen) => {
    intro.hidden = screen !== 'intro';
    gallery.hidden = screen !== 'gallery';
    studio.hidden = screen !== 'studio';
    if ('speechSynthesis' in window && screen !== 'intro') window.speechSynthesis.cancel();
  };
  const setSoundUI = () => {
    const icon = soundOn ? '🔊' : '🔇';
    document.querySelectorAll('#coloring-sound-toggle, #studio-sound-toggle').forEach((button) => { button.setAttribute('aria-pressed', String(soundOn)); button.setAttribute('aria-label', soundOn ? 'Vypnúť zvuk' : 'Zapnúť zvuk'); button.firstChild.textContent = icon; });
    document.getElementById('coloring-sound-label').textContent = soundOn ? 'Zvuk' : 'Bez zvuku';
  };
  const toggleSound = () => { soundOn = !soundOn; localStorage.setItem(storageKey, soundOn ? 'on' : 'off'); if (!soundOn && 'speechSynthesis' in window) window.speechSynthesis.cancel(); setSoundUI(); };
  const tone = (finish = false) => {
    if (!soundOn) return;
    try { audioContext = audioContext || new (window.AudioContext || window.webkitAudioContext)(); const now = audioContext.currentTime; (finish ? [660, 880, 1047] : [590]).forEach((note, index) => { const oscillator = audioContext.createOscillator(); const gain = audioContext.createGain(); oscillator.type = 'sine'; oscillator.frequency.value = note; gain.gain.setValueAtTime(.0001, now + index * .08); gain.gain.exponentialRampToValueAtTime(.045, now + index * .08 + .015); gain.gain.exponentialRampToValueAtTime(.0001, now + index * .08 + .17); oscillator.connect(gain).connect(audioContext.destination); oscillator.start(now + index * .08); oscillator.stop(now + index * .08 + .18); }); } catch (_) { /* Sound is optional. */ }
  };
  const speakIntro = () => { if (!soundOn || !('speechSynthesis' in window)) return; window.speechSynthesis.cancel(); const speech = new SpeechSynthesisUtterance(introText); speech.lang = 'sk-SK'; speech.rate = .9; speech.pitch = 1.05; window.speechSynthesis.speak(speech); };
  const renderGallery = () => { pictures.forEach((picture, index) => { const button = document.createElement('button'); button.className = 'picture-choice'; button.type = 'button'; button.setAttribute('aria-label', `Vybrať omaľovánku ${picture.title}`); button.innerHTML = `<span aria-hidden="true" style="--picture-x:${picture.x};--picture-y:${picture.y}"></span><strong>${picture.title}</strong>`; button.addEventListener('click', () => openPicture(index)); galleryGrid.appendChild(button); }); };
  const renderPalette = () => { palette.forEach((color, index) => { const button = document.createElement('button'); button.className = `palette-color${index === 0 ? ' is-selected' : ''}`; button.type = 'button'; button.style.setProperty('--color', color[1]); button.setAttribute('aria-label', `Vybrať farbu ${color[0]}`); button.setAttribute('aria-pressed', String(index === 0)); button.addEventListener('click', () => { selectedColor = color; document.querySelectorAll('.palette-color').forEach((item) => { const active = item === button; item.classList.toggle('is-selected', active); item.setAttribute('aria-pressed', String(active)); }); document.getElementById('selected-color-name').textContent = `Vybraná je ${color[0].toLowerCase()}.`; }); paletteGrid.appendChild(button); }); };
  const drawPicture = () => {
    const column = selectedPicture % 2;
    const row = Math.floor(selectedPicture / 2);
    const cropWidth = pictureImage.naturalWidth / 2;
    const cropHeight = pictureImage.naturalHeight / 3;
    canvas.width = Math.round(cropWidth);
    canvas.height = Math.round(cropHeight);
    context.imageSmoothingEnabled = true;
    context.drawImage(pictureImage, column * cropWidth, row * cropHeight, cropWidth, cropHeight, 0, 0, canvas.width, canvas.height);
    originalImageData = context.getImageData(0, 0, canvas.width, canvas.height);
    paintedActions = 0;
    praised = false;
    document.getElementById('canvas-praise').hidden = true;
  };
  const openPicture = (index) => { selectedPicture = index; document.getElementById('studio-title').textContent = pictures[index].title; drawPicture(); switchTo('studio'); };
  const isClose = (data, position, target) => Math.abs(data[position] - target[0]) < 48 && Math.abs(data[position + 1] - target[1]) < 48 && Math.abs(data[position + 2] - target[2]) < 48 && Math.abs(data[position + 3] - target[3]) < 48;
  const fillAt = (startX, startY) => {
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    const start = (startY * canvas.width + startX) * 4;
    const target = [data[start], data[start + 1], data[start + 2], data[start + 3]];
    if (target[0] < 105 && target[1] < 105 && target[2] < 105) return;
    const hex = selectedColor[1]; const replacement = [parseInt(hex.slice(1, 3), 16), parseInt(hex.slice(3, 5), 16), parseInt(hex.slice(5, 7), 16), 255];
    if (isClose(replacement, 0, target)) return;
    const queue = [[startX, startY]]; let head = 0; let changed = 0;
    while (head < queue.length && changed < 250000) { const [x, y] = queue[head++]; if (x < 0 || y < 0 || x >= canvas.width || y >= canvas.height) continue; const position = (y * canvas.width + x) * 4; if (!isClose(data, position, target)) continue; data[position] = replacement[0]; data[position + 1] = replacement[1]; data[position + 2] = replacement[2]; data[position + 3] = 255; changed += 1; queue.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]); }
    if (!changed) return;
    context.putImageData(imageData, 0, 0); paintedActions += 1; tone(false);
    if (paintedActions >= 9 && !praised) { praised = true; const praise = document.getElementById('canvas-praise'); praise.hidden = false; tone(true); }
  };
  canvas.addEventListener('click', (event) => { const rect = canvas.getBoundingClientRect(); const x = Math.floor((event.clientX - rect.left) * (canvas.width / rect.width)); const y = Math.floor((event.clientY - rect.top) * (canvas.height / rect.height)); fillAt(x, y); });
  document.getElementById('open-gallery').addEventListener('click', () => switchTo('gallery'));
  document.getElementById('gallery-back').addEventListener('click', () => switchTo('intro'));
  document.getElementById('back-to-gallery').addEventListener('click', () => switchTo('gallery'));
  document.getElementById('next-picture').addEventListener('click', () => openPicture((selectedPicture + 1) % pictures.length));
  document.getElementById('clear-picture').addEventListener('click', () => { context.putImageData(originalImageData, 0, 0); paintedActions = 0; praised = false; document.getElementById('canvas-praise').hidden = true; });
  document.getElementById('repeat-coloring-intro').addEventListener('click', speakIntro);
  document.getElementById('coloring-sound-toggle').addEventListener('click', toggleSound);
  document.getElementById('studio-sound-toggle').addEventListener('click', toggleSound);
  pictureImage.addEventListener('load', () => { renderGallery(); renderPalette(); });
  pictureImage.src = 'vyfarbi-motivy.png';
  setSoundUI();
})();
