import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	poweredByHeader: false,
	async rewrites() {
		return [{ source: '/uploads/:path*', destination: `${process.env.SERVER_URL}/uploads/:path*` }]
	}
	/* config options here */
}

export default nextConfig
