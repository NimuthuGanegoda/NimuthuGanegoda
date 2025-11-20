/** @type {import('next').NextConfig} */
const isGh = process.env.GITHUB_PAGES === 'true';
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1];
module.exports = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  // If deploying to GitHub Pages with repository name root path
  assetPrefix: isGh && repo ? `/${repo}/` : undefined,
  basePath: isGh && repo ? `/${repo}` : undefined,
  // Performance optimizations
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};
