import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import validate from '../../../Components/validate';
import renderField from '../../../Components/renderField';
import Form from '../../../Components/ComponentForm';

const SkillsAndLocation = (props) => {
  const { handleSubmit, previousPage } = props;
  console.log('Skill', props);
  return (
    <Form heading="Skills and Location" onSubmit={handleSubmit} previousPage={previousPage}>
      <Field name="email" type="email" component={renderField} label="Email" />
      <div>
        <div>
          <Field id="male" name="sex" component="input" type="radio" value="male" /> Male
          <Field id="female" name="sex" component="input" type="radio" value="female" /> Female
        </div>
      </div>
    </Form>
  );
};
SkillsAndLocation.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
};
export default reduxForm({
  form: 'letstalkform',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(SkillsAndLocation);
