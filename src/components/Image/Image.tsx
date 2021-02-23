import React from 'react';
import Img from 'gatsby-image';

interface Props {
	fluid: any;
	alt: string;
}

const widthMap = {
	':sm': 'w-1/2 md:w-1/3',
	':md': 'w-full sm:w-2/3 md:w-1/2',
	':lg': 'w-full md:w-2/3',
	':xl': 'w-full',
};
function Image(props: React.PropsWithChildren<Props>): JSX.Element {
	const sizeReg = /(:sm|:md|:lg|xl)\s*(.*)/;
	let size = ':xl';
	let alt = props.alt;
	if (sizeReg.test(alt)) {
		const match = alt.match(sizeReg);
		size = match[1];
		alt = match[2];
	}
	return (
		<Img
			className={`border-gray-500 border-2 my-2 mx-auto ${widthMap[size]}`}
			fluid={props.fluid}
			alt={alt}
		/>
	);
}

Image.defaultProps = {
	alt: '',
};

export default Image;
