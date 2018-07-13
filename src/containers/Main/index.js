import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.css';
import PersonalInformation from './PersonalInformation';
import SkillsAndLocation from './SkillsAndLocation';
import Portfolio from './Portfolio';
import ReviewForm from './ReviewForm';

class Main extends React.Component {
  state = { step: 1 };

  nextPage = () => {
    this.setState(prevState => ({ step: prevState.step + 1 }));
  };

  previousPage = () => {
    this.setState(prevState => ({ step: prevState.step - 1 }));
  };

  switchRender = () => {
    const { step } = this.state;
    const { onSubmit } = this.props;
    switch (step) {
      case 1:
        return <PersonalInformation onSubmit={this.nextPage} />;
      case 2:
        return <SkillsAndLocation previousPage={this.previousPage} onSubmit={this.nextPage} />;
      case 3:
        return <Portfolio previousPage={this.previousPage} onSubmit={onSubmit} />;
      case 4:
        return <ReviewForm />;
      default:
        return null;
    }
  };

  render() {
    return <div>{this.switchRender()}</div>;
  }
}

Main.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Main;
