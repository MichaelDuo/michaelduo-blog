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
			<div
				dangerouslySetInnerHTML={{
					__html: `
					<iframe height="500" style="width: 100%;" scrolling="no" title="Lantern" src="https://codepen.io/michaelduo/embed/Pozpzay?height=265&theme-id=light&default-tab=css,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
					See the Pen <a href='https://codepen.io/michaelduo/pen/Pozpzay'>Lantern</a> by Michael Dong
					(<a href='https://codepen.io/michaelduo'>@michaelduo</a>) on <a href='https://codepen.io'>CodePen</a>.
				  </iframe>
			  
			`,
				}}
			></div>
		</Layout>
	);
};

export default Test;
