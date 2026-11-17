# Personal Portfolio Website — College Practical Project

> **Academic Submission:** Final Year Computer Engineering Lab Practical  
> **Student Name:** Paras Mansing Thorat  
> **Designation:** Final Year Computer Engineering Student  
> **Technologies:** HTML5, CSS3, JavaScript (ES6+), Vite Build System, Git & GitHub, Jenkins CI/CD  

---

## 📌 1. Project Overview

This repository contains the complete, modern, responsive **Personal Portfolio Website** developed for the Final Year Computer Engineering practical examination. The project demonstrates core proficiencies in modern front-end web engineering, component-driven modular JavaScript, responsive UI design, automated Vite production builds, Git version control, and Jenkins continuous integration (CI/CD) pipeline automation.

### 🌟 Key Highlights & Design Decisions
- **Modern Developer Dark Theme:** Sleek slate/zinc color scheme with cyber glow accents (cyan, indigo, purple) and frosted glassmorphism cards.
- **Vite Build System:** Lightning-fast local development with Hot Module Replacement (HMR) and optimized Rollup production builds.
- **Fully Responsive:** Fluid layouts designed with flexbox, CSS grid, and mobile hamburger navigation supporting phones, tablets, and desktop displays.
- **Interactive Animations:** Subtitle typewriter effect, scroll-triggered animated skill progress bars, interactive project case-study modals, and floating back-to-top controls.
- **Client-Side Form Validation:** Interactive contact form featuring real-time validation, responsive error hints, loading indicators, and animated toast notifications.
- **Enterprise CI/CD Automation:** Declarative `Jenkinsfile` pipeline that automatically checks out code, runs `npm ci`, bundles production artifacts with `npm run build`, validates `dist/` output, and archives build artifacts.

---

## 📑 2. Website Sections & Features

### 1. Home (Hero) Section
- **Identity Banner:** Displays student name **Paras Mansing Thorat** and title **Final Year Computer Engineering Student**.
- **Interactive Typing Subtitle:** Cycles through core engineering specializations (*AI/ML & Cybersecurity, Threat Detection, Full-Stack Engineering, Mobile Systems*).
- **Professional Introduction:** Concise summary of engineering philosophy, technical curiosity, and problem-solving focus.
- **Profile Image Container:** Terminal-styled developer card featuring an SVG profile avatar, floating availability badge, and technology pills.
- **Action Buttons:** Direct smooth-scrolling call-to-action buttons for **"View Projects"** and **"Contact Me"**, along with quick social icons.

### 2. About Section
- **Student Biography:** Detailed background highlighting academic trajectory, engineering principles, clean code architecture, and high-performance computing.
- **Education Timeline:** Displays Bachelor of Engineering (B.E.) in Computer Engineering (Final Year, 2022 – 2026) with core coursework (*Data Structures & Algorithms, Artificial Intelligence, Operating Systems, DBMS, Computer Networks, Cyber Security*).
- **Technical Interests Grid:** Interactive cards highlighting *Artificial Intelligence & Machine Learning*, *Cybersecurity & SOC Triage*, *Full-Stack Web Engineering*, and *DevOps & CI/CD Pipelines*.

### 3. Skills Section
- **Core Languages & Tools:**
  - **HTML5:** Semantic markup, web standards, accessibility (95%).
  - **CSS3:** Responsive Grid, Flexbox, custom variables, animations (90%).
  - **JavaScript (ES6+):** Modern ES modules, DOM manipulation, async/await (88%).
  - **Python:** Machine learning (Scikit-Learn, TensorFlow), data processing, FastAPI (92%).
  - **Java:** Object-oriented programming, Collections framework, algorithms (85%).
  - **Git & GitHub:** Branching, pull requests, semantic tags, repository management (90%).
  - **Vite:** Asset bundling, build optimization, dev server (85%).
  - **Jenkins CI/CD:** Declarative pipeline automation, build verification (82%).
- **Interactive Features:** Animated progress bars trigger upon scrolling into view; category filter tabs (*All, Frontend, Backend & Core, DevOps & Tools*).

### 4. Projects Section
Presents each project in a dedicated, high-impact glassmorphism card with metrics, technology tags, code links, and an interactive case study modal:

1. **SmartSOC-AI – AI-Assisted Threat Detection**
   - *Domain:* Cybersecurity & Machine Learning
   - *Description:* An intelligent security operations center (SOC) solution leveraging machine learning models to detect real-time anomalies, classify cyber threats, and automate incident triage.
   - *Highlights:* 98.4% detection accuracy, MITRE ATT&CK technique mapping, real-time telemetry analysis, and low-latency FastAPI inference backend.
   - *Tech Stack:* Python, TensorFlow, Scikit-Learn, FastAPI, JavaScript, Vite.

