import React, { Component } from "react";
import styles from "./index.css";

import ComponentFormHeader from "../ComponentFormHeader";
import Button from "../ComponentButton";
export default class ComponentPortfolio extends Component {
  state = {
    portfolioLink: "",
    additionalInformation: ""
  };
  componentDidMount() {}

  isValidated = portfolioLink => {
    const errors = {
      portfolioLink: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(
        portfolioLink
      )
    };
    return errors;
  };
  isDisabledButton = errors => {
    return Object.values(errors).includes(false);
  };
  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleButton = e => {
    e.preventDefault();
    const confirm = window.confirm("Are you ready to submit the whole form ?")
    confirm ? (this.props.history.push("/Display"),
    this.props.handleSubmit(this.state)):{}
  };
  render() {
    const errors = this.isValidated(this.state.portfolioLink);
    return (
      <div className={styles.ComponentPortfolio}>
        <div className={styles.navbar}>
          {this.props.nav}
          <Button
          btnName="Submit"
          href="/Display"
          isValidated={this.isDisabledButton(errors)}
          onClick={this.handleButton}
        />
        </div>
        <ComponentFormHeader heading="3. Portfolio" />
        <p>
          Prove you're IBM's next great designer by showing us who you are. What you've done. How
          you∏ think. Tell us your story.
        </p>
        <input
          type="text"
          placeholder="Portfolio link*"
          name="portfolioLink"
          onChange={this.handleChange}
          className={styles.Invalid}
        />
        <textarea
          name="additionalInformation"
          id="additionalInformation"
          cols={30}
          rows={10}
          onChange={this.handleChange}
          placeholder="Anything else (another link, availability, etc.)?"
        />
      </div>
    );
  }
}
