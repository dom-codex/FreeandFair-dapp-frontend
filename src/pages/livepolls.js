import React from 'react';
import Nav from '../components/nav.js';
import styles from '../styles/livepoll.module.css';
const LivePolls = () => {
  return (
    <section>
      <Nav />
      <div>
        <section>
          <div>
            <h2 className={styles.electiontitle}>
              Fupre 2022 General Election
            </h2>

            <div className={styles.label}>
              <div className={styles.left}></div>
              <p>Polls</p>
              <div className={styles.right}></div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
export default LivePolls;
