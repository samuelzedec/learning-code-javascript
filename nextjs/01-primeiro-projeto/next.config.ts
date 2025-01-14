import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "images-assets.nasa.gov" }
      // Aqui está a config para rodar imagens externas
    ]
  }
};

export default nextConfig;