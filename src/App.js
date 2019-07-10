import React, { useState } from 'react';

// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component
import Display from './components/DisplayComponents/Display';
import Specials from './components/ButtonComponents/SpecialButtons/Specials';
import Operators from './components/ButtonComponents/OperatorButtons/Operators';
import Numbers from './components/ButtonComponents/NumberButtons/Numbers';
// Logo has already been provided for you. Do the same for the remaining components
import Logo from './components/DisplayComponents/Logo';
import './app.scss';

function App() {
	const [ total, setTotal ] = useState(0);
	const [ value, setValue ] = useState([]);
	// STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
	// Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
	// Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
	// the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
	// Don't forget to pass the functions (and any additional data needed) to the components as props

	const updateValue = data => {
		if (data === '+' || data === '-' || data === 'x' || data === '/') {
			setTotal(0);
		}
		if (data === '=') {
			// do our logic here and return the total
		}
		setValue([ ...value, data ]);
	};

	return (
		<div className='container'>
			<Logo />
			<Display total={total} />
			<div className='button-container'>
				<div className='calc'>
					<Specials />
					<Numbers handleClick={updateValue} />
				</div>
				<div className='oper'>
					<Operators handleClick={updateValue} />
				</div>
			</div>
			{/* STEP 4 - Render your components here and be sure to properly import/export all files */}
		</div>
	);
}

export default App;
