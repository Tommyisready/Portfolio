/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Active le mode strict de React pour identifier les problèmes potentiels
  experimental: {
    appDir: true, // Si tu utilises des composants du côté de l'app ou des nouvelles fonctionnalités
  },
};

export default nextConfig;
