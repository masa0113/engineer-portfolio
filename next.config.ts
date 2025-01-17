// next.config.js
/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')(
  './src/i18n.ts'
);

import type { Configuration } from 'webpack';

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/engineer-portfolio',
  assetPrefix: '/engineer-portfolio/',
  // bunの使用時に必要な設定
  experimental: {
    esmExternals: true
  }
};

module.exports = withNextIntl(nextConfig);