import {graphql} from 'gatsby';
import React from 'react';
import Layout from '../../ui/Layout';
import Link from '../../components/Link';
import Header from '../../components/Header';

interface Props {
	tag: string;
	pathContext: any;
}

const Tag = (props: React.PropsWithChildren<Props>): JSX.Element => {
	const {blogs, tag} = props.pathContext;
	return (
		<Layout>
			<Header type="h1">🏷 {tag}</Header>
			<ul>
				{blogs.map((blog, idx) => {
					return (
						<li key={idx}>
							<Link to={blog.frontmatter.path}>
								{blog.frontmatter.title}
							</Link>
						</li>
					);
				})}
			</ul>
		</Layout>
	);
};

export default Tag;
