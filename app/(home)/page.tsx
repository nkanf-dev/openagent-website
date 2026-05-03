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
} from 'lucide-react';

function GitHubSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

/* ─── Static data ───────────────────────────────────────────────────────────── */

const stats = [
  { value: '30+', label: 'Model Providers' },
  { value: '20+', label: 'Messaging Channels' },
  { value: '100%', label: 'Open Source' },
  { value: '0', label: 'Vendor Lock-in' },
];

const features = [
  {
    icon: BotIcon,
    title: 'Intelligent Agents',
    description:
      'Build and deploy AI agents with full MCP (Model Context Protocol) support. Agents can use tools, call APIs, and reason across complex tasks.',
    color: 'violet',
  },
  {
    icon: BrainIcon,
    title: '30+ Model Providers',
    description:
      'Seamlessly switch between OpenAI, Claude, Gemini, DeepSeek, Qwen, and 25+ more through a unified interface.',
    color: 'indigo',
  },
  {
    icon: DatabaseIcon,
    title: 'Knowledge Base',
    description:
      'Upload documents, PDFs, spreadsheets, and more. Agents retrieve precise context from your knowledge base via semantic search.',
    color: 'purple',
  },
  {
    icon: MessageSquareIcon,
    title: 'Multi-Channel Gateway',
    description:
      'Connect agents to Telegram, Discord, Slack, WhatsApp, and 20+ messaging platforms from a single deployment.',
    color: 'fuchsia',
  },
  {
    icon: PuzzleIcon,
    title: 'Plugin Architecture',
    description:
      'Extend with a flexible plugin system. Add custom tools, model providers, channels, and integrations at will.',
    color: 'blue',
  },
  {
    icon: ShieldIcon,
    title: 'Enterprise Ready',
    description:
      'Built-in SSO via Casdoor, role-based access control, audit logs, and multi-tenant support for enterprise deployments.',
    color: 'cyan',
  },
];

const featureIconClass: Record<string, string> = {
  violet:  'bg-violet-500/10  text-violet-500  dark:bg-violet-400/10  dark:text-violet-400',
  indigo:  'bg-indigo-500/10  text-indigo-500  dark:bg-indigo-400/10  dark:text-indigo-400',
  purple:  'bg-purple-500/10  text-purple-500  dark:bg-purple-400/10  dark:text-purple-400',
  fuchsia: 'bg-fuchsia-500/10 text-fuchsia-500 dark:bg-fuchsia-400/10 dark:text-fuchsia-400',
  blue:    'bg-blue-500/10    text-blue-500    dark:bg-blue-400/10    dark:text-blue-400',
  cyan:    'bg-cyan-500/10    text-cyan-500    dark:bg-cyan-400/10    dark:text-cyan-400',
};

const providers = [
  'OpenAI', 'Claude', 'Gemini', 'DeepSeek', 'Qwen',
  'Mistral', 'Llama', 'Ollama', 'Azure', 'Bedrock',
  'Groq', 'OpenRouter',
];

const channels = [
  'Telegram', 'Discord', 'Slack', 'WhatsApp', 'Signal',
  'WeChat', 'Teams', 'Matrix', 'LINE', 'Feishu',
];

const selfHostBenefits = [
  'Your data never leaves your infrastructure',
  'No usage limits or rate throttling',
  'Full control over upgrades and versions',
  'Air-gap deployable for regulated environments',
];

