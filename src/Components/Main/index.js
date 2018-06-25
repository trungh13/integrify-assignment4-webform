import React, { Component } from "react";
import styles from "./index.css";
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";

import ComponentPersonalInformation from "./ComponentPersonalInformation";
import ComponentSkillsAndLocation from "./ComponentSkillsAndLocation";
import ComponentPortfolio from "./ComponentPortfolio";
import ComponentReviewForm from "./ComponentReviewForm"
export class Main extends Component {
  state = {
    form: {
      fullName: "",
      email: "",
      reEmail: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      country: "",
      postalCode: "",
      hearAboutUs: "",
      skillsDesign: "",
      experiencedSkills: [],
      workingLocation: [],
      portfolioLink: "",
      additionalInformation: ""
    }
  };
  handleSubmit = content => {
    this.setState({ form: { ...this.state.form, ...content } });
  };
  render() {
    console.log("main", this.state.form);
    return (
      <div className={styles.Main}>
        <Router>
          <form action="">
            <div className={styles.InfoPanel}>
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
                <li className={styles.liNavLink}>
                  <NavLink activeClassName={styles.activeNavLink} exact to="/Display">
                    Review Form
                  </NavLink>
                </li>
              </ul>
            </div>
            <Switch>
              <Route
                exact
                path="/SkillsAndLocation"
                component={props => (
                  <ComponentSkillsAndLocation {...props} handleSubmit={this.handleSubmit} />
                )}
              />
              <Route
                exact
                path="/Portfolio"
                component={props => (
                  <ComponentPortfolio {...props} handleSubmit={this.handleSubmit} />
                )}
              />
              <Route
                exact
                path="/display"
                component={props => (
                  <ComponentReviewForm {...props} data={this.state.form} />
                )}
              />
              <Route
                exact
                path="/"
                component={props => (
                  <ComponentPersonalInformation {...props} handleSubmit={this.handleSubmit} />
                )}
              />
            </Switch>
          </form>
        </Router>
      </div>
    );
  }
}

export default Main;
