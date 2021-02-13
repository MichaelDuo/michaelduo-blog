import * as React from 'react';
import Button from '../components/Button';
import Link from '../components/Link';
import Navbar from '../ui/Navbar';
import BlogItem from '../components/BlogItem';

const IndexPage = () => {
	return (
		<main className="h-screen max-w-screen-md mx-auto m-3">
			<Navbar></Navbar>
			<section className="flex flex-col justify-center items-center h-screen">
				<BlogItem title="This is a Blog Title"></BlogItem>
				<div>
					<Button
						onClick={() => {
							console.log('HelloWorld');
						}}
					>
						Customized Button
					</Button>
				</div>
				<div>
					This is a link: <Link to="#">HelloWorld</Link>
				</div>
			</section>
		</main>
	);
};

export default IndexPage;