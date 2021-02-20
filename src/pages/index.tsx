import * as React from 'react';
import BlogItem from '../components/BlogItem';
import SiteDescription from '../ui/SiteDescription';
import Layout from '../ui/Layout';
import {graphql} from 'gatsby';
import _ from 'lodash';
import {getBlogList} from '../utils';

interface Props {
	data: any;
}

const IndexPage = (props: React.PropsWithChildren<Props>): JSX.Element => {
	let blogs = props.data.allMarkdownRemark.edges.map((e) => e.node);
	blogs = getBlogList(blogs);
	const featuredBlogs = blogs.filter((blog) => blog.frontmatter.score >= 90);
	return (
		<Layout>
			<SiteDescription />
			<section className="">
				{featuredBlogs.map((blog) => {
					return (
						<BlogItem
							key={blog.id}
							title={blog.frontmatter.title}
							date={blog.frontmatter.date}
							path={blog.frontmatter.path}
							excerpt={blog.frontmatter.brief || blog.excerpt}
						></BlogItem>
					);
				})}
			</section>
		</Layout>
	);
};

export const pageQuery = graphql`
	query IndexQuery {
		allMarkdownRemark(
			filter: {frontmatter: {path: {regex: "/^/blogs.*/"}}}
		) {
			edges {
				node {
					excerpt(pruneLength: 250)
					id
					frontmatter {
						title
						date(formatString: "MMMM DD, YYYY")
						path
						tags
						brief
						score
					}
				}
			}
		}
	}
`;

export default IndexPage;
