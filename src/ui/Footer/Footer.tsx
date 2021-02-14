import React from 'react';
import Link from '../../components/Link';

const Footer = (): JSX.Element => {
	return (
		<footer className="mt-8 pt-2 pb-16 border-t-2">
			2021 © Yuxi Dong |{' '}
			<Link to="https://github.com/MichaelDuo/gatsby-boilerplate">
				Source Code
			</Link>{' '}
			| Powered By <Link to="https://www.gatsbyjs.com/">Gatsby</Link>
		</footer>
	);
};

export default Footer;
