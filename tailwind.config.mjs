/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,json,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily:{
				onest: ['"Onest Variable"','Arial', 'Helvetica', 'sans-serif'],
				code: ['"ui-monospace"',"Menlo","Monaco",'"Cascadia Mono"','"Segoe UI Mono"','"Roboto Mono"','"Oxygen Mono"','"Ubuntu Monospace"','"Source Code Pro"','"Fira Mono"','"Droid Sans Mono"','"Courier New"',"monospace"]
			}
		},
	},
	plugins: [],
}
