import { useState } from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone, Cpu, Network, Database, Cloud, Code2, GraduationCap, Briefcase, Menu, X } from 'lucide-react';

const linkedin = 'https://www.linkedin.com/in/chaitanyasurabattuni/';
const experiences = [
  { company: 'Surge AI', role: 'Research Engineer', location: 'Bay Area, CA', dates: 'Jul 2026 – Present', bullets: [
    'Evaluate frontier LLMs and agents on real software engineering tasks involving long-context reasoning, multi-step tool execution, unfamiliar codebases, and cross-service dependencies.',
    'Design benchmark datasets, test suites, and evaluation protocols for agent execution, implementation correctness, context retrieval, reasoning, and tool interaction.',
    'Analyze execution trajectories and diagnose long-horizon failures across reasoning, tools, infrastructure, and environment layers; turn recurring patterns into quantitative evaluation signals.',
    'Work with model training and research teams to improve evaluation methodology, benchmark reliability, and coverage of systematic failure modes.'
  ]},
  { company: 'Prime Health Technologies', role: 'Agent Evaluation Engineer', location: 'Bay Area, CA', dates: 'May 2026 – Aug 2026', bullets: [
    'Owned evaluation infrastructure for a production health-coaching agent across chat, WhatsApp, and voice, improving domain-routing accuracy from 71% to 93%.',
    'Built scalable synthetic-user, rubric-grading, and model-as-judge pipelines that increased evaluation throughput 15× over manual review.',
    'Created reusable regression harnesses, benchmark suites, and CI/CD quality gates for agent and classifier releases.',
    'Found a classifier defect that let invalid tests pass and added deployment validation to prevent model and routing regressions.',
    'Maintained versioned datasets, evaluators, and reproducible experiments to distinguish model improvements from prompt, configuration, and infrastructure changes.'
  ]},
  { company: 'LMES', role: 'GenAI Engineer – LLM Systems & Intelligent Automation', location: 'Dallas, TX', dates: 'Jun 2025 – Apr 2026', bullets: [
    'Designed production voice and chat AI systems in Python, TypeScript, and Rust, including agent orchestration, integrations, tooling, and retrieval for member support.',
    'Built a unified GCP data and retrieval platform connecting SQL systems, DynamoDB, BigQuery, event-driven services, and unstructured content across 10+ services.',
    'Architected hybrid local/cloud inference and Cloud Run microservices, reducing model-serving costs by 90% while maintaining reliability.',
    'Developed TypeScript agent APIs and Rust performance-critical services; deployed with automated tests, CI/CD, observability, canary validation, and rollback.'
  ]}
];
const skills = [
  { icon: Code2, title: 'Languages & Backend', items: 'Python · TypeScript · Rust · FastAPI · REST APIs · Async programming · Microservices' },
  { icon: Cpu, title: 'AI/ML & Agents', items: 'Agent evaluation · Benchmark design · Synthetic data · LLM-as-judge · Regression harnesses · LangGraph · PyTorch · Hugging Face · RAG' },
  { icon: Database, title: 'Data & Infrastructure', items: 'PostgreSQL · DynamoDB · BigQuery · Kafka · Redis · Docker · Kubernetes · GKE · Cloud Run' },
  { icon: Cloud, title: 'Cloud & Reliability', items: 'AWS · GCP · Azure · GitHub Actions · CI/CD · Prometheus · Grafana · Observability · Canary releases' }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = [['About', 'about'], ['Experience', 'experience'], ['Project', 'project'], ['Skills', 'skills'], ['Education', 'education']];
  return <div className="min-h-screen bg-[#080b10] text-slate-100 selection:bg-cyan-300 selection:text-slate-950">
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#080b10]/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-mono text-sm tracking-widest text-cyan-300">CS<span className="text-slate-500">_</span></a>
        <button className="md:hidden" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <div className={`${menuOpen ? 'absolute left-0 right-0 top-full flex flex-col border-b border-white/10 bg-[#080b10] p-6' : 'hidden'} gap-7 text-sm text-slate-400 md:static md:flex md:flex-row md:border-0 md:bg-transparent md:p-0`}>
          {nav.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="transition hover:text-cyan-300">{label}</a>)}
          <a href={linkedin} target="_blank" rel="noreferrer" className="text-cyan-300 hover:text-white">LinkedIn ↗</a>
        </div>
      </nav>
    </header>

    <main>
      <section id="home" className="relative overflow-hidden px-6 pb-24 pt-36 md:pb-32 md:pt-48">
        <div className="pointer-events-none absolute -right-20 top-24 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-6xl">
          <p className="mb-6 font-mono text-sm tracking-[.22em] text-cyan-300">AI / ML ENGINEER <span className="text-slate-600">—</span> AGENT EVALUATION <span className="text-slate-600">—</span> LLM SYSTEMS</p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl">Chaitanya<br/><span className="text-slate-500">Surabattuni</span></h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">I build infrastructure for AI and agentic systems, from evaluation platforms and data-generation pipelines to distributed services in production.</p>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
            <span className="inline-flex items-center gap-2"><MapPin size={16} className="text-cyan-300"/>Fremont, CA</span>
            <a href="mailto:chaitanyasurabattuni@gmail.com" className="inline-flex items-center gap-2 hover:text-cyan-300"><Mail size={16} className="text-cyan-300"/>Email</a>
            <a href="tel:+19452684534" className="inline-flex items-center gap-2 hover:text-cyan-300"><Phone size={16} className="text-cyan-300"/>+1 (945) 268-4534</a>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#experience" className="inline-flex items-center gap-2 rounded bg-cyan-300 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-200">Explore experience <ArrowUpRight size={17}/></a>
            <a href={linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded border border-white/15 px-5 py-3 text-slate-200 transition hover:border-cyan-300 hover:text-cyan-300"><Linkedin size={17}/> LinkedIn</a>
          </div>
          <div className="mt-20 grid gap-4 sm:grid-cols-3">
            {[['15×', 'evaluation throughput'], ['71% → 93%', 'routing accuracy'], ['~90%', 'lower model-serving cost']].map(([v, label]) => <div key={label} className="border-l border-cyan-300/50 bg-white/[.03] px-5 py-4"><div className="font-mono text-2xl text-cyan-300">{v}</div><div className="mt-1 text-sm text-slate-500">{label}</div></div>)}
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-white/10 bg-white/[.025] px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[.7fr_1.3fr] md:items-start"><p className="font-mono text-sm tracking-widest text-cyan-300">01 / PROFILE</p><div><h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Engineering reliable intelligence.</h2><p className="mt-6 max-w-3xl leading-8 text-slate-400">Software engineer building infrastructure for AI/ML and agentic systems across evaluation platforms, distributed backend services, data-generation pipelines, and production cloud environments. Experienced with Python, TypeScript, and Rust across agent execution, automated evaluation, distributed inference, and microservices.</p></div></div>
      </section>

      <section id="experience" className="px-6 py-24"><div className="mx-auto max-w-6xl"><p className="font-mono text-sm tracking-widest text-cyan-300">02 / EXPERIENCE</p><h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Work experience</h2><div className="mt-12 space-y-5">{experiences.map((job) => <article key={job.company} className="rounded-lg border border-white/10 bg-white/[.025] p-6 md:p-8"><div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start"><div><h3 className="text-xl font-medium">{job.role}</h3><p className="mt-1 text-cyan-300">{job.company} <span className="text-slate-600">·</span> <span className="text-slate-500">{job.location}</span></p></div><span className="whitespace-nowrap font-mono text-xs text-slate-500">{job.dates}</span></div><ul className="mt-6 space-y-3">{job.bullets.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-slate-400"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300"/>{item}</li>)}</ul></article>)}</div></div></section>

      <section id="project" className="border-y border-white/10 bg-white/[.025] px-6 py-24"><div className="mx-auto max-w-6xl"><p className="font-mono text-sm tracking-widest text-cyan-300">03 / SELECTED PROJECT</p><article className="mt-8 max-w-4xl rounded-lg border border-white/10 bg-[#080b10] p-7 md:p-10"><div className="flex items-start justify-between gap-6"><div><p className="font-mono text-xs tracking-wider text-cyan-300">LANGGRAPH · FASTAPI · POSTGRESQL · OPENAI · REDIS · DOCKER · STREAMLIT</p><h2 className="mt-4 text-2xl font-semibold md:text-3xl">Manufacturing Operations Copilot</h2></div><Network className="shrink-0 text-cyan-300"/></div><p className="mt-6 leading-7 text-slate-400">A LangGraph multi-agent system for investigation planning, database-backed analysis, production bottleneck identification, and evidence-backed incident reporting.</p><p className="mt-4 leading-7 text-slate-400">Includes an LLM-powered natural-language-to-SQL analytics layer across 10M+ records, using schema-aware query generation and systematic validation.</p></article></div></section>

      <section id="skills" className="px-6 py-24"><div className="mx-auto max-w-6xl"><p className="font-mono text-sm tracking-widest text-cyan-300">04 / TOOLKIT</p><h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Skills & technologies</h2><div className="mt-10 grid gap-4 md:grid-cols-2">{skills.map(({ icon: Icon, title, items }) => <article key={title} className="rounded-lg border border-white/10 bg-white/[.025] p-6"><Icon className="text-cyan-300"/><h3 className="mt-4 font-medium">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-400">{items}</p></article>)}</div></div></section>

      <section id="education" className="border-t border-white/10 bg-white/[.025] px-6 py-24"><div className="mx-auto max-w-6xl"><p className="font-mono text-sm tracking-widest text-cyan-300">05 / EDUCATION</p><div className="mt-8 grid gap-4 md:grid-cols-2">{[['M.S. in Artificial Intelligence', 'University of North Texas', 'Denton, TX · Aug 2023 – May 2025'], ['B.E. in Electronics & Communication Engineering', 'Visvesvaraya Technological University', 'Bangalore, India · Jul 2018 – Jun 2022']].map(([degree, school, dates]) => <article key={school} className="flex gap-4 rounded-lg border border-white/10 p-6"><GraduationCap className="mt-1 shrink-0 text-cyan-300"/><div><h3 className="font-medium">{degree}</h3><p className="mt-2 text-cyan-300">{school}</p><p className="mt-1 text-sm text-slate-500">{dates}</p></div></article>)}</div></div></section>
    </main>

    <footer className="px-6 py-10"><div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm text-slate-500 sm:flex-row sm:items-center"><p>© 2026 Chaitanya Surabattuni</p><div className="flex gap-5"><a className="hover:text-cyan-300" href="mailto:chaitanyasurabattuni@gmail.com">Email</a><a className="inline-flex items-center gap-1 hover:text-cyan-300" href={linkedin} target="_blank" rel="noreferrer"><Linkedin size={15}/>LinkedIn</a><a className="inline-flex items-center gap-1 hover:text-cyan-300" href="#home">Back to top ↑</a></div></div></footer>
  </div>;
}

export default App;
