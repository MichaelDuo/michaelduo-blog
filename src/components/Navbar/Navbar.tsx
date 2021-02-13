import React from 'react';
import Link from '../Link';

interface Props {
	title?: {
		text: string;
		link: string;
	};
	links?: {text: string; link: string}[];
}

const Navbar = (props: React.PropsWithChildren<Props>): JSX.Element => {
	return (
		<header className="flex justify-between items-center flex-wrap">
			<div>
				<Link
					className="text-2xl whitespace-nowrap text-gray-800"
					to="#"
				>
					{props.title.text}
				</Link>
			</div>
			<nav className="space-x-2 text-base">
				{props.links.map((link) => {
					return <Link key={link.text}>{link.text}</Link>;
				})}
			</nav>
		</header>
	);
};

export default Navbar;
