/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'source.unsplash.com',
            port: '',
            pathname: '/random',
          },
          {
            protocol: 'https',
            hostname: 'images2.thanhnien.vn',
            port: '',
            pathname: '/Uploaded/minhnguyet/2021_11_11/trieu-lo-tu-217.jpg',
          },
        ],
    },
};

export default nextConfig;
