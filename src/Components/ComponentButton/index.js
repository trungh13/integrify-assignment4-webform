import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

const ComponentButton = ({ onClick, isDisabled, btnName = '' }) => (
  <button onClick={onClick} disabled={isDisabled} className={styles.ComponentButton} type="button">
    {btnName}
  </button>
);
ComponentButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
  btnName: PropTypes.string.isRequired,
};

ComponentButton.defaultProps = {
  isDisabled: false,
};
export default ComponentButton;
