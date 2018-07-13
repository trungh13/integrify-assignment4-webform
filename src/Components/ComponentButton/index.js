import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

const ComponentButton = ({ onClick, isValidated = false, btnName = '' }) => (
  <button onClick={onClick} disabled={isValidated} className={styles.ComponentButton} type="button">
    {btnName}
  </button>
);
ComponentButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isValidated: PropTypes.bool.isRequired,
  btnName: PropTypes.string.isRequired,
};
export default ComponentButton;
