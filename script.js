// Expanded Vocabulary Data by Category (Up to 6 words per theme)
const CATEGORIES_DATA = {
    fruits: {
        name: '水果主題 (Fruits)',
        items: [
            { id: 'apple', word: 'Apple', phonetic: '/ˈæpl/', chinese: '蘋果', image: 'assets/apple.jpg' },
            { id: 'banana', word: 'Banana', phonetic: '/bəˈnænə/', chinese: '香蕉', image: 'assets/banana.jpg' },
            { id: 'orange', word: 'Orange', phonetic: '/ˈɒrɪndʒ/', chinese: '柳橙', image: 'assets/orange.jpg' },
            { id: 'grape', word: 'Grape', phonetic: '/ɡreɪp/', chinese: '葡萄', svg: `<svg viewBox="0 0 64 64"><circle cx="32" cy="40" r="10" fill="#a855f7"/><circle cx="22" cy="30" r="9" fill="#9333ea"/><circle cx="42" cy="30" r="9" fill="#9333ea"/><circle cx="32" cy="20" r="9" fill="#7e22ce"/><path d="M32 12 Q38 4 46 8" stroke="#22c55e" stroke-width="4" fill="none" stroke-linecap="round"/></svg>` },
            { id: 'strawberry', word: 'Strawberry', phonetic: '/ˈstrɔːbəri/', chinese: '草莓', svg: `<svg viewBox="0 0 64 64"><path d="M16 22 Q32 54 48 22 Q32 14 16 22 Z" fill="#ef4444"/><path d="M22 18 Q32 6 42 18" stroke="#22c55e" stroke-width="4" fill="#22c55e"/><circle cx="28" cy="28" r="1.5" fill="#fef08a"/><circle cx="36" cy="28" r="1.5" fill="#fef08a"/><circle cx="32" cy="36" r="1.5" fill="#fef08a"/></svg>` },
            { id: 'watermelon', word: 'Watermelon', phonetic: '/ˈwɔːtəmelən/', chinese: '西瓜', svg: `<svg viewBox="0 0 64 64"><path d="M8 20 A24 24 0 0 0 56 20 Z" fill="#15803d"/><path d="M12 20 A20 20 0 0 0 52 20 Z" fill="#ef4444"/><circle cx="24" cy="28" r="2" fill="#0f172a"/><circle cx="32" cy="32" r="2" fill="#0f172a"/><circle cx="40" cy="28" r="2" fill="#0f172a"/></svg>` }
        ]
    },
    animals: {
        name: '動物主題 (Animals)',
        items: [
            { id: 'cat', word: 'Cat', phonetic: '/kæt/', chinese: '貓咪', image: 'assets/cat.jpg' },
            { id: 'dog', word: 'Dog', phonetic: '/dɒɡ/', chinese: '狗狗', svg: `<svg viewBox="0 0 64 64"><path d="M14 18 L24 28 L14 38 Z" fill="#d97706"/><path d="M50 18 L40 28 L50 38 Z" fill="#d97706"/><circle cx="32" cy="36" r="20" fill="#f59e0b"/><circle cx="24" cy="32" r="3" fill="#0f172a"/><circle cx="40" cy="32" r="3" fill="#0f172a"/><ellipse cx="32" cy="40" rx="5" ry="3" fill="#78350f"/><path d="M32 43 C30 47 34 47 32 43" stroke="#ef4444" stroke-width="3" fill="#ef4444"/></svg>` },
            { id: 'lion', word: 'Lion', phonetic: '/ˈlaɪən/', chinese: '獅子', svg: `<svg viewBox="0 0 64 64"><circle cx="32" cy="34" r="24" fill="#b45309"/><circle cx="32" cy="34" r="16" fill="#fbbf24"/><circle cx="26" cy="30" r="2.5" fill="#0f172a"/><circle cx="38" cy="30" r="2.5" fill="#0f172a"/><ellipse cx="32" cy="36" rx="4" ry="2.5" fill="#78350f"/></svg>` },
            { id: 'panda', word: 'Panda', phonetic: '/ˈpændə/', chinese: '貓熊', svg: `<svg viewBox="0 0 64 64"><circle cx="16" cy="18" r="8" fill="#1e293b"/><circle cx="48" cy="18" r="8" fill="#1e293b"/><circle cx="32" cy="36" r="22" fill="#f8fafc"/><ellipse cx="24" cy="32" rx="5" ry="7" fill="#1e293b"/><ellipse cx="40" cy="32" rx="5" ry="7" fill="#1e293b"/><circle cx="25" cy="30" r="2" fill="#fff"/><circle cx="39" cy="30" r="2" fill="#fff"/><ellipse cx="32" cy="40" rx="4" ry="2.5" fill="#1e293b"/></svg>` },
            { id: 'rabbit', word: 'Rabbit', phonetic: '/ˈræbɪt/', chinese: '兔子', svg: `<svg viewBox="0 0 64 64"><ellipse cx="22" cy="16" rx="5" ry="14" fill="#f1f5f9"/><ellipse cx="42" cy="16" rx="5" ry="14" fill="#f1f5f9"/><circle cx="32" cy="38" r="18" fill="#ffffff"/><circle cx="25" cy="34" r="2.5" fill="#ec4899"/><circle cx="39" cy="34" r="2.5" fill="#ec4899"/><ellipse cx="32" cy="40" rx="3" ry="2" fill="#f43f5e"/></svg>` },
            { id: 'elephant', word: 'Elephant', phonetic: '/ˈelɪfənt/', chinese: '大象', svg: `<svg viewBox="0 0 64 64"><circle cx="16" cy="32" r="12" fill="#94a3b8"/><circle cx="48" cy="32" r="12" fill="#94a3b8"/><circle cx="32" cy="34" r="20" fill="#cbd5e1"/><circle cx="25" cy="30" r="2.5" fill="#0f172a"/><circle cx="39" cy="30" r="2.5" fill="#0f172a"/><path d="M32 38 Q26 50 36 50" stroke="#94a3b8" stroke-width="6" fill="none" stroke-linecap="round"/></svg>` }
        ]
    },
    vehicles: {
        name: '交通工具 (Vehicles)',
        items: [
            { id: 'rocket', word: 'Rocket', phonetic: '/ˈrɒkɪt/', chinese: '火箭', image: 'assets/rocket.jpg' },
            { id: 'car', word: 'Car', phonetic: '/kɑːr/', chinese: '汽車', svg: `<svg viewBox="0 0 64 64"><path d="M10 38 L18 22 H46 L54 38 H10 Z" fill="#ef4444"/><rect x="8" y="38" width="48" height="12" rx="4" fill="#dc2626"/><circle cx="18" cy="50" r="6" fill="#1e293b"/><circle cx="18" cy="50" r="3" fill="#cbd5e1"/><circle cx="46" cy="50" r="6" fill="#1e293b"/><circle cx="46" cy="50" r="3" fill="#cbd5e1"/><rect x="22" y="24" width="8" height="10" rx="2" fill="#38bdf8"/><rect x="34" y="24" width="8" height="10" rx="2" fill="#38bdf8"/></svg>` },
            { id: 'bus', word: 'Bus', phonetic: '/bʌs/', chinese: '公車', svg: `<svg viewBox="0 0 64 64"><rect x="10" y="16" width="44" height="34" rx="6" fill="#facc15"/><rect x="14" y="22" width="36" height="12" rx="2" fill="#38bdf8"/><circle cx="20" cy="50" r="5" fill="#1e293b"/><circle cx="44" cy="50" r="5" fill="#1e293b"/><rect x="14" y="38" width="6" height="4" rx="1" fill="#ef4444"/><rect x="44" y="38" width="6" height="4" rx="1" fill="#ef4444"/></svg>` },
            { id: 'airplane', word: 'Airplane', phonetic: '/ˈeəpleɪn/', chinese: '飛機', svg: `<svg viewBox="0 0 64 64"><path d="M8 32 C8 24 56 12 56 32 C56 52 8 40 8 32 Z" fill="#0284c7"/><path d="M26 12 L34 32 L26 52 Z" fill="#38bdf8"/><path d="M10 24 L16 32 L10 40 Z" fill="#0369a1"/></svg>` },
            { id: 'bicycle', word: 'Bicycle', phonetic: '/ˈbaɪsɪkl/', chinese: '腳踏車', svg: `<svg viewBox="0 0 64 64"><circle cx="18" cy="40" r="10" stroke="#10b981" stroke-width="4" fill="none"/><circle cx="46" cy="40" r="10" stroke="#10b981" stroke-width="4" fill="none"/><path d="M18 40 L30 26 L46 40 M30 26 L30 40 M24 26 H34" stroke="#f43f5e" stroke-width="4" fill="none"/></svg>` },
            { id: 'helicopter', word: 'Helicopter', phonetic: '/ˈhelɪkɒptə/', chinese: '直升機', svg: `<svg viewBox="0 0 64 64"><line x1="12" y1="18" x2="52" y2="18" stroke="#cbd5e1" stroke-width="4" stroke-linecap="round"/><circle cx="32" cy="34" r="14" fill="#a855f7"/><rect x="8" y="32" width="14" height="4" fill="#6b21a8"/></svg>` }
        ]
    }
};

