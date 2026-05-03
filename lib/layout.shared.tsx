import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';

/* Minimal geometric agent-network mark */
function AgentMark() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      {/* Outer ring */}
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      {/* Core node */}
      <circle cx="10" cy="10" r="3.5" fill="currentColor" />
      {/* Satellite nodes */}
      <circle cx="10" cy="2.5"  r="1.75" fill="currentColor" opacity="0.7" />
      <circle cx="10" cy="17.5" r="1.75" fill="currentColor" opacity="0.7" />
      <circle cx="2.5"  cy="10" r="1.75" fill="currentColor" opacity="0.7" />
      <circle cx="17.5" cy="10" r="1.75" fill="currentColor" opacity="0.7" />
      {/* Connecting spokes */}
      <line x1="10" y1="6.5"  x2="10" y2="4.25"  stroke="currentColor" strokeWidth="1.25" opacity="0.4" />
      <line x1="10" y1="13.5" x2="10" y2="15.75" stroke="currentColor" strokeWidth="1.25" opacity="0.4" />
      <line x1="6.5"  y1="10" x2="4.25"  y2="10" stroke="currentColor" strokeWidth="1.25" opacity="0.4" />
      <line x1="13.5" y1="10" x2="15.75" y2="10" stroke="currentColor" strokeWidth="1.25" opacity="0.4" />
    </svg>
  );
}

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="flex items-center gap-2">
          <span className="text-fd-primary">
            <AgentMark />
          </span>
          <span className="font-semibold tracking-tight">{appName}</span>
        </span>
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
    links: [
      {
        text: 'Documentation',
        url: '/docs',
        active: 'nested-url',
      },
      {
        text: 'GitHub',
        url: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
      },
    ],
  };
}
