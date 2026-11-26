export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  video?: string;
  videoEmbed?: string;
  status?: string;
  repositories?: { label: string; url: string }[];
};

export type SkillGroup = {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: string;
  subgroups: { title: string; items: string[] }[];
};

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const projects: Project[] = [
  {
    id: "smartca",
    title: "SmartCA — Smart Contract Analyzer",
    category: "Legal tech · RAG · OCR",
    description:
      "A full-stack AI system that reads Arabic employment contracts and checks clauses against Egyptian Labor Law 14/2025. It combines OCR, retrieval-augmented legal search, and a grounding step, with a FastAPI backend and Flutter client.",
    technologies: [
      "Python",
      "FastAPI",
      "Celery + Redis",
      "FAISS / RAG",
      "Groq LLM",
      "Azure Document Intelligence",
      "Flutter / Dart",
      "JWT Auth",
    ],
    video: "/demos/smartca.mp4",
    videoEmbed:
      "https://drive.google.com/file/d/1q3Sqe5BPQiqnvc-aVf10s8_0XaDFrD6n/preview",
    status: "Graduation project · Team of 6",
    repositories: [
      {
        label: "Backend repository",
        url: "https://github.com/remoraafat/Smart_Contract_Analyiser_backend/tree/dev",
      },
      {
        label: "Flutter app repository",
        url: "https://github.com/AbdulRahmanSalaah/SmartCA",
      },
    ],
  },
  {
    id: "intelligent-ecommerce-bi-analyst",
    title: "Intelligent E-commerce BI Analyst",
    category: "Business intelligence · AI agents · Forecasting",
    description:
      "An e-commerce analytics platform that cleans and stores uploaded sales datasets, presents schema-aware business metrics, and answers natural-language questions with a LangGraph workflow that generates and validates SQLite queries. It also checks data readiness before producing product-demand forecasts and inventory recommendations.",
    technologies: [
      "Python",
      "Streamlit",
      "FastAPI",
      "LangGraph",
      "Google Gemini API",
      "Pandas",
      "SQLite",
      "Statsmodels",
      "Docker Compose",
    ],
    videoEmbed:
      "https://drive.google.com/file/d/1qRzxAyj2TUb2aySIWpBEGlzysQhGBFas/preview",
    repositories: [
      {
        label: "GitHub repository",
        url: "https://github.com/aya968/agentic-ecommerce-bi-analyst",
      },
    ],
  },
  {
    id: "arabic-customer-intelligence",
    title: "Arabic Customer Intelligence Platform",
    category: "Arabic NLP · BERTopic · ML",
    description:
      "An end-to-end platform for ingesting and analyzing Arabic customer reviews, surfacing semantic pain points with BERTopic, mapping emojis to sentiment tokens, and serving sentiment predictions through an interactive Streamlit interface.",
    technologies: [
      "BERTopic",
      "Scikit-learn",
      "TF-IDF",
      "Streamlit",
      "Emoji mapping",
      "Arabic NLP",
    ],
    video: "/demos/arabic-customer-intelligence.mp4",
    videoEmbed:
      "https://drive.google.com/file/d/1-MLdzPh0-X5HxNJWtaNmfHFuUeoGE8wA/preview",
    repositories: [
      {
        label: "GitHub repository",
        url: "https://github.com/aya968/arabic-customer-intelligence",
      },
    ],
  },
  {
    id: "garbage-classification",
    title: "Garbage Image Classification & Sorting",
    category: "Computer vision · Deep learning",
    description:
      "A multi-class image recognition system for automated waste sorting. The project benchmarks deep CNN architectures with transfer learning and class weighting to address dataset imbalance.",
    technologies: [
      "PyTorch",
      "TensorFlow / Keras",
      "ResNet50",
      "VGG16",
      "OpenCV",
      "Class weighting",
    ],
    video: "/demos/garbage-classification.mp4",
  },
  {
    id: "equitylens",
    title: "EquityLens AI — Financial RAG System",
    category: "Financial intelligence · GenAI",
    description:
      "A RAG pipeline for SEC 10-K financial reports, using Unstructured.io for ingestion, 800-character chunks, ChromaDB vector storage, and a dual-model architecture for inference and LLM-as-a-Judge evaluation.",
    technologies: [
      "LangChain (LCEL)",
      "ChromaDB",
      "Hugging Face",
      "Groq Cloud",
      "Streamlit",
    ],
    video: "/demos/equitylens.mp4",
  },
  {
    id: "housing-price-forecasting",
    title: "Housing Price Index Forecasting",
    category: "Time-series · Machine learning",
    description:
      "An ensemble time-series regression project for forecasting housing market trends and index valuations, with rolling statistics, lag features, and time-aware cross-validation to avoid data leakage.",
    technologies: [
      "XGBoost",
      "Ensemble regressors",
      "Scikit-learn",
      "Time-aware CV",
      "EDA",
    ],
    video: "/demos/housing-price-forecasting.mp4",
  },
  {
    id: "speech-classification",
    title: "Speech Classification System",
    category: "Audio AI · Signal processing",
    description:
      "An audio classification pipeline extracting MFCCs, spectral centroids, spectral rolloff, and RMS energy with Librosa and Pydub, paired with bootstrap bagging ensembles.",
    technologies: [
      "Librosa",
      "MFCC extraction",
      "Bagging ensembles",
      "Signal processing",
      "Scikit-learn",
    ],
    video: "/demos/speech-classification.mp4",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    id: "ai-engineering",
    title: "AI Engineering",
    category: "AI Engineering",
    description:
      "Connect AI capabilities with backend services to build practical applications.",
    icon: "server",
    subgroups: [
      {
        title: "Languages & Tools",
        items: ["Python", "Git & GitHub", "Docker", "Docker Compose"],
      },
      {
        title: "Application Development",
        items: [
          "FastAPI",
          "REST APIs",
          "Streamlit",
          "AI application development",
          "Celery & Redis",
        ],
      },
    ],
  },
  {
    id: "generative-ai",
    title: "Generative AI, LLMs & RAG",
    category: "Generative AI, LLMs & RAG",
    description:
      "Build language-model and retrieval workflows with LLM and RAG techniques.",
    icon: "sparkles",
    subgroups: [
      {
        title: "Large Language Models",
        items: ["LLM applications", "Prompt engineering", "LLM integration"],
      },
      {
        title: "Retrieval-Augmented Generation",
        items: [
          "RAG systems",
          "Embeddings",
          "Vector search",
          "Retrieval pipelines",
        ],
      },
      {
        title: "Frameworks & Evaluation",
        items: [
          "LangChain",
          "ChromaDB",
          "FAISS",
          "Hugging Face",
          "LLM evaluation",
          "LLM-as-a-Judge",
        ],
      },
    ],
  },
  {
    id: "nlp",
    title: "Natural Language Processing (NLP)",
    category: "Natural Language Processing (NLP)",
    description:
      "Work with text processing, representations, and language analytics.",
    icon: "brain",
    subgroups: [
      {
        title: "Text Processing",
        items: ["Arabic NLP", "NLP preprocessing"],
      },
      {
        title: "Text Representation & Embeddings",
        items: ["TF-IDF", "FastText"],
      },
      {
        title: "Text Analysis",
        items: ["Sentiment analysis"],
      },
    ],
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    category: "Machine Learning",
    description:
      "Develop and evaluate models for prediction, classification, and forecasting.",
    icon: "cpu",
    subgroups: [
      {
        title: "Supervised Learning",
        items: [
          "Classification & regression",
          "XGBoost",
          "CatBoost",
          "Ensemble learning",
        ],
      },
      {
        title: "Unsupervised Learning",
        items: ["BERTopic topic modeling"],
      },
      {
        title: "Model Development & Evaluation",
        items: [
          "Feature engineering",
          "Time-aware cross-validation",
          "Hyperparameter tuning",
          "SMOTE & class balancing",
          "Model evaluation",
          "Data-leakage prevention",
          "Time-series forecasting",
        ],
      },
    ],
  },
  {
    id: "data-science",
    title: "Data Science",
    category: "Data Science",
    description:
      "Explore, prepare, visualize, and communicate insights from data.",
    icon: "chart",
    subgroups: [
      {
        title: "Data Analysis & Exploration",
        items: [
          "Exploratory data analysis (EDA)",
          "Statistical analysis",
          "Pattern & trend analysis",
        ],
      },
      {
        title: "Data Cleaning & Preparation",
        items: ["Data cleaning", "Data preprocessing"],
      },
      {
        title: "Visualization & Libraries",
        items: [
          "Pandas",
          "NumPy",
          "Matplotlib",
          "Seaborn",
          "Plotly",
          "Power BI",
          "Data visualization",
          "Data reporting & insights",
        ],
      },
      {
        title: "Analysis Workflow",
        items: [
          "Dataset exploration",
          "Data-driven insights",
          "Preparing data for machine learning",
        ],
      },
    ],
  },
  {
    id: "deep-learning",
    title: "Deep Learning",
    category: "Deep Learning",
    description:
      "Train and evaluate neural models with established deep-learning frameworks.",
    icon: "brain",
    subgroups: [
      {
        title: "Architectures & Techniques",
        items: [
          "CNNs",
          "RNNs",
          "Transfer learning",
          "Fine-tuning",
          "Data augmentation",
          "Model training & evaluation",
        ],
      },
      {
        title: "Frameworks",
        items: ["PyTorch", "TensorFlow", "Keras"],
      },
    ],
  },
];