// Game State Variables
let currentCategory = 'fruits';
let itemCount = 4; // 4 or 6
let selectedWordCard = null;
let selectedImageCard = null;
let matchedPairIds = new Set();

let score = 0;
let bestScore = parseInt(localStorage.getItem('wordMatchBestScore') || '0', 10);
let combo = 1;
let maxCombo = 1;
let timerStarted = false;
let startTime = 0;
let lastPairTime = 0;
let timerInterval = null;
let audioEnabled = true;
let bgmEnabled = false;
let bgmTimer = null;

// DOM Elements
const wordsGrid = document.getElementById('words-grid');
const imagesGrid = document.getElementById('images-grid');
const timerDisplay = document.getElementById('timer-display');
const scoreDisplay = document.getElementById('score-display');
const bestScoreDisplay = document.getElementById('best-score-display');
const comboDisplay = document.getElementById('combo-display');
const restartBtn = document.getElementById('restart-btn');
const audioToggle = document.getElementById('audio-toggle');
const audioIcon = document.getElementById('audio-icon');
const bgmToggle = document.getElementById('bgm-toggle');
const bgmIcon = document.getElementById('bgm-icon');

const categoryTabs = document.querySelectorAll('.category-tab');
const diffTabs = document.querySelectorAll('.diff-tab');

