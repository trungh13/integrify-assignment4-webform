import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import styles from './index.css';

import Header from './containers/Header';
import Main from './containers/Main';
import Footer from './containers/Footer';

const App = () => (
  // <Router>
    <div className={styles.App}>
      <Header />
      <Main />
      {/* <Footer /> */}
    </div>
  // </Router>
);
export default App;
