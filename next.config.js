/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["images.ctfassets.net", "www.nextbizthing.com"]
	},
	async rewrites() {
		return [
			{
				source: "/robots.txt",
				destination: "/api/robots"
			}
		];
	}
};

module.exports = nextConfig;
