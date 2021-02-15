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
					link: '/about/yuxi-dong',
				},
				{
					text: 'Tags',
					link: '/tags',
				},
				{
					text: 'Github',
					link: 'https://github.com/MichaelDuo',
				},
			]}
		></Nb>
	);
};

export default Navbar;
