import React, {useEffect, useState} from 'react';
import BlogLayout from '../ui/BlogLayout';
import Header from '../components/Header';

interface Props {
	pathContext: any;
}

const Test = (props: React.PropsWithChildren<Props>): JSX.Element => {
	const [count, setCounter] = useState<number>(0);
	useEffect(() => {
		const timer = setInterval(() => {
			setCounter((prevCount) => prevCount + 1);
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	return (
		<BlogLayout pathContext={props.pathContext}>
			<Header>React animation playground</Header>
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
		</BlogLayout>
	);
};

export default Test;
