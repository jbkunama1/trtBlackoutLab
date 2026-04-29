# 🌍 Blackout Lab – Online Escape Game about the Energy Transition

<div align="center">

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](../LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?logo=javascript&logoColor=black)](#)
[![Docker](https://img.shields.io/badge/Docker-%230db7ed.svg?logo=docker&logoColor=white)](#-docker--server-deployment)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](#-contributing)

> 🎮 A cooperative browser escape game for the classroom –  
> about blackouts, energy storage and the All Electric Society.

[🇩🇪 Deutsch (main README)](../README.md) · [🚀 Getting Started](#-getting-started)

</div>

---

## 📋 Table of Contents

- [What is Blackout Lab?](#-what-is-blackout-lab)
- [Key Features](#-key-features)
- [The 6 Levels](#-the-6-levels)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Educational Use](#-educational-use)
- [Customizing Puzzles](#-customizing-puzzles)
- [Contributing](#-contributing)
- [License](#-license)

---

## �� What is Blackout Lab?

**Blackout Lab** is a lightweight, browser-based escape game designed for STEM
education (roughly grade 8 and up). Students solve six interconnected puzzles
about power outages, household energy demand, energy storage and solar panels –
directly in the browser, no login, no backend required.

```
💡 Scenario: A large-scale power outage has hit your city.
   Your team must restore energy house by house –
   before the last battery runs out! 🔋⏰
```

> 📝 Note: This is an independent adaptation for educational purposes and does
> not use original graphics or texts from other providers.

---

## 🌟 Key Features

| Feature | Details |
|---|---|
| 🏠 **6 interactive levels** | Blackout · Energy demand · Storage types · Solar |
| 🌐 **100% client-side** | Plain HTML, CSS & JavaScript – no backend needed |
| 👨‍🏫 **Teacher-friendly** | Puzzles, texts & codes defined in `js/game-en.js` |
| 🤝 **Cooperative** | Works best with 3–5 students per device |
| 📱 **Responsive** | Runs on desktops, tablets and larger phones |
| 🐳 **Docker-ready** | One-command deployment via Docker & nginx |
| 🔓 **Open Source** | MIT-licensed – free for educational use |

---

## 🏘 The 6 Levels

```
🏠 House 1  🏠 House 2  🏠 House 3  🏠 House 4  🏠 House 5  🏠 House 6
    🔌           📊           💧           🔋           ☀️           🏆
 Blackout!   Energy      Storage      Storage      Solar       Final
  Basics     Demand       Types      Capacity     System    Challenge
```

| # | 🏠 Level | 🎯 Topic | 🧩 Puzzle Type |
|---|----------|----------|----------------|
| 1 | **House 1 – Blackout!** 🔌 | Power outages & emergency preparedness | Multi-Select |
| 2 | **House 2 – Energy Demand** 📊 | Estimating household energy consumption | Number Quiz |
| 3 | **House 3 – Storage Types** 💧 | Chemical & potential energy storage | Single-Choice |
| 4 | **House 4 – Capacity** 🔋 | Calculating storage capacity | Text Quiz |
| 5 | **House 5 – Solar** ☀️ | PV module series/parallel circuits | Number Grid |
| 6 | **House 6 – Final** 🏆 | Bringing it all together | Combined |

---

## 🏗 Project Structure

```text
trtBlackoutLab/
├─ 📄 index.html          # 🇩🇪 German game entry point
├─ 📁 en/
│  ├─ 📄 index.html       # 🇬🇧 English game entry point  ← you are here
│  └─ 📄 README.md        # This file
├─ 📁 css/
│  └─ styles.css          # 🎨 Layout, house design & animations
├─ 📁 js/
│  ├─ game.js             # 🇩🇪 German game logic & level definitions
│  └─ game-en.js          # 🇬🇧 English game logic & level definitions
├─ 📁 assets/
│  ├─ logo.png            # 🖼  Header / README logo
│  └─ icons/              # 🎨 Optional icons & artwork
├─ 🐳 Dockerfile          # Docker build for nginx
├─ 🐳 docker-compose.yml  # Compose configuration
└─ 📜 LICENSE             # MIT License
```

---

## 🚀 Getting Started

### 🔹 Local Setup

```bash
# Clone the repository
git clone https://github.com/jbkunama1/trtBlackoutLab.git
cd trtBlackoutLab

# Open en/index.html in your browser – done! 🎉
```

> ✅ **Perfect for quick testing** – no server or build step required!

---

### 🔹 Simple HTTP Server (Node)

```bash
npm install -g serve
serve .
```

🌐 Then open **`http://localhost:3000/en/`** in your browser.

---

### 🔹 Docker / Server Deployment

For deployment on a web server or via Docker, use the `Dockerfile` and
`docker-compose.yml` in the root directory:

```bash
# Build and run with Docker Compose
docker-compose up -d
```

🐳 The game will be available at **`http://localhost:8080`** by default.

---

## 🎯 Educational Use

### Topics & Classroom Ideas

| Area | 💡 Classroom Idea |
|---|---|
| 🔌 **Blackout** | Entry scenario, emergency preparedness, real-life relevance |
| 🏠 **Household Energy** | Estimating energy demand and distribution |
| 🔋 **Storage** | Discussing suitable energy storage types (chemical, potential) |
| ☀️ **Solar** | Series/parallel connection of PV modules |
| 🤔 **Reflection** | "What would really help us in a real blackout?" |

### ⚙️ Recommended Setup

```
👥 Group size:    3–5 students per device
⏱  Duration:     approx. 45–60 minutes (incl. short debrief)
📚 Grade level:  Grade 8 and up
🖥  Devices:      PC, tablet, or smartphone (with a modern browser)
```

### ➕ Follow-up Activities

- 📋 Create a personal blackout preparedness checklist
- 📔 Keep an energy diary for one week
- ⚖️ Compare different energy storage types (pros & cons)
- 🗺  Research and evaluate local solar installations
- 🌱 Explore the concept of an "All Electric Society"

---

## 🧩 Customizing Puzzles

All levels are defined in the `levels` array within `js/game-en.js`.

### 📝 Key fields

```js
{
  title:       "🏠 House 1 – Blackout!",
  intro:       "Description of the puzzle / scenario ...",
  hint:        "Tips shown upon incorrect answers ...",
  successCode: "1234"   // code revealed on success
}
```

### ✅ Answer Types

| Type | Description | Configuration |
|---|---|---|
| `multi-select` | Multiple correct answers | `works: true/false` flag per option |
| `single-choice` | Exactly one correct answer | `correct: true` on the right option |
| `text-quiz` | Free text / number input | `solution` object with expected values |
| `number-grid` | Number-grid puzzle | `generateGrid()` function & `successCode` |

> 👉 **Tip:** Feel free to adapt difficulty, story and codes to match your own
> classroom materials or curriculum.

---

## 🙌 Contributing

Contributions are very welcome! 🎉

```
🐛 Found a bug?           → Open an issue
💡 Have an idea?          → Submit a pull request
🌍 New language?          → Submit a translation
🧩 New puzzle idea?       → Add a level to the array
```

1. 🍴 Fork the repository
2. 🌿 Create a feature branch: `git checkout -b feature/my-feature`
3. 💾 Commit your changes: `git commit -m "feat: describe my feature"`
4. 📤 Push the branch: `git push origin feature/my-feature`
5. 🔁 Open a Pull Request

---

## 📦 License

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](../LICENSE)

This project is released under the **MIT License** – free to use, modify and
distribute for educational and personal purposes.

> Please make sure any additional graphics or texts you add are compatible with
> your chosen license.

- 🙌 Contributions, translations and new puzzle ideas are highly appreciated!
