import React, { Component } from "react";
import styles from "./index.css";

import ComponentFormHeader from "../ComponentFormHeader";

export default class ComponentPersonalInformation extends Component {
  render() {
    return (
      <div className={styles.ComponentPersonalInformation}>
        <ComponentFormHeader heading="1. Personal Information" />
        <div className={styles.InformationNameEmailPhone}>
          <div className={styles.InformationNameEmail}>
            <input type="text" required placeholder="Full name*" />
            <input type="email" required placeholder="Email*" />
            <input type="email" required placeholder="Re-enter email*" />
          </div>
          <div className={styles.InformationPhone}>
            <input type="tel" required placeholder="Phone#*" />
          </div>
        </div>
        <input type="text" placeholder="Address*" />
        <div className={styles.InformationAdress}>
          <div className={styles.InformationAdressItem}>
            <input type="text" required placeholder="City*" />
          </div>
          <div className={styles.InformationAdressItem}>
            <input type="text" placeholder="State" />
          </div>
          <div className={styles.InformationAdressItem}>
            <input type="text" required placeholder="Country/Region*" />
          </div>
          <div className={styles.InformationAdressItem}>
            <input type="number" placeholder="Zip/Postal code" />
          </div>
        </div>
        <input type="text" placeholder="How did you hear about us ?" />
      </div>
    );
  }
}
