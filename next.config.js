/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // formats: ["image/png", "image/webp", "image/svg"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "image.tmdb.org",
                port: "",
                pathname: "/t/p/original/**",
            },
        ],
    },
}

module.exports = nextConfig
