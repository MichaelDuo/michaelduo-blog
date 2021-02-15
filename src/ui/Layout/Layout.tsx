import * as React from 'react';
import Navbar from '../Navbar';
import Footer from '../../ui/Footer';

interface Props {}

const Layout = (props: React.PropsWithChildren<Props>): JSX.Element => {
	return (
		<div className="max-w-screen-md min-h-screen mx-auto">
			<div className="my-3 mx-5 md:mx-0">
				<Navbar />
				<main className="pb-5">{props.children}</main>
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
