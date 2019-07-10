import React, { useState } from 'react';

//import any components needed
import SpecialButton from './SpecialButton';
//Import your array data to from the provided data file
import { specials } from '../../../data';
import './specials.scss';
const Specials = props => {
	const [ specialButtons, setSpecialButtons ] = useState(specials);
	// STEP 2 - add the imported data to state

	return (
		<div className='specials-container'>
			{specialButtons.map((special, i) => <SpecialButton key={i} data={special} {...props} />)}
			{/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
		</div>
	);
};

export default Specials;
