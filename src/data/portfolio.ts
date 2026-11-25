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
  {
    id: "yelp-sentiment-analysis",
    title: "Yelp Reviews Sentiment Analysis",
    category: "NLP · Machine learning",
    description:
      "An end-to-end sentiment analysis pipeline for customer feedback, combining FastText word embeddings with Logistic Regression, text vectorization, and hyperparameter optimization.",
    technologies: [
      "FastText",
      "NLP preprocessing",
      "Text vectorization",
      "Scikit-learn",
      "Hyperparameter tuning",
    ],
  },
];

export const skillGroups = [
  {
    id: "programming",
    title: "Programming Languages",
    category: "Engineering",
    icon: "code",
    items: [
      "Python",
      "SQL",
      "C++",
      "Git & GitHub",
      "VS Code & Jupyter",
    ],
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    category: "Machine Learning",
    icon: "cpu",
    items: [
      "Scikit-learn",
      "XGBoost & CatBoost",
      "Time-series forecasting",
      "Ensemble learning",
      "SMOTE",
      "Model evaluation",
    ],
  },
  {
    id: "deep-learning",
    title: "Deep Learning & Computer Vision",
    category: "Deep Learning",
    icon: "brain",
    items: [
      "PyTorch",
      "TensorFlow / Keras",
      "CNNs & neural nets",
      "Computer vision / OpenCV",
      "ResNet50 / VGG16",
      "Transfer learning",
      "Audio AI / Librosa",
      "NLP / FastText",
    ],
  },
  {
    id: "generative-ai",
    title: "Generative AI & LLMs",
    category: "Generative AI",
    icon: "sparkles",
    items: [
      "LangChain",
      "RAG systems",
      "ChromaDB",
      "FAISS",
      "Llama",
      "Prompt engineering",
      "LLM evaluation",
      "Hugging Face",
    ],
  },
  {
    id: "data-science",
    title: "Data Science & Analytics",
    category: "Data Science",
    icon: "chart",
    items: [
      "Pandas",
      "NumPy",
      "Exploratory analysis",
      "Statistical analysis",
      "Feature engineering",
      "Power BI",
      "Matplotlib & Seaborn",
      "Plotly",
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    category: "Engineering",
    icon: "server",
    items: [
      "FastAPI",
      "REST APIs & Pydantic",
      "Streamlit",
      "Celery & Redis",
      "JWT authentication",
      "SQLAlchemy & Alembic",
    ],
  },
  {
    id: "mlops",
    title: "MLOps & Deployment",
    category: "Engineering",
    icon: "workflow",
    items: [
      "Docker",
      "Docker Compose",
      "ONNX",
      "MLflow",
      "Deployment workflows",
    ],
  },
  {
    id: "databases-tools",
    title: "Databases & Tools",
    category: "Engineering",
    icon: "database",
    items: [
      "Relational databases",
      "SQLite",
      "Git & GitHub",
      "VS Code & Jupyter",
    ],
  },
];

export const domains = [
  {
    number: "01",
    title: "Machine Learning & Analytics",
    description:
      "Predictive models, time-series forecasting, imbalance correction, and feature engineering.",
    tools: "XGBoost · Scikit-learn · Time-aware CV",
  },
  {
    number: "02",
    title: "Deep Learning & Computer Vision",
    description:
      "Multi-class classification, CNN architectures, transfer learning, and image preprocessing.",
    tools: "PyTorch · TensorFlow · OpenCV",
  },
  {
    number: "03",
    title: "Generative AI & RAG",
    description:
      "Domain-specific retrieval systems, vector search, prompt design, and grounded evaluation.",
    tools: "Llama · LangChain · Groq · RAG",
  },
  {
    number: "04",
    title: "Audio & NLP Systems",
    description:
      "Acoustic signal processing, speech classification, sentiment analysis, and Arabic text workflows.",
    tools: "Librosa · FastText · Azure OCR · Pydub",
  },
];

export const capabilities = [
  {
    title: "End-to-end ML & deep learning",
    description:
      "Design, train, and validate classification, regression, and deep neural models with careful tuning and data-leakage prevention.",
    icon: "↗",
  },
  {
    title: "Custom GenAI & RAG systems",
    description:
      "Build retrieval-augmented pipelines with LangChain and vector stores, with evaluation focused on grounded responses.",
    icon: "⌘",
  },
  {
    title: "Computer vision & audio AI",
    description:
      "Develop image and acoustic pipelines for multi-class recognition, transfer learning, and audio feature extraction.",
    icon: "◈",
  },
  {
    title: "Data science & business intelligence",
    description:
      "Explore datasets, engineer useful features, model patterns, and communicate findings with interactive dashboards.",
    icon: "⌁",
  },
  {
    title: "Production MLOps & deployment",
    description:
      "Package models with Docker, expose APIs with FastAPI, accelerate inference with ONNX, and track experiments with MLflow.",
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
    title: "MLOps & deployment",
    description:
      "Package services, expose APIs, accelerate inference, and orchestrate asynchronous workflows.",
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
      "I work across machine learning and deep learning, generative AI and RAG, and data science analytics, supported by production tools such as Docker, FastAPI, ONNX, and Streamlit.",
  },
  {
    question: "Can you take an AI model from research to containerized production?",
    answer:
      "Yes. My work can span data ingestion and exploration, training and tuning, API development with FastAPI, Docker packaging, and asynchronous workflows with Celery and Redis.",
  },
  {
    question: "How do you address hallucinations in LLM and RAG pipelines?",
    answer:
      "I use domain-aware chunking and retrieval, then evaluate responses against retrieved context with structured checks and metrics such as RAGAS where appropriate.",
  },
  {
    question: "What is your academic background?",
    answer:
      "I am studying for a Bachelor of Artificial Intelligence at the Faculty of Computers and Artificial Intelligence, Cairo University. The reference portfolio lists a GPA of 3.3/4.0.",
  },
  {
    question: "How can we discuss roles or project collaborations?",
    answer:
      "Reach me by email, connect on LinkedIn, or explore my public repositories on GitHub.",
  },
];

export const profile = {
  fullName: "Aya Ali",
  title: "AI / ML Engineer",
  headline: "Turning Data into Intelligent Solutions",
  email: "ayaali66092@gmail.com",
  github: "https://github.com/aya968",
  linkedin: "https://www.linkedin.com/in/aya-ali-924932373/",
  kaggle: "https://www.kaggle.com/ayaali66",
  resume:
    "https://portfolify-one-lac.vercel.app/assets/Aya_Ali_Hassan_AI_Engineer.pdf",
};