// Victory Modal DOM
const victoryModal = document.getElementById('victory-modal');
const victoryCategoryName = document.getElementById('victory-category-name');
const finalScoreEl = document.getElementById('final-score');
const finalTimeEl = document.getElementById('final-time');
const finalComboEl = document.getElementById('final-combo');
const modalRestartBtn = document.getElementById('modal-restart-btn');
const nextThemeBtn = document.getElementById('next-theme-btn');
const toastContainer = document.getElementById('toast-container');

// Web Audio API Synth Sound Effects & BGM Generator
class SoundEffects {
    constructor() {
        this.ctx = null;
    }

    init() {
        if (!this.ctx) {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (AudioCtx) this.ctx = new AudioCtx();
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    playClick() {
        if (!audioEnabled) return;
        this.init();
        if (!this.ctx) return;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.08);

        gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.08);
    }

    playCorrect() {
        if (!audioEnabled) return;
        this.init();
        if (!this.ctx) return;

        const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 major arpeggio
        notes.forEach((freq, idx) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.08);

            gain.gain.setValueAtTime(0, this.ctx.currentTime + idx * 0.08);
            gain.gain.linearRampToValueAtTime(0.2, this.ctx.currentTime + idx * 0.08 + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.08 + 0.3);

            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(this.ctx.currentTime + idx * 0.08);
            osc.stop(this.ctx.currentTime + idx * 0.08 + 0.3);
        });
    }

    playWrong() {
        if (!audioEnabled) return;
        this.init();
        if (!this.ctx) return;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(180, this.ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(110, this.ctx.currentTime + 0.25);

        gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.25);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.25);
    }

    playVictory() {
        if (!audioEnabled) return;
        this.init();
        if (!this.ctx) return;

        const tune = [
            { f: 523.25, d: 0.15 },
            { f: 659.25, d: 0.15 },
            { f: 783.99, d: 0.15 },
            { f: 1046.50, d: 0.4 }
        ];

        let now = this.ctx.currentTime;
        tune.forEach(note => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(note.f, now);

            gain.gain.setValueAtTime(0.25, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + note.d);

            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now);
            osc.stop(now + note.d);
            now += note.d * 0.9;
        });
    }

    playBgmNote(freq) {
        if (!bgmEnabled) return;
        this.init();
        if (!this.ctx) return;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

        gain.gain.setValueAtTime(0, this.ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.04, this.ctx.currentTime + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.8);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.8);
    }
}

