import React from 'react';
import './style.css';

interface Props {
	className: string;
	to?: string;
	target?: string;
}

const Link = (props: React.PropsWithChildren<Props>): JSX.Element => {
	const {to, className, children, ...otherProps} = props;
	return (
		<a
			className={
				`link border-indigo-700 hover:bg-indigo-800 hover:text-white cursor-pointer ` +
				className
			}
			href={to}
			{...otherProps}
		>
			{children}
		</a>
	);
};

Link.defaultProps = {
	className: '',
};

export default Link;
