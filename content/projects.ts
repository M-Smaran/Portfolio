export type Project = {
  title: string;
  slug: string;
  tagline: string;
  tags: string[];
  year: number;
  role: string;
  client: string;
  duration: string;
  cover?: string; // e.g. /media/projects/<slug>/cover.jpg
  videoDesktop?: string; // webm
  videoMobile?: string;
  featured: boolean;
  repo?: string; // GitHub URL
  hue: number; // fallback gradient hue when no media exists
  overview: string;
  challenge: string;
  approach: string;
  solution: string;
  results: { value: string; label: string }[];
  reflection: string;
};

export const projects: Project[] = [
  {
    title: "Multiverse",
    slug: "multiverse",
    tagline: "Manage a team of AI agents through a chat view and a Kanban board on shared data.",
    tags: ["Agents", "Full-stack"],
    year: 2026,
    role: "Creator",
    client: "Personal project",
    duration: "Ongoing",
    featured: true,
    repo: "https://github.com/M-Smaran/Multiverse",
    hue: 260,
    overview:
      "A working prototype for collaborating with AI agents. You chat with a lead agent (Iron Man) and its teammates, who create tasks, delegate work, write documents, and ask for approval before acting outside the app.",
    challenge:
      "Make working with several agents feel as natural as working with a team: visible ownership, discussion, cost, and a human in the loop for anything external.",
    approach:
      "Chat and a Kanban board share one data model, so a task created in conversation shows up on the board with its owner, discussion and cost. Jobs run on a BullMQ queue (Redis), with PostgreSQL and Drizzle ORM for storage and the OpenAI API for the agents.",
    solution:
      "Customizable agents (name, role, model, personality, tool permissions), daily standups, per-agent memory, a notification inbox, usage tracking, web search, and email sending that requires explicit approval. A monthly budget triggers notifications at 80% and 100%.",
    results: [
      { value: "2 views", label: "Chat and Kanban over shared data" },
      { value: "Approval", label: "Required before any email is sent" },
      { value: "80/100%", label: "Budget alerts on spend" },
    ],
    reflection:
      "Human approval gates and cost visibility matter as much as the agents' capabilities when people have to trust them.",
  },
  {
    title: "ExecOS: AI Executive Assistant",
    slug: "execos",
    tagline: "An autonomous assistant that handles inbox, calendar and booking workflows.",
    tags: ["Agents", "Full-stack"],
    year: 2026,
    role: "Creator",
    client: "Personal project",
    duration: "Personal project",
    featured: true,
    repo: "https://github.com/M-Smaran/Cadence",
    hue: 30,
    overview:
      "An AI executive assistant that processes email, creates tasks and drafts, manages scheduling, and coordinates bookings, with a real-time chat console that can call tools.",
    challenge:
      "Give an agent access to sensitive accounts (Gmail, Calendar) while keeping credentials secure and agent behaviour auditable.",
    approach:
      "Google OAuth for Gmail and Calendar, Cal.com for bookings, Clerk for auth, GPT-4o for the agent, and PostgreSQL with Drizzle ORM. API keys and OAuth tokens are stored with AES-256-GCM encryption.",
    solution:
      "A Next.js 16 / React 19 app with agent run monitoring and email logging, so every autonomous action can be reviewed.",
    results: [
      { value: "AES-256", label: "Encrypted keys and OAuth tokens" },
      { value: "3 APIs", label: "Gmail, Google Calendar, Cal.com" },
    ],
    reflection: "Security and observability decide whether people will let an autonomous assistant touch their inbox.",
  },
  {
    title: "Multi-Agent Customer Support",
    slug: "multi-agent-support",
    tagline: "A solo-built agentic support system validating enterprise GenAI feasibility.",
    tags: ["GenAI", "Agents"],
    year: 2025,
    role: "Solo builder / Product Manager",
    client: "IONOS",
    duration: "10/2025 – present",
    featured: true,
    hue: 200,
    overview:
      "At IONOS I architected and built a multi-agent customer support system from scratch, as the only builder. It has three specialized agents: a RAG-based knowledge retrieval agent, an email/calendar management agent, and an orchestrating agent that coordinates them.",
    challenge:
      "Prove that agentic AI works end to end for enterprise customer support, while keeping the architecture modular enough to grow beyond an MVP.",
    approach:
      "Agents communicate over A2A protocols, and an MCP server/client integration standardizes tool access across all of them. I also ran user interviews and documented workflows with cross-functional teams.",
    solution:
      "A loosely coupled system (Python, FastAPI, GenAI) where each agent can be developed and swapped independently, a production-grade pattern rare at MVP stage.",
    results: [
      { value: "3", label: "Specialized agents coordinated via A2A" },
      { value: "MCP", label: "Standardized tool access across agents" },
      { value: "Roadmap", label: "Findings informed the GenAI product roadmap" },
    ],
    reflection:
      "Standard protocols pay off early: adding a new tool or agent became an integration task instead of a redesign.",
  },
  {
    title: "Enterprise RAG Evaluation",
    slug: "enterprise-rag",
    tagline: "Evidence-based RAG architecture choices that shaped a new GenAI department.",
    tags: ["GenAI", "RAG"],
    year: 2025,
    role: "Machine Learning Engineer",
    client: "Freudenberg Innovation",
    duration: "08/2024 – 07/2025",
    featured: true,
    hue: 160,
    overview:
      "I built and evaluated a RAG system for internal knowledge base retrieval, comparing multiple frameworks (LangChain, LangGraph) to find the best architecture for enterprise document querying.",
    challenge:
      "Framework choices were being made on assumption. The new GenAI department needed evidence about retrieval accuracy and answer quality.",
    approach:
      "I developed an evaluation pipeline from scratch using RAGAS-style metrics to compare frameworks side by side (Python, OpenAI, ChromaDB, FastAPI).",
    solution:
      "A working RAG system plus a documented comparison, presented to leadership as part of the newly formed GenAI department.",
    results: [
      { value: "Adopted", label: "Recommendations taken into the technical roadmap" },
      { value: "RAGAS", label: "Metric-driven framework comparison" },
    ],
    reflection:
      "Building the evaluation harness first made every later decision faster and easier to defend.",
  },
  {
    title: "Borzoi + Bayesian RNA Dynamics",
    slug: "borzoi-rna-dynamics",
    tagline: "Parameter stability up 37% by integrating a genomic foundation model into a Bayesian framework.",
    tags: ["Research", "Deep Learning"],
    year: 2025,
    role: "Research Assistant",
    client: "DKFZ German Cancer Centre",
    duration: "01/2025 – 07/2025",
    featured: true,
    hue: 300,
    overview:
      "I integrated the Borzoi genomic foundation model into a Bayesian RNA dynamics framework built in JAX/NumPyro.",
    challenge:
      "Make probabilistic models more stable by bringing in pretrained sequence knowledge, without losing flexibility, at roughly 1.2M parameters.",
    approach:
      "I used hierarchical priors with learned embedding offsets, and compared two neural network integration strategies. I also built a GRN evaluation pipeline against CRISPR knockout ground truth (90 TFs, 10 cell types) with Wilcoxon tests and Holm correction.",
    solution:
      "Prior-side placement preserved flexibility, while guide-side amortization degraded performance. The embedding extraction pipeline ran on HPC (SLURM, GPU), after resolving JAX JIT compilation issues.",
    results: [
      { value: "+37%", label: "Parameter stability (ρ 0.615 → 0.843)" },
      { value: "90 TFs", label: "Evaluated across 10 cell types" },
      { value: "~1.2M", label: "Parameters optimized on HPC" },
    ],
    reflection:
      "Where a neural network plugs into a probabilistic model matters as much as what the network is.",
  },
  {
    title: "Full-stack RAG Chatbot",
    slug: "rag-chatbot",
    tagline: "An end-to-end LLM chatbot for document querying: 95% QA accuracy at under 1.5s per query.",
    tags: ["GenAI", "RAG", "Full-stack"],
    year: 2024,
    role: "Developer",
    client: "Personal project",
    duration: "Personal project",
    featured: false,
    repo: "https://github.com/M-Smaran/Production_Ready_RAG",
    hue: 40,
    overview: "An end-to-end LLM-based chatbot for intelligent document querying (Python, FastAPI, ChromaDB, LangChain, OpenAI). Users upload PDF or DOCX files, and the app answers through semantic search with Chroma, with per-session chat history and document management.",
    challenge: "Keep answers accurate while keeping latency low enough to feel conversational.",
    approach: "Optimized the retrieval and serving layers around a ChromaDB vector store and LangChain pipeline.",
    solution: "A FastAPI-served chatbot that answers questions grounded in your documents.",
    results: [
      { value: "95%", label: "QA accuracy" },
      { value: "<1.5s", label: "Latency per query" },
    ],
    reflection: "Retrieval quality and serving optimization drove most of the gains, more than model choice.",
  },
  {
    title: "iris-ingest",
    slug: "iris-ingest",
    tagline: "A pluggable ingestion framework: add a data source without touching existing code.",
    tags: ["Data Engineering"],
    year: 2026,
    role: "Creator",
    client: "Personal project",
    duration: "Personal project",
    featured: false,
    repo: "https://github.com/M-Smaran/iris-ingest",
    hue: 120,
    overview:
      "A Python data ingestion framework built around an abstract SourceAdapter contract, so new sources plug in without modifying existing code.",
    challenge: "Keep ingestion consistent and debuggable as sources multiply, without one bad record aborting a batch.",
    approach:
      "A shared validation pipeline handles CRS conversion (one canonical CRS, EPSG:4326), coordinate range checks and duplicate detection. Staging is swappable (SQLite or JSONL with GeoJSON) via dependency inversion, and loads are idempotent upserts on (source, source_id).",
    solution:
      "A CLI that runs sources by name, rejection tracking that keeps bad records for debugging, and a demo CSV adapter (27 air-quality rows, 5 deliberately invalid). Standard library only, tested with pytest.",
    results: [
      { value: "0 deps", label: "Standard library only" },
      { value: "Idempotent", label: "Upsert-based loads" },
    ],
    reflection: "Dependency inversion at the staging layer made backends swappable without touching adapters.",
  },
  {
    title: "RAG with A2A and MCP",
    slug: "rag-a2a-mcp",
    tagline: "A Python agent system combining retrieval, the A2A protocol and an MCP server.",
    tags: ["Agents", "RAG"],
    year: 2026,
    role: "Creator",
    client: "Personal project",
    duration: "Personal project",
    featured: false,
    repo: "https://github.com/M-Smaran/RAG_A2A_MCP",
    hue: 220,
    overview:
      "A personal Python project exploring RAG, agent-to-agent (A2A) communication and MCP, organized into agents, client, server and models modules.",
    challenge: "Understand how standard agent protocols fit together before applying them in a larger system.",
    approach: "Separate agents, an MCP server and a client, with shared models and utilities.",
    solution: "A runnable reference implementation. See the repository for details.",
    results: [{ value: "A2A + MCP", label: "Agent and tool protocols combined" }],
    reflection: "Prototyping the protocols on their own made the larger multi-agent build quicker.",
  },
  {
    title: "Food Captioning with Diffusion Augmentation",
    slug: "food-captioning",
    tagline: "CNN accuracy from 57% to 66% using Stable Diffusion-augmented COCO data.",
    tags: ["Computer Vision", "Deep Learning"],
    year: 2024,
    role: "Developer",
    client: "University project",
    duration: "Course project",
    featured: false,
    hue: 20,
    overview: "Food captioning on a diffusion-augmented COCO dataset (Python, PyTorch, Stable Diffusion, COCO API, BLEU).",
    challenge: "Limited and imbalanced food image data hurt model accuracy.",
    approach: "Generated extra training images with Stable Diffusion and applied data augmentation and class balancing.",
    solution: "A model deployed for real-time inference.",
    results: [
      { value: "57→66%", label: "CNN accuracy" },
      { value: "<200ms", label: "Latency per frame" },
    ],
    reflection: "Synthetic data helps most when it targets the classes the model struggles with.",
  },
];

export const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
