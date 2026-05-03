import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'OpenAgent — The Open Agent Platform',
    template: '%s · OpenAgent',
  },
  description:
    'Open-source, enterprise-grade AI agent platform. Connect 30+ model providers, build intelligent agents with MCP tool use, and deploy across 20+ messaging channels.',
  keywords: ['AI agents', 'MCP', 'open source', 'LLM', 'multi-agent', 'self-hosted'],
  openGraph: {
    type: 'website',
    title: 'OpenAgent — The Open Agent Platform',
    description:
      'Open-source, enterprise-grade AI agent platform. Connect 30+ model providers and deploy across 20+ messaging channels.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen font-[var(--font-inter)] antialiased">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
