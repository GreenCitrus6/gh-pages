/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized:true,
    },
    basePath: isProd ? "/gh-pages" : "",
    assetPrefix: isProd ? "/gh-pages" : "",
    output: "export",
    reactStrictMode: true,
};

export default nextConfig;
