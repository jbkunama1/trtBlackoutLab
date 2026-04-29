# Blackout Lab (English Version)

**Blackout Lab** is a browser-based escape game for the classroom (grades 8+). Students explore scenarios of power outages, energy demand, storage, and renewable energies.

> Note: This is an independent adaptation for educational purposes.

## Features

- 6 levels to play sequentially.
- Focus on power outages and the "All Electric Society."
- Fully client-side (HTML, CSS, JavaScript) — no backend required.
- Easy to customize: puzzles, texts, and codes are defined in `js/game-en.js`.

## Getting Started

### Local Setup
1. Open `index.html` in your browser.

### Docker / Server
For deployment on a web server or via Docker, refer to the `Dockerfile` and `docker-compose.yml` in the main directory.

## Customizing Puzzles

All levels are defined in the `levels` array within `js/game-en.js`:
- `intro`: Description of the puzzle.
- `hint`: Tips shown upon incorrect answers.
- `successCode`: The code to be revealed.

## Educational Usage

- **Group Size:** 3–5 students per device.
- **Duration:** approx. 45–60 minutes.
- **Reflection:** Discuss real-life blackouts, household energy consumption, and the importance of renewable energy.

## License
MIT License.
