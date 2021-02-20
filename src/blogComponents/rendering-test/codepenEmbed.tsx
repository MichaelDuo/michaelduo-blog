import React from 'react';

const CodepenEmbed = (): JSX.Element => {
	return (
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
	);
};

export default CodepenEmbed;
