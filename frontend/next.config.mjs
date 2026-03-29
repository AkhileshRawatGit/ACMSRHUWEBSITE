/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true,
        domains: ['images.unsplash.com', 'res.cloudinary.com', 'supabase.com'],
    },
};

export default nextConfig;
