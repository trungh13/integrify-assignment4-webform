import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.css';

const ComponentFormHeader = ({ heading }) => (
  <React.Fragment>
    <h3 className={styles.FormHeader}>{heading}</h3>
  </React.Fragment>
);

ComponentFormHeader.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default ComponentFormHeader;
