import Link from 'next/link';
import {
  BotIcon,
  BrainIcon,
  DatabaseIcon,
  LayersIcon,
  MessageSquareIcon,
  PuzzleIcon,
  ServerIcon,
  ShieldIcon,
  ArrowRightIcon,
  CheckIcon,
  StarIcon,
  UsersIcon,
  CalendarIcon,
  ZapIcon,
  ExternalLinkIcon,
  GlobeIcon,
} from 'lucide-react';

/* ── Inline SVGs for non-standard icons ─────────────────────────────────────── */

function GitHubSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function XSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.733-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function HeartSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  );
}

function RepeatSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
    </svg>
  );
}

/* ── Initials Avatar (replaces external pravatar service) ───────────────────── */

const AVATAR_COLORS = [
  '#6D28D9', '#2563EB', '#059669', '#D97706', '#DC2626',
  '#7C3AED', '#0891B2', '#BE185D', '#9333EA', '#0D9488',
];

function InitialsAvatar({ name, className }: { name: string; className?: string }) {
  const initials = name.split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase();
  const color = AVATAR_COLORS[name.charCodeAt(0) % AVATAR_COLORS.length];
  return (
    <div
      className={className}
      style={{
        backgroundColor: color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 700,
        color: 'white',
        fontSize: '13px',
        fontFamily: 'system-ui, sans-serif',
        flexShrink: 0,
        letterSpacing: '0.02em',
      }}
    >
      {initials}
    </div>
  );
}

/* ── Data ───────────────────────────────────────────────────────────────────── */

const integrations = [
  'OpenAI', 'Claude', 'Gemini', 'DeepSeek', 'Qwen', 'Mistral',
  'Llama 3', 'Ollama', 'Azure OpenAI', 'AWS Bedrock', 'Groq', 'OpenRouter',
  'Telegram', 'Discord', 'Slack', 'WhatsApp', 'Microsoft Teams', 'WeChat',
  'LINE', 'Matrix', 'Signal', 'Feishu', 'PostgreSQL', 'Qdrant',
  'Pinecone', 'Milvus', 'Redis', 'Kubernetes', 'Docker', 'Casdoor',
];

const communityStats = [
  { value: '3.5k+', label: 'GitHub Stars', detail: '+240 this week', Icon: StarIcon },
  { value: '800+', label: 'Discord Members', detail: 'Active daily', Icon: UsersIcon },
  { value: '500+', label: 'Self-hosted', detail: '50+ new this month', Icon: ServerIcon },
  { value: '45+', label: 'Countries', detail: 'Worldwide adoption', Icon: GlobeIcon },
];

const features = [
  {
    Icon: BotIcon,
    title: 'Intelligent Agents',
    description:
      'Full MCP (Model Context Protocol) support. Agents use tools, call APIs, and reason across multi-step workflows with persistent memory.',
    label: 'MCP Native',
    accent: 'text-slate-700 dark:text-slate-300',
    bg: 'bg-slate-500/10',
    border: 'hover:border-slate-500/40',
    glow: 'hover:shadow-slate-500/10',
  },
  {
    Icon: BrainIcon,
    title: '30+ Model Providers',
    description:
      'Unified interface for OpenAI, Claude, Gemini, DeepSeek, Qwen, Mistral, and 25+ more. Switch providers with one config line — zero code changes.',
    label: 'Vendor-Free',
    accent: 'text-slate-700 dark:text-slate-300',
    bg: 'bg-slate-500/10',
    border: 'hover:border-slate-500/40',
    glow: 'hover:shadow-slate-500/10',
  },
  {
    Icon: DatabaseIcon,
    title: 'Semantic Knowledge Base',
    description:
      'Upload docs, PDFs, spreadsheets. Agents retrieve precise context via vector search. Supports Qdrant, Pinecone, Milvus, PgVector. 94%+ accuracy.',
    label: 'RAG Ready',
    accent: 'text-slate-700 dark:text-slate-300',
    bg: 'bg-slate-500/10',
    border: 'hover:border-slate-500/40',
    glow: 'hover:shadow-slate-500/10',
  },
  {
    Icon: MessageSquareIcon,
    title: 'Multi-Channel Gateway',
    description:
      'Deploy one agent across Telegram, Discord, Slack, WhatsApp, Teams, and 15+ more simultaneously. One deployment, every platform.',
    label: '20+ Channels',
    accent: 'text-slate-700 dark:text-slate-300',
    bg: 'bg-slate-500/10',
    border: 'hover:border-slate-500/40',
    glow: 'hover:shadow-slate-500/10',
  },
  {
    Icon: PuzzleIcon,
    title: 'Plugin Architecture',
    description:
      'Write custom tools, model providers, channels, and workflows with a clean plugin API. Ship production integrations in hours, not weeks.',
    label: 'Extensible',
    accent: 'text-slate-700 dark:text-slate-300',
    bg: 'bg-slate-500/10',
    border: 'hover:border-slate-500/40',
    glow: 'hover:shadow-slate-500/10',
  },
  {
    Icon: ShieldIcon,
    title: 'Enterprise Security',
    description:
      'SSO via Casdoor, role-based access control, complete audit logs, multi-tenant isolation, and air-gap deployable for regulated industries.',
    label: 'SOC2 Ready',
    accent: 'text-slate-700 dark:text-slate-300',
    bg: 'bg-slate-500/10',
    border: 'hover:border-slate-500/40',
    glow: 'hover:shadow-slate-500/10',
  },
];

