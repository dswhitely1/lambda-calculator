import React from 'react';

const OperatorButton = ({ data: { char, value }, handleClick }) => {
	return (
		<button value={value} onClick={() => handleClick(value)}>
			{char}
		</button>
	);
};

export default OperatorButton;
