import React from 'react';
import Layout from '../Layout';
import Link from '../../components/Link';

interface Props {
	pathContext: {
		tags: string[];
		prev: any;
		next: any;
	};
}

const BlogLayout = (props: React.PropsWithChildren<Props>): JSX.Element => {
	const {prev, next, tags} = props.pathContext;

	return (
		<Layout>
			{props.children}
			<div className="my-3 sm:my-5">
				{(tags || []).map((tag: string, idx) => {
					return (
						<div key={idx}>
							🏷 <Link to={`/tags/${tag}`}>{tag}</Link>
						</div>
					);
				})}
			</div>
			<div className="flex flex-col sm:flex-row justify-between mt-10 space-y-1">
				<div>
					{prev ? (
						<Link to={prev.frontmatter.path}>
							← {prev.frontmatter.title}
						</Link>
					) : null}
				</div>
				<div>
					{next ? (
						<Link to={next.frontmatter.path}>
							{next.frontmatter.title} →
						</Link>
					) : null}
				</div>
			</div>
		</Layout>
	);
};

export default BlogLayout;
