import React from 'react';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';
import styles from './index.css';
import validate from '../../../Components/validate';
import renderField from '../../../Components/renderField';
import Form from '../../../Components/ComponentForm';

const PersonalInformation = (props) => {
  const { onSubmit, invalid } = props;
  console.log('Personal', props);
  return (
    <Form heading="Personal information" onSubmit={onSubmit} isDisabled={invalid}>
      <div className={styles.PersonalInformation}>
        <div className={styles.InformationNameEmailPhone}>
          <div className={styles.InformationNameEmail}>
            <Field name="fullName" type="text" component={renderField} placeholder="Full name*" />
            <Field name="email" type="email" component={renderField} placeholder="Email*" />
            <Field
              name="reEmail"
              type="email"
              component={renderField}
              placeholder="Re-enter email*"
            />
          </div>
          <div className={styles.InformationPhone}>
            <Field name="phone" type="number" component={renderField} placeholder="Phone#*" />
          </div>
        </div>
        <Field name="address" type="text" component={renderField} placeholder="Address*" />
        <div className={styles.InformationAddress}>
          <Field name="city" type="text" component={renderField} placeholder="City*" />
          <Field name="state" type="text" component={renderField} placeholder="State" />
          <Field name="country" type="text" component={renderField} placeholder="Country/Region*" />
          <Field
            name="postalCode"
            type="number"
            component={renderField}
            placeholder="Zip/Postal code"
          />
        </div>
        <Field
          name="hearAboutUs"
          type="text"
          component={renderField}
          placeholder="How did you hear about us?"
        />
      </div>
    </Form>
  );
};
PersonalInformation.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  invalid: PropTypes.bool.isRequired,
};
export default reduxForm({
  form: 'letstalkform',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(PersonalInformation);
