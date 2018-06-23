import React from "react";
import styles from "./index.css";
const ComponentButton = props => {
  return <button onClick={props.onClick} disabled={props.isValidated} className={styles.ComponentButton}>{props.btnName}</button>;
};

export default ComponentButton;
