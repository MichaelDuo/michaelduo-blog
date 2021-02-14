import * as React from 'react';
import BlogItem from '../components/BlogItem';
import SiteDescription from '../ui/SiteDescription';
import Layout from '../ui/Layout';
import {graphql} from 'gatsby';

interface Props {
	data: any;
}

const IndexPage = (props: React.PropsWithChildren<Props>): JSX.Element => {
	const edges = props.data.allMarkdownRemark.edges;
	console.log(props.data);
	return (
		<Layout>
			<SiteDescription />
			<section className="">
				{edges.map((edge) => {
					const blog = edge.node;
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
			</section>
		</Layout>
	);
};

export const pageQuery = graphql`
	query IndexQuery {
		allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
			edges {
				node {
					excerpt(pruneLength: 250)
					id
					frontmatter {
						title
						date(formatString: "MMMM DD, YYYY")
						path
					}
				}
			}
		}
	}
`;

export default IndexPage;
