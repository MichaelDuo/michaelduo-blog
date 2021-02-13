import * as React from 'react';
import Button from '../components/Button';
import Link from '../components/Link';
import Navbar from '../ui/Navbar';
import BlogItem from '../components/BlogItem';
import SiteDescription from '../ui/SiteDescription';
import Footer from '../ui/Footer';
import Layout from '../ui/Layout';

const IndexPage = () => {
	return (
		<Layout>
			<SiteDescription />
			<section className="">
				<BlogItem title="This is a Blog Title"></BlogItem>
				<BlogItem title="This is a Blog Title"></BlogItem>
				<BlogItem title="This is a Blog Title"></BlogItem>
				{/* <div>
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
				</div> */}
			</section>
		</Layout>
	);
};

export default IndexPage;
