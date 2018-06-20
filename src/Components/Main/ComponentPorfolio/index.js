import React, { Component } from 'react'
import styles from "./index.css"

import ComponentFormHeader from "../ComponentFormHeader";

export default class ComponentPorfolio extends Component {
  render() {
    return (
      <div className={styles.ComponentPorfolio}>
        <ComponentFormHeader heading="3. Porfolio"/>
        <p>Prove you're IBM's next great designer by showing us who you are. What you've done. How you∏ think. Tell us your story.</p>
        <input type="text" required placeholder="Porfolio link*" />
        <textarea name id cols={30} rows={10} placeholder="Anything else (another link, availability, etc.)?" defaultValue={""} />
      </div>
    )
  }
}