2. **AntiSocial – Social and Party Companion iOS Application**
   - *Domain:* iOS Mobile Application Development
   - *Description:* A modern iOS party companion and social discovery app designed to help users organize gatherings, manage guest RSVPs, discover events, and facilitate safe social interactions.
   - *Highlights:* Apple CoreLocation party radar, live guest curation, icebreaker mini-games, and dark-mode SwiftUI design.
   - *Tech Stack:* Swift, SwiftUI, iOS SDK, Firebase, Node.js, CoreLocation.

3. **Food Recommendation System using Machine Learning**
   - *Domain:* Machine Learning & Data Science
   - *Description:* A personalized culinary recommendation engine that suggests dishes and recipe alternatives based on dietary preferences, nutritional profiles, and collaborative filtering.
   - *Highlights:* Hybrid content-based & collaborative filtering, cosine similarity ranking on 25k+ recipes, dietary restrictions (Vegan, Keto, Allergens).
   - *Tech Stack:* Python, Scikit-Learn, Pandas, NumPy, Streamlit, HTML5, CSS3.

### 5. Contact Section
- **Interactive Form:** Fields for **Full Name**, **Email Address**, and **Message** with real-time client-side validation and responsive error states.
- **Instant Feedback:** Shows a spinner upon submission followed by an animated toast confirmation.
- **Contact Details:** Email address (`paras.thorat@example.com`), location (*Maharashtra, India*), and practical examination status.
- **Social Profiles:** Direct links for GitHub, LinkedIn, Twitter/X, and Email.

---

## 💻 3. Technology Stack

| Category | Technology | Usage in Project |
| :--- | :--- | :--- |
| **Markup** | HTML5 | Semantic page structure, accessibility, meta tags |
| **Styling** | CSS3 | Dark theme variables, glassmorphism, responsive grid, animations |
| **Scripting** | JavaScript (ES6+) | Dynamic DOM, modal dialogs, scrollspy, form validation |
| **Build Tool** | Vite v6.x | Fast dev server, asset bundling, production compilation |
| **Version Control** | Git & GitHub | Source code tracking, branching, commits, release tags |
| **CI/CD Automation** | Jenkins Pipeline | Automated build pipeline (`npm ci` ➔ `npm run build` ➔ verification) |

---

## 🛠️ 4. Installation & Local Execution Guide

### Prerequisites
- **Node.js:** v18.0.0 or later (Node.js LTS recommended)
- **NPM:** v9.0.0 or later
- **Git:** Installed on local machine

### Step-by-Step Instructions

1. **Clone or Navigate to the Project Directory:**
   ```bash
   cd personal-portfolio
   ```

2. **Install Dependencies:**
   Clean install all required packages defined in `package.json`:
   ```bash
   npm install
   ```
   *(Or for strict lockfile installation as used in CI: `npm ci`)*

3. **Start Local Development Server:**
   ```bash
   npm run dev
   ```
   - Vite will start a local server (typically at `http://localhost:3000` or `http://localhost:5173`).
   - Supports instant Hot Module Replacement (HMR) upon saving file changes.

4. **Execute Production Build:**
   Compile and optimize the portfolio for production deployment:
   ```bash
   npm run build
   ```
   - Vite processes all HTML, CSS, JavaScript, and static assets.
   - Generates the optimized, minified production bundle inside the `dist/` directory.

5. **Preview Production Build Locally:**
   Test the generated production build before deploying:
   ```bash
   npm run preview
   ```
   - Serves the production files from the `dist/` folder at `http://localhost:4173`.

---

## 🌿 5. Git & GitHub Version Management Guide

This project is structured for industry-standard Git version management:

### 1. Initialize Git Repository
```bash
git init
```

### 2. Configure Git Identity (if not already set globally)
```bash
git config user.name "Paras Mansing Thorat"
git config user.email "paras.thorat@example.com"
```

### 3. Stage Files & Create Initial Commit
```bash
git add .
git commit -m "feat: initial commit of personal portfolio website with Vite and Jenkins pipeline"
```

### 4. Branching Strategy
Demonstrate professional feature-branch workflows:
```bash
# Create and switch to development branch
git checkout -b develop

# Create feature branch for sections or updates
git checkout -b feature/about-section

# Make edits and commit
git add .
git commit -m "feat(about): add educational background and technical interests"

# Switch back to develop and merge
git checkout develop
git merge feature/about-section

# Merge develop into main for production release
git checkout main
git merge develop
```

### 5. Semantic Release Tagging
Create an annotated release tag representing the completed practical submission:
```bash
git tag -a v1.0.0 -m "Release v1.0.0: College practical submission of Personal Portfolio Website"
git tag
```

### 6. Pushing to GitHub Remote
```bash
git remote add origin https://github.com/parasthorat/personal-portfolio.git
git branch -M main
git push -u origin main --tags
```

---

## 🚀 6. Jenkins CI/CD Pipeline Automation Guide

The included `Jenkinsfile` provides an enterprise-ready declarative pipeline that automates the entire testing, dependency management, and production bundling process.

### Jenkins Pipeline Architecture

