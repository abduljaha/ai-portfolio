export const profile = {
  name: "Abduljaha Parchuru",
  role: "AI/ML Engineer | Generative AI Engineer",
  bio: "I build intelligent AI systems, generative AI applications, RAG pipelines, AI agents, and data-driven solutions that solve real-world problems. As a recent B.Tech Computer Science graduate focused on Artificial Intelligence, Machine Learning, and Generative AI, I leverage LLMs, RAG, AI agents, and data engineering technologies to drive innovation.",
  email: "parchuruabduljaha786@gmail.com",
  phone: "+91 9100845631",
  github: "https://github.com/abduljaha",
  linkedin: "https://www.linkedin.com/in/abduljahaparchuru",
  telegram: "https://t.me/parchuruabduljaha786gmailcom",
  x: "https://x.com/ParchuruA77596",
  resume: "/resume.pdf",
  stats: {
    aiProjects: 10,
    technologies: 20,
    certifications: 6,
    githubProjects: 15
  }
};

export const skills = {
  programming: ["Python", "SQL", "JavaScript", "TypeScript"],
  ai: [
    "Machine Learning",
    "Deep Learning",
    "NLP",
    "Computer Vision",
    "LLMs",
    "Transformers",
    "Generative AI",
    "Prompt Engineering",
    "RAG",
    "LangChain",
    "LangGraph",
    "AI Agents",
    "MCP",
    "Vector Databases",
    "Embeddings",
    "Fine-tuning"
  ],
  data: [
    "Databricks",
    "Apache Spark",
    "Delta Lake",
    "Unity Catalog",
    "Lakeflow",
    "Data Pipelines"
  ],
  backend: ["FastAPI", "REST APIs", "Pydantic", "SQLite"],
  tools: ["Git", "GitHub", "Docker", "VS Code", "Claude Code", "Cursor"]
};

export const experience = [
  {
    company: "Talent Smart Soft Solutions",
    role: "AI & Gen AI Developer Intern",
    duration: "May 2026 - Nov 2026",
    responsibilities: [
      "Building and integrating Large Language Models (LLMs) through API integration, prompt engineering, and conversation design for real-time applications.",
      "Developing RAG pipelines using vector databases and embedding models; working on transformer-based models for NLP tasks such as summarization and classification.",
      "Contributing to live production GenAI projects using Python, Django, and FastAPI in an agile team environment."
    ],
    technologies: ["Python", "Django", "FastAPI", "LLMs", "RAG"]
  },
  {
    company: "The Developers Arena",
    role: "Python Development Intern",
    duration: "Jul 2025 - Jan 2026",
    responsibilities: [
      "Developed and optimized backend services using Python, focusing on performance and scalability.",
      "Built and maintained data processing pipelines and integrated various third-party APIs.",
      "Demonstrated outstanding performance and technical excellence throughout the 6-month program."
    ],
    technologies: ["Python", "Backend Development", "APIs", "Data Pipelines"]
  }
];

