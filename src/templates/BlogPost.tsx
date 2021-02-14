import {graphql} from 'gatsby';
import React from 'react';
import Layout from '../ui/Layout';

interface Props {
	data: any;
}

const Blog = (props: React.PropsWithChildren<Props>): JSX.Element => {
	const {markdownRemark: post} = props.data; // data.markdownRemark holds your post data
	return (
		<Layout>
			<div className="blog-post-container">
				<div className="blog-post">
					<h1>{post.frontmatter.title}</h1>
					<div
						className="blog-post-content"
						dangerouslySetInnerHTML={{__html: post.html}}
					/>
				</div>
			</div>
		</Layout>
	);
};

export const query = graphql`
	query BlogPostByPath($path: String!) {
		markdownRemark(frontmatter: {path: {eq: $path}}) {
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				path
				title
			}
		}
	}
`;

export default Blog;
