import React from 'react';

const NumberButton = ({ data, handleClick }) => {
	return (
		<button className={data === '0' ? 'zero-button' : undefined} value={data} onClick={() => handleClick(data)}>
			{data}
		</button>
	);
};

export default NumberButton;
