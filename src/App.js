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
	const [ appState, setAppState ] = useState({
		display    : '0',
		value      : [],
		operations : [],
	});
	// STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
	// Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
	// Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
	// the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
	// Don't forget to pass the functions (and any additional data needed) to the components as props

	const operations = (num1, operator, num2) => {
		if (operator === '+') {
			return num1 + num2;
		} else if (operator === '-') {
			return num1 - num2;
		} else if (operator === '*') {
			return num1 * num2;
		} else {
			return num1 / num2;
		}
	};

	const updateValue = data => {
		if (data === '+' || data === '-' || data === '*' || data === '/') {
			setAppState({
				...appState,
				display    : '0',
				operations : [ ...appState.operations, appState.value.join(''), data ],
				value      : [],
			});
		} else if (data === '=') {
			let finalArray = [ ...appState.operations, appState.value.join('') ];
			let index = 0;
			let result = 0;
			while (finalArray.length !== 1) {
				while (finalArray.includes('*') || finalArray.includes('/')) {
					while (finalArray.includes('*')) {
						index = finalArray.indexOf('*');
						result = operations(
							Number(finalArray[index - 1]),
							finalArray[index],
							Number(finalArray[index + 1]),
						).toString();
						finalArray.splice(index - 1, 3, result);
					}
					while (finalArray.includes('/')) {
						index = finalArray.indexOf('/');
						result = operations(
							Number(finalArray[index - 1]),
							finalArray[index],
							Number(finalArray[index + 1]),
						).toString();
						finalArray.splice(index - 1, 3, result);
					}
				}
				while (finalArray.includes('+') || finalArray.includes('-')) {
					while (finalArray.includes('+')) {
						index = finalArray.indexOf('+');
						result = operations(
							Number(finalArray[index - 1]),
							finalArray[index],
							Number(finalArray[index + 1]),
						).toString();
						finalArray.splice(index - 1, 3, result);
					}
					while (finalArray.includes('-')) {
						index = finalArray.indexOf('-');
						result = operations(
							Number(finalArray[index - 1]),
							finalArray[index],
							Number(finalArray[index + 1]),
						).toString();
						finalArray.splice(index - 1, 3, result);
					}
				}
			}
			const finalResult = finalArray[0] === '' ? '0' : finalArray.join('');
			setAppState({ ...appState, display: finalResult, value: [], operations: [] });
		} else if (data === 'C') {
			setAppState({ ...appState, display: '0', value: [], operations: [] });
		} else if (data === 'x/-' || data === '%') {
			return;
		} else {
			setAppState({ ...appState, value: [ ...appState.value, data ], display: `${appState.value.join('')}${data}` });
		}
	};

	return (
		<div className='container'>
			<Logo />
			<Display total={appState.display} />
			<div className='button-container'>
				<div className='calc'>
					<Specials handleClick={updateValue} />
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
