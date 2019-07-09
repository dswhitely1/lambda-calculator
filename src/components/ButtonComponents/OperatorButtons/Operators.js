import React from 'react';

//import any components needed
import OperatorButton from './OperatorButton';
//Import your array data to from the provided data file
import { operators } from '../../../data';
import style from '../../../styles.module.css';
const Operators = () => {
	// STEP 2 - add the imported data to state
	return (
		<span className={style.operatorContainer}>
			{operators.map((operator, i) => <OperatorButton key={i} data={operator} />)}
		</span>
	);
};

export default Operators;