const sfx = new SoundEffects();

// BGM Synth Beat Loop
let bgmNoteIndex = 0;
const bgmNotes = [261.63, 329.63, 392.00, 523.25, 392.00, 329.63];

function startBgm() {
    stopBgm();
    bgmTimer = setInterval(() => {
        if (bgmEnabled) {
            sfx.playBgmNote(bgmNotes[bgmNoteIndex]);
            bgmNoteIndex = (bgmNoteIndex + 1) % bgmNotes.length;
        }
    }, 700);
}

function stopBgm() {
    if (bgmTimer) {
        clearInterval(bgmTimer);
        bgmTimer = null;
    }
}

// Speech Synthesis Helper
function speakWord(text) {
    if ('speechSynthesis' in window && audioEnabled) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    }
}

// Utility: Shuffle Array (Fisher-Yates)
function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Initialize / Restart Game Board
function initGame() {
    // Reset state
    selectedWordCard = null;
    selectedImageCard = null;
    matchedPairIds.clear();
    score = 0;
    combo = 1;
    maxCombo = 1;
    timerStarted = false;
    clearInterval(timerInterval);

    // Update Best Score Display
    bestScoreDisplay.textContent = bestScore.toLocaleString();

    // Reset UI
    scoreDisplay.textContent = '0';
    comboDisplay.textContent = 'x1';
    timerDisplay.textContent = '0.00 秒';
    victoryModal.classList.add('hidden');
    stopConfetti();

    // Clear board grids
    wordsGrid.innerHTML = '';
    imagesGrid.innerHTML = '';

    // Slice vocabulary based on difficulty (4 or 6)
    const fullVocab = CATEGORIES_DATA[currentCategory].items;
    const activeVocab = fullVocab.slice(0, itemCount);

    // Shuffle words and images independently
    const shuffledWords = shuffle(activeVocab);
    const shuffledImages = shuffle(activeVocab);

    // Render Word Cards
    shuffledWords.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card word-card';
        card.dataset.id = item.id;
        card.dataset.type = 'word';

        card.innerHTML = `
            <div class="word-content">
                <span class="english-word">${item.word}</span>
                <span class="phonetic">${item.phonetic}</span>
                <span class="chinese-hint">${item.chinese}</span>
            </div>
            <span class="card-speaker-icon">🔊</span>
        `;

        card.addEventListener('click', () => handleCardClick(card, item));
        wordsGrid.appendChild(card);
    });

    // Render Image Cards
    shuffledImages.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card image-card';
        card.dataset.id = item.id;
        card.dataset.type = 'image';

        if (item.image) {
            card.innerHTML = `<img src="${item.image}" alt="${item.word}" draggable="false" />`;
        } else if (item.svg) {
            card.innerHTML = `<div class="svg-art-container">${item.svg}</div>`;
        }

        card.addEventListener('click', () => handleCardClick(card, item));
        imagesGrid.appendChild(card);
    });
}

// Start Game Timer
function startTimer() {
    if (timerStarted) return;
    timerStarted = true;
    startTime = Date.now();
    lastPairTime = startTime;

    timerInterval = setInterval(() => {
        const elapsed = (Date.now() - startTime) / 1000;
        timerDisplay.textContent = elapsed.toFixed(2) + ' 秒';
    }, 30);
}

