import React from "react";
import styles from "./index.css";

const ComponentFormHeader = props => {
  return (
    <React.Fragment>
      <h3 className={styles.FormHeader}>{props.heading}</h3>
    </React.Fragment>
  );
};

export default ComponentFormHeader;