export const projects = [
  {
    id: "lumina-ai-agent-chatbot",
    name: "Lumina-Ai-Agent-Chatbot",
    problem: "Needed a versatile AI assistant capable of handling real-time data retrieval, tool execution, and supporting multiple LLM providers seamlessly.",
    solution: "A full-stack AI chatbot built with a LangGraph agent, featuring real-time tool-calling capabilities (weather, time, search, calculator), RAG, and multi-provider LLM support (OpenAI, Gemini).",
    technologies: ["Python", "LangGraph", "RAG", "LLMs", "OpenAI", "Gemini"],
    architecture: "User Input -> LangGraph Agent -> Tool Execution / Knowledge Retrieval -> Multi-provider LLM -> Structured Response",
    features: ["Real-time tool calling (Search, Calculator, Weather)", "Multi-provider LLM support", "Retrieval-Augmented Generation (RAG) integration"],
    github: "https://github.com/abduljaha/Lumina-Ai-Agent-Chatbot",
    demo: "#",
    highlights: ["Advanced LangGraph agentic workflow", "Extensible tool integration architecture"]
  },
  {
    id: "rag-resume",
    name: "RAG Resume Project",
    problem: "Recruiters spend too much time manually scanning resumes to find candidate qualifications.",
    solution: "A fully local Retrieval-Augmented Generation app that ingests resume PDFs, embeds them, and instantly answers candidate-specific questions.",
    technologies: ["Python", "LangChain-style RAG", "FAISS", "Hugging Face", "Streamlit"],
    architecture: "PDF Ingestion -> Chunking -> BAAI/bge-small-en-v1.5 Embedding -> FAISS Vector DB -> Cross-Encoder Re-ranking -> LLM Generation",
    features: ["Multi-page Streamlit dashboard", "Local vector search", "Chat history with SQLite persistence"],
    github: "https://github.com/abduljaha/RAG_Resume_Project",
    demo: "#",
    highlights: ["100% local processing", "Sub-second retrieval", "Maintains session state"]
  },
  {
    id: "face-recognition",
    name: "Face Recognition Attendance System",
    problem: "Manual attendance tracking is slow and prone to errors.",
    solution: "A real-time face recognition attendance system using deep learning models with a FastAPI backend.",
    technologies: ["Deep Learning", "FastAPI", "MySQL", "OpenCV", "ONNX"],
    architecture: "Webcam Input -> OpenCV Preprocessing -> ONNX Deep Learning Model -> FastAPI -> MySQL Database",
    features: ["Live recognition", "Automatic attendance logging", "Enrollment pipeline"],
    github: "https://github.com/abduljaha",
    demo: "#",
    highlights: ["Low latency inference with ONNX", "Scalable backend API", "Relational data persistence"]
  },
  {
    id: "ticket-classification",
    name: "AI Ticket Classification System",
    problem: "Support teams are overwhelmed by manually categorizing incoming support tickets.",
    solution: "An AI-based customer support automation tool that uses NLP to intelligently group and classify incoming tickets.",
    technologies: ["Python", "NLP", "Prompt Engineering"],
    architecture: "Ticket Input -> Text Preprocessing -> LLM/NLP Classification Engine -> Categorized Output",
    features: ["Automated triage", "High accuracy classification", "Reduced manual effort"],
    github: "https://github.com/abduljaha",
    demo: "#",
    highlights: ["Prompt engineering optimization", "Seamless workflow integration"]
  },
  {
    id: "ai-chatbot",
    name: "AI Personal Chatbot",
    problem: "Need a personal assistant with contextual memory and tool usage.",
    solution: "A conversational AI assistant with memory, tools, conversation history, and LLM integration.",
    technologies: ["Python", "LLMs", "LangChain", "Memory"],
    architecture: "User Query -> LLM Router -> Tool Execution / Memory Retrieval -> Response Generation",
    features: ["Contextual memory", "Tool integration", "Conversation history tracking"],
    github: "https://github.com/abduljaha",
    demo: "#",
    highlights: ["Agentic workflow", "Custom tool creation"]
  }
];

export const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Malineni Perumallu Educational Society's Group of Institutions, Guntur",
    duration: "Nov 2021 - Jun 2025",
    gpa: "7.5",
    coursework: ["Artificial Intelligence", "Machine Learning", "Data Structures", "Algorithms", "Database Management Systems"]
  },
  {
    degree: "Intermediate (M.P.C)",
    institution: "Narayana Junior College, Guntur",
    duration: "Jun 2018 - Mar 2020",
    gpa: "8.34"
  },
  {
    degree: "SSC",
    institution: "Narayana Group of Schools",
    duration: "Jun 2017 - Apr 2018",
    gpa: "9.7"
  }
];

export const certifications = [
  {
    name: "Databricks Data Engineering Associate",
    issuer: "Databricks",
    date: "Oct 2026 - Oct 2028"
  },
  {
    name: "Databricks Data Analyst Associate",
    issuer: "Databricks",
    date: "Oct 2026 - Oct 2028"
  },
  {
    name: "Certified in Python",
    issuer: "FreeCodeCamp",
    date: "2026"
  },
  {
    name: "Certificate of Internship",
    issuer: "The Developers Arena",
    date: "Jan 2026"
  },
  {
    name: "Certified on Front-End Development",
    issuer: "Smart Internz",
    date: "2024"
  },
  {
    name: "Certified on Python for Data Science",
    issuer: "Cognitive Class",
    date: "2023"
  }
];