export const domains = [
  {
    number: "01",
    title: "AI Engineering",
    description:
      "Connect AI workflows with data handling and backend services to build practical applications.",
    tools: "Python · FastAPI · Docker",
  },
  {
    number: "02",
    title: "Generative AI, LLMs & RAG",
    description:
      "Explore language-model applications, retrieval pipelines, vector search, and grounded responses.",
    tools: "LLMs · LangChain · ChromaDB · FAISS",
  },
  {
    number: "03",
    title: "Natural Language Processing (NLP)",
    description:
      "Work with Arabic text, sentiment analysis, text features, and topic modeling.",
    tools: "Arabic NLP · FastText · BERTopic · TF-IDF",
  },
  {
    number: "04",
    title: "Machine Learning & Data Science",
    description:
      "Analyze data, engineer features, and build predictive and time-series models.",
    tools: "Scikit-learn · XGBoost · Pandas · NumPy",
  },
  {
    number: "05",
    title: "Deep Learning",
    description:
      "Train and evaluate neural-network models using established deep-learning frameworks.",
    tools: "PyTorch · TensorFlow / Keras · CNNs",
  },
];

export const capabilities = [
  {
    title: "AI Engineering",
    description:
      "Connect AI workflows with data handling, backend APIs, and software engineering to shape practical applications.",
    icon: "↗",
  },
  {
    title: "Generative AI, LLMs & RAG",
    description:
      "Develop retrieval-augmented workflows with language models and vector stores, focusing on grounded responses.",
    icon: "⌘",
  },
  {
    title: "Natural Language Processing (NLP)",
    description:
      "Apply text processing, topic modeling, and sentiment analysis to language data.",
    icon: "◈",
  },
  {
    title: "Machine Learning & Data Science",
    description:
      "Explore datasets, engineer features, train predictive models, and communicate findings through analytics.",
    icon: "⌁",
  },
  {
    title: "Deep Learning",
    description:
      "Build and evaluate neural-network models with deep-learning frameworks.",
    icon: "⟡",
  },
];

