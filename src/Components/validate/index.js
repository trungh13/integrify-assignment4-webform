const validate = (values) => {
  const errors = {};
  if (!values.fullName) {
    errors.fullName = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.reEmail) {
    errors.reEmail = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.reEmail)) {
    errors.reEmail = 'Invalid email address';
  } else if (values.email !== values.reEmail) {
    errors.reEmail = 'Re-enter email not same as email';
  }
  if (!values.phone) {
    errors.phone = 'Required';
  } else if (!/^(0[0-9]{9})$|(\+358{1}[0-9]{9})$|(00358[0-9]{9})$/.test(values.phone)) {
    errors.phone = 'Invalid phone number';
  }
  if (!values.address) {
    errors.address = 'Required';
  } else if (!/^[a-zA-Z1-9 ,]{1,}$/.test(values.address)) {
    errors.address = 'Re-enter address';
  }
  if (!values.city) {
    errors.city = 'Required';
  } else if (!/^[a-zA-Z1-9 ,]{1,}$/.test(values.city)) {
    errors.city = 'Re-enter city';
  }
  if (!values.country) {
    errors.country = 'Required';
  } else if (!/^[a-zA-Z1-9 ,]{1,}$/.test(values.country)) {
    errors.country = 'Re-enter country';
  }
  if (values.postalCode && !/^$|[0-9]{5}$/.test(values.postalCode)) {
    errors.postalCode = 'Re-enter postal code';
  }
  return errors;
};

export default validate;
