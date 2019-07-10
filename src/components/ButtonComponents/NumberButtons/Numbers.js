import React, { useState } from 'react';

//import any components needed
import NumberButton from './NumberButton';
//Import your array data to from the provided data file
import { numbers } from '../../../data';
import style from '../../../styles.module.css';
const Numbers = () => {
	const [ numberButtons, setNumberButtons ] = useState(numbers);
	// STEP 2 - add the imported data to state
	return (
		<div className={style.numberContainer}>
			{numberButtons.map((number, i) => <NumberButton key={i} data={number} />)}
			{/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
		</div>
	);
};

export default Numbers;
