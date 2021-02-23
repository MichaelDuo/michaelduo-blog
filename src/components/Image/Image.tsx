import React from 'react';
import Img from 'gatsby-image';

interface Props {
	fluid: any;
	alt?: string;
}
function Image(props: React.PropsWithChildren<Props>): JSX.Element {
	return <Img className="border-gray-500 border-2 my-2 mx-auto" {...props} />;
}

export default Image;
