module.exports = {
	purge: [
		'./src/**/*.html',
		'./src/**/*.js',
		'./src/**/*.jsx',
		'./src/**/*.tsx',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		// fontFamily: {
		// 	sans: ['Roboto', 'mono', 'monospace'],
		// },
	},
	variants: {
		extend: {
			backgroundColor: ['active'],
		},
	},
	plugins: [],
};
