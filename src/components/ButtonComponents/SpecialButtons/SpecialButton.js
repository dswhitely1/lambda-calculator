import React from 'react';

const SpecialButton = ({ data, handleClick }) => {
	return <button onClick={() => handleClick(data)}>{data}</button>;
};

export default SpecialButton;
