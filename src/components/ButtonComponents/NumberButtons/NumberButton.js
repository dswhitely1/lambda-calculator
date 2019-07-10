import React from 'react';

const NumberButton = ({ data }) => {
	return <button className={data === '0' && 'zero-button'}>{data}</button>;
};

export default NumberButton;
