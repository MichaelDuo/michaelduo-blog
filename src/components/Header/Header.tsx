import React from 'react';
import styles from './styles.module.css';

interface Props {
	type: 'h1' | 'h2' | 'h3';
}

const Header = (props: React.PropsWithChildren<Props>): JSX.Element => {
	return (
		<props.type className={styles[props.type]}>{props.children}</props.type>
	);
};

Header.defaultProps = {
	type: 'h1',
};

export default Header;
