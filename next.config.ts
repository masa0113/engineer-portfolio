// next.config.js
/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')(
  './src/i18n.ts'
);

import type { Configuration } from 'webpack';

const nextConfig = withNextIntl({
  output: 'export',
  images: { unoptimized: true },
  basePath: '/engineer-portfolio',
  // bunの使用時に必要な設定
  experimental: {
    esmExternals: true
  },
  webpack: (
    config: Configuration,
    { dev, isServer }: { dev: boolean; isServer: boolean }
  ) => {
    // bunのパフォーマンス最適化
    if (!dev && !isServer) {
      config.resolve = config.resolve || {};
      config.resolve.alias = config.resolve.alias || {};
      Object.assign(config.resolve.alias, {
        'react/jsx-runtime': 'react/jsx-runtime.js',
        'react/jsx-dev-runtime': 'react/jsx-dev-runtime.js',
      });
    }
    return config;
  },
});

module.exports = nextConfig;