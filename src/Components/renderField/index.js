import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

const renderField = ({
  input, placeholder, type, meta: { touched, error },
}) => (
  <div className={[styles.inputField]}>
    {console.log(input)}
    <input {...input} id={placeholder} placeholder={placeholder} type={type} />
    {touched && error && <span className={styles.error}>{error}</span>}
  </div>
);
renderField.propTypes = {
  input: PropTypes.shape().isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }).isRequired,
};

export default renderField;
