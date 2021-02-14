import * as React from 'react';
import Navbar from '../Navbar';
import Footer from '../../ui/Footer';

interface Props {}

const Layout = (props: React.PropsWithChildren<Props>): JSX.Element => {
	return (
		<div className="max-w-screen-md mx-auto py-3 min-h-screen">
			<Navbar />
			<main className="py-5">{props.children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
