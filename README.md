# ⚡️ Blackout Lab – Online-Escape-Game zur Energiewende

<div align="center">

![Blackout Lab Logo](assets/logo.png)

[![License: MIT](https://img.shields.io/badge/Lizenz-MIT-blue.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?logo=javascript&logoColor=black)](#)
[![Docker](https://img.shields.io/badge/Docker-%230db7ed.svg?logo=docker&logoColor=white)](#-variante-3-docker--nginx)
[![Contributions Welcome](https://img.shields.io/badge/Beitr%C3%A4ge-willkommen-brightgreen.svg)](#-mitmachen--beitragen)

> 🎮 Ein kooperatives Browser-Escape-Game für den Unterricht – rund um Stromausfall, Energiewende und die All Electric Society.

[🇩🇪 Deutsch](#-was-ist-blackout-lab) · [🇬🇧 English](#-blackout-lab--online-escape-game-about-the-energy-transition) · [📖 Story](https://gemini.google.com/share/97996859cb2d) · [🚀 Schnellstart](#-schnellstart)

</div>

---

## 📋 Inhalt

- [Was ist Blackout Lab?](#-was-ist-blackout-lab)
- [Features auf einen Blick](#-features-auf-einen-blick)
- [Die 6 Level im Überblick](#-die-6-level-im-überblick)
- [Projektstruktur](#-projektstruktur)
- [Schnellstart](#-schnellstart)
- [Pädagogischer Einsatz](#-pädagogischer-einsatz)
- [Rätsel anpassen](#-rätsel-anpassen)
- [Mitmachen & Beitragen](#-mitmachen--beitragen)
- [Lizenz & Hinweise](#-lizenz--hinweise)

---

## 🧠 Was ist Blackout Lab?

**Blackout Lab** ist ein leichtgewichtiges Online-Escape-Game für den Einsatz im Unterricht (ab Klasse 8).
In sechs aufeinander aufbauenden Levels lösen Lernende Rätsel rund um Stromausfall, Energiespeicher,
Haushaltsverbrauch und Solartechnik – komplett im Browser, ohne Login und ohne Backend.

```
💡 Szenario: Ein großflächiger Stromausfall hat deine Stadt getroffen.
   Dein Team muss Haus für Haus die Energie wiederherstellen –
   bevor die letzte Batterie leer ist! 🔋⏰
```

---

## 🌟 Features auf einen Blick

| Feature | Details |
|---|---|
| 🏠 **6 interaktive Level** | Stromausfall · Energiebedarf · Speicher · Solar |
| 🌐 **100 % clientseitig** | Reines HTML, CSS & JavaScript – ideal für Schulnetze |
| 👨‍🏫 **Unterrichtsfreundlich** | Texte & Lösungen zentral in `js/game.js` anpassbar |
| 🤝 **Kooperativ** | Bestens geeignet für Gruppenarbeit (3–6 SuS pro Gerät) |
| 📱 **Responsive** | Läuft auf PCs, Tablets und großen Smartphones |
| 🐳 **Docker-ready** | Einfaches Deployment via Docker & nginx |
| 🔓 **Open Source** | MIT-lizenziert – frei für den Unterricht |

---

## 🏘 Die 6 Level im Überblick

```
🏠 Haus 1   🏠 Haus 2   🏠 Haus 3   🏠 Haus 4   🏠 Haus 5   🏠 Haus 6
   🔌            📊           💧           🔋           ☀️           🏆
Stromausfall  Verbrauch   Speicher-    Speicher-    Solar-      Finale
Grundlagen    ermitteln   typen        kapazität    anlage      Aufgabe
```

| # | 🏠 Level | 🎯 Thema | 🧩 Rätseltyp |
|---|----------|----------|--------------|
| 1 | **Haus 1 – Blackout!** 🔌 | Stromausfall & Krisenvorsorge | Multi-Select |
| 2 | **Haus 2 – Verbrauch** 📊 | Haushaltsenergiebedarf abschätzen | Zahlen-Quiz |
| 3 | **Haus 3 – Speichertypen** 💧 | Chemische & Lage-Energiespeicher | Single-Choice |
| 4 | **Haus 4 – Kapazität** 🔋 | Speicherkapazität berechnen | Text-Quiz |
| 5 | **Haus 5 – Solar** ☀️ | PV-Module Reihen-/Parallelschaltung | Zahlen-Grid |
| 6 | **Haus 6 – Finale** 🏆 | Alles zusammenführen | Kombiniert |

---

## 🏗 Projektstruktur

```text
trtBlackoutLab/
├─ 📄 index.html          # 🇩🇪 Einstieg ins Spiel (Deutsch)
├─ 📁 en/
│  ├─ index.html          # 🇬🇧 English version entry point
│  └─ README.md           # English documentation
├─ 📁 css/
│  └─ styles.css          # 🎨 Layout, Haus-Design & Animationen
├─ �� js/
│  ├─ game.js             # 🇩🇪 Spiel-Logik & Rätseldefinitionen
│  └─ game-en.js          # 🇬🇧 English game logic & level definitions
├─ 📁 assets/
│  ├─ logo.png            # 🖼  Logo für Kopfzeile & README
│  └─ icons/              # 🎨 Optionale Zusatzgrafiken
├─ 🐳 Dockerfile          # Docker-Build für nginx
├─ 🐳 docker-compose.yml  # Compose-Konfiguration
└─ 📜 LICENSE             # MIT-Lizenz
```

---

## 🚀 Schnellstart

### 🔹 Variante 1: Direkt lokal öffnen

```bash
# Repo klonen
git clone https://github.com/jbkunama1/trtBlackoutLab.git
cd trtBlackoutLab

# index.html einfach im Browser öffnen – fertig! 🎉
```

> ✅ **Perfekt zum schnellen Testen** auf deinem eigenen Rechner – kein Server nötig!

---

### 🔹 Variante 2: Einfacher HTTP-Server (Node)

```bash
npm install -g serve
serve .
```

🌐 Dann im Browser **`http://localhost:3000`** aufrufen.

---

### 🔹 Variante 3: Docker + nginx

```bash
# Image bauen
docker build -t blackout-lab .

# Container starten
docker run -d -p 8080:80 --name blackout-lab blackout-lab
```

Oder mit `docker-compose` (empfohlen):

```bash
docker-compose up -d
```

🐳 Das Spiel ist dann unter **`http://localhost:8080`** erreichbar.

---

## 🎯 Pädagogischer Einsatz

### Themen & Unterrichtsideen

| Bereich | 💡 Idee für den Unterricht |
|---|---|
| 🔌 **Stromausfall** | Einstiegsszenario, Krisenvorsorge, Alltagsbezug |
| 🏠 **Haushalt & Energie** | Abschätzung von Energiebedarf und -verteilung |
| 🔋 **Speicher** | Diskussion geeigneter Energiespeicher (chemisch, Lage) |
| ☀️ **Solar** | Reihen-/Parallelschaltung von PV-Modulen |
| 🤔 **Reflexion** | „Was würde uns bei einem echten Blackout wirklich helfen?" |

### ⚙️ Empfohlene Rahmenbedingungen

```
👥 Gruppengröße:   3–5 SuS pro Gerät
⏱  Zeitbedarf:    45–60 Minuten (inkl. kurzer Auswertung)
📚 Klassenstufe:  ab Klasse 8
🖥  Geräte:        PC, Tablet oder Smartphone (mit Browser)
```

### ➕ Anschlussaufgaben

- 📋 Eigene Blackout-Checkliste für den Haushalt erstellen
- 📔 Energie-Tagebuch führen (eine Woche)
- ⚖️ Verschiedene Speicherformen vergleichen (Vor-/Nachteile)
- 🗺  Lokale Solar-Anlagen recherchieren und bewerten

---

## 🧩 Rätsel anpassen

Alle Level sind im Array `levels` in `js/game.js` definiert.

### 📝 Texte & Inhalte

```js
{
  title:        "🏠 Haus 1 – Blackout!",
  intro:        "Einstiegstext / Szenario ...",
  questionHtml: "<p>Frage als HTML ...</p>"
}
```

### ✅ Lösungstypen

| Typ | Beschreibung | Konfiguration |
|---|---|---|
| `multi-select` | Mehrere richtige Antworten | Flag `works: true/false` in den Optionen |
| `single-choice` | Genau eine richtige Antwort | `correct: true` bei der richtigen Option |
| `text-quiz` | Freitext / Zahleneingabe | Objekt `solution` mit den Zahl-/Textantworten |
| `number-grid` | Zahlenraster-Rätsel | Funktion `generateGrid()` und `successCode` |

> 👉 **Tipp:** Wenn du ein vorhandenes analoges Stationenlernen nachbauen willst,
> passe einfach die Texte & `successCode` pro Level an.

---

## 🙌 Mitmachen & Beitragen

Beiträge sind herzlich willkommen! 🎉

```
🐛 Bug gefunden?         → Issue eröffnen
💡 Verbesserungsidee?    → Pull Request erstellen
🌍 Neue Sprache?         → Übersetzung einreichen
🧩 Neues Rätsel?         → Level zum Array hinzufügen
```

1. 🍴 Fork erstellen
2. 🌿 Feature-Branch anlegen: `git checkout -b feature/mein-feature`
3. 💾 Änderungen committen: `git commit -m "feat: mein-feature beschreiben"`
4. 📤 Branch pushen: `git push origin feature/mein-feature`
5. 🔁 Pull Request öffnen

---

## 📦 Lizenz & Hinweise

> Diese Umsetzung ist eine eigenständige, frei nutzbare Adaption für den Unterricht
> und verwendet keine Original-Grafiken oder -Texte anderer Anbieter.

[![License: MIT](https://img.shields.io/badge/Lizenz-MIT-blue.svg)](LICENSE)

- 💼 **Lizenz:** MIT (siehe [LICENSE](LICENSE))
- 🙌 **Beiträge** (Pull Requests, Issues, neue Rätselideen) sind willkommen!
- 📖 **Story-Hintergrund:** [Gemini-Link](https://gemini.google.com/share/97996859cb2d)

---

---

# 🌍 Blackout Lab – Online Escape Game about the Energy Transition

<div align="center">

![Blackout Lab Logo](assets/logo.png)

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?logo=javascript&logoColor=black)](#)
[![Docker](https://img.shields.io/badge/Docker-%230db7ed.svg?logo=docker&logoColor=white)](#-option-3-docker--nginx)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](#-contributing)

> 🎮 A cooperative browser escape game for the classroom – about blackouts,
> energy storage and the All Electric Society.

[��🇪 Deutsch](#️-blackout-lab--online-escape-game-zur-energiewende) · [🇬🇧 English](#-what-is-blackout-lab) · [🚀 Getting Started](#-getting-started)

</div>

---

## 📋 Table of Contents

- [What is Blackout Lab?](#-what-is-blackout-lab)
- [Key Features](#-key-features)
- [The 6 Levels](#-the-6-levels)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Educational Use](#-educational-use)
- [Customizing Levels](#-customizing-levels)
- [Contributing](#-contributing)
- [License & Credits](#-license--credits)

---

## 🧠 What is Blackout Lab?

**Blackout Lab** is a lightweight, browser-based escape game designed for STEM
education (roughly grade 8 and up). Students solve six interconnected puzzles
about power outages, household energy demand, storage and solar panels – directly
in the browser, no login, no backend.

```
💡 Scenario: A large-scale power outage has hit your city.
   Your team must restore energy house by house –
   before the last battery runs out! 🔋⏰
```

---

## 🌟 Key Features

| Feature | Details |
|---|---|
| 🏠 **6 interactive levels** | Blackout · Energy demand · Storage · Solar |
| 🌐 **100% client-side** | Plain HTML, CSS & JavaScript – perfect for school networks |
| 👨‍🏫 **Teacher-friendly** | Texts & solutions live in `js/game.js` – easy to edit |
| 🤝 **Cooperative** | Works best in small groups (3–6 students per device) |
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
│  ├─ index.html          # 🇬🇧 English game entry point
│  └─ README.md           # English documentation
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

### 🔹 Option 1: Open locally

```bash
# Clone the repository
git clone https://github.com/jbkunama1/trtBlackoutLab.git
cd trtBlackoutLab

# Just open index.html in your browser – done! 🎉
```

> ✅ **Perfect for quick testing** on your own machine – no server needed!

---

### 🔹 Option 2: Simple HTTP server (Node)

```bash
npm install -g serve
serve .
```

🌐 Then open **`http://localhost:3000`** in your browser.

---

### 🔹 Option 3: Docker + nginx

```bash
# Build the image
docker build -t blackout-lab .

# Run the container
docker run -d -p 8080:80 --name blackout-lab blackout-lab
```

Or using `docker-compose` (recommended):

```bash
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
⏱  Duration:     45–60 minutes (incl. short debrief)
📚 Grade level:  Grade 8 and up
🖥  Devices:      PC, tablet, or smartphone (with a modern browser)
```

### ➕ Follow-up Activities

- 📋 Create a personal blackout preparedness checklist
- 📔 Keep an energy diary for one week
- ⚖️ Compare different energy storage types (pros & cons)
- 🗺  Research and evaluate local solar installations

---

## 🧩 Customizing Levels

All levels are defined inside the `levels` array in `js/game.js` (or `js/game-en.js` for English).

### 📝 Texts & Content

```js
{
  title:        "🏠 House 1 – Blackout!",
  intro:        "Scenario introduction text ...",
  questionHtml: "<p>Question as HTML ...</p>"
}
```

### ✅ Answer Types

| Type | Description | Configuration |
|---|---|---|
| `multi-select` | Multiple correct answers | `works: true/false` flag per option |
| `single-choice` | Exactly one correct answer | `correct: true` on the right option |
| `text-quiz` | Free text / number input | `solution` object with expected values |
| `number-grid` | Number-grid puzzle | `generateGrid()` function & `successCode` |

> 👉 **Tip:** If you want to recreate an existing analogue station activity,
> just adapt the texts & `successCode` for each level.

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

## 📦 License & Credits

> This project is meant as an open educational resource. Please make sure any
> additional graphics or texts you add are compatible with your chosen license.

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

- 📜 **License:** MIT (see [LICENSE](LICENSE))
- 🙌 Contributions, translations and new puzzle ideas are highly appreciated!
- 📖 **Story background:** [Gemini Link](https://gemini.google.com/share/97996859cb2d)
