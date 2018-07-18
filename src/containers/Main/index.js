import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import {
  reduxForm, getFormValues, getFormSyncErrors, getFormMeta,
} from 'redux-form';
import styles from './index.css';
import PersonalInformation from './PersonalInformation';
import SkillsAndLocation from './SkillsAndLocation';
import Portfolio from './Portfolio';
import ReviewForm from './ReviewForm';

class Main extends React.Component {
  state = { step: 1 };

  onSubmit = (values) => {
    console.log('something');
    console.log(values);
  };

  nextPage = () => {
    this.setState(prevState => ({ step: prevState.step + 1 }));
  };

  previousPage = () => {
    this.setState(prevState => ({ step: prevState.step - 1 }));
  };

  switchRender = () => {
    const { step } = this.state;
    switch (step) {
      case 1:
        return <PersonalInformation onSubmit={this.nextPage} />;
      case 2:
        return <SkillsAndLocation previousPage={this.previousPage} onSubmit={this.nextPage} />;
      case 3:
        return <Portfolio previousPage={this.previousPage} onSubmit={this.onSubmit} />;
      case 4:
        return <ReviewForm />;
      default:
        return null;
    }
  };

  render() {
    const { values } = this.props;
    console.log('values', values);
    console.table('props', this.props);
    return (
      <div>
        {this.switchRender()}
        {console.log('values', values)}
      </div>
    );
  }
}

Main.propTypes = {
  values: PropTypes.shape({}).isRequired,
};
const mapStateToProps = (state) => {
  const formValues = getFormValues('letstalkform')(state);
  const values = { ...formValues };

  const formErrors = getFormSyncErrors('letstalkform')(state);
  const errors = { ...formErrors };

  const formMeta = getFormMeta('letstalkform')(state);
  const meta = { ...formMeta };

  return {
    values,
    errors,
    meta,
  };
};
export default reduxForm({ form: 'letstalkform' })(connect(mapStateToProps)(Main));
