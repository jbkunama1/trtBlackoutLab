// js/game.js

const levels = [
  {
    id: 1,
    title: "Was funktioniert noch?",
    intro: "Klickt alle Dinge an, die auch bei einem großflächigen Stromausfall noch funktionieren können.",
    type: "multi-select",
    icon: "🔍",
    hint: "Denkt an Geräte, die **kein** Stromnetz brauchen oder ihren eigenen Speicher haben.",
    options: [
      { id: "bike", label: "Fahrrad", works: true },
      { id: "charger", label: "Ladegerät in Steckdose", works: false },
      { id: "tapwater", label: "Trinkwasserversorgung", works: false },
      { id: "atm", label: "Geldautomat", works: false },
      { id: "crank", label: "Notrufstelle mit Kurbel", works: true },
      { id: "solar-standalone", label: "Solarlampe", works: true },
      { id: "woodstove", label: "Holzofen", works: true },
      { id: "wifi", label: "WLAN-Router", works: false },
      { id: "flashlight", label: "Taschenlampe (Batterie)", works: true },
      { id: "campstove", label: "Campingkocher", works: true },
      { id: "doorbell", label: "Türklingel elektr.", works: false },
      { id: "heating", label: "Heizung", works: false },
      { id: "lift", label: "Aufzug", works: false }
    ],
    solutionCheck(selected, options) {
      const correctIds = options.filter(o => o.works).map(o => o.id).sort();
      const chosen = [...selected].sort();
      return JSON.stringify(correctIds) === JSON.stringify(chosen);
    },
    successCode: "17"
  },
  {
    id: 2,
    title: "Akku & Powerbank",
    intro: "Plant klug: Wie lange reicht eure Energie wirklich?",
    type: "text-quiz",
    icon: "🔋",
    hint: "Rechnet zuerst in Wh, danach in Stunden bzw. Minuten um.",
    questionHtml: `
      <p>Eine Powerbank hat eine Energie von <strong>37 Wh</strong>.</p>
      <p>Ein Smartphone benötigt ca. <strong>6 Wh</strong> für eine volle Ladung, ein WLAN-Router <strong>12 Wh</strong> für eine Stunde.</p>
      <p>Frage 1: Wie viele vollständige Smartphone-Ladungen sind maximal möglich?</p>
      <p>Frage 2: Wie viele Minuten könnte der WLAN-Router allein laufen?</p>
    `,
    solution: { q1: "6", q2: "180" },
    successCode: "20"
  },
  {
    id: 3,
    title: "Bedarf im Haushalt",
    intro: "Welcher Bereich schluckt im Alltag am meisten Energie?",
    type: "single-choice",
    icon: "🏠",
    hint: "Denkt an Geräte, die viel heizen oder Wasser erwärmen müssen.",
    options: [
      { id: "light", label: "Licht", correct: false },
      { id: "it", label: "Computer / Unterhaltung", correct: false },
      { id: "heat", label: "Heizung / Warmwasser", correct: true },
      { id: "kitchen", label: "Küche / Kochen", correct: false }
    ],
    successCode: "28"
  },
  {
    id: 4,
    title: "Der 20‑kg‑Stein",
    intro: "Wie viel Lageenergie steckt in deinem mühsam getragenen Stein?",
    type: "single-choice",
    icon: "🪨",
    hint: "Energie = Masse × Höhe × Ortsfaktor. Schätzt eher grob als zu genau.",
    options: [
      { id: "1wh", label: "≈ 1 Wh", correct: false },
      { id: "5wh", label: "≈ 5 Wh", correct: false },
      { id: "10wh", label: "≈ 10 Wh", correct: true },
      { id: "50wh", label: "≈ 50 Wh", correct: false }
    ],
    successCode: "10"
  },
  {
    id: 5,
    title: "Die Lampe muss leuchten",
    intro: "Welche Schaltung bringt eure Solar-Lampe wirklich zum Strahlen?",
    type: "single-choice",
    icon: "💡",
    hint: "In Reihe addieren sich Spannungen, in Parallelschaltung die Ströme.",
    options: [
      { id: "series", label: "Reihenschaltung", correct: true },
      { id: "parallel", label: "Parallelschaltung", correct: false }
    ],
    successCode: "12"
  },
  {
    id: 6,
    title: "Der geheime Zahlencode",
    intro: "Markiert alle 2er im Gitter – so erscheint euer Notruf-Code.",
    type: "number-grid",
    icon: "🔐",
    hint: "Konzentriert euch zuerst auf ganze Spalten oder Zeilen mit vielen 2ern.",
    gridSize: 10,
    generateGrid() {
      const rows = [];
      const hiddenCode = "6025";
      const highlightCols = [1, 3, 5, 7];
      for (let r = 0; r < 10; r++) {
        const row = [];
        for (let c = 0; c < 10; c++) {
          let val;
          if (highlightCols.includes(c) && Math.random() < 0.7) {
            val = 2;
          } else {
            val = Math.floor(Math.random() * 10);
          }
          row.push(val);
        }
        rows.push(row);
      }
      return { rows, hiddenCode };
    },
    successCode: "6025"
  }
];

      const hiddenCode = "6025";
      const highlightCols = [1, 3, 5, 7];
      for (let r = 0; r < 10; r++) {
        const row = [];
        for (let c = 0; c < 10; c++) {
          let val;
          if (highlightCols.includes(c) && Math.random() < 0.7) {
            val = 2;
          } else {
            val = Math.floor(Math.random() * 10);
          }
          row.push(val);
        }
        rows.push(row);
      }
      return { rows, hiddenCode };
    },
    successCode: "6025"
  }
];

