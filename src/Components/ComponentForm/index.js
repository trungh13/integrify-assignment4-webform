import React from 'react';
import PropTypes from 'prop-types';

import FormHeader from '../ComponentFormHeader';
import Button from '../ComponentButton';

const ComponentForm = ({
  previousPage, onSubmit, heading, children,
}) => (
  <div>
    <FormHeader heading={heading} />
    {children}
    {onSubmit && <Button onClick={onSubmit}>Next</Button>}
    {previousPage && <Button onClick={previousPage}>Previous</Button>}
  </div>
);

ComponentForm.propTypes = {
  previousPage: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  heading: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default ComponentForm;
