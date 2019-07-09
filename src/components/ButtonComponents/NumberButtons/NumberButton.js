import React from 'react';
import style from '../../../styles.module.css';
const NumberButton = ({ data }) => {
	return <button className={style.button}>{data}</button>;
};

export default NumberButton;
