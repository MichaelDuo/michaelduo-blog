import React, {useEffect, useState} from 'react';

const Test = (): JSX.Element => {
	const [count, setCounter] = useState<number>(0);
	useEffect(() => {
		const timer = setInterval(() => {
			setCounter((prevCount) => prevCount + 1);
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	return (
		<div>
			<p>Counter: {count}</p>
		</div>
	);
};

export default Test;
