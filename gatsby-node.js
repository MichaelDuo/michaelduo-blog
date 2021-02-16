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

	const markdwonQuery = await graphql(`
		{
			allMarkdownRemark(
				sort: {order: DESC, fields: [frontmatter___date]}
			) {
				edges {
					node {
						frontmatter {
							date
							path
							tags
							title
						}
					}
				}
			}
		}
	`);
	if (markdwonQuery.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`);
		return;
	}

	const markdowns = markdwonQuery.data.allMarkdownRemark.edges.map(
		(e) => e.node
	);

	const blogs = _.filter(markdowns, (markdown) =>
		markdown.frontmatter.path.match(/^\/blogs\/.*/)
	);

	for (let i = 0; i < blogs.length; i++) {
		const blog = blogs[i];
		createPage({
			path: blog.frontmatter.path,
			component: blogPostTemplate,
			context: {
				prev: i > 0 ? blogs[i - 1] : null,
				next: i < blogs.length - 1 ? blogs[i + 1] : null,
				tags: getTags(blog.frontmatter.tags),
			},
		});
	}

	const nonBlogs = _.filter(
		markdowns,
		(markdown) => !markdown.frontmatter.path.match(/^\/blogs\/.*/)
	);

	for (let i = 0; i < nonBlogs.length; i++) {
		const markdown = nonBlogs[i];
		createPage({
			path: markdown.frontmatter.path,
			component: blogPostTemplate,
			context: {},
		});
	}

	const tagTemplate = path.resolve(`src/templates/Tag/Tag.tsx`);
	const tagMap = {};
	blogs.forEach((blog) => {
		getTags(blog.frontmatter.tags).forEach((tag) => {
			if (!tagMap[tag]) tagMap[tag] = [];
			tagMap[tag].push(blog);
		});
	});

	_.keys(tagMap).map((tag) => {
		createPage({
			path: `/tags/${tag}`,
			component: tagTemplate,
			context: {
				tag,
				blogs: tagMap[tag],
			}, // additional data can be passed via context
		});
	});
};