// Card Click Handler
function handleCardClick(card, item) {
    if (card.classList.contains('matched')) return;

    // Start timer on first interaction
    startTimer();

    sfx.playClick();

    if (card.dataset.type === 'word') {
        speakWord(item.word);
        
        if (selectedWordCard) {
            selectedWordCard.classList.remove('selected');
        }
        selectedWordCard = card;
        selectedWordCard.classList.add('selected');
    } else {
        if (selectedImageCard) {
            selectedImageCard.classList.remove('selected');
        }
        selectedImageCard = card;
        selectedImageCard.classList.add('selected');
    }

    if (selectedWordCard && selectedImageCard) {
        checkMatch();
    }
}

// Check Pair Match
function checkMatch() {
    const wordId = selectedWordCard.dataset.id;
    const imageId = selectedImageCard.dataset.id;

    if (wordId === imageId) {
        // CORRECT MATCH!
        const matchedWordCard = selectedWordCard;
        const matchedImageCard = selectedImageCard;

        matchedWordCard.classList.remove('selected');
        matchedImageCard.classList.remove('selected');
        matchedWordCard.classList.add('matched');
        matchedImageCard.classList.add('matched');

        matchedPairIds.add(wordId);
        sfx.playCorrect();

        // Calculate Speed-Based Score
        const now = Date.now();
        const pairDuration = (now - lastPairTime) / 1000;
        lastPairTime = now;

        const baseScore = 1000;
        let speedBonus = 0;
        let speedLabel = '';

        if (pairDuration <= 2.0) {
            speedBonus = 1000;
            speedLabel = '⚡ 閃電神速!';
        } else if (pairDuration <= 4.0) {
            speedBonus = 700;
            speedLabel = '🚀 超快反應!';
        } else if (pairDuration <= 7.0) {
            speedBonus = 400;
            speedLabel = '👍 迅速配對!';
        } else {
            speedBonus = 200;
            speedLabel = '✨ 配對成功!';
        }

        const pointsGained = Math.round((baseScore + speedBonus) * combo);
        score += pointsGained;

        // Check & Update LocalStorage Best Score
        if (score > bestScore) {
            bestScore = score;
            localStorage.setItem('wordMatchBestScore', bestScore.toString());
            bestScoreDisplay.textContent = bestScore.toLocaleString();
        }

        // Toast feedback
        showToast(`+${pointsGained.toLocaleString()} Pts! ${speedLabel} (${pairDuration.toFixed(1)}s)`);

        // Update Combo
        if (combo > maxCombo) maxCombo = combo;
        combo++;
        
        // Update UI
        scoreDisplay.textContent = score.toLocaleString();
        comboDisplay.textContent = `x${combo}`;

        selectedWordCard = null;
        selectedImageCard = null;

        // Check Victory Condition
        if (matchedPairIds.size === itemCount) {
            handleVictory();
        }

    } else {
        // WRONG MATCH!
        const wCard = selectedWordCard;
        const iCard = selectedImageCard;

        wCard.classList.add('shake');
        iCard.classList.add('shake');
        sfx.playWrong();

        combo = 1;
        comboDisplay.textContent = 'x1';

        setTimeout(() => {
            wCard.classList.remove('shake', 'selected');
            iCard.classList.remove('shake', 'selected');
        }, 450);

        selectedWordCard = null;
        selectedImageCard = null;
    }
}

// Victory Handler
function handleVictory() {
    clearInterval(timerInterval);
    const totalTime = ((Date.now() - startTime) / 1000).toFixed(2);

    sfx.playVictory();
    startConfetti();

    // Calculate rating stars
    const targetTime = itemCount * 3;
    const numStars = totalTime < targetTime ? 3 : totalTime < (targetTime * 1.8) ? 2 : 1;
    const starContainer = document.getElementById('star-rating');
    starContainer.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        const star = document.createElement('span');
        star.className = `star ${i < numStars ? 'active' : ''}`;
        star.textContent = '★';
        starContainer.appendChild(star);
    }

    victoryCategoryName.textContent = `你完成了【${CATEGORIES_DATA[currentCategory].name}】(${itemCount} 單字) 配對！`;
    finalScoreEl.textContent = score.toLocaleString();
    finalTimeEl.textContent = `${totalTime} 秒`;
    finalComboEl.textContent = `x${maxCombo}`;

    setTimeout(() => {
        victoryModal.classList.remove('hidden');
    }, 600);
}

