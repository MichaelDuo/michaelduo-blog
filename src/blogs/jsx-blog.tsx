import React, {useEffect, useState} from 'react';
import Layout from '../ui/Layout';
import Header from '../components/Header';

const Test = (): JSX.Element => {
	const [count, setCounter] = useState<number>(0);
	useEffect(() => {
		setTimeout(() => {
			import('../utils/test').then((test) => {
				console.log(test.saySomething());
			});
		}, 5000);

		const timer = setInterval(() => {
			setCounter((prevCount) => prevCount + 1);
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	return (
		<Layout>
			<Header>This is a jsx Blog</Header>
			<p>Counter: {count}</p>
		</Layout>
	);
};

export default Test;
