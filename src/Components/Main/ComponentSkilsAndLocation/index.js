import React, { Component } from "react";
import styles from "./index.css";

import ComponentFormHeader from "../ComponentFormHeader";

export default class ComponentSkillsAndLocation extends Component {
  render() {
    return (
      <div className={styles.ComponentSkillsAndLocation}>
        <ComponentFormHeader heading="2. Skills and Location" />
        <p>Which is your primary design discipline?*</p>
        <div className={styles.SkillsDesign}>
          <input type="radio"  defaultChecked name="skillsDesign" id="design-research" value="Design research"/>
          <label htmlFor="design-research">Design research</label>
          <input type="radio" name="skillsDesign" id="visual-design" value="Visual design" />
          <label htmlFor="visual-design">Visual design</label>
          <input type="radio" name="skillsDesign" id="ux-design" value="UX desgin " />
          <label htmlFor="ux-design">UX design</label>
          <input type="radio" name="skillsDesign" id="frontend-dev" value="Front-end Dev"/>
          <label htmlFor="frontend-dev">Front-end Dev</label>
        </div>
        <div className={styles.SkillAndLocation}>
          <div className={styles.SkillAndLocationColumn}>
            <p>Do you have experience with any other disciplines</p>
            <div className={styles.CheckBox}>
              <input type="checkbox" name="experiencedSkills" id="exp-visual-design" />
              <label htmlFor="exp-visual-design">Visual design</label>
            </div>
            <div className={styles.CheckBox}>
              <input type="checkbox" name="experiencedSkills" id="exp-ux-design" />
              <label htmlFor="exp-ux-design">UX design</label>
            </div>
            <div className={styles.CheckBox}>
              <input type="checkbox" name="experiencedSkills" id="exp-frontend-dev" />
              <label htmlFor="exp-frontend-dev">Front-end dev</label>
            </div>
          </div>
          <div className={styles.SkillAndLocationColumn}>
            <p>Where are you interested in working?</p>
            <p>
              <span>
                You must be legally authorized to work without visa sponsorship in the location(s)
                you choose
              </span>
            </p>
            <div className={styles.CheckBox}>
              <input type="checkbox" name="wokingLocation" id="austin-texas" />
              <label htmlFor="austin-texas">Austin, Texas</label>
            </div>
            <div className={styles.CheckBox}>
              <input type="checkbox" name="wokingLocation" id="newyork-newyork" />
              <label htmlFor="newyork-newyork">New York, New York</label>
            </div>
            <div className={styles.CheckBox}>
              <input type="checkbox" name="wokingLocation" id="toronto-canada" />
              <label htmlFor="toronto-canada">Toronto, Canada</label>
            </div>
            <div className={styles.CheckBox}>
              <input type="checkbox" name="wokingLocation" id="shanghai-china" />
              <label htmlFor="shanghai-china">Shanghai, China</label>
            </div>
            <div className={styles.CheckBox}>
              <input type="checkbox" name="wokingLocation" id="dublin-ireland" />
              <label htmlFor="dublin-ireland">Dublin, Ireland</label>
            </div>
            <div className={styles.CheckBox}>
              <input type="checkbox" name="wokingLocation" id="hursley-uk" />
              <label htmlFor="hursley-uk">Hursley, United Kingdom</label>
            </div>
            <div className={styles.CheckBox}>
              <input type="checkbox" name="wokingLocation" id="boeblingen-germany" />
              <label htmlFor="boeblingen-germany">Boeblingen, Germany</label>
            </div>
            <div className={styles.CheckBox}>
              <input type="checkbox" name="wokingLocation" id="somethingelse" />
              <label htmlFor="somethingelse">Something else</label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
