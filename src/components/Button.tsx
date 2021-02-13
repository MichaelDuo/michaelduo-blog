import React from 'react';

const Button = ({children}): JSX.Element => {
	return (
		<button
			className="
                flex-shrink-0 
                py-2 
                px-4 
                text-base 
                font-semibold 
                bg-purple-600 
                text-white 
                rounded-lg 
                shadow-md 
                hover:bg-purple-700 
                focus:outline-none 
                focus:ring-2 
                focus:ring-purple-500 
                focus:ring-offset-2 
                focus:ring-offset-purple-200
            "
		>
			{children}
		</button>
	);
};

export default Button;
