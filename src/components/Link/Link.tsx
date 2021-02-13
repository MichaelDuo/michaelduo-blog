import React from 'react';

interface Props {
	to?: string;
	className: string;
}

const Link = (props: React.PropsWithChildren<Props>): JSX.Element => {
	return (
		<a
			className={
				`border-b-3 border-indigo-700 hover:bg-indigo-800 hover:text-white cursor-pointer ` +
				props.className
			}
			href={props.to}
		>
			{props.children}
		</a>
	);
};

Link.defaultProps = {
	className: '',
};

export default Link;