const testimonials = [
  {
    name: 'Marcus Reyes', handle: 'marcusreyes_dev',
    content: 'Been using @OpenAgentAI for 3 months powering our customer support. 10k+ msgs/day across 3 channels, zero downtime. The MCP tool integration is genuinely insane 🔥',
    likes: 847, reposts: 124, date: 'Mar 12', role: 'Senior Engineer @ Stripe',
  },
  {
    name: 'Sarah Chen', handle: 'sarahchen_builds',
    content: 'OpenAgent + Telegram = the perfect async ops dashboard. Our team gets AI engineering briefings every morning. Replaced 3 SaaS tools. Cut costs by 60%.',
    likes: 1203, reposts: 287, date: 'Mar 28', role: 'CTO @ Lucent Labs',
  },
  {
    name: 'Janusz Kowalski', handle: 'janusz_mlops',
    content: 'Integrated @OpenAgentAI with our 50k-doc internal knowledge base. Retrieval accuracy: 67% → 94%. The semantic search is not playing around.',
    likes: 562, reposts: 89, date: 'Apr 1', role: 'ML Lead @ Booking.com',
  },
  {
    name: 'Rakesh Sharma', handle: 'rakesh_solutionarch',
    content: 'Deployed OpenAgent on-prem for our banking client. Compliance team approved first review. Audit logs, RBAC, SSO all just work. Enterprise-grade isn\'t marketing fluff here.',
    likes: 934, reposts: 201, date: 'Apr 5', role: 'Solutions Architect',
  },
  {
    name: 'Kai Hoffman', handle: 'llm_whisperer',
    content: 'Gemini → Claude → Qwen fallback chain routes by query complexity. Saved ~40% on API costs in month one. Smart multi-model routing is criminally underrated.',
    likes: 1891, reposts: 412, date: 'Apr 8', role: 'AI Infrastructure Engineer',
  },
  {
    name: 'Alex Park', handle: 'alex_platform_eng',
    content: 'Finally an agent platform that doesn\'t need to own my data. Self-hosted on k8s, air-gapped. This is what enterprise-ready actually looks like.',
    likes: 2140, reposts: 534, date: 'Apr 9', role: 'Platform Engineer',
  },
  {
    name: 'Diana Foster', handle: 'di_indie_builds',
    content: 'Shipped a Discord bot powered by OpenAgent in 2 hours. Reads our Notion docs, answers questions, escalates to humans when needed. My users think we have a full support team lol',
    likes: 3201, reposts: 891, date: 'Apr 11', role: 'Indie Hacker',
  },
  {
    name: 'Tom Blackwood', handle: 'tomblackwood_ai',
    content: 'Used 5 agent frameworks before settling on OpenAgent. Clean API, sane defaults, actual multi-tenant support, and it doesn\'t fight you off the happy path.',
    likes: 788, reposts: 156, date: 'Apr 13', role: 'Freelance AI Developer',
  },
  {
    name: 'Nadia Okonkwo', handle: 'nadia_data_eng',
    content: 'Running 200+ concurrent agent sessions across 15 enterprise clients from one deployment. OpenAgent just handles it. The observability built in is chef\'s kiss 🤌',
    likes: 1456, reposts: 342, date: 'Apr 15', role: 'Agency Founder',
  },
  {
    name: 'Liam Chen', handle: 'liamchen_revops',
    content: 'The plugin system is where OpenAgent shines. We wrote a custom Salesforce integration in an afternoon. Agents now update CRM records autonomously. RevOps team is obsessed.',
    likes: 671, reposts: 98, date: 'Apr 17', role: 'RevOps Engineer',
  },
  {
    name: 'Felix Wagner', handle: 'felix_deepseek_labs',
    content: 'Switch from GPT-4o to DeepSeek-V3 is one config line. Same agent behavior, 10× lower cost. No vendor lock-in is not a feature — it\'s the whole point of OpenAgent.',
    likes: 2847, reposts: 723, date: 'Apr 19', role: 'Research Engineer',
  },
  {
    name: 'Priya Anand', handle: 'priya_builds',
    content: 'OpenAgent\'s WhatsApp integration handles our entire customer onboarding. From KYC doc collection to account setup. 0 → 500 customers in 3 weeks with 2 engineers.',
    likes: 4102, reposts: 1024, date: 'Apr 21', role: 'Co-founder @ FinTech',
  },
];

