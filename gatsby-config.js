module.exports = {
	siteMetadata: {
		title: 'gatsby-boilerplate',
	},
	plugins: [
		`gatsby-plugin-postcss`,
		`gatsby-plugin-eslint`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `pages`,
				path: `${__dirname}/markdowns`,
			},
		},
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [], // just in case those previously mentioned remark plugins sound cool :)
			},
		},
	],
};