export const pipeline = [
  {
    number: "01",
    title: "Data engineering",
    description:
      "Curate and clean data, normalize OCR output, balance classes, and extract useful features.",
    tools: "Prepare",
  },
  {
    number: "02",
    title: "Model architecture",
    description:
      "Choose an approach suited to the problem, from CNNs and XGBoost to RAG and vector search.",
    tools: "Design",
  },
  {
    number: "03",
    title: "Training & evaluation",
    description:
      "Benchmark with relevant metrics, time-aware validation, and grounded LLM evaluation where appropriate.",
    tools: "Validate",
  },
  {
    number: "04",
    title: "Application integration",
    description:
      "Connect model workflows to APIs and application services, using packaging and asynchronous workflows where appropriate.",
    tools: "Deliver",
  },
];

export const experience = [
  {
    role: "LLM Intern",
    organization: "Tips Hindawi",
    arrangement: "Hybrid",
    dates: "Sep 2025 – Sep 2026",
    summary:
      "Worked on enterprise generative AI applications, RAG pipelines, model adaptation, and deployment.",
    details: [
      "Designed and shipped LLM applications using Mistral, GPT, and Claude models.",
      "Built retrieval pipelines with LangChain, ChromaDB, and Hugging Face embeddings.",
      "Applied prompt engineering and fine-tuning for domain-specific tasks.",
      "Deployed Streamlit applications and exposed endpoints through REST APIs.",
    ],
    technologies: ["LangChain", "RAG", "ChromaDB", "Streamlit", "LLM fine-tuning"],
  },
  {
    role: "Data Science & AI Trainee",
    organization: "Machinfy Academy",
    arrangement: "On-site / Online",
    dates: "Jun 2025 – Dec 2025",
    summary:
      "Completed hands-on ML and deep learning work spanning data preparation, modeling, and evaluation.",
    details: [
      "Built classification and regression solutions, including customer churn and housing price forecasting.",
      "Applied TensorFlow/Keras to CNN, RNN, transfer learning, augmentation, and fine-tuning tasks.",
      "Used SMOTE, hyperparameter tuning, and model evaluation methods.",
    ],
    technologies: ["Scikit-learn", "TensorFlow / Keras", "CNNs & RNNs", "SMOTE", "EDA"],
  },
  {
    role: "Data Analytics Trainee",
    organization: "National Telecommunication Institute (NTI)",
    arrangement: "Egypt",
    dates: "Aug 2025 – Sep 2025",
    summary:
      "Applied NLP and analytics to customer feedback and communicated findings through dashboards.",
    details: [
      "Used Python-based analytics to classify and extract insights from customer feedback.",
      "Created interactive Power BI dashboards for KPIs and model results.",
    ],
    technologies: ["Data analytics", "Power BI", "NLP", "Python"],
  },
  {
    role: "Data Science Trainee",
    organization: "Digital Egypt Pioneers Initiative (DEPI)",
    arrangement: "Ministry of Communications",
    dates: "Jun 2025 – Dec 2025",
    summary:
      "Worked through end-to-end data science workflows and communicated model findings in technical reviews.",
    details: [
      "Covered preprocessing, EDA, feature engineering, supervised learning, and evaluation with Python and SQL.",
      "Benchmarked model performance and iterated from technical review feedback.",
      "Presented analysis as actionable findings.",
    ],
    technologies: ["Supervised learning", "SQL", "Python", "Benchmarking"],
  },
];

