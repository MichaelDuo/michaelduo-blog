import React from 'react';
import Header from '../Header';
import Link from '../Link';

interface Props {
	title: string;
	brief?: string;
	timestamp?: Date;
}

const BlogItem = (props: React.PropsWithChildren<Props>): JSX.Element => {
	return (
		<section>
			<Header>
				<Link to="/test">{props.title}</Link>
			</Header>
			<div className="text-gray-500">Oct 21, 2021</div>
			<div>This is a description...f ewjio jfeio jdjs iofdjsio</div>
		</section>
	);
};

export default BlogItem;
