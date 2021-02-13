import * as React from 'react';
import getName from './test';

const IndexPage = () => {
	return (
		<main>
			<a href="#">HelloWorld a Tag {getName()}</a>
			{/* HelloWorld */}
		</main>
	);
};

export default IndexPage;
