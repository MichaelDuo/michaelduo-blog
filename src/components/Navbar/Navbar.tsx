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
		<header className="flex sm:flex-row flex-col sm:items-center items-start justify-between flex-wrap mb-5">
			<div>
				<Link
					className="text-2xl whitespace-nowrap text-gray-800"
					to={props.title.link}
				>
					{props.title.text}
				</Link>
			</div>
			<nav className="space-x-2 text-base pt-2 sm:pt-0">
				{props.links.map((link) => {
					return (
						<Link key={link.text} to={link.link}>
							{link.text}
						</Link>
					);
				})}
			</nav>
		</header>
	);
};

export default Navbar;
