import * as React from 'react';
import Navbar from '../Navbar';
import Footer from '../../ui/Footer';

interface Props {}

const Layout = (props: React.PropsWithChildren<Props>): JSX.Element => {
	return (
		<div className="h-screen max-w-screen-md mx-auto m-3">
			<Navbar />
			<main className="py-5">{props.children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
