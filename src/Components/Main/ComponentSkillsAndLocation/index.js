import React, { Component } from "react";
import styles from "./index.css";

import ComponentFormHeader from "../ComponentFormHeader";
import Button from "../ComponentButton";
export default class ComponentSkillsAndLocation extends Component {
  state = {
    skillsDesign: "Design Research",
    experiencedSkills: [],
    workingLocation: []
  };
  handleButton = e => {
    e.preventDefault();
    this.props.history.push("/Portfolio");
    this.props.handleSubmit(this.state);
  };
  handleChange = e => {
    const elName = e.target.name;
    const elValue = e.target.value;
    const elArray = [...this.state[elName]];
    elName === "skillsDesign"
      ? this.setState({ [elName]: e.target.value })
      : e.target.checked
        ? this.setState({ [elName]: [...elArray, elValue] })
        : this.setState({ [elName]: elArray.filter(el => el !== elValue) });
  };
  render() {
    const skillsDesign = [
      { defaultChecked: true, id: "design-research", value: "Design Research" },
      { defaultChecked: false, id: "visual-design", value: "Visual Design" },
      { defaultChecked: false, id: "ux-design", value: "UX Design" },
      { defaultChecked: false, id: "frontend-dev", value: "Front-end Dev" }
    ];
    const renderSkillList = skillsDesign.map(skill => (
      <React.Fragment key={skill.id}>
        <input
          type="radio"
          defaultChecked={skill.defaultChecked}
          name="skillsDesign"
          id={skill.id}
          value={skill.value}
          onChange={this.handleChange}
        />
        <label htmlFor={skill.id}>{skill.value}</label>
      </React.Fragment>
    ));
    const experiencedSkills = [
      { id: "exp-visual-design", value: "Visual design" },
      { id: "exp-ux-design", value: "UX design" },
      { id: "exp-frontend-dev", value: "Front-end dev" }
    ];
    const workingLocation = [
      { id: "austin-texas", value: "Austin, Texas" },
      { id: "newyork-newyork", value: "New York, New York" },
      { id: "toronto-cananda", value: "Toronto, Canada" },
      { id: "shanghai-china", value: "ShangHai, China" },
      { id: "dublin-ireland", value: "Dublin, Ireland" },
      { id: "hursley-UK", value: "Hursley, United Kingdom" },
      { id: "boeblingen-germany", value: "Boeblingen, Germany" },
      { id: "somewhereelse", value: "Somewhere else" }
    ];
    const renderCheckBox = (type, typeString) =>
      type.map(checkBox => (
        <div className={styles.CheckBox} key={checkBox.id}>
          <input
            type="checkbox"
            name={typeString}
            id={checkBox.id}
            value={checkBox.value}
            onChange={this.handleChange}
          />
          <label htmlFor={checkBox.id}>{checkBox.value}</label>
        </div>
      ));
    return (
      <div className={styles.ComponentSkillsAndLocation}>
        <div className={styles.navbar}>
          {this.props.nav}
          <Button btnName="Next" href="/Portfolio" onClick={this.handleButton} />
        </div>
        <ComponentFormHeader heading="2. Skills and Location" />
        <p>Which is your primary design discipline?*</p>
        <div className={styles.SkillsDesign}>{renderSkillList}</div>
        <div className={styles.SkillAndLocation}>
          <div className={styles.SkillAndLocationColumn}>
            <p>Do you have experience with any other disciplines</p>
            {renderCheckBox(experiencedSkills, "experiencedSkills")}
          </div>
          <div className={styles.SkillAndLocationColumn}>
            <p>Where are you interested in working?</p>
            <p>
              <span>
                You must be legally authorized to work without visa sponsorship in the location(s)
                you choose
              </span>
            </p>
            {renderCheckBox(workingLocation, "workingLocation")}
          </div>
        </div>
      </div>
    );
  }
}
