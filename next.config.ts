// next.config.js
/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')('./src/i18n.ts');

import type { Configuration } from 'webpack';

const nextConfig = {
  images: {
    unoptimized: true,
    domains: [
      'images.microcms-assets.io', // microCMSの画像を使用する場合
    ],
  },
  // bunの使用時に必要な設定
  experimental: {
    esmExternals: true,
  },
};

module.exports = withNextIntl(nextConfig);