const events = [
  {
    badge: 'LIVE', dotClass: 'bg-emerald-400', badgeClass: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30',
    title: 'Agent Summit 2026',
    description: 'The first conference for production AI agents. OpenAgent team presenting the new mesh networking architecture and advanced MCP integrations.',
    date: 'June 12–14, 2026', location: 'San Francisco, CA', type: 'Conference', cta: 'Register Now →',
  },
  {
    badge: 'UPCOMING', dotClass: 'bg-cyan-400', badgeClass: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/30',
    title: 'Workshop: Multi-Agent Pipelines',
    description: 'Live hands-on: orchestrate 10+ specialized agents to solve complex enterprise workflows. Build, test, deploy in 90 minutes.',
    date: 'May 8, 2026', location: 'Online · Free', type: 'Workshop', cta: 'Join Free →',
  },
  {
    badge: 'SOON', dotClass: 'bg-violet-400', badgeClass: 'text-violet-400 bg-violet-400/10 border-violet-400/30',
    title: 'OpenAgent v3.0',
    description: 'Agent mesh networking, enhanced MCP protocol support, 40% latency improvements, and a completely redesigned plugin SDK.',
    date: 'Q2 2026', location: 'GitHub Release', type: 'Release', cta: 'Watch Changelog →',
  },
];

const press = [
  { logo: 'HN', logoColor: 'text-orange-400', logoBg: 'bg-orange-400/10', source: 'Hacker News', headline: '#1 Show HN of the Week', sub: '500+ upvotes · 200+ comments' },
  { logo: 'PH', logoColor: 'text-orange-300', logoBg: 'bg-orange-300/10', source: 'Product Hunt', headline: '🥇 Product of the Day', sub: '1.2k upvotes' },
  { logo: 'IQ', logoColor: 'text-blue-400', logoBg: 'bg-blue-400/10', source: 'InfoQ', headline: '"MCP Framework of the Year"', sub: 'Enterprise AI Edition 2026' },
  { logo: 'REG', logoColor: 'text-slate-400', logoBg: 'bg-slate-400/10', source: 'The Register', headline: '"Enterprise-Ready AI Agents"', sub: 'In-depth feature' },
];

const providers = ['OpenAI', 'Claude', 'Gemini', 'DeepSeek', 'Qwen', 'Mistral', 'Llama', 'Ollama', 'Azure', 'Bedrock', 'Groq', 'OpenRouter'];
const channels  = ['Telegram', 'Discord', 'Slack', 'WhatsApp', 'Signal', 'WeChat', 'Teams', 'Matrix', 'LINE', 'Feishu'];

const selfHostBenefits = [
  'Your data never leaves your infrastructure',
  'No usage limits or rate throttling',
  'Full control over upgrades and rollbacks',
  'Air-gap deployable for regulated environments',
];

/* ── Sub-components ─────────────────────────────────────────────────────────── */

