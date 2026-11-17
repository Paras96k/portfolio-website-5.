export const projectsData = [
  {
    id: "smartsoc-ai",
    title: "SmartSOC-AI – AI-Assisted Threat Detection",
    subtitle: "Cybersecurity & Machine Learning",
    badge: "Featured AI Project",
    shortDesc:
      "An intelligent security operations center (SOC) solution leveraging machine learning models to detect real-time anomalies, classify cyber threats, and automate security incident triage.",
    fullDesc:
      "SmartSOC-AI is designed to address alert fatigue in modern Security Operations Centers. By ingesting real-time network telemetry, system logs, and intrusion detection feeds, the system applies supervised and unsupervised machine learning algorithms to classify potential attack vectors (including DDoS, brute-force, SQL injection, and ransomware behavior). It maps findings directly to the MITRE ATT&CK framework and provides automated triage scoring for junior analysts.",
    tags: ["Python", "TensorFlow", "Scikit-Learn", "FastAPI", "JavaScript", "Vite", "Cybersecurity"],
    stats: [
      { label: "Detection Accuracy", value: "98.4%" },
      { label: "Telemetry Throughput", value: "10k+ eps" },
      { label: "Triage Speedup", value: "4.2x Faster" }
    ],
    features: [
      "Real-time anomaly detection using Random Forest & LSTM neural networks",
      "Automated MITRE ATT&CK technique mapping for incident correlation",
      "Interactive SOC analyst dashboard with live threat feeds and confidence metrics",
      "FastAPI microservice backend for ultra-low latency inference (<15ms)",
      "Automated incident alert generation and severity prioritization"
    ],
    github: "https://github.com/parasthorat/SmartSOC-AI",
    demo: "#",
    icon: "shield"
  },
  {
    id: "antisocial-ios",
    title: "AntiSocial – Social and Party Companion iOS Application",
    subtitle: "iOS Development & Swift",
    badge: "Mobile Innovation",
    shortDesc:
      "A modern iOS party companion and social discovery app designed to help users organize gatherings, manage guest RSVPs, discover events, and facilitate safe social interactions.",
    fullDesc:
      "AntiSocial bridges the gap between digital planning and real-world college social gatherings. Built natively with Swift and SwiftUI, the application provides event organizers with dynamic RSVP tracking, interactive party schedules, and real-time venue check-ins using Apple CoreLocation. The app emphasizes user privacy and safety with curated guest lists, instant safety alerts, and engaging social icebreaker mini-games.",
    tags: ["Swift", "SwiftUI", "iOS SDK", "Firebase", "Node.js", "CoreLocation"],
    stats: [
      { label: "Platform", value: "iOS 17+" },
      { label: "Architecture", value: "MVVM" },
      { label: "Response Latency", value: "<80ms" }
    ],
    features: [
      "Dynamic event management with live RSVP tracking and guest curation",
      "Interactive Party Radar displaying nearby safe college events using CoreLocation",
      "In-app icebreaker mini-games and trivia for seamless social interaction",
      "Push notification dispatch via Apple APNs for timely party updates",
      "Dark-mode native SwiftUI design with fluid fluid haptic feedback"
    ],
    github: "https://github.com/parasthorat/AntiSocial-iOS",
    demo: "#",
    icon: "sparkles"
  },
  {
    id: "food-recommendation",
    title: "Food Recommendation System using Machine Learning",
    subtitle: "Machine Learning & Data Analytics",
    badge: "Machine Learning",
    shortDesc:
      "A personalized culinary recommendation engine that suggests dishes and recipe alternatives based on dietary preferences, nutritional profiles, and collaborative filtering.",
    fullDesc:
      "This system addresses the challenge of dietary planning and personalized culinary choices. Utilizing a hybrid recommendation approach, the model combines content-based filtering (analyzing ingredient TF-IDF vectors, calorie count, and macro nutrients) with collaborative filtering (user rating matrices). The system empowers users to input dietary constraints (vegan, keto, diabetes-friendly, allergens) and receive instant, tailored meal recommendations.",
    tags: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Streamlit", "HTML5", "CSS3"],
    stats: [
      { label: "Recipe Dataset", value: "25,000+" },
      { label: "Similarity Metric", value: "Cosine Sim" },
      { label: "Constraint Filter", value: "10+ Diet Types" }
    ],
    features: [
      "Hybrid recommendation pipeline combining Content-Based and Collaborative Filtering",
      "TF-IDF ingredient vectorization with Cosine Similarity ranking",
      "Multi-constraint dietary filters: Vegan, Vegetarian, Keto, Allergens, and Calorie targets",
      "Exploratory Data Analysis (EDA) on 25k+ recipes with nutritional breakdown",
      "Clean interactive web UI allowing dynamic dish search and personalized suggestions"
    ],
    github: "https://github.com/parasthorat/Food-Recommendation-ML",
    demo: "#",
    icon: "chart"
  }
];

export const skillsData = [
  {
    name: "HTML5",
    category: "frontend",
    level: 95,
    tag: "Expert",
    description: "Semantic markup, modern Web APIs, accessibility (WCAG), SEO structure"
  },
  {
    name: "CSS3",
    category: "frontend",
    level: 90,
    tag: "Advanced",
    description: "Modern Flexbox & Grid, CSS variables, keyframe animations, responsive design"
  },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    level: 88,
    tag: "Advanced",
    description: "Async/Await, DOM manipulation, ES Modules, Event Loop, Vite integration"
  },
  {
    name: "Python",
    category: "backend",
    level: 92,
    tag: "Advanced",
    description: "Machine Learning (Scikit-Learn, TensorFlow), Pandas, NumPy, FastAPI, OOP"
  },
  {
    name: "Java",
    category: "backend",
    level: 85,
    tag: "Proficient",
    description: "Core Java, OOP principles, Collections Framework, Multithreading, Algorithms"
  },
  {
    name: "Git & GitHub",
    category: "tools",
    level: 90,
    tag: "Advanced",
    description: "Version control, branching strategies, Pull Requests, merge conflicts, Git tags"
  },
  {
    name: "Vite & Tooling",
    category: "tools",
    level: 85,
    tag: "Proficient",
    description: "Modern frontend bundling, HMR, production optimization, asset pipelines"
  },
  {
    name: "Jenkins & CI/CD",
    category: "tools",
    level: 82,
    tag: "Proficient",
    description: "Declarative pipelines, automated build verification, test runner integration"
  }
];
