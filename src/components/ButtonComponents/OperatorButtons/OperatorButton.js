import React from 'react';

import styles from '../../../styles.module.css';

const OperatorButton = ({ data }) => {
	return <button className={styles.button}>{data.char}</button>;
};

export default OperatorButton;
