import { useState } from 'react';
import { ChevronDown, Briefcase, Cpu, Database, Cloud, Code2, GraduationCap, Mail, Phone, Linkedin, ExternalLink, Menu, X } from 'lucide-react';

const linkedin = 'https://www.linkedin.com/in/chaitanyasurabattuni/';
const experience = [
  { company: 'Surge AI', role: 'Research Engineer', location: 'Bay Area, CA', dates: 'Jul 2026 – Present', highlights: [
    'Evaluate frontier LLMs and AI agents across real-world software engineering tasks involving long-context reasoning, multi-step tool execution, unfamiliar codebases, and dependencies across files, services, and configurations.',
    'Design benchmark datasets, test suites, and evaluation protocols for agent execution, implementation correctness, context retrieval, reasoning, and tool interaction.',
    'Analyze agent execution trajectories, diagnosing failures in reasoning, context retrieval, tool use, state management, configuration, and execution.',
    'Translate recurring long-horizon agent failure patterns into quantitative evaluation signals and benchmark improvements; collaborate with research and model-training teams to improve evaluation reliability.'
  ]},
  { company: 'Prime Health Technologies', role: 'Agent Evaluation Engineer', location: 'Bay Area, CA', dates: 'May 2026 – Aug 2026', highlights: [
    'Owned evaluation infrastructure for a production health-coaching agent across chat, WhatsApp, and voice, improving domain-routing accuracy from 71% to 93%.',
    'Built data-generation and evaluation pipelines using synthetic users, rubric-based grading, and model-as-judge scoring, increasing throughput 15× over manual review.',
    'Developed reusable regression harnesses, benchmark suites, and CI/CD quality gates for repeatable validation across prompts, models, APIs, and routing logic.',
    'Identified a classifier defect that allowed invalid tests to pass and implemented deployment checks to prevent model and routing regressions.',
    'Maintained versioned datasets, evaluators, and reproducible experiments to isolate model improvements from prompt, configuration, and infrastructure changes.'
  ]},
  { company: 'LMES', role: 'GenAI Engineer – LLM Systems & Intelligent Automation', location: 'Dallas, TX', dates: 'Jun 2025 – Apr 2026', highlights: [
    'Designed and deployed production voice and chat AI systems in Python, TypeScript, and Rust, including agent orchestration, service integrations, tooling, and retrieval.',
    'Built a unified GCP data and retrieval platform integrating SQL systems, DynamoDB, BigQuery, event-driven services, and unstructured content across 10+ services.',
    'Architected hybrid local/cloud inference and Cloud Run microservices, reducing model-serving costs by 90% while maintaining reliability.',
    'Developed TypeScript agent APIs and Rust high-throughput components; deployed microservices with testing, CI/CD, observability, canary validation, and rollback.'
  ]}
];
const skillCategories = [
  { icon: Code2, title: 'Languages & Backend', skills: ['Python', 'TypeScript', 'Rust', 'FastAPI', 'REST APIs', 'Async programming', 'Microservices', 'Distributed systems', 'Event-driven architecture'] },
  { icon: Cpu, title: 'AI/ML Platforms', skills: ['Agent evaluation', 'Benchmark design', 'Synthetic data generation', 'LLM-as-judge', 'Regression harnesses', 'LangGraph', 'PyTorch', 'Hugging Face', 'RAG / retrieval'] },
  { icon: Database, title: 'Data & Infrastructure', skills: ['PostgreSQL', 'DynamoDB', 'BigQuery', 'Kafka', 'Redis', 'Docker', 'Kubernetes', 'GKE', 'Cloud Run'] },
  { icon: Cloud, title: 'Cloud & Reliability', skills: ['AWS', 'GCP', 'Azure', 'GitHub Actions', 'CI/CD', 'Prometheus', 'Grafana', 'Observability', 'Canary validation', 'Rollback'] }
];
const education = [
  { school: 'University of North Texas', degree: 'M.S. in Artificial Intelligence', location: 'Denton, TX', dates: 'Aug 2023 – May 2025' },
  { school: 'Visvesvaraya Technological University', degree: 'B.E. in Electronics & Communication Engineering', location: 'Bangalore, India', dates: 'Jul 2018 – Jun 2022' }
];
const project = { title: 'Manufacturing Operations Copilot', stack: 'LangGraph · FastAPI · PostgreSQL · OpenAI · Redis · Docker · Streamlit', points: [
  'Built a LangGraph multi-agent system for investigation planning, database-backed analysis, production bottleneck identification, and evidence-backed incident reporting.',
  'Engineered an LLM-powered natural-language-to-SQL analytics layer across 10M+ records using schema-aware query generation and systematic validation.'
] };

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const sections = [['hero', 'Home'], ['summary', 'Summary'], ['experience', 'Experience'], ['projects', 'Projects'], ['skills', 'Skills'], ['education', 'Education'], ['contact', 'Contact']];
  const scrollTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); };
  return <div className="min-h-screen overflow-x-hidden bg-cream text-black">
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-brown/20 bg-cream/95 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="relative flex items-center justify-center">
          <div className="hidden flex-shrink-0 items-center justify-center gap-5 md:flex lg:gap-8">{sections.map(([id, label]) => <button key={id} onClick={() => scrollTo(id)} className="text-sm font-light tracking-wide text-brown transition-colors duration-300 hover:text-black">{label}</button>)}</div>
          <button className="absolute right-0 text-black md:hidden" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={26}/> : <Menu size={26}/>}</button>
        </div>
        {menuOpen && <div className="mt-4 flex flex-col space-y-4 border-t border-brown/20 pt-4 md:hidden">{sections.map(([id, label]) => <button key={id} onClick={() => scrollTo(id)} className="text-left text-brown transition hover:text-black">{label}</button>)}</div>}
      </div>
    </nav>

    <section id="hero" className="bg-cream pb-20 pt-32"><div className="mx-auto max-w-6xl px-6 text-center">
      <div className="mb-10"><img src="images/image.png" alt="Chaitanya Surabattuni" className="mx-auto mb-6 h-36 w-36 rounded-full border-4 border-brown/30 object-cover shadow-lg"/></div>
      <h1 className="mb-6 break-words font-display text-4xl leading-tight tracking-wide text-black sm:text-5xl md:text-6xl">CHAITANYA SURABATTUNI</h1>
      <div className="mb-3 text-lg font-light tracking-wide text-brown">AI/ML Engineer · Agent Evaluation · LLM Systems · Distributed AI Infrastructure</div>
      <div className="mb-1 text-sm uppercase tracking-[0.18em] text-brown/80 sm:tracking-[0.3em]">FREMONT, CALIFORNIA</div>
      <div className="mx-auto mb-10 h-0.5 w-24 bg-brown"/>
      <p className="mx-auto mb-10 max-w-4xl text-lg font-light leading-relaxed text-brown">Software engineer building infrastructure for AI/ML and agentic systems across evaluation platforms, distributed backend services, data-generation pipelines, and production cloud environments. Delivered systems that increased evaluation throughput ~15×, improved routing accuracy from 71% to 93%, and reduced model-serving costs ~90%.</p>
      <div className="flex flex-col justify-center gap-6 sm:flex-row"><button onClick={() => scrollTo('experience')} className="transform bg-black px-10 py-4 font-light tracking-wide text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-brown hover:shadow-xl">VIEW EXPERIENCE</button><a href={linkedin} target="_blank" rel="noreferrer" className="border border-black px-10 py-4 font-light tracking-wide text-black transition-all hover:bg-black hover:text-white">LINKEDIN PROFILE</a></div>
      <div className="mx-auto mt-16 grid max-w-4xl gap-6 text-center md:grid-cols-3">{[['EVALUATION THROUGHPUT', '15×', 'Increase over manual review'], ['ROUTING ACCURACY', '71% → 93%', 'Production agent improvement'], ['SERVING COSTS', '~90%', 'Reduction in model-serving costs']].map(([label, value, detail]) => <div key={label} className="rounded-sm border border-brown/10 bg-white p-6 shadow-sm"><div className="mb-2 text-xs tracking-widest text-brown/70">{label}</div><div className="mb-1 font-display text-3xl text-black">{value}</div><div className="text-sm font-light text-brown">{detail}</div></div>)}</div>
      <div className="mt-12 text-center"><ChevronDown className="mx-auto h-6 w-6 cursor-pointer animate-bounce text-brown/60 transition-colors hover:text-black" onClick={() => scrollTo('summary')}/></div>
    </div></section>

    <section id="summary" className="bg-white py-24"><div className="mx-auto max-w-6xl px-6"><div className="mb-20 text-center"><h2 className="mb-8 break-words font-display text-3xl leading-tight tracking-wide text-black sm:text-4xl md:text-5xl">SUMMARY</h2><p className="mx-auto max-w-3xl text-lg font-light text-brown">Building dependable evaluation and infrastructure for AI agents and large language model systems.</p></div><div className="grid gap-10 md:grid-cols-3">{[
      { icon: Cpu, title: 'Agent Evaluation', detail: 'Designed benchmark datasets, regression suites, and evaluation pipelines that improved routing accuracy to 93% and evaluation throughput 15×.' },
      { icon: Database, title: 'Distributed Systems', detail: 'Built data and retrieval platforms spanning 10+ services, with hybrid inference and production microservices.' },
      { icon: Cloud, title: 'Production AI', detail: 'Delivered production systems with CI/CD, observability, canary validation, and rollback, reducing serving costs by 90%.' }
    ].map(({icon: Icon, title, detail}) => <div key={title} className="rounded-sm border border-brown/10 bg-cream p-8 text-center shadow-sm"><div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center bg-black"><Icon className="h-7 w-7 text-white"/></div><h3 className="mb-4 font-display text-xl tracking-wide">{title.toUpperCase()}</h3><p className="font-light leading-relaxed text-brown">{detail}</p></div>)}</div></div></section>

    <section id="experience" className="bg-cream py-24"><div className="mx-auto max-w-6xl px-6"><div className="mb-20 text-center"><h2 className="mb-8 break-words font-display text-3xl leading-tight tracking-wide sm:text-4xl md:text-5xl">WORK EXPERIENCE</h2><div className="mx-auto mb-8 h-0.5 w-16 bg-brown"/><p className="mx-auto max-w-3xl text-lg font-light text-brown">AI research, agent evaluation, and production LLM engineering.</p></div><div className="space-y-10">{experience.map(job => <article key={job.company} className="rounded-sm border border-brown/10 bg-white p-8 shadow-sm"><div className="mb-4 flex flex-col justify-between md:flex-row md:items-center"><div><h3 className="font-display text-2xl tracking-wide">{job.role}</h3><p className="font-medium text-brown">{job.company}</p></div><div className="mt-2 text-sm font-light text-brown/80 md:mt-0">{job.location} · {job.dates}</div></div><ul className="space-y-3">{job.highlights.map(item => <li key={item} className="flex items-start font-light leading-relaxed text-brown"><span className="mr-3 text-brown">•</span><span>{item}</span></li>)}</ul></article>)}</div></div></section>

    <section id="projects" className="bg-white py-24"><div className="mx-auto max-w-6xl px-6"><div className="mb-16 text-center"><h2 className="mb-8 break-words font-display text-3xl leading-tight tracking-wide sm:text-4xl md:text-5xl">PROJECTS</h2><div className="mx-auto mb-8 h-0.5 w-16 bg-brown"/><p className="mx-auto max-w-2xl text-lg font-light text-brown">Applied multi-agent systems for operational analysis.</p></div><article className="mx-auto max-w-4xl rounded-sm border border-brown/10 bg-cream p-8 shadow-sm"><h3 className="mb-3 font-display text-2xl tracking-wide">{project.title}</h3><p className="mb-5 text-sm font-light text-brown">{project.stack}</p><ul className="space-y-3">{project.points.map(item => <li key={item} className="flex items-start font-light leading-relaxed text-brown"><span className="mr-3">•</span>{item}</li>)}</ul></article></div></section>

    <section id="skills" className="bg-cream py-24"><div className="mx-auto max-w-6xl px-6"><div className="mb-20 text-center"><h2 className="mb-8 break-words font-display text-3xl leading-tight tracking-wide sm:text-4xl md:text-5xl">SKILLS</h2><div className="mx-auto mb-8 h-0.5 w-16 bg-brown"/><p className="mx-auto max-w-2xl text-lg font-light text-brown">Languages, AI/ML platforms, cloud infrastructure, and reliable systems.</p></div><div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">{skillCategories.map(({icon: Icon, title, skills}) => <div key={title} className="text-center"><div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center bg-black"><Icon className="h-8 w-8 text-white"/></div><h3 className="mb-6 font-display text-lg tracking-wide">{title.toUpperCase()}</h3><ul className="space-y-3">{skills.map(skill => <li key={skill} className="text-sm font-light text-brown">{skill}</li>)}</ul></div>)}</div></div></section>

    <section id="education" className="bg-white py-24"><div className="mx-auto max-w-4xl px-6"><div className="mb-16 text-center"><h2 className="mb-6 break-words font-display text-3xl leading-tight tracking-wide sm:text-4xl md:text-5xl">EDUCATION</h2><div className="mx-auto mb-6 h-0.5 w-16 bg-brown"/></div><div className="space-y-8">{education.map(edu => <article key={edu.school} className="rounded-sm border border-brown/10 bg-cream p-8 shadow-sm"><div className="mb-4 flex flex-col justify-between md:flex-row md:items-center"><div><h3 className="font-display text-2xl tracking-wide">{edu.school}</h3><p className="font-medium text-brown">{edu.degree}</p></div><div className="mt-2 text-sm font-light text-brown/80 md:mt-0">{edu.location} · {edu.dates}</div></div></article>)}</div></div></section>

    <section id="contact" className="bg-black py-24 text-white"><div className="mx-auto max-w-6xl px-6"><div className="mb-20 text-center"><h2 className="mb-8 break-words font-display text-3xl leading-tight tracking-wide sm:text-4xl md:text-5xl">CONTACT</h2><div className="mx-auto mb-8 h-0.5 w-16 bg-brown"/><p className="mx-auto max-w-3xl text-xl font-light text-white/80">Let’s talk about agent evaluation, LLM systems, and distributed AI infrastructure.</p></div><div className="mx-auto flex max-w-md flex-col items-center space-y-8"><div className="flex items-center"><Phone className="mr-6 h-6 w-6 text-brown"/><a href="tel:+19452684534" className="font-light text-white/80 transition-colors hover:text-white">+1 (945) 268-4534</a></div><div className="flex items-center"><Linkedin className="mr-6 h-6 w-6 text-brown"/><a href={linkedin} target="_blank" rel="noopener noreferrer" className="font-light text-white/80 transition-colors hover:text-white">LinkedIn</a></div><div className="flex items-center"><Mail className="mr-6 h-6 w-6 text-brown"/><a href="mailto:chaitanyasurabattuni@gmail.com" className="font-light text-white/80 transition-colors hover:text-white">chaitanyasurabattuni@gmail.com</a></div></div></div></section>

    <footer className="bg-brown py-8 text-white/80"><div className="mx-auto max-w-6xl px-6 text-center"><p className="font-light tracking-wide">© 2026 Chaitanya Surabattuni · AI/ML Engineer</p></div></footer>
  </div>;
}
export default App;

