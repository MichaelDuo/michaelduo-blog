import * as React from 'react';
import Layout from '../ui/Layout';
import {graphql} from 'gatsby';
import Header from '../components/Header';
import Link from '../components/Link';
import {reduce, countBy, keys, sortBy} from 'lodash';
import {getTags} from '../utils';
import '../styles/tags.css';

interface Props {
	data: any;
}

const IndexPage = (props: React.PropsWithChildren<Props>): JSX.Element => {
	const blogs = props.data.allMarkdownRemark.edges.map((e) => e.node);

	const tags = countBy(
		reduce(
			blogs,
			(acc, blog) => acc.concat(getTags(blog.frontmatter.tags)),
			[]
		)
	);

	return (
		<Layout>
			<Header>All tags</Header>
			<section>
				<ul className="space-y-1">
					{sortBy(keys(tags)).map((tag, idx) => {
						return (
							<li className="tag-item" key={idx}>
								<Link to={`/tags/${tag}`}>{tag}</Link> [
								{tags[tag]} posts]
							</li>
						);
					})}
				</ul>
			</section>
		</Layout>
	);
};

export const pageQuery = graphql`
	query AllTagsQuery {
		allMarkdownRemark(
			sort: {order: DESC, fields: [frontmatter___date]}
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
					}
				}
			}
		}
	}
`;

export default IndexPage;
