import React from 'react';
import Header from '../Header';

interface Props {
	title: string;
	brief?: string;
	timestamp?: Date;
}

const BlogItem = (props: React.PropsWithChildren<Props>): JSX.Element => {
	return (
		<div>
			<Header>{props.title}</Header>
		</div>
	);
};

export default BlogItem;
