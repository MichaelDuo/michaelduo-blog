const {split, replace, filter} = require('lodash');

function getTags(tagsStr) {
	return split(replace(tagsStr, /\s/g, '').toLowerCase(), ',');
}

function filterBlogs(blogs) {
	return filter(blogs, (blog) => blog.frontmatter.score >= 0);
}

function sortBlogs(blogs) {
	return [...blogs].sort((a, b) => {
		if (a.frontmatter.score > b.frontmatter.score) {
			return -1;
		} else if (a.frontmatter.score < b.frontmatter.score) {
			return 1;
		} else {
			const timeA = new Date(a.frontmatter.date).getTime();
			const timeB = new Date(b.frontmatter.date).getTime();
			return timeA === timeB ? 0 : timeA > timeB ? -1 : 1;
		}
	});
}

function getBlogList(blogs) {
	return sortBlogs(filterBlogs(blogs));
}

module.exports = {
	filterBlogs,
	sortBlogs,
	getBlogList,
	getTags,
};
