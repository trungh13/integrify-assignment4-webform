import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

import Button from '../ComponentButton';

const ComponentForm = (props) => {
  const {
    previousPage, onSubmit, heading, children, isDisabled,
  } = props;
  return (
    <div className={styles.Form}>
      <h3 className={styles.FormHeader}>{heading}</h3>
      {children}
      {console.log(props)}
      {onSubmit && <Button onClick={onSubmit} btnName="Next" isDisabled={isDisabled} />}
      {previousPage && <Button onClick={previousPage} btnName="Previous" />}
    </div>
  );
};

ComponentForm.propTypes = {
  previousPage: PropTypes.func,
  onSubmit: PropTypes.func,
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};
ComponentForm.defaultProps = {
  previousPage() {},
  onSubmit() {},
};

export default ComponentForm;
