import React from 'react';
import { BrowserRouter as Router } from 'react-router';
import styles from './index.css';

import Header from './containers/Header';
import Main from './containers/Main';
import Footer from './containers/Footer';

const App = () => (
  <div className={styles.App}>
    <Router>
      <Header />
      <Main />
      <Footer />
    </Router>
  </div>
);
export default App;
