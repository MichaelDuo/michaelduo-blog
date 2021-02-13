module.exports = {
	parser: '@typescript-eslint/parser',
	root: true,
	plugins: ['react', '@typescript-eslint', 'prettier'],
	extends: [
		'plugin:react/recommended',
		'plugin:prettier/recommended',
	],
	overrides: [
		// typescript
		{
			files: ['*.ts', '*.tsx'],
			excludedFiles: ['*.test.js', 'gatsby-node.js', 'gatsby-config.js'],
			plugins: ['@typescript-eslint'],
			extends: [
				'plugin:@typescript-eslint/eslint-recommended',
				'plugin:@typescript-eslint/recommended',
				'plugin:react/recommended',
			],
			rules: {
				'@typescript-eslint/no-explicit-any': 0,
				'@typescript-eslint/member-delimiter-style': 0,
				'@typescript-eslint/interface-name-prefix': 0,
				'@typescript-eslint/no-use-before-define': 0,
				'react/prop-types': 0,
				'@typescript-eslint/no-empty-interface': 0,
				'@typescript-eslint/indent': 0, // confilict with prettier
				'@typescript-eslint/camelcase': 0,
				'@typescript-eslint/no-var-requires': 0,
			},
		},

		// gatsby and eslint config files
		{
			files: [
				'.eslintrc.js',
				'gatsby-node.js',
				'gatsby-config.js',
				'./scripts/**',
			],
			env: {
				node: true,
			},
		},
	],
	rules: {
		'no-console': 1,
		'no-debugger': 1,
		'@typescript-eslint/indent': 0,
		'no-undef': 0, // https://github.com/eslint/typescript-eslint-parser/issues/437#issuecomment-435526531
		'import/no-named-as-default': 0, // https://github.com/benmosher/eslint-plugin-import/issues/544
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};



