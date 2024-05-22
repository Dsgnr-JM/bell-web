/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,json,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily:{
				onest: ['"Onest Variable"']
			}
		},
	},
	plugins: [],
}
