import * as React from 'react';
import Button from '../components/Button';

const IndexPage = () => {
	return (
		<main className="flex justify-center items-center h-screen">
			<div>
				<Button
					onClick={() => {
						console.log('HelloWorld');
					}}
				>
					Customized Button
				</Button>
			</div>
		</main>
	);
};

export default IndexPage;
