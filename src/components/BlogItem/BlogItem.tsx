import React from 'react';
import Header from '../Header';
import Link from '../Link';

interface Props {
	title: string;
	excerpt?: string;
	date?: string;
	path: string;
}

const BlogItem = (props: React.PropsWithChildren<Props>): JSX.Element => {
	return (
		<section>
			<Header type="h2">
				<Link to={props.path}>{props.title}</Link>
			</Header>
			<div className="text-gray-500">{props.date}</div>
			<div>{props.excerpt}</div>
		</section>
	);
};

export default BlogItem;
