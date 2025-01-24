// next.config.js
/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')('./src/i18n.ts');

import type { Configuration } from 'webpack';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: [
      'images.microcms-assets.io', // microCMSの画像を使用する場合
    ],
  }, // GitHub Pages に合わせた画像最適化設定
  basePath: '/engineer-portfolio', // GitHub Pages のリポジトリ名
  assetPrefix: '/engineer-portfolio', // 静的ファイルのパス修正
  // bunの使用時に必要な設定
  experimental: {
    esmExternals: true,
  },
};

module.exports = withNextIntl(nextConfig);
