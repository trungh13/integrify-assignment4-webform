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
    const nav=(<ul className={styles.ulNavLink}>
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
  </ul>)
    return (
      <div className={styles.Main}>
        <Router basename="">
          <form action="">           
            <Switch>
              <Route
                exact
                path="/SkillsAndLocation"
                component={props => (
                  <ComponentSkillsAndLocation {...props} data={this.state.form} nav={nav} handleSubmit={this.handleSubmit} />
                )}
              />
              <Route
                exact
                path="/Portfolio"
                component={props => (
                  <ComponentPortfolio {...props} data={this.state.form} handleSubmit={this.handleSubmit} nav={nav}/>
                )}
              />
              <Route
                exact
                path="/Display"
                component={props => (
                  <ComponentReviewForm {...props} data={this.state.form} />
                )}
              />
              <Route
                exact
                path="/"
                component={props => (
                  <ComponentPersonalInformation {...props} data={this.state.form} nav={nav} handleSubmit={this.handleSubmit}  />
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
