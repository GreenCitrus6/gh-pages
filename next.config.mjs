/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized:true,
    },
    basePath: "/gh-pages",
    assetPrefix: "/gh-pages",
    output: "export",
    reactStrictMode: true,
};

export default nextConfig;
