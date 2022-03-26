import React from 'react';
import Nav from '../components/nav.js';
import Jumbo from '../components/jumbo.js';
import MoreDetails from '../components/moredetails.js';
import NewElectorate from '../components/newelectorate.js';
import styles from '../styles/home.module.css';
const Home = (props) => {
  return (
    <section>
      <Nav />
      <Jumbo />
      <MoreDetails />
      <NewElectorate />
      <div className={styles.signin}>
        <div>
          <button>Sign in as Electorate</button>
        </div>
      </div>
    </section>
  );
};
export default Home;