// Toast Popup Function
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = message;
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 2000);
}

// Category Tab Switch Listener
categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetCategory = tab.dataset.category;
        if (targetCategory === currentCategory) return;

        categoryTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        currentCategory = targetCategory;
        sfx.playClick();
        initGame();
    });
});

// Difficulty Tab Switch Listener
diffTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const count = parseInt(tab.dataset.count, 10);
        if (count === itemCount) return;

        diffTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        itemCount = count;
        sfx.playClick();
        initGame();
    });
});

// BGM Toggle Button
bgmToggle.addEventListener('click', () => {
    bgmEnabled = !bgmEnabled;
    bgmToggle.classList.toggle('active', bgmEnabled);
    bgmIcon.textContent = bgmEnabled ? '🎵' : '🔇';

    if (bgmEnabled) {
        startBgm();
        showToast('🎵 背景音樂已開啟');
    } else {
        stopBgm();
        showToast('🔇 背景音樂已關閉');
    }
});

// Audio Toggle Button
audioToggle.addEventListener('click', () => {
    audioEnabled = !audioEnabled;
    audioIcon.textContent = audioEnabled ? '🔊' : '🔇';
    audioToggle.title = audioEnabled ? '靜音' : '開啟音效';
});

// Restart Buttons
restartBtn.addEventListener('click', () => {
    sfx.playClick();
    initGame();
});

modalRestartBtn.addEventListener('click', () => {
    sfx.playClick();
    initGame();
});

// Next Theme Button Action
nextThemeBtn.addEventListener('click', () => {
    sfx.playClick();
    const categories = Object.keys(CATEGORIES_DATA);
    const nextIdx = (categories.indexOf(currentCategory) + 1) % categories.length;
    currentCategory = categories[nextIdx];

    categoryTabs.forEach(tab => {
        tab.classList.toggle('active', tab.dataset.category === currentCategory);
    });

    initGame();
});

// Canvas Confetti Implementation
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');
let confettiParticles = [];
let confettiAnimationId = null;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function startConfetti() {
    confettiParticles = [];
    const colors = ['#6366f1', '#06b6d4', '#ec4899', '#facc15', '#10b981'];

    for (let i = 0; i < 120; i++) {
        confettiParticles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 6 + 4,
            d: Math.random() * 10 + 10,
            color: colors[Math.floor(Math.random() * colors.length)],
            tilt: Math.random() * 10 - 10,
            tiltAngleIncremental: Math.random() * 0.07 + 0.05,
            tiltAngle: 0
        });
    }

    animateConfetti();
}

function animateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confettiParticles.forEach((p, idx) => {
        p.tiltAngle += p.tiltAngleIncremental;
        p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
        p.x += Math.sin(0.5);
        p.tilt = Math.sin(p.tiltAngle) * 15;

        ctx.beginPath();
        ctx.lineWidth = p.r;
        ctx.strokeStyle = p.color;
        ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
        ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
        ctx.stroke();

        if (p.y > canvas.height) {
            confettiParticles[idx] = {
                x: Math.random() * canvas.width,
                y: -20,
                r: p.r,
                d: p.d,
                color: p.color,
                tilt: p.tilt,
                tiltAngleIncremental: p.tiltAngleIncremental,
                tiltAngle: p.tiltAngle
            };
        }
    });

    confettiAnimationId = requestAnimationFrame(animateConfetti);
}

function stopConfetti() {
    if (confettiAnimationId) {
        cancelAnimationFrame(confettiAnimationId);
        confettiAnimationId = null;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    initGame();
});