let currentLevelIndex = -1;

let gameStartTime = null;
let timerInterval = null;

function startTimer() {
  gameStartTime = Date.now();
  const el = document.getElementById('time-display');
  if (!el) return;
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    const diff = Date.now() - gameStartTime;
    const minutes = Math.floor(diff / 60000);
    const seconds = Math.floor((diff % 60000) / 1000).toString().padStart(2, '0');
    el.textContent = `${minutes}:${seconds}`;
  }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("btn-start");
  const restartBtn = document.getElementById("btn-restart");

  startBtn.addEventListener("click", startGame);
  restartBtn.addEventListener("click", restartGame);

  updateProgress(-1);
});

function startGame() {
  startTimer();
  document.getElementById("intro").classList.add("hidden");
  currentLevelIndex = 0;
  renderCurrentLevel();
}

function restartGame() {
  currentLevelIndex = 0;
  document.getElementById("outro").classList.add("hidden");
  renderCurrentLevel();
}

function renderCurrentLevel() {
  const container = document.getElementById("level-container");
  container.innerHTML = "";
  const outro = document.getElementById("outro");
  outro.classList.add("hidden");

  if (currentLevelIndex >= levels.length) {
    showOutro();
    return;
  }

  const level = levels[currentLevelIndex];
  updateProgress(currentLevelIndex);

  const card = document.createElement("section");
  card.className = "card card-house";

  const header = document.createElement("div");
  header.className = "house-header";
  header.innerHTML = `<span class="house-number">Haus ${level.id}</span>`;
  card.appendChild(header);

  const content = document.createElement("div");
  content.className = "card-content";

  const h2 = document.createElement("h2");
  h2.textContent = `${level.icon || ''} ${level.title}`.trim();
  content.appendChild(h2);

  const pIntro = document.createElement("p");
  pIntro.innerHTML = level.intro;
  content.appendChild(pIntro);

  const puzzleContainer = document.createElement("div");
  puzzleContainer.id = "puzzle";
  content.appendChild(puzzleContainer);

  const feedback = document.createElement("div");
  feedback.id = "feedback";
  feedback.className = "feedback";
  content.appendChild(feedback);

  const codeInfo = document.createElement("p");
  codeInfo.id = "code-info";
  content.appendChild(codeInfo);

  const btnCheck = document.createElement("button");
  btnCheck.textContent = "Antwort prüfen";
  btnCheck.className = "btn primary";
  content.appendChild(btnCheck);

  const btnNext = document.createElement("button");
  btnNext.textContent = "Weiter zum nächsten Haus";
  btnNext.className = "btn hidden";
  content.appendChild(btnNext);

  card.appendChild(content);
  container.appendChild(card);

  switch (level.type) {
    case "multi-select":
      renderMultiSelect(level, puzzleContainer, btnCheck, feedback, codeInfo, btnNext);
      break;
    case "single-choice":
      renderSingleChoice(level, puzzleContainer, btnCheck, feedback, codeInfo, btnNext);
      break;
    case "text-quiz":
      renderTextQuiz(level, puzzleContainer, btnCheck, feedback, codeInfo, btnNext);
      break;
    case "number-grid":
      renderNumberGrid(level, puzzleContainer, btnCheck, feedback, codeInfo, btnNext);
      break;
  }

  btnNext.addEventListener("click", () => {
    currentLevelIndex++;
    renderCurrentLevel();
  });
}

function renderMultiSelect(level, container, btnCheck, feedback, codeInfo, btnNext) {
  const grid = document.createElement("div");
  grid.className = "grid grid-4";

  const selected = new Set();

  level.options.forEach(opt => {
    const div = document.createElement("div");
    div.className = "option-card";
    div.innerHTML = `<div class="option-title">${opt.label}</div>`;
    div.addEventListener("click", () => {
      if (selected.has(opt.id)) {
        selected.delete(opt.id);
        div.classList.remove("selected");
      } else {
        selected.add(opt.id);
        div.classList.add("selected");
      }
    });
    grid.appendChild(div);
  });

  container.appendChild(grid);

  btnCheck.addEventListener("click", () => {
    const ok = level.solutionCheck(selected, level.options);
    handleResult(ok, level, feedback, codeInfo, btnCheck, btnNext);
  });
}

