/** @type {import('tailwindcss').Config} */

module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			boxShadow: {
				light: '0px 2px 4px rgba(0, 0, 0, 0.05)',
				neutral: '0px 2px 8px rgba(0, 0, 0, 0.1)',
			},
			fontFamily: {
				poppins: 'Poppins, sans-serif',
				roboto: 'Roboto, sans-serif',
				montserrat: 'Montserrat, sans-serif',
			},
			borderRadius: {
				primary: '4px',
			},
		},
		colors: {
			transparent: 'transparent',
			white: '#FFFFFF',
			primary: '#334680',
			accent: '#1E86FF',
			light: '#F6F7FB',
			gray: '#B9BDCF ',
			dark: '#282538',
		},
		plugins: [],
	},
}
