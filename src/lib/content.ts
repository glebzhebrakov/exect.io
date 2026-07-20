export const navLinks = [
  { href: "#capabilities", label: "Capabilities" },
  { href: "#platforms", label: "Platforms" },
  { href: "#industries", label: "Industries" },
  { href: "#process", label: "Delivery" },
  { href: "#work", label: "Work" },
  { href: "#faq", label: "FAQ" },
] as const;

export const valueProps = [
  {
    title: "Architecture before models",
    body: "We design the control plane, serving layer, data boundaries, and operational model first—so model choice becomes an implementation detail, not a platform bet.",
  },
  {
    title: "Private by default",
    body: "Inference, embeddings, retrieval, and agent runtimes stay inside your VPC, on-prem, or sovereign cloud. Data residency and access control are constraints, not afterthoughts.",
  },
  {
    title: "Production economics",
    body: "GPU sizing, batching, caching, and multi-model routing cut cost per request without sacrificing latency SLOs. You get a platform you can operate and forecast.",
  },
  {
    title: "Systems integration",
    body: "AI platforms must connect to identity, data warehouses, document systems, CI/CD, and observability. We build for the estate you already run.",
  },
] as const;

export const services = [
  {
    id: "01",
    title: "Enterprise AI Architecture",
    body: "Reference architectures for private inference, RAG, agents, and developer platforms—aligned to security, network, and data governance requirements.",
  },
  {
    id: "02",
    title: "Private LLM Infrastructure",
    body: "Deploy and harden open and commercial models inside your perimeter with isolation, auditability, and controlled model promotion.",
  },
  {
    id: "03",
    title: "GPU Infrastructure Design",
    body: "Cluster topology, interconnect, storage throughput, and capacity planning sized to real workload profiles—not vendor slides.",
  },
  {
    id: "04",
    title: "Inference Platforms",
    body: "NVIDIA Triton, vLLM, and Kubernetes-based serving with autoscaling, canaries, and multi-model orchestration.",
  },
  {
    id: "05",
    title: "AI Platform Engineering",
    body: "Internal AI platforms: APIs, SDKs, model catalogs, evaluation pipelines, and self-serve environments for product teams.",
  },
  {
    id: "06",
    title: "Performance Optimization",
    body: "Latency and throughput tuning across quantization, speculative decoding, KV cache, routing, and hardware utilization.",
  },
  {
    id: "07",
    title: "Enterprise RAG",
    body: "Retrieval systems over governed corpora—chunking strategy, hybrid search, access-aware indexing, and grounded evaluation.",
  },
  {
    id: "08",
    title: "AI Coding Assistants",
    body: "Secure coding copilots integrated with source control, policy, and private context—without leaking proprietary code.",
  },
  {
    id: "09",
    title: "AI Agents",
    body: "Tool-using agents with bounded permissions, observability, and human-in-the-loop controls suitable for regulated workflows.",
  },
  {
    id: "10",
    title: "AI Platform Operations",
    body: "SLOs, incident response, cost dashboards, model drift checks, and runbooks so AI stays reliable after launch.",
  },
  {
    id: "11",
    title: "AI Security & Governance",
    body: "Threat models for model APIs, prompt injection surfaces, secrets handling, red-team baselines, and policy enforcement.",
  },
  {
    id: "12",
    title: "Infrastructure Consulting",
    body: "Decision support for build-vs-buy, vendor evaluation, capacity roadmaps, and platform ownership models.",
  },
] as const;

export const industries = [
  {
    title: "Financial services",
    body: "Private inference for risk, research, and operations with audit trails and strict data boundaries.",
  },
  {
    title: "Healthcare & life sciences",
    body: "On-prem and VPC platforms for clinical and research workloads where PHI and IP cannot leave the estate.",
  },
  {
    title: "Industrial & manufacturing",
    body: "Plant-adjacent and cloud hybrid platforms for documentation, quality, and engineering knowledge systems.",
  },
  {
    title: "Telecommunications",
    body: "High-throughput inference platforms for customer operations and network intelligence at scale.",
  },
  {
    title: "Public sector",
    body: "Sovereign and air-gapped deployments with governance controls designed for procurement and assurance.",
  },
  {
    title: "Technology & SaaS",
    body: "Multi-tenant AI platforms and internal developer AI infrastructure for product organizations.",
  },
] as const;

export const stack = [
  {
    group: "Serving",
    items: ["NVIDIA Triton", "vLLM", "TensorRT-LLM", "OpenAI-compatible gateways"],
  },
  {
    group: "Orchestration",
    items: ["Kubernetes", "GPU operators", "Helm / GitOps", "Service mesh"],
  },
  {
    group: "Models",
    items: ["Open-weight LLMs", "Embedding models", "Rerankers", "Specialized small models"],
  },
  {
    group: "Data & RAG",
    items: ["Vector indexes", "Hybrid search", "Object storage", "Warehouse connectors"],
  },
  {
    group: "Observability",
    items: ["Metrics & traces", "Token economics", "Eval harnesses", "Incident tooling"],
  },
  {
    group: "Security",
    items: ["SSO / IAM", "Network isolation", "Secrets management", "Policy engines"],
  },
] as const;

