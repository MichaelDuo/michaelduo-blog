import React from 'react';
import styles from './style.module.css';
console.log(styles);

interface Props {}

const Header = (props: React.PropsWithChildren<Props>): JSX.Element => {
	return <h1 className={styles.h2}>{props.children}</h1>;
};

export default Header;
