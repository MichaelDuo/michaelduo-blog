import React from 'react';

interface Props {}

const Header = (props: React.PropsWithChildren<Props>): JSX.Element => {
	return <h1>{props.children}</h1>;
};

export default Header;