```
+-------------------------------------------------------------------------------+
|                             Jenkins CI/CD Pipeline                            |
+-------------------------------------------------------------------------------+
        |
        v
 [Stage 1: Checkout SCM]  --------> Checks out source code from GitHub
        |
        v
 [Stage 2: Tooling Verification] -> Verifies node, npm, and git availability
        |
        v
 [Stage 3: Install Dependencies] -> Executes 'npm ci' using package-lock.json
        |
        v
 [Stage 4: Production Build] -----> Runs 'npm run build' via Vite
        |
        v
 [Stage 5: Verify Artifacts] -----> Confirms dist/ and dist/index.html exist
        |
        v
 [Stage 6: Archive Artifacts] ----> Archives dist/** for production deployment
        |
        v
 [Post Actions: Success/Failure] -> Emits banner confirmation & build details
```

### Setting Up the Jenkins Job:

1. **Open Jenkins Dashboard:** Navigate to `http://localhost:8080` (or your institution's Jenkins server URL).
2. **Create New Item:**
   - Click **"New Item"**.
   - Enter item name: `Personal-Portfolio-Paras`.
   - Select **"Pipeline"** and click **OK**.
3. **Configure Pipeline Definition:**
   - Under the **Pipeline** section, set **Definition** to **"Pipeline script from SCM"**.
   - **SCM:** Select **Git**.
   - **Repository URL:** Enter your GitHub repository URL (e.g. `https://github.com/parasthorat/personal-portfolio.git`).
   - **Branch Specifier:** `*/main`.
   - **Script Path:** `Jenkinsfile`.
4. **Run the Pipeline:**
   - Click **"Build Now"**.
   - Jenkins will execute each stage sequentially.
   - Upon completion, observe the **Stage View** green indicators and the **SUCCESS** confirmation banner in the console log.

---

## 📂 7. Project Directory Structure

```text
personal-portfolio/
├── .gitignore              # Excludes node_modules/, dist/, environment & OS files
├── index.html              # Main semantic HTML5 webpage structure
├── Jenkinsfile             # Jenkins declarative CI/CD pipeline script
├── package.json            # Node.js project configuration, scripts & dependencies
├── package-lock.json       # Deterministic lockfile for reproducible builds via npm ci
├── README.md               # Complete project documentation & execution guide
├── vite.config.js          # Vite configuration for build, dev, and preview servers
├── public/
│   ├── avatar.svg          # High-tech developer profile illustration
│   └── favicon.svg         # Modern gradient monogram favicon
└── src/
    ├── main.js             # Core interactive logic (typewriter, scrollspy, modal, form)
    ├── projects-data.js    # Data module for featured projects & technical skills
    └── style.css           # Modern dark-theme stylesheet, glassmorphism & responsive CSS
```

---

## 🎯 8. Practical Exam Compliance Checklist

| Requirement | Description | Status |
| :--- | :--- | :---: |
| **Home Section** | Displays Name (*Paras Mansing Thorat*), Title (*Final Year Computer Engineering Student*), introduction, profile placeholder & CTA buttons | ✅ Complete |
| **About Section** | Short intro, education details (*B.E. Computer Engineering 2022-2026*), technical interests | ✅ Complete |
| **Skills Section** | HTML, CSS, JS, Python, Java, Git & GitHub with attractive animated progress bars & filter | ✅ Complete |
| **Projects Section** | 3 separate cards for SmartSOC-AI, AntiSocial, and Food Recommendation System | ✅ Complete |
| **Contact Section** | Name, email, message fields with validation and social media placeholders | ✅ Complete |
| **Design** | Modern developer dark theme, responsive layout, smooth scrolling & animations | ✅ Complete |
| **Vite Build** | Automated production build configured via Vite (`npm run build`) | ✅ Complete |
| **package.json** | Proper scripts: `npm run dev`, `npm run build`, `npm run preview` | ✅ Complete |
| **Build Verification**| `npm run build` executes cleanly with zero errors; `dist/` verified | ✅ Complete |
| **.gitignore** | Cleanly ignores `node_modules` and `dist` | ✅ Complete |
| **Jenkinsfile** | Declarative pipeline checking out code, `npm ci`, `npm run build`, `dist` verification & success notification | ✅ Complete |
| **README.md** | Complete instructions for installation, execution, Git & Jenkins workflows | ✅ Complete |

---

## 👨‍💻 Author Information

- **Student:** Paras Mansing Thorat  
- **Degree:** Bachelor of Engineering in Computer Engineering (Final Year)  
- **Academic Year:** 2025 – 2026  
- **GitHub:** [https://github.com/parasthorat](https://github.com/parasthorat)  
- **LinkedIn:** [https://linkedin.com/in/parasthorat](https://linkedin.com/in/parasthorat)  
- **Email:** [paras.thorat@example.com](mailto:paras.thorat@example.com)  

*Built with passion, modern web standards, and automated engineering pipelines.*
