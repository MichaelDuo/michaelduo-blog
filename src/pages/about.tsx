import * as React from 'react';
import BlogItem from '../components/BlogItem';
import Layout from '../ui/Layout';
import {graphql} from 'gatsby';
import _ from 'lodash';
import {getTags} from '../utils';
import Header from '../components/Header';
import Link from '../components/Link';

interface Props {
	data: any;
}

const IndexPage = (props: React.PropsWithChildren<Props>): JSX.Element => {
	let blogs = props.data.allMarkdownRemark.edges.map((e) => e.node);
	blogs = blogs.filter(
		(blog) => _.indexOf(getTags(blog.frontmatter.tags), 'featured') >= 0
	);

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
								{blog.frontmatter.date}
							</li>
						);
						return (
							<BlogItem
								key={blog.id}
								title={blog.frontmatter.title}
								date={blog.frontmatter.date}
								path={blog.frontmatter.path}
								excerpt={blog.excerpt}
							></BlogItem>
						);
					})}
				</ul>
			</section>
		</Layout>
	);
};

export const pageQuery = graphql`
	query AboutQuery {
		allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
			edges {
				node {
					excerpt(pruneLength: 250)
					id
					frontmatter {
						title
						date(formatString: "MMMM DD, YYYY")
						path
						tags
					}
				}
			}
		}
	}
`;

export default IndexPage;
