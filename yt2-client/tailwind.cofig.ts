import type { Config } from 'tailwindcss'

import { COLORS } from '@/constants/colors.constant'

const config: Config = {
	content: [
		// './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			color: COLORS
		}
	},
	plugins: []
}

export default config