function renderSingleChoice(level, container, btnCheck, feedback, codeInfo, btnNext) {
  const grid = document.createElement("div");
  grid.className = "grid grid-4";
  let selectedId = null;

  level.options.forEach(opt => {
    const div = document.createElement("div");
    div.className = "option-card";
    div.innerHTML = `<div class="option-title">${opt.label}</div>`;
    div.addEventListener("click", () => {
      selectedId = opt.id;
      [...grid.children].forEach(c => c.classList.remove("selected"));
      div.classList.add("selected");
    });
    grid.appendChild(div);
  });

  container.appendChild(grid);

  btnCheck.addEventListener("click", () => {
    if (!selectedId) {
      feedback.textContent = "Bitte wählt eine Option aus.";
      feedback.className = "feedback error";
      return;
    }
    const chosen = level.options.find(o => o.id === selectedId);
    const ok = chosen && chosen.correct;
    handleResult(ok, level, feedback, codeInfo, btnCheck, btnNext);
  });
}

function renderTextQuiz(level, container, btnCheck, feedback, codeInfo, btnNext) {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = level.questionHtml;

  const q1 = document.createElement("input");
  q1.type = "number";
  q1.placeholder = "Antwort 1";
  q1.style.marginRight = "0.5rem";

  const q2 = document.createElement("input");
  q2.type = "number";
  q2.placeholder = "Antwort 2";

  const inputs = document.createElement("div");
  inputs.style.marginTop = "0.5rem";
  inputs.appendChild(q1);
  inputs.appendChild(q2);

  wrapper.appendChild(inputs);
  container.appendChild(wrapper);

  btnCheck.addEventListener("click", () => {
    const a1 = q1.value.trim();
    const a2 = q2.value.trim();
    const ok = a1 === level.solution.q1 && a2 === level.solution.q2;
    handleResult(ok, level, feedback, codeInfo, btnCheck, btnNext);
  });
}

function renderNumberGrid(level, container, btnCheck, feedback, codeInfo, btnNext) {
  const { rows, hiddenCode } = level.generateGrid();
  level._hiddenCode = hiddenCode;

  const grid = document.createElement("div");
  grid.className = "number-grid";

  rows.forEach(row => {
    row.forEach(val => {
      const cell = document.createElement("div");
      cell.className = "number-cell";
      cell.textContent = val;
      cell.addEventListener("click", () => {
        if (val === 2) {
          cell.classList.toggle("marked");
        }
      });
      grid.appendChild(cell);
    });
  });

  container.appendChild(grid);

  btnCheck.addEventListener("click", () => {
    handleResult(true, level, feedback, codeInfo, btnCheck, btnNext);
  });
}

function handleResult(ok, level, feedback, codeInfo, btnCheck, btnNext) {
  if (ok) {
    feedback.textContent = "Richtig! Ihr habt dieses Haus gemeistert.";
    feedback.className = "feedback ok";
    const code = level.successCode;
    codeInfo.innerHTML =
      `Merkt euch diese Zahl(en): <span class="pill">${code}</span>`;
    btnCheck.disabled = true;
    btnNext.classList.remove("hidden");
  } else {
    const base = "Das passt noch nicht ganz. Versucht es noch einmal.";
    const hint = level.hint ? " Tipp: " + level.hint : "";
    feedback.innerHTML = base + hint;
    feedback.className = "feedback error";
  }
}


function showOutro() {
  const container = document.getElementById("level-container");
  container.innerHTML = "";
  const outro = document.getElementById("outro");
  const allCodes = levels.map(l => l.successCode).join(" - ");
  document.getElementById("outro-text").innerHTML =
    `Alle gefundenen Codes ergeben zusammen die Notfall-PIN: <strong>${allCodes}</strong>. ` +
    "Mit dieser PIN könnt ihr den Netzbetreiber anrufen – der Strom kommt zurück!";
  outro.classList.remove("hidden");
  updateProgress(levels.length - 1, true);
}

function updateProgress(activeIndex, finished = false) {
  const steps = document.querySelectorAll('.progress-step');
  if (!steps.length) return;
  steps.forEach(step => {
    step.classList.remove('active', 'done');
    const stepNum = parseInt(step.getAttribute('data-step'), 10) - 1;
    if (activeIndex === -1) return;
    if (stepNum < activeIndex) {
      step.classList.add('done');
    } else if (stepNum === activeIndex && !finished) {
      step.classList.add('active');
    } else if (finished) {
      step.classList.add('done');
    }
  });
}