export const certifications = [
  {
    category: "AI & Deep Learning",
    name: "Getting Started with Deep Learning",
    issuer: "NVIDIA",
    date: "August 28, 2025",
    credential: "56akPtcYR4ujS692M2oqZQ",
    url: "https://drive.google.com/file/d/1SEp2JqkM5nZAgcHePaYW1FKjfTEvQSNV/view?usp=sharing",
  },
  {
    category: "AI & Deep Learning",
    name: "Deep Learning MiniCamp",
    issuer: "Udemy",
    date: "September 2025",
    credential: "UC-f76e9465-8c93-45d7-a002-9b65d4c4ad16",
    url: "https://ude.my/UC-f76e9465-8c93-45d7-a002-9b65d4c4ad16",
  },
  {
    category: "AI & Data Science",
    name: "AI & Data Science Diploma (MPAIDS)",
    issuer: "Machinfy Academy",
    date: "September 2025",
    credential: "Specialized Professional Diploma",
    url: "https://drive.google.com/file/d/1leFSiU6kafODg2DXJYTb-aj2ShG4zKtj/view?usp=sharing",
  },
  {
    category: "Data Science",
    name: "Data Science Training Program",
    issuer: "Digital Egypt Pioneers Initiative (DEPI)",
    date: "December 2025",
    credential: "Ministry of Communications (MCIT)",
    url: "https://drive.google.com/file/d/1TjjQHwlHN8mOZy4DLDhIsOr_v9qTE9cJ/view?usp=sharing",
  },
  {
    category: "Analytics",
    name: "Advanced Data Analysis Course",
    issuer: "National Telecommunication Institute (NTI)",
    date: "September 2025",
    credential: "NLP & Power BI Analytics",
    url: "https://drive.google.com/file/d/1TSp9IreK5jvcCZN8peaJfod7eT5y7Ib_/view?usp=sharing",
  },
  {
    category: "Data Science",
    name: "Pandas Certificate",
    issuer: "Kaggle Learn",
    date: "November 28, 2025",
    credential: "Data manipulation & analysis",
    url: "https://drive.google.com/file/d/18KLdif3GzULCTEwrr0Kq0ZrK-Ukvqua7/view?usp=sharing",
  },
  {
    category: "Programming",
    name: "Python Programming Basics",
    issuer: "ITI Platform Mahara-Tech (MCIT)",
    date: "July 30, 2025",
    credential: "K175XFpxnD",
    url: "https://drive.google.com/file/d/1XpLmE2srtc5pPIEyBGLsTpdLPd363thd/view?usp=sharing",
  },
  {
    category: "Software Development",
    name: "Software Development — Frontend Developer",
    issuer: "Digital Egypt Pioneers Program (DEPI — MCIT)",
    date: "April – October 2024",
    credential: "Web architecture & UI",
    url: "https://drive.google.com/file/d/1sur3cFNPSibXAnv4o09CYlr_D1i8XnIx/view?usp=sharing",
  },
];

