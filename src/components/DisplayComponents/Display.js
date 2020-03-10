import React from 'react';

import './display.scss';

const Display = ({ total }) => {
	return (
		<div className='display-container'>
			<span>{total}</span>
		</div>
	);
};

export default Display;
