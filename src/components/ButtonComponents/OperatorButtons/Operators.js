import React, { useState } from 'react';

//import any components needed
import OperatorButton from './OperatorButton';
//Import your array data to from the provided data file
import { operators } from '../../../data';
import './operators.scss';

const Operators = props => {
	const [ operatorButtons, setOperatorButtons ] = useState(operators);
	// STEP 2 - add the imported data to state
	return (
		<div className='operator-container'>
			{operatorButtons.map((operator, i) => <OperatorButton key={i} {...props} data={operator} />)}
		</div>
	);
};

export default Operators;