export const faqs = [
  {
    question: "What are your primary areas of technical specialization?",
    answer:
      "My priorities are AI Engineering; Generative AI, LLMs, and RAG; Natural Language Processing; Machine Learning and Data Science; and Deep Learning.",
  },
  {
    question: "How do you approach building practical AI applications?",
    answer:
      "I combine data and model workflows with application components such as FastAPI, Docker, and asynchronous services when they fit the project.",
  },
  {
    question: "How do you address hallucinations in LLM and RAG pipelines?",
    answer:
      "I use domain-aware chunking and retrieval, then evaluate responses against retrieved context with structured checks and metrics such as RAGAS where appropriate.",
  },
  {
    question: "What is your academic background?",
    answer:
      "I graduated in 2026 from the Faculty of Computers and Artificial Intelligence at Cairo University, Department of Artificial Intelligence.",
  },
  {
    question: "How can we discuss roles or project collaborations?",
    answer:
      "Reach me by email, connect on LinkedIn, or explore my public repositories on GitHub.",
  },
];

export const profile = {
  fullName: "Aya Ali",
  title: "AI Engineer",
  headline:
    "I build intelligent AI systems that solve real-world problems.",
  photo: "/images/aya-profile.png",
  email: "ayaali66092@gmail.com",
  github: "https://github.com/aya968",
  linkedin: "https://www.linkedin.com/in/aya-ali-924932373/",
  kaggle: "https://www.kaggle.com/ayaali66",
  resume:
    "https://drive.google.com/uc?export=download&id=1oEEU7EmaYYxEHuOwA0VqtMTC7urlYf8R",
};
