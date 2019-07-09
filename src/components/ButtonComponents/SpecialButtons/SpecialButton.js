import React from 'react';

import styles from '../../../styles.module.css';

const SpecialButton = ({ data }) => {
	return <button className={styles.button}>{data}</button>;
};

export default SpecialButton;