function TweetCard({ name, handle, content, likes, reposts, date, role }: typeof testimonials[0]) {
  return (
    <div className="card-glow-hover mb-4 break-inside-avoid rounded-2xl border border-fd-border bg-fd-card p-5 transition-all duration-300 hover:border-fd-primary/40">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <InitialsAvatar
            name={name}
            className="size-9 rounded-full"
          />
          <div>
            <p className="text-sm font-semibold leading-tight text-fd-foreground">{name}</p>
            <p className="text-xs text-fd-muted-foreground">@{handle}</p>
          </div>
        </div>
        <XSVG className="size-4 shrink-0 text-fd-muted-foreground/40" />
      </div>
      <p className="mb-4 text-sm leading-relaxed text-fd-foreground">{content}</p>
      <div className="flex items-center justify-between border-t border-fd-border pt-3">
        <div className="flex gap-4 text-xs text-fd-muted-foreground">
          <span className="flex items-center gap-1.5">
            <HeartSVG className="size-3.5" />
            {likes.toLocaleString()}
          </span>
          <span className="flex items-center gap-1.5">
            <RepeatSVG className="size-3.5" />
            {reposts.toLocaleString()}
          </span>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-fd-muted-foreground">
          <span className="rounded-full bg-fd-muted px-2 py-0.5 font-medium">{role}</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <main className="flex flex-col">

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden px-4 pb-24 pt-32 text-center md:pb-36 md:pt-48">

        {/* Tech grid background */}
        <div className="tech-grid dark:tech-grid pointer-events-none absolute inset-0 -z-20 opacity-100 dark:opacity-60" />
        <div className="tech-grid-light pointer-events-none absolute inset-0 -z-20 opacity-100 dark:hidden" />

        {/* Floating circuit nodes */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          {/* Nodes */}
          <div className="circuit-node" style={{ left: '8%', top: '15%', animationDelay: '0s' }} />
          <div className="circuit-node" style={{ left: '92%', top: '20%', animationDelay: '1.5s' }} />
          <div className="circuit-node" style={{ left: '15%', top: '70%', animationDelay: '3s' }} />
          <div className="circuit-node" style={{ left: '85%', top: '65%', animationDelay: '0.8s' }} />
          <div className="circuit-node" style={{ left: '50%', top: '88%', animationDelay: '2.2s' }} />
          <div className="circuit-node" style={{ left: '30%', top: '12%', animationDelay: '4s' }} />
          <div className="circuit-node" style={{ left: '72%', top: '8%', animationDelay: '1s' }} />
          {/* Larger glow nodes */}
          <div className="circuit-node-lg" style={{ left: '5%', top: '40%', animationDelay: '2s' }} />
          <div className="circuit-node-lg" style={{ left: '95%', top: '45%', animationDelay: '3.5s' }} />
          <div className="circuit-node-lg" style={{ left: '20%', top: '90%', animationDelay: '1.2s' }} />
          {/* Horizontal data lines */}
          <div className="data-line data-line-h" style={{ top: '25%', animationDelay: '0s' }} />
          <div className="data-line data-line-h" style={{ top: '60%', animationDelay: '2s' }} />
          <div className="data-line data-line-h" style={{ top: '80%', animationDelay: '4s' }} />
          {/* Vertical data lines */}
          <div className="data-line data-line-v" style={{ left: '20%', animationDelay: '1s' }} />
          <div className="data-line data-line-v" style={{ left: '80%', animationDelay: '3s' }} />
        </div>

        {/* Radial vignette */}
        <div className="pointer-events-none absolute inset-0 -z-10"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, transparent 30%, var(--color-fd-background) 75%)' }}
        />

        {/* Scan line — dark mode only */}
        <div className="animate-scan-down pointer-events-none absolute left-0 right-0 hidden h-px dark:block"
          style={{ background: 'linear-gradient(90deg, transparent 0%, var(--cyan) 40%, var(--cyan) 60%, transparent 100%)', opacity: 0.5 }}
        />

        {/* Ambient blobs */}
        <div className="animate-blob pointer-events-none absolute left-1/2 top-0 -z-10 h-[700px] w-[700px] rounded-full blur-[130px]"
          style={{ background: 'var(--glow-a)', transformOrigin: 'center' }}
        />
        <div className="animate-blob-2 pointer-events-none absolute right-[5%] top-[10%] -z-10 h-[400px] w-[400px] rounded-full blur-[100px]"
          style={{ background: 'var(--glow-b)' }}
        />
        <div className="pointer-events-none absolute bottom-0 left-[10%] -z-10 h-[300px] w-[300px] rounded-full blur-[90px]"
          style={{ background: 'var(--glow-c)' }}
        />

        {/* NEW badge */}
        <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-card/80 px-4 py-1.5 text-xs font-semibold text-fd-muted-foreground shadow-sm backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-emerald-500 dark:text-emerald-400">NEW</span>
          &nbsp;Full MCP support is live
          <ZapIcon className="size-3 text-yellow-500" />
        </div>

        {/* Heading */}
        <h1 className="animate-fade-up animate-fade-up-1 mb-6 max-w-4xl text-5xl font-extrabold leading-tight tracking-tight md:text-7xl lg:text-8xl">
          <span className="block bg-gradient-to-r from-fd-primary via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            OpenAgent
          </span>
          <span className="block bg-gradient-to-r from-fd-foreground to-fd-foreground bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl font-bold mt-2">
            Build agents that actually do things
          </span>
        </h1>

        {/* Sub */}
        <p className="animate-fade-up animate-fade-up-2 mb-10 max-w-2xl text-lg leading-relaxed text-fd-muted-foreground md:text-xl">
          Open-source agent platform with{' '}
          <strong className="font-semibold text-fd-foreground">full MCP support</strong>,{' '}
          <strong className="font-semibold text-fd-foreground">30+ model providers</strong>, and{' '}
          <strong className="font-semibold text-fd-foreground">20+ messaging channels</strong>.
          Self-hosted. No vendor lock-in. Enterprise-grade from day one.
        </p>

        {/* CTA row */}
        <div className="animate-fade-up animate-fade-up-3 flex flex-wrap items-center justify-center gap-3">
          <Link href="/docs/install"
            className="btn-glow group inline-flex items-center gap-2 rounded-xl bg-fd-primary px-7 py-3.5 text-sm font-semibold text-fd-primary-foreground shadow-lg transition-all hover:brightness-110"
          >
            Get Started
            <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link href="/docs"
            className="inline-flex items-center gap-2 rounded-xl border border-fd-border bg-fd-card/80 px-7 py-3.5 text-sm font-semibold text-fd-foreground backdrop-blur-sm transition-colors hover:bg-fd-accent"
          >
            Docs
          </Link>
          <a href="https://github.com/the-open-agent/openagent" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-fd-border bg-fd-card/80 px-7 py-3.5 text-sm font-semibold text-fd-foreground backdrop-blur-sm transition-colors hover:bg-fd-accent"
          >
            <GitHubSVG className="size-4" />
            GitHub
          </a>
        </div>

        {/* Stats row */}
        <div className="animate-fade-up animate-fade-up-4 mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-fd-border bg-fd-border sm:grid-cols-4">
          {communityStats.map((s, i) => (
            <div key={s.label} className={`flex flex-col items-center gap-1 bg-fd-card px-6 py-5 animate-stat-rise animate-stat-rise-${i + 1}`}>
              <span className="stat-num text-2xl font-bold text-fd-primary">{s.value}</span>
              <span className="text-xs font-medium text-fd-foreground">{s.label}</span>
              <span className="text-[10px] text-fd-muted-foreground">{s.detail}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══ INTEGRATION MARQUEE ══════════════════════════════════════════════ */}
      <div className="border-y border-fd-border bg-fd-muted/30 py-4 overflow-hidden relative"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        }}
      >
        <div className="flex w-max">
          <div className="animate-marquee flex shrink-0 items-center gap-0 pr-3">
            {integrations.map((name, i) => (
              <span key={i} className="mx-3 inline-flex items-center gap-1.5 rounded-full border border-fd-border bg-fd-card px-3 py-1 text-xs font-medium text-fd-muted-foreground whitespace-nowrap">
                <span className="size-1.5 rounded-full bg-fd-primary opacity-60" />
                {name}
              </span>
            ))}
          </div>
          <div className="animate-marquee flex shrink-0 items-center gap-0 pr-3">
            {integrations.map((name, i) => (
              <span key={`dup-${i}`} className="mx-3 inline-flex items-center gap-1.5 rounded-full border border-fd-border bg-fd-card px-3 py-1 text-xs font-medium text-fd-muted-foreground whitespace-nowrap">
                <span className="size-1.5 rounded-full bg-fd-primary opacity-60" />
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ══ FEATURES ══════════════════════════════════════════════════════════ */}
      <section className="border-b border-fd-border px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-fd-primary">
              // capabilities
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-fd-foreground md:text-4xl">
              Everything you need to ship agents
            </h2>
            <p className="mx-auto max-w-xl text-fd-muted-foreground">
              Not a toy framework. A complete, batteries-included platform trusted by
              engineering teams at startups and Fortune 500s alike.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title}
                className={`card-glow-hover group relative overflow-hidden rounded-2xl border border-fd-border bg-fd-card p-6 transition-all duration-300 hover:shadow-xl ${f.border} ${f.glow}`}
              >
                <div className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: 'radial-gradient(ellipse at top left, var(--glow-c), transparent 65%)' }}
                />
                <div className="mb-4 flex items-start justify-between">
                  <div className={`inline-flex rounded-xl p-2.5 ${f.bg}`}>
                    <f.Icon className={`size-5 ${f.accent}`} />
                  </div>
                  <span className={`rounded-full border border-current/20 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider ${f.accent} opacity-70`}>
                    {f.label}
                  </span>
                </div>
                <h3 className="mb-2 font-semibold text-fd-foreground">{f.title}</h3>
                <p className="text-sm leading-relaxed text-fd-muted-foreground">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHAT PEOPLE SAY ═══════════════════════════════════════════════════ */}
      <section className="border-b border-fd-border px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-fd-primary">
              // community
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-fd-foreground md:text-4xl">
              What people are saying
            </h2>
            <p className="text-fd-muted-foreground">
              Engineers, founders, and operators shipping real products with OpenAgent.
            </p>
          </div>
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {testimonials.map((t) => (
              <TweetCard key={t.handle} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ AS SEEN IN / PRESS ════════════════════════════════════════════════ */}
      <section className="border-b border-fd-border px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="mb-10 text-center font-mono text-xs font-semibold uppercase tracking-widest text-fd-muted-foreground">
            // as seen in
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {press.map((p) => (
              <div key={p.source} className="card-glow-hover rounded-2xl border border-fd-border bg-fd-card p-5 transition-all duration-300 hover:border-fd-primary/30">
                <div className="mb-3 flex items-center gap-3">
                  <div className={`flex size-9 items-center justify-center rounded-lg font-bold text-xs ${p.logoBg} ${p.logoColor}`}>
                    {p.logo}
                  </div>
                  <span className="text-xs font-semibold text-fd-muted-foreground">{p.source}</span>
                </div>
                <p className="mb-1 text-sm font-semibold text-fd-foreground">{p.headline}</p>
                <p className="text-xs text-fd-muted-foreground">{p.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ EVENTS / ON THE HORIZON ═══════════════════════════════════════════ */}
      <section className="border-b border-fd-border px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-fd-primary">
              // on the horizon
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-fd-foreground md:text-4xl">
              Upcoming events &amp; releases
            </h2>
            <p className="text-fd-muted-foreground">
              The OpenAgent ecosystem is moving fast. Stay ahead.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {events.map((e) => (
              <div key={e.title} className="card-glow-hover group flex flex-col rounded-2xl border border-fd-border bg-fd-card p-6 transition-all duration-300 hover:border-fd-primary/30">
                <div className="mb-4 flex items-center justify-between">
                  <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-widest ${e.badgeClass}`}>
                    <span className={`size-1.5 rounded-full ${e.dotClass} animate-pulse`} />
                    {e.badge}
                  </span>
                  <span className="rounded-full bg-fd-muted px-2.5 py-1 text-[10px] font-medium text-fd-muted-foreground">
                    {e.type}
                  </span>
                </div>
                <h3 className="mb-2 font-bold text-fd-foreground">{e.title}</h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-fd-muted-foreground">{e.description}</p>
                <div className="mt-auto space-y-1.5 border-t border-fd-border pt-4 text-xs text-fd-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="size-3.5 shrink-0 text-fd-primary" />
                    {e.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="size-3.5 shrink-0 text-center text-fd-primary">📍</span>
                    {e.location}
                  </div>
                </div>
                <button className="mt-4 text-left text-xs font-semibold text-fd-primary transition-colors hover:text-fd-primary/80">
                  {e.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ QUICK START ═══════════════════════════════════════════════════════ */}
      <section className="border-b border-fd-border px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-fd-primary">
                // quick start
              </p>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-fd-foreground md:text-4xl">
                From zero to agent<br />in under 5 minutes
              </h2>
              <p className="mb-6 text-fd-muted-foreground">
                One installer script. No Docker compose wrestling. No config file archaeology.
                OpenAgent sets itself up — you focus on building agents.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/docs/install"
                  className="btn-glow inline-flex items-center gap-2 rounded-xl bg-fd-primary px-5 py-2.5 text-sm font-semibold text-fd-primary-foreground transition-all hover:brightness-110"
                >
                  Installation Guide <ArrowRightIcon className="size-3.5" />
                </Link>
                <Link href="/docs"
                  className="inline-flex items-center gap-2 rounded-xl border border-fd-border px-5 py-2.5 text-sm font-semibold text-fd-foreground transition-colors hover:bg-fd-accent"
                >
                  Browse Docs
                </Link>
              </div>
            </div>

            {/* Terminal */}
            <div className="overflow-hidden rounded-2xl border border-fd-border bg-fd-card shadow-2xl">
              <div className="flex items-center gap-2 border-b border-fd-border bg-fd-muted/50 px-4 py-3">
                <span className="size-3 rounded-full bg-red-400/80" />
                <span className="size-3 rounded-full bg-yellow-400/80" />
                <span className="size-3 rounded-full bg-green-400/80" />
                <span className="ml-3 font-mono text-xs text-fd-muted-foreground">bash</span>
              </div>
              <div className="p-5 font-mono text-sm leading-7">
                <p>
                  <span className="select-none text-fd-muted-foreground">$ </span>
                  <span className="text-fd-foreground">{"curl -fsSL --proto '=https' --tlsv1.2 \\"}</span>
                </p>
                <p className="pl-4 text-fd-muted-foreground/80 break-all">
                  {'https://raw.githubusercontent.com/the-open-agent/openagent/master/scripts/install.sh | bash'}
                </p>
                <p className="mt-3 text-fd-muted-foreground"># Pulling OpenAgent...</p>
                <p className="text-fd-muted-foreground"># Configuring services...</p>
                <p className="text-fd-muted-foreground"># Running database migrations...</p>
                <p className="mt-1 font-semibold" style={{ color: 'var(--green)' }}>✓ OpenAgent is ready!</p>
                <p className="mt-3">
                  <span className="select-none text-fd-muted-foreground">$ </span>
                  <span className="text-fd-foreground">{'open http://localhost:14000'}</span>
                </p>
                <p className="mt-1 text-fd-muted-foreground"># Dashboard running 🚀</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ ECOSYSTEM ═════════════════════════════════════════════════════════ */}
      <section className="border-b border-fd-border px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-fd-primary">
              // ecosystem
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-fd-foreground md:text-4xl">
              Plug into your existing stack
            </h2>
            <p className="text-fd-muted-foreground">
              Works with the models and channels you already use. No rewiring required.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Models */}
            <div className="rounded-2xl border border-fd-border bg-fd-card p-6">
              <div className="mb-5 flex items-center gap-2.5">
                <span className="rounded-lg bg-violet-500/10 p-1.5 text-violet-400">
                  <LayersIcon className="size-4" />
                </span>
                <h3 className="font-semibold text-fd-foreground">Model Providers</h3>
                <span className="ml-auto font-mono text-xs text-fd-muted-foreground">30+ total</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {providers.map((p) => (
                  <span key={p} className="rounded-full border border-fd-border bg-fd-muted/60 px-3 py-1 text-sm text-fd-foreground transition-colors hover:border-fd-primary/40 hover:bg-fd-accent hover:text-fd-primary cursor-default">
                    {p}
                  </span>
                ))}
                <span className="rounded-full border border-dashed border-fd-border px-3 py-1 text-sm text-fd-muted-foreground">+18 more</span>
              </div>
            </div>
            {/* Channels */}
            <div className="rounded-2xl border border-fd-border bg-fd-card p-6">
              <div className="mb-5 flex items-center gap-2.5">
                <span className="rounded-lg bg-indigo-500/10 p-1.5 text-indigo-400">
                  <MessageSquareIcon className="size-4" />
                </span>
                <h3 className="font-semibold text-fd-foreground">Messaging Channels</h3>
                <span className="ml-auto font-mono text-xs text-fd-muted-foreground">20+ total</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {channels.map((c) => (
                  <span key={c} className="rounded-full border border-fd-border bg-fd-muted/60 px-3 py-1 text-sm text-fd-foreground transition-colors hover:border-fd-primary/40 hover:bg-fd-accent hover:text-fd-primary cursor-default">
                    {c}
                  </span>
                ))}
                <span className="rounded-full border border-dashed border-fd-border px-3 py-1 text-sm text-fd-muted-foreground">+10 more</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SELF-HOST CTA ═════════════════════════════════════════════════════ */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl border border-fd-primary/20 bg-fd-card p-10 md:p-14">
            <div className="pointer-events-none absolute inset-0 -z-10"
              style={{ background: 'radial-gradient(ellipse 80% 70% at 50% -10%, var(--glow-a), transparent 65%)' }}
            />
            <div className="pointer-events-none absolute inset-0 -z-10"
              style={{ background: 'radial-gradient(ellipse 50% 50% at 100% 100%, var(--glow-b), transparent 60%)' }}
            />
            {/* Shimmer border */}
            <div className="animate-border-shimmer pointer-events-none absolute inset-0 rounded-3xl border border-fd-primary/20" />

            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <div className="mb-4 inline-flex rounded-xl bg-fd-primary/10 p-3 text-fd-primary">
                  <ServerIcon className="size-6" />
                </div>
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-fd-foreground md:text-4xl">
                  Self-host with<br />total control
                </h2>
                <p className="mb-8 text-fd-muted-foreground">
                  OpenAgent is fully open source and designed for self-hosting. Your data stays in
                  your infrastructure — no vendor lock-in, no usage limits, ever.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/docs"
                    className="btn-glow inline-flex items-center gap-2 rounded-xl bg-fd-primary px-6 py-3 text-sm font-semibold text-fd-primary-foreground shadow-lg transition-all hover:brightness-110"
                  >
                    Read the Docs <ArrowRightIcon className="size-4" />
                  </Link>
                  <a href="https://github.com/the-open-agent/openagent" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-fd-border px-6 py-3 text-sm font-semibold text-fd-foreground transition-colors hover:bg-fd-accent"
                  >
                    <GitHubSVG className="size-4" />
                    Star on GitHub
                  </a>
                </div>
              </div>
              <ul className="space-y-3.5">
                {selfHostBenefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-fd-primary/15 text-fd-primary">
                      <CheckIcon className="size-3" strokeWidth={3} />
                    </span>
                    <span className="text-sm text-fd-muted-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ════════════════════════════════════════════════════════════ */}
      <footer className="border-t border-fd-border px-4 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <img
              src="https://cdn.openagentai.org/img/openagent-logo_1600x276.png"
              alt="OpenAgent"
              className="h-6 dark:hidden"
            />
            <img
              src="https://cdn.openagentai.org/img/openagent-logo_1600x276_white.png"
              alt="OpenAgent"
              className="hidden h-6 dark:block"
            />
          </div>
          <p className="text-center text-sm text-fd-muted-foreground">
            Released under{' '}
            <a href="https://github.com/the-open-agent/openagent/blob/main/LICENSE" target="_blank" rel="noopener noreferrer"
              className="underline underline-offset-2 transition-colors hover:text-fd-foreground"
            >Apache 2.0</a>
            {' '}· Built in the open ·{' '}
            <a href="https://discord.gg/openagent" target="_blank" rel="noopener noreferrer"
              className="underline underline-offset-2 transition-colors hover:text-fd-foreground"
            >Join Discord</a>
          </p>
          <div className="flex gap-5 text-sm text-fd-muted-foreground">
            <Link href="/docs" className="transition-colors hover:text-fd-foreground">Docs</Link>
            <a href="https://github.com/the-open-agent/openagent/issues" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-fd-foreground">Issues</a>
            <a href="https://github.com/the-open-agent/openagent" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-fd-foreground">GitHub</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
