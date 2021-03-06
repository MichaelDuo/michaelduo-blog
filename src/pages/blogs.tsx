import * as React from 'react';
import Layout from '../ui/Layout';
import {graphql} from 'gatsby';
import Header from '../components/Header';
import Link from '../components/Link';
import {getBlogList} from '../utils';

interface Props {
	data: any;
}

const IndexPage = (props: React.PropsWithChildren<Props>): JSX.Element => {
	let blogs = props.data.allMarkdownRemark.edges.map((e) => e.node);
	blogs = getBlogList(blogs);

	return (
		<Layout>
			<Header>All articles</Header>
			<section>
				<ul className="space-y-1">
					{blogs.map((blog) => {
						return (
							<li key={blog.id}>
								<Link to={blog.frontmatter.path}>
									{blog.frontmatter.title}
								</Link>{' '}
								<div className="sm:inline-block">
									{blog.frontmatter.date}
								</div>
							</li>
						);
					})}
				</ul>
			</section>
		</Layout>
	);
};

export const pageQuery = graphql`
	query AllPostsQuery {
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
						score
					}
				}
			}
		}
	}
`;

export default IndexPage;