/* ─── Page ──────────────────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <main className="flex flex-col">

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden px-4 pb-28 pt-32 text-center md:pb-36 md:pt-44">

        {/* Dot-grid overlay */}
        <div className="dot-grid pointer-events-none absolute inset-0 -z-20 opacity-60" />

        {/* Radial fade over the grid */}
        <div
          className="pointer-events-none absolute inset-0 -z-20"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 50% 0%, transparent 40%, var(--color-fd-background) 80%)',
          }}
        />

        {/* Ambient glow blobs */}
        <div
          className="animate-blob pointer-events-none absolute left-1/2 top-0 -z-10 h-[560px] w-[560px] rounded-full blur-[120px]"
          style={{ background: 'var(--glow-a)', transformOrigin: 'center' }}
        />
        <div
          className="animate-blob-delayed pointer-events-none absolute left-[20%] top-[15%] -z-10 h-[360px] w-[360px] rounded-full blur-[100px]"
          style={{ background: 'var(--glow-b)' }}
        />
        <div
          className="pointer-events-none absolute right-[10%] top-[25%] -z-10 h-[280px] w-[280px] rounded-full blur-[90px]"
          style={{ background: 'var(--glow-c)' }}
        />

        {/* Badge */}
        <div className="animate-fade-up animate-badge-pulse mb-6 inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-card/80 px-4 py-1.5 text-xs font-medium text-fd-muted-foreground shadow-sm backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fd-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-fd-primary" />
          </span>
          Open Source · Self-Hosted · Enterprise Grade
        </div>

        {/* Heading */}
        <h1 className="animate-fade-up animate-fade-up-1 mb-6 max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
          <span
            style={{
              background: 'linear-gradient(135deg, var(--color-fd-foreground) 0%, var(--color-fd-foreground) 40%, var(--color-fd-primary) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            The Open Agent
          </span>
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, var(--color-fd-primary) 0%, #818CF8 60%, #C084FC 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Platform
          </span>
        </h1>

        {/* Subheading */}
        <p className="animate-fade-up animate-fade-up-2 mb-10 max-w-2xl text-lg leading-relaxed text-fd-muted-foreground md:text-xl">
          Connect <strong className="font-semibold text-fd-foreground">30+ model providers</strong>,
          build intelligent agents with MCP tool use, and deploy across{' '}
          <strong className="font-semibold text-fd-foreground">20+ messaging channels</strong> —
          all from a single self-hosted deployment.
        </p>

        {/* CTA buttons */}
        <div className="animate-fade-up animate-fade-up-3 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/docs/quick-start"
            className="group inline-flex items-center gap-2 rounded-xl bg-fd-primary px-6 py-3 text-sm font-semibold text-fd-primary-foreground shadow-lg transition-all hover:brightness-110 hover:shadow-[0_0_24px_var(--glow-a)]"
          >
            Get Started
            <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 rounded-xl border border-fd-border bg-fd-card/80 px-6 py-3 text-sm font-semibold text-fd-foreground backdrop-blur-sm transition-colors hover:bg-fd-accent"
          >
            View Docs
          </Link>
          <a
            href="https://github.com/the-open-agent/openagent"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-fd-border bg-fd-card/80 px-6 py-3 text-sm font-semibold text-fd-foreground backdrop-blur-sm transition-colors hover:bg-fd-accent"
          >
            <GitHubSVG className="size-4" />
            GitHub
          </a>
        </div>

        {/* Stats row */}
        <div className="animate-fade-up animate-fade-up-4 mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-fd-border bg-fd-border sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-0.5 bg-fd-card px-6 py-5">
              <span className="text-2xl font-bold text-fd-primary">{s.value}</span>
              <span className="text-xs text-fd-muted-foreground">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────────────────────── */}
      <section className="border-t border-fd-border px-4 py-24">
        <div className="mx-auto max-w-6xl">

          <div className="mb-16 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-fd-primary">
              Capabilities
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-fd-foreground md:text-4xl">
              Everything you need to build AI agents
            </h2>
            <p className="mx-auto max-w-xl text-fd-muted-foreground">
              A complete, batteries-included platform for developing, deploying, and managing
              intelligent AI agents at any scale.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-2xl border border-fd-border bg-fd-card p-6 transition-all duration-300 hover:border-fd-primary/40 hover:shadow-lg hover:shadow-fd-primary/5"
              >
                {/* Subtle gradient fill on hover */}
                <div className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: 'radial-gradient(ellipse at top left, var(--glow-c), transparent 60%)' }}
                />

                <div className={`mb-4 inline-flex rounded-xl p-2.5 ${featureIconClass[feature.color]}`}>
                  <feature.icon className="size-5" />
                </div>
                <h3 className="mb-2 font-semibold text-fd-foreground">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-fd-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quick Start ──────────────────────────────────────────────────────── */}
      <section className="border-t border-fd-border px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-14 lg:grid-cols-2">

            {/* Copy */}
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-fd-primary">
                Quick Start
              </p>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-fd-foreground md:text-4xl">
                Up and running<br />in minutes
              </h2>
              <p className="mb-6 text-fd-muted-foreground">
                Install OpenAgent with a single command and have your first AI agent ready in minutes.
                No complex configuration required.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/docs/quick-start"
                  className="inline-flex items-center gap-2 rounded-xl bg-fd-primary px-5 py-2.5 text-sm font-semibold text-fd-primary-foreground transition-all hover:brightness-110"
                >
                  Installation Guide
                  <ArrowRightIcon className="size-3.5" />
                </Link>
                <Link
                  href="/docs"
                  className="inline-flex items-center gap-2 rounded-xl border border-fd-border px-5 py-2.5 text-sm font-semibold text-fd-foreground transition-colors hover:bg-fd-accent"
                >
                  Browse Docs
                </Link>
              </div>
            </div>

            {/* Terminal window */}
            <div className="overflow-hidden rounded-2xl border border-fd-border bg-fd-card shadow-2xl shadow-fd-primary/5">
              {/* Title bar */}
              <div className="flex items-center gap-2 border-b border-fd-border bg-fd-muted/40 px-4 py-3">
                <span className="size-3 rounded-full bg-red-400/80" />
                <span className="size-3 rounded-full bg-yellow-400/80" />
                <span className="size-3 rounded-full bg-green-400/80" />
                <span className="ml-3 font-mono text-xs text-fd-muted-foreground">
                  terminal
                </span>
              </div>
              {/* Content */}
              <div className="overflow-x-auto p-5 font-mono text-sm leading-7">
                <p>
                  <span className="text-fd-muted-foreground select-none">$ </span>
                  <span className="text-fd-foreground">
                    {'curl -fsSL --proto \'=https\' --tlsv1.2 \\'}
                  </span>
                </p>
                <p className="pl-4 text-fd-foreground">
                  {'https://raw.githubusercontent.com/the-open-agent/openagent/master/scripts/install.sh | bash'}
                </p>
                <p className="mt-3 text-fd-muted-foreground">
                  {'# Downloading OpenAgent...'}
                </p>
                <p className="text-fd-muted-foreground">
                  {'# Setting up services...'}
                </p>
                <p className="text-green-500 dark:text-green-400">
                  {'✓ OpenAgent is ready!'}
                </p>
                <p className="mt-3">
                  <span className="text-fd-muted-foreground select-none">$ </span>
                  <span className="text-fd-foreground">{'open http://localhost:14000'}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ecosystem ────────────────────────────────────────────────────────── */}
      <section className="border-t border-fd-border px-4 py-24">
        <div className="mx-auto max-w-6xl">

          <div className="mb-14 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-fd-primary">
              Ecosystem
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-fd-foreground md:text-4xl">
              Connect your entire AI ecosystem
            </h2>
            <p className="text-fd-muted-foreground">
              Works with the models and channels you already use — no rewiring required.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">

            {/* Models */}
            <div className="rounded-2xl border border-fd-border bg-fd-card p-6">
              <div className="mb-5 flex items-center gap-2.5">
                <span className="rounded-lg bg-violet-500/10 p-1.5 text-violet-500 dark:bg-violet-400/10 dark:text-violet-400">
                  <LayersIcon className="size-4" />
                </span>
                <h3 className="font-semibold text-fd-foreground">Model Providers</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {providers.map((p) => (
                  <span
                    key={p}
                    className="rounded-full border border-fd-border bg-fd-muted/60 px-3 py-1 text-sm text-fd-foreground transition-colors hover:border-fd-primary/40 hover:bg-fd-accent hover:text-fd-primary"
                  >
                    {p}
                  </span>
                ))}
                <span className="rounded-full border border-dashed border-fd-border px-3 py-1 text-sm text-fd-muted-foreground">
                  +18 more
                </span>
              </div>
            </div>

            {/* Channels */}
            <div className="rounded-2xl border border-fd-border bg-fd-card p-6">
              <div className="mb-5 flex items-center gap-2.5">
                <span className="rounded-lg bg-indigo-500/10 p-1.5 text-indigo-500 dark:bg-indigo-400/10 dark:text-indigo-400">
                  <MessageSquareIcon className="size-4" />
                </span>
                <h3 className="font-semibold text-fd-foreground">Messaging Channels</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {channels.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-fd-border bg-fd-muted/60 px-3 py-1 text-sm text-fd-foreground transition-colors hover:border-fd-primary/40 hover:bg-fd-accent hover:text-fd-primary"
                  >
                    {c}
                  </span>
                ))}
                <span className="rounded-full border border-dashed border-fd-border px-3 py-1 text-sm text-fd-muted-foreground">
                  +10 more
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Self-host CTA ────────────────────────────────────────────────────── */}
      <section className="border-t border-fd-border px-4 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl border border-fd-primary/20 bg-fd-card p-10 md:p-14">

            {/* Background glow */}
            <div
              className="pointer-events-none absolute inset-0 -z-10"
              style={{
                background: 'radial-gradient(ellipse 80% 70% at 50% -10%, var(--glow-a), transparent 70%)',
              }}
            />
            <div
              className="pointer-events-none absolute inset-0 -z-10"
              style={{
                background: 'radial-gradient(ellipse 40% 40% at 100% 100%, var(--glow-b), transparent 60%)',
              }}
            />

            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <div className="mb-4 inline-flex rounded-xl bg-fd-primary/10 p-3 text-fd-primary">
                  <ServerIcon className="size-6" />
                </div>
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-fd-foreground md:text-4xl">
                  Self-host with<br />full control
                </h2>
                <p className="mb-8 text-fd-muted-foreground">
                  OpenAgent is fully open source and designed for self-hosting. Your data stays in
                  your infrastructure — no vendor lock-in, no usage limits.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/docs"
                    className="inline-flex items-center gap-2 rounded-xl bg-fd-primary px-6 py-3 text-sm font-semibold text-fd-primary-foreground shadow-lg transition-all hover:brightness-110 hover:shadow-[0_0_24px_var(--glow-a)]"
                  >
                    Read the Docs
                    <ArrowRightIcon className="size-4" />
                  </Link>
                  <a
                    href="https://github.com/the-open-agent/openagent"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-fd-border px-6 py-3 text-sm font-semibold text-fd-foreground transition-colors hover:bg-fd-accent"
                  >
                    <GitHubSVG className="size-4" />
                    Star on GitHub
                  </a>
                </div>
              </div>

              <ul className="space-y-3">
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

      {/* ── Footer ───────────────────────────────────────────────────────────── */}
      <footer className="border-t border-fd-border px-4 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">

          <div className="flex items-center gap-2">
            <BotIcon className="size-5 text-fd-primary" />
            <span className="font-semibold tracking-tight text-fd-foreground">OpenAgent</span>
          </div>

          <p className="text-center text-sm text-fd-muted-foreground">
            Released under the{' '}
            <a
              href="https://github.com/the-open-agent/openagent/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-colors hover:text-fd-foreground"
            >
              Apache 2.0 License
            </a>
          </p>

          <div className="flex gap-5 text-sm text-fd-muted-foreground">
            <Link href="/docs" className="transition-colors hover:text-fd-foreground">
              Docs
            </Link>
            <a
              href="https://github.com/the-open-agent/openagent/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-fd-foreground"
            >
              Issues
            </a>
            <a
              href="https://github.com/the-open-agent/openagent"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-fd-foreground"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
