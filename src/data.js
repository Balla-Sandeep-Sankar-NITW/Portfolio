
export const personal = {
  name: "Balla Sandeep Sankar",
  role: "Software Engineer | Backend & AI",
  tagline:
    "Building scalable backend systems, intelligent AI applications, and production-ready software.",
  about:
    "B.Tech student at NIT Warangal pursuing Computer Science Engineering with a specialization in Artificial Intelligence and Data Science. Passionate about Backend Development, Artificial Intelligence, Machine Learning, and Software Engineering. I enjoy building scalable APIs, AI-powered applications, RAG systems, computer vision pipelines, and solving real-world problems through technology. Incoming Salesforce Summer Intern 2027.",
  email: "ballasandeepsankar@gmail.com",
  github: "https://github.com/Balla-Sandeep-Sankar-NITW",
  linkedin: "https://linkedin.com/in/balla-sandeep-sankar",
  leetcode: "https://leetcode.com/u/Balla_Sandeep_Sankar/",
<<<<<<< HEAD
  resume:
    "https://drive.google.com/file/d/1_aLU9SvFCKme7-anUpcJRr0pzuHn6jSI/view?usp=drive_link",
=======
  resume: "https://drive.google.com/file/d/1IM1-ZY7wZXz5q8P9K7-ZDmArl9DbAPsK/view?usp=sharing",
>>>>>>> 41dff590721daee959573d23136c7f3e97772649
};

export const systemStatus = [
  { label: "Salesforce Summer Intern 2027", status: "selected" },
  { label: "Backend Development", status: "building" },
  { label: "AI Applications", status: "building" },
  { label: "Machine Learning", status: "active" },
  { label: "Competitive Programming", status: "active" },
];

export const snapshot = {
  focusAreas: [
    "Backend Development",
    "Artificial Intelligence",
    "Machine Learning",
    "Software Engineering",
  ],

  currentlyBuilding: [
    "AI Applications",
    "RAG Systems",
    "Computer Vision",
    "REST APIs",
  ],

  interests: [
    "Generative AI",
    "AI Agents & Automation",
    "Scalable Systems",
    "Production AI",
  ],
};

export const skills = {
  Languages: ["Python", "C++", "R"],

  "Frameworks & Libraries": [
    "FastAPI",
    "Pydantic",
    "SQLAlchemy",
    "TensorFlow",
    "Scikit-Learn",
    "LangChain",
    "LangGraph",
    "OpenCV",
    "NumPy",
    "Pandas",
    "Matplotlib",
  ],

  "Databases & Vector DBs": [
    "MySQL",
    "Oracle",
    "Neon PostgreSQL",
    "Pinecone",
  ],

  "Tools & Cloud": [
    "Git",
    "GitHub",
    "Docker",
    "VS Code",
    "Jupyter Notebook",
    "Google Colab",
    "Render",
    "Vercel",
    "Voyage AI",
    "SMTP",
  ],

  "Soft Skills": [
    "Problem Solving",
    "Analytical Thinking",
    "Communication",
  ],

<<<<<<< HEAD
  Coursework: [
    "Data Structures & Algorithms",
    "Machine Learning",
    "Database Management Systems",
    "Operating Systems",
    "Discrete Mathematics",
    "Probability & Statistics",
  ],

=======
>>>>>>> 41dff590721daee959573d23136c7f3e97772649
  "Areas of Interest": [
    "Generative AI Applications",
    "Deep Learning",
    "Computer Vision",
    "AI Agents & Automation",
    "Full-Stack ML Applications",
  ],
};

export const experience = [
  {
    id: "01",
<<<<<<< HEAD
    organization: "Salesforce",
    role: "Incoming Summer Intern",
    period: "Summer 2027",
    type: "Internship",
    description:
      "Selected for the Salesforce Summer Internship Program 2027.",
=======
    name: "FreshSense AI",
    tagline: "Computer Vision for Food Freshness",
    problem: "Food waste occurs because people cannot accurately identify early-stage spoilage, lack real-time freshness monitoring, and do not receive intelligent recommendations to consume food before it goes bad.",
    solution: "An end-to-end Agentic AI system that uses YOLOv8 for fruit detection, EfficientNet-B0 for freshness prediction, a learning agent for dynamic shelf-life tracking, and recipe recommendations to help users consume food before spoilage and reduce waste.",
    tech: [
      "Python",
      "FastAPI",
      "Pydantic",
      "PostgreSQL",
      "SQLAlchemy",
      "JWT",
      "bcrypt",
      "Pinecone",
      "SMTP",
      "Voyage AI",
    ],
    outcome: "Detects fruits in real time, predicts freshness scores, continuously improves shelf-life estimates through adaptive learning, generates spoilage alerts, and recommends recipes to reduce household food waste.",
>>>>>>> 41dff590721daee959573d23136c7f3e97772649
    accent: "cyan",
  },
  {
    id: "02",
    organization: "Independent EdTech Deployment",
    role: "Strategic Liaison",
    period: "June 2026",
    type: "Leadership",
    description:
      "Acted as the liaison between an independent developer and school leadership to pitch and pilot an AI/OCR exam-digitization tool.",
    accent: "green",
  },
];

