import React from 'react';
import Nb from '../../components/Navbar';

const Navbar = (): JSX.Element => {
	return (
		<Nb
			title={{
				text: 'Yuxi Dong',
				link: '/',
			}}
			links={[
				{
					text: 'Home',
					link: '/',
				},
				{
					text: 'All Posts',
					link: '/posts',
				},
				{
					text: 'About',
					link: '/about',
				},
				{
					text: 'Tags',
					link: '#',
				},
				{
					text: 'Github',
					link: '#',
				},
			]}
		></Nb>
	);
};

export default Navbar;
