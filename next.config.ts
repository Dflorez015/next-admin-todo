import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	typedRoutes: true,
	images: {
		remotePatterns: [{ protocol: "https", hostname: "dummyimage.com" }],
	},
};

export default nextConfig;
