import { COLORS } from '@/app/constants/colors.constant'
import type {Config} from 'tailwindcss'

const config: Config = {
    content: [
        // './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            color: COLORS
        },
    },
    plugins: [],
}

export default config