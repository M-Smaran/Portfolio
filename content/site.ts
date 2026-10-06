// Site-wide copy, based on the resume. Edit freely.
export const site = {
  name: "Mani Smaran Nair",
  url: "https://example.com", // TODO: production URL
  role: "Machine Learning Engineer",
  specialty: "GenAI & Agentic Systems",
  headline: "I build production-grade AI systems, from research to real-world deployment.",
  subline:
    "ML engineer and MSc candidate at Heidelberg University, building RAG pipelines, multi-agent architectures and probabilistic deep learning models.",
  positioning: "Bridging rigorous ML research and scalable AI deployment.",
  location: "Mannheim, Germany",
  email: "manismarann@gmail.com",
  linkedin: "https://linkedin.com/in/m-smaran-nair",
  github: "https://github.com/M-Smaran",
  scheduler: "/contact", // swap for a Cal.com / Calendly URL
  award: { label: "", href: "" }, // set both to show a hero badge
  ctaHeadline: "Building something with AI? Let's talk.",
  bio: [
    "I'm a Machine Learning Engineer and MSc Data & Computer Science candidate at Heidelberg University, with research experience in probabilistic deep learning and genomic foundation models (JAX/NumPyro).",
    "On the applied side, I build production-grade GenAI systems, including RAG pipelines and multi-agent architectures, most recently at IONOS. I like working across the full spectrum, from designing Bayesian inference frameworks at DKFZ to architecting agentic AI products.",
    "Outside of work: reading, football and trekking.",
  ],
  currently: [
    "Product Manager and solo builder of agentic AI products at IONOS",
    "Completing my Master's in Data & Computer Science, Heidelberg University",
    "Exploring MCP and A2A protocols for modular multi-agent systems",
  ],
  credentials: [
    "Multi-agent systems with MCP & A2A",
    "RAG pipelines in production",
    "Genomic foundation models at DKFZ",
    "MSc, Heidelberg University",
  ],
  principles: [
    { title: "Evidence over assumption", body: "I build evaluation pipelines first, so architecture choices are backed by retrieval accuracy and answer quality, not hunches." },
    { title: "Research rigor, product mindset", body: "Statistical testing and ablations on one side, user interviews and deployment reports on the other." },
    { title: "Modular by design", body: "Standard protocols like MCP and A2A keep agents loosely coupled and easy to extend, even at MVP stage." },
    { title: "Ship it and share it", body: "Findings go to stakeholders and roadmaps, so the work changes decisions rather than sitting in a notebook." },
  ],
  skills: {
    "Programming & Automation": ["Python", "R", "Shell scripting", "REST APIs", "FastAPI"],
    "AI/ML Frameworks": ["PyTorch", "TensorFlow", "JAX / NumPyro", "LangChain", "LangGraph"],
    "AI Systems": ["RAG pipelines", "Multi-agent systems", "LLM fine-tuning", "Predictive modeling"],
    "Data Handling": ["Pandas", "NumPy", "SQL / NoSQL", "ChromaDB"],
    "Practices": ["Agile/Scrum", "CI/CD", "Git", "Docker", "SLURM / HPC"],
  } as Record<string, string[]>,
  experience: [
    { period: "10/2025 – Present", title: "Product Manager", org: "IONOS, Karlsruhe", note: "Solo-built a multi-agent customer support system using MCP and A2A; findings inform the GenAI product roadmap." },
    { period: "08/2024 – 07/2025", title: "Machine Learning Engineer", org: "Freudenberg Innovation, Weinheim", note: "Built and evaluated an enterprise RAG system; helped shape the new GenAI department's direction." },
    { period: "01/2025 – 07/2025", title: "Research Assistant", org: "DKFZ German Cancer Centre, Heidelberg", note: "Integrated the Borzoi genomic foundation model into a Bayesian RNA dynamics framework (JAX/NumPyro)." },
    { period: "07/2024 – 02/2025", title: "Research Assistant", org: "Heidelberg University", note: "Probabilistic response models on 15,000 patient-question interactions; +18% accuracy over baselines." },
    { period: "08/2023 – 12/2023", title: "Research Assistant", org: "Central Institute of Mental Health, Mannheim", note: "fMRI preprocessing pipelines for 15,000+ patients; cut data preparation time by 50%." },
  ],
  education: {
    school: "Ruprecht-Karls-Universität Heidelberg",
    degree: "Master's in Data and Computer Science",
    coursework:
      "Natural Language Processing, Machine Learning, Deep Learning, Artificial Intelligence, Probabilistic Programming, Software Engineering, Computer Vision, LLMs",
  },
};

export type Service = {
  slug: string;
  title: string;
  forWhom: string;
  summary: string;
  included: string[];
  how: string;
  outcome: string;
  pricing?: string;
};

export const services: Service[] = [
  {
    slug: "genai-rag",
    title: "GenAI & RAG Systems",
    forWhom: "For teams who want reliable answers from their own documents",
    summary: "Design, build and evaluate retrieval-augmented generation systems for enterprise knowledge bases.",
    included: ["Framework comparison (LangChain, LangGraph)", "Retrieval & vector store setup (ChromaDB)", "RAGAS-style evaluation pipeline", "FastAPI serving layer"],
    how: "Start with an evaluation baseline, iterate on retrieval and prompting, then deploy behind an API.",
    outcome: "A measurable, evidence-backed RAG system and a clear recommendation for your roadmap.",
  },
  {
    slug: "multi-agent",
    title: "Multi-Agent Architectures",
    forWhom: "For product teams exploring agentic AI",
    summary: "Prototype modular agent systems using MCP and A2A protocols, from knowledge retrieval to tool-using orchestrators.",
    included: ["Agent design & orchestration", "MCP server/client integration", "Email/calendar and tool agents", "Feasibility report"],
    how: "Solo-built, fast MVP with weekly demos, user interviews and a documented deployment report.",
    outcome: "A working end-to-end prototype and validated feasibility to guide your product decisions.",
  },
  {
    slug: "ml-research",
    title: "ML Research & Probabilistic Modeling",
    forWhom: "For research groups and biotech teams",
    summary: "Bayesian and deep learning models in JAX/NumPyro, including foundation-model integration and rigorous evaluation.",
    included: ["Probabilistic model design", "Foundation model integration", "Statistical evaluation", "HPC / GPU deployment (SLURM)"],
    how: "Scoped research sprints with reproducible code and clear ablations.",
    outcome: "Validated models with documented gains over baselines.",
  },
];