export const projects = [
  {
    id: "01",
    name: "VaultMind",
    tagline: "Enterprise AI Knowledge Base",

    problem:
      "Organizations struggle to efficiently access and search internal knowledge spread across documents. Employees waste time locating information, while existing systems lack secure, department-based access controls and AI-powered retrieval.",

    solution:
      "Built a production-grade Retrieval-Augmented Generation platform that enables employees to interact with company documents using natural language. Implemented JWT authentication, department-based role-based access control, secure document access, multi-turn retrieval, and citation-backed responses.",

    tech: [
      "Python",
      "FastAPI",
      "Pydantic",
      "PostgreSQL",
      "SQLAlchemy",
      "JWT",
      "bcrypt",
      "Pinecone",
      "SMTP",
      "Voyage AI",
    ],

    outcome:
      "Built a secure enterprise knowledge assistant with department-based access control and citation-backed AI responses, while improving multi-turn document retrieval accuracy.",

    accent: "green",

    repository:
      "https://github.com/Balla-Sandeep-Sankar-NITW/Enterprices-KB",

    "Live Demo":
      "https://vaultmind-green.vercel.app",

    Documentation:
      "https://balla-sandeep-sankar-nitw.github.io/Enterprices-KB/documentation.html",
  },

  {
    id: "02",
    name: "FreshSense AI",
    tagline: "Agentic Food Freshness & Recipe Recommendation",

    problem:
      "Food waste occurs because people cannot accurately identify early-stage spoilage and lack real-time freshness monitoring and recommendations to consume food before it goes bad.",

    solution:
      "Developed a computer vision pipeline using YOLOv8x for fruit detection and EfficientNet-B0 for freshness estimation. Implemented shelf-life tracking, automated spoilage alerts, and recipe recommendations to help users consume food before spoilage.",

    tech: [
      "Python",
      "YOLOv8x",
      "EfficientNet-B0",
      "TensorFlow",
      "OpenCV",
      "NumPy",
    ],

    outcome:
      "Built an end-to-end computer vision system for real-time fruit detection, freshness estimation, shelf-life tracking, automated spoilage alerts, and recipe recommendations to reduce food waste.",

    accent: "cyan",
<<<<<<< HEAD

    repository:
      "https://github.com/Balla-Sandeep-Sankar-NITW/FreshSense-AI",
  },

  {
    id: "03",
    name: "IQI-GWO Vision",
    tagline: "Metaheuristic Feature Selection for Image Classification",

    problem:
      "High-dimensional image features often contain redundant and noisy information, increasing computational cost and making classification more difficult.",

    solution:
      "Designed an Improved Quantum-Inspired Grey Wolf Optimization based feature selection framework that identifies informative feature subsets before image classification using machine learning models.",

    tech: [
      "Python",
      "Scikit-learn",
      "Random Forest",
      "Grey Wolf Optimizer",
      "Quantum-Inspired Algorithms",
      "Image Processing",
      "Feature Selection",
    ],

    outcome:
      "Reduced feature dimensionality by 27–66% across three benchmark datasets and improved classification accuracy from 72.45–96.64% to 96.28–99.80% using IQI-GWO feature selection and Random Forest classification.",

    accent: "cyan",

    repository:
      "https://github.com/Balla-Sandeep-Sankar-NITW/IQI-GWO-Feature-Selection-for-Image-Classification",

    Documentation:
      "https://balla-sandeep-sankar-nitw.github.io/IQI-GWO-Feature-Selection-for-Image-Classification/documentation.html",
  },
];

export const achievements = [
  {
    title: "Salesforce Summer Intern 2027",
    description: "Selected for the Salesforce Summer Internship Program 2027.",
  },
  {
    title: "LeetCode",
    description:
      "Solved 620+ coding problems with a peak contest rating of 1717.",
  },
  {
    title: "LeetCode Weekly Contest 496",
    description:
      "Secured Global Rank 2654 among 40,636 participants.",
  },
  {
    title: "NIT Warangal",
    description:
      "B.Tech in Computer Science Engineering (Artificial Intelligence and Data Science) with a CGPA of 9.00/10.00.",
=======
    repository : "https://github.com/Balla-Sandeep-Sankar-NITW/IQI-GWO-Feature-Selection-for-Image-Classification",
    Documentation : "https://balla-sandeep-sankar-nitw.github.io/IQI-GWO-Feature-Selection-for-Image-Classification/documentation.html"
>>>>>>> 41dff590721daee959573d23136c7f3e97772649
  },
];

export const learning = [
  "LangChain",
  "LangGraph",
  "MCP (Model Context Protocol)",
  "AI Agents",
  "Production AI Systems",
  "LLM Applications",
  "AI Infrastructure",
];

