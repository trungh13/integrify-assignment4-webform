import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import styles from './index.css';
import PersonalInformation from './PersonalInformation';
import SkillsAndLocation from './SkillsAndLocation';
import Portfolio from './Portfolio';
import ReviewForm from './ReviewForm';

const Main = () => {
  const nav = (
    <ul className={styles.ulNavLink}>
      <li className={styles.liNavLink}>
        <NavLink disabled activeClassName={styles.activeNavLink} exact to="/">
          Information
        </NavLink>
      </li>
      <li className={styles.liNavLink}>
        <NavLink activeClassName={styles.activeNavLink} exact to="/SkillsAndLocation">
          Skills
        </NavLink>
      </li>
      <li className={styles.liNavLink}>
        <NavLink activeClassName={styles.activeNavLink} exact to="/Portfolio">
          Portfolio
        </NavLink>
      </li>
    </ul>
  );
  return (
    <Switch>
      <Route
        exact
        path="/SkillsAndLocation"
        component={props => <SkillsAndLocation {...props} nav={nav} />}
      />
      <Route
        exact
        path="/Portfolio"
        component={props => <Portfolio {...props} nav={nav} />}
      />
      <Route
        exact
        path="/Display"
        component={props => <ReviewForm {...props} />}
      />
      <Route
        exact
        path="/"
        component={props => <PersonalInformation {...props} nav={nav} />}
      />
    </Switch>
  );
};
export default reduxForm({
  form: 'letTalkForm',
})(Main);
