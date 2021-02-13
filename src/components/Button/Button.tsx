import React from 'react';

interface Props {
	onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = (props: React.PropsWithChildren<Props>): JSX.Element => {
	return (
		<button
			className="
                flex-shrink-0 
                py-2 
                px-4 
                text-base 
                font-semibold 
                bg-indigo-600 
                text-white 
                rounded-lg 
                shadow-md 

                hover:bg-indigo-700 

                focus:outline-none 

                active:bg-indigo-500

                transition
                duration-75
                ease-in-out
            "
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
};

export default Button;
