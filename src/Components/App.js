import React, { Component } from "react";
import styles from "./App.css";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect,
  Prompt,
  Switch
} from "react-router-dom";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Header />
      </div>
    );
  }
}

export default App;
