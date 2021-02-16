const path = require('path');
const _ = require('lodash');

function getTags(tagsStr) {
	return _.split(_.lowerCase(_.replace(tagsStr, /\s/g, '')), ' ');
}

exports.createPages = async ({actions, graphql, reporter}) => {
	const {createPage} = actions;
	const blogPostTemplate = path.resolve(
		`src/templates/BlogPost/BlogPost.tsx`
	);
	const tagTemplate = path.resolve(`src/templates/Tag/Tag.tsx`);
	const blogsQuery = await graphql(`
		{
			allMarkdownRemark(
				sort: {order: DESC, fields: [frontmatter___date]}
				limit: 1000
			) {
				edges {
					node {
						frontmatter {
							path
							tags
						}
					}
				}
			}
		}
	`);
	if (blogsQuery.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`);
		return;
	}

	const tags = [];
	blogsQuery.data.allMarkdownRemark.edges.forEach(({node}) => {
		createPage({
			path: node.frontmatter.path,
			component: blogPostTemplate,
			context: {}, // additional data can be passed via context
		});
		tags.push(...getTags(node.frontmatter.tags));
	});

	for (let tag of tags) {
		createPage({
			path: `tags/${tag}`,
			component: tagTemplate,
			context: {
				tag,
			}, // additional data can be passed via context
		});
	}
};
