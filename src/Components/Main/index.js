import React, { Component } from "react";
import styles from "./index.css";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect,
  Prompt,
  Switch
} from "react-router-dom";

import ComponentPersonalInformation from "./ComponentPersonalInformation";
import ComponentSkilsAndLocation from "./ComponentSkilsAndLocation";
import ComponentPorfolio from "./ComponentPorfolio";

export class Main extends Component {
  state={
			fullName:"",
			email:"",
			reEmail:"",
			phone:"",
			address:"",
			city:"",
			state:"",
			country:"",
			postalCode:"",
			hearAboutUs:"",
			skillsDesign:[],
			experiencedSkills:[],
			wokingLocation:[],
			porfolioLink:"",
			additionalInformation:"",
		}
  render() {
    return (
      <div className={styles.Main}>
        <Router>
          <form action="">
            <div className={styles.InfoPanel}>
              <ul className={styles.ulNavLink}>
                <li className={styles.liNavLink}>
                  <NavLink activeClassName={styles.activeNavLink} exact to="/">
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
            </div>
            <Switch>
              <Route exact path="/" component={()=>(<ComponentPersonalInformation testconsole="hello"/>)} />
              <Route exact path="/SkillsAndLocation" component={ComponentSkilsAndLocation} />
              <Route exact path="/Portfolio" component={ComponentPorfolio} />
            </Switch>
          </form>
        </Router>
      </div>
    );
  }
}

export default Main;
