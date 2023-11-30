/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}', './index.html'],
	theme: {
		extend: {
			gridTemplateRows: {
				// Define tus propias clases de filas
				custom: '0.5fr repeat(3, minmax(0, 1fr))',
				custom_md: '1fr repeat(2, minmax(0, 1fr))',
			},
			letterSpacing: {
				'2px': '2px',
				'5px': '5px',
			},
			screens: {
				sm: '375px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
			},
			colors: {
				cyan: '#9cdbff',
				strongCyan: 'hsl(172, 67%, 45%)',
				darkCyan: 'hsl(183, 100%, 15%)',
				darkGrayishCyan: 'hsl(186, 14%, 43%)',
				grayishCyan: 'hsl(184, 14%, 56%)',
				lightGrayishCyan: 'hsl(185, 41%, 84%)',
				veryLigthGrayishCyan: 'hsl(189, 41%, 97%)',
				white: '#ffffff',
			},
			margin: {
				1: '8px',
				2: '12px',
				3: '16px',
				4: '24px',
				5: '32px',
				6: '48px',
			},
		},
		plugins: [],
	},
};
