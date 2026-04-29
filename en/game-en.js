
const levels = [
  {
    id: 1,
    title: "What still works?",
    intro: "Click all items that might still work during a massive power outage.",
    hint: "Think about devices that don't need the public power grid.",
    type: "multi-select",
    options: [
      { id: "bike", label: "Bicycle", works: true },
      { id: "charger", label: "Charger (plugged in)", works: false },
      { id: "tap", label: "Tap water", works: false },
      { id: "atm", label: "ATM", works: false },
      { id: "crank", label: "Hand-crank radio", works: true },
      { id: "solar", label: "Solar lamp", works: true },
      { id: "wood", label: "Wood stove", works: true },
      { id: "wifi", label: "WiFi router", works: false },
      { id: "flash", label: "Flashlight (battery)", works: true },
      { id: "camp", label: "Camping stove", works: true },
      { id: "bell", label: "Electric doorbell", works: false },
      { id: "heat", label: "Heating", works: false },
      { id: "lift", label: "Elevator", works: false }
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
    title: "Battery & Powerbank",
    intro: "Select two devices to power. Calculate the energy and check if it lasts.",
    hint: "Remember: Energy (Wh) = Power (W) * Time (h).",
    type: "text-quiz",
    questionHtml: `<p>A powerbank has <strong>37 Wh</strong>.</p><p>Smartphone charge: <strong>6 Wh</strong>. WiFi router: <strong>12 Wh/h</strong>.</p><p>Q1: Max smartphone charges? Q2: Minutes router runs?</p>`,
    solution: { q1: "6", q2: "180" },
    successCode: "20"
  },
  {
    id: 3,
    title: "Household Energy Demand",
    intro: "Which area consumes the most electrical energy in a typical household?",
    hint: "Think about large appliances.",
    type: "single-choice",
    options: [
      { id: "light", label: "Lighting", correct: false },
      { id: "it", label: "IT / Entertainment", correct: false },
      { id: "heat", label: "Heating / Hot Water", correct: true },
      { id: "kitchen", label: "Kitchen / Cooking", correct: false }
    ],
    successCode: "28"
  },
  {
    id: 4,
    title: "The 20 kg Stone",
    intro: "A 20 kg stone is 20 m high. How much energy is stored?",
    hint: "Use: Energy = Mass * Height * Gravity (10 m/s²).",
    type: "single-choice",
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
    title: "Light it up",
    intro: "Two solar modules. How to connect them for higher voltage?",
    hint: "Do you add voltage or current in series?",
    type: "single-choice",
    options: [
      { id: "series", label: "Series connection", correct: true },
      { id: "parallel", label: "Parallel connection", correct: false }
    ],
    successCode: "12"
  },
  {
    id: 6,
    title: "Secret Code",
    intro: "Click all cells with the digit '2' to reveal the code.",
    hint: "Be thorough!",
    type: "number-grid",
    gridSize: 10,
    generateGrid() {
      const rows = [];
      const hiddenCode = "6025";
      for (let r = 0; r < 10; r++) {
        const row = [];
        for (let c = 0; c < 10; c++) {
          row.push([1,3,5,7].includes(c) && Math.random() < 0.7 ? 2 : Math.floor(Math.random() * 10));
        }
        rows.push(row);
      }
      return { rows, hiddenCode };
    },
    successCode: "6025"
  }
];

let currentLevelIndex = -1;
let timer = 0;
let timerInterval = null;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn-start").addEventListener("click", startGame);
  document.getElementById("btn-restart").addEventListener("click", restartGame);
});

function startGame() {
  document.getElementById("intro").classList.add("hidden");
  currentLevelIndex = 0;
  startTimer();
  renderCurrentLevel();
}

function startTimer() {
  timer = 0;
  timerInterval = setInterval(() => {
    timer++;
    const m = Math.floor(timer / 60).toString().padStart(2, '0');
    const s = (timer % 60).toString().padStart(2, '0');
    document.getElementById("timer").textContent = `⏱ Time: ${m}:${s}`;
  }, 1000);
}

function restartGame() {
  location.reload();
}

function renderCurrentLevel() {
  const container = document.getElementById("level-container");
  container.innerHTML = "";
  if (currentLevelIndex >= levels.length) {
    clearInterval(timerInterval);
    showOutro();
    return;
  }
  const level = levels[currentLevelIndex];
  const card = document.createElement("section");
  card.className = "card card-house";
  card.innerHTML = `<div class="house-header"><span>${level.id}</span></div>
    <div class="card-content">
      <h2>${level.title}</h2>
      <p>${level.intro}</p>
      <div id="puzzle"></div>
      <div id="feedback" class="feedback"></div>
      <p id="code-info"></p>
      <button id="btn-check" class="btn primary">Check Answer</button>
      <button id="btn-next" class="btn hidden">Next House</button>
    </div>`;
  container.appendChild(card);

  // (Simplified rendering logic for brevity)
  // In a real scenario, reuse the render functions
  renderPuzzle(level);

  document.getElementById("btn-next").addEventListener("click", () => {
    currentLevelIndex++;
    renderCurrentLevel();
  });
}

function handleResult(ok, level) {
  const feedback = document.getElementById("feedback");
  const btnCheck = document.getElementById("btn-check");
  const btnNext = document.getElementById("btn-next");
  if (ok) {
    feedback.textContent = "Correct! You mastered this house.";
    feedback.className = "feedback ok";
    document.getElementById("code-info").innerHTML = `Code: <strong>${level.successCode}</strong>`;
    btnCheck.classList.add("hidden");
    btnNext.classList.remove("hidden");
  } else {
    feedback.textContent = "Not quite. " + level.hint;
    feedback.className = "feedback error";
  }
}