export const differentiators = [
  {
    title: "Multi-model platform design",
    body: "We route work across large, small, and specialized models instead of forcing every request through a single frontier endpoint.",
  },
  {
    title: "Infrastructure that matches demand",
    body: "GPU fleets sized from measured traffic shapes—batch, interactive, and agent workloads treated as different systems.",
  },
  {
    title: "Inference as an engineered surface",
    body: "Serving stacks are tuned for p95 latency, concurrency, and cost—not demo throughput.",
  },
  {
    title: "Enterprise systems fluency",
    body: "We integrate with the identity, data, and change-management systems already running in your organization.",
  },
  {
    title: "Operable after we leave the room",
    body: "Documentation, ownership maps, SLOs, and handover are part of delivery—platforms must survive without perpetual consultants.",
  },
  {
    title: "Security as architecture",
    body: "Isolation, least privilege, and auditability are designed into the control and data planes from day one.",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Discover & constrain",
    body: "Map workloads, data classes, latency budgets, compliance boundaries, and existing platform ownership.",
  },
  {
    step: "02",
    title: "Architecture & sizing",
    body: "Define reference architecture, model portfolio, GPU topology, and operating model with cost envelopes.",
  },
  {
    step: "03",
    title: "Build the platform",
    body: "Stand up serving, retrieval, gateways, CI for models, observability, and secure access paths.",
  },
  {
    step: "04",
    title: "Optimize & harden",
    body: "Tune inference, validate SLOs, run security and failure drills, and close operational gaps.",
  },
  {
    step: "05",
    title: "Transfer & operate",
    body: "Hand over runbooks, dashboards, and ownership. Optional ongoing platform operations support.",
  },
] as const;

export const caseStudies = [
  {
    sector: "Global bank",
    title: "Private inference platform for research and operations",
    outcome:
      "Unified serving layer across three model classes with VPC isolation, SSO, and cost controls under a defined GPU budget.",
    metrics: [
      { label: "Latency SLO", value: "p95 < 800ms" },
      { label: "GPU utilization", value: "+34%" },
      { label: "Cost / 1M tokens", value: "−41%" },
    ],
  },
  {
    sector: "Healthcare network",
    title: "On-prem RAG for clinical documentation",
    outcome:
      "Access-aware retrieval over governed corpora with audit logging and no PHI egress outside the hospital network.",
    metrics: [
      { label: "Corpus indexed", value: "18M docs" },
      { label: "Groundedness", value: "92% eval pass" },
      { label: "Time to pilot", value: "11 weeks" },
    ],
  },
  {
    sector: "Industrial OEM",
    title: "Secure coding assistant across engineering orgs",
    outcome:
      "Private coding assistant integrated with source control and policy, keeping proprietary code off public model endpoints.",
    metrics: [
      { label: "Engineers covered", value: "4,200" },
      { label: "Repo leakage risk", value: "Eliminated" },
      { label: "Adoption", value: "67% weekly" },
    ],
  },
] as const;

export const faqs = [
  {
    q: "Are you a consulting firm or a platform vendor?",
    a: "Neither in the traditional sense. We are enterprise AI infrastructure engineers. We design and build the platforms your teams own and operate—architecture, serving, GPU, security, and operations—not slide decks and staff augmentation.",
  },
  {
    q: "Do you resell GPUs or hosted models?",
    a: "We are infrastructure- and architecture-led. We help you select and integrate the right hardware, models, and serving stacks for your constraints. Procurement stays with you or your preferred vendors.",
  },
  {
    q: "Can you work inside our VPC or on-prem?",
    a: "Yes. Private deployment is the default posture for most engagements—VPC, on-prem, hybrid, or sovereign cloud depending on data residency and assurance requirements.",
  },
  {
    q: "How do you approach model selection?",
    a: "By workload. Interactive assistants, batch extraction, code, and agents have different latency, context, and cost profiles. We design a model portfolio and routing policy rather than committing the platform to a single model.",
  },
  {
    q: "What does engagement typically look like?",
    a: "A structured delivery program: discovery, architecture and sizing, platform build, optimization and hardening, then operational transfer. Scope is defined by platform outcomes, not hours sold.",
  },
  {
    q: "How do you measure success?",
    a: "Production readiness: latency and availability SLOs, cost per unit of work, security posture, team ownership, and the ability to ship new workloads onto the platform without re-architecting.",
  },
] as const;
