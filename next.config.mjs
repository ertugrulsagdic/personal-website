/** @type {import('next').NextConfig} */

// Static export (next build -> out/). Cloudflare serves out/ as static assets, which have no CPU
// limit. worker/index.js only redirects paths without a locale. See wrangler.jsonc.
const nextConfig = {
    output: 'export',
    images: { unoptimized: true },
};

export default nextConfig;
