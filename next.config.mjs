import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.openagentai.org',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/docs', destination: '/docs/introduction', permanent: false },
      { source: '/docs/quick-start', destination: '/docs/install', permanent: true },
      { source: '/docs/what-is-openagent', destination: '/docs/introduction', permanent: true },
      { source: '/docs/add-tools-and-automation', destination: '/docs/tools-and-automation', permanent: true },
      { source: '/docs/admin/users', destination: '/docs/admin/enterprise-sso', permanent: true },
      { source: '/docs/admin/sites', destination: '/docs/admin/settings', permanent: true },
      { source: '/docs/admin/activities', destination: '/docs/admin/visitors', permanent: true },
      { source: '/docs/admin/usages', destination: '/docs/admin/ai-usage', permanent: true },
      { source: '/docs/connectors/servers', destination: '/docs/connectors/mcp-servers', permanent: true },
    ];
  },
};

export default withMDX(config);
