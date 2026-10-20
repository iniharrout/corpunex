import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    // Prices are no longer published; send old links to the quote form.
    return [{ source: "/pricing", destination: "/contact", permanent: false }];
  },
};

export default nextConfig;
