import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';
import Image from 'next/image';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <Image
            src="https://cdn.openagentai.org/img/openagent-logo_1600x276.png"
            alt={appName}
            width={140}
            height={24}
            style={{ height: '22px', width: 'auto' }}
            priority
            unoptimized
            className="dark:hidden"
          />
          <Image
            src="https://cdn.openagentai.org/img/openagent-logo_1600x276_white.png"
            alt={appName}
            width={140}
            height={24}
            style={{ height: '22px', width: 'auto' }}
            priority
            unoptimized
            className="hidden dark:block"
          />
        </>
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
    links: [
      {
        text: 'Documentation',
        url: '/docs',
        active: 'nested-url',
      },
    ],
  };
}
