const postcssPresetEnv = require(`postcss-preset-env`);
var atImport = require('postcss-import');

module.exports = () => ({
	plugins: [
		require('tailwindcss'),
		require('postcss-nested'),
		atImport(),
		postcssPresetEnv({
			stage: 0,
		}),
	],
});
