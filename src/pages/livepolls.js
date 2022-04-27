import React from 'react';
import Nav from '../components/nav.js';
import styles from '../styles/livepoll.module.css';
import ElectionResult from '../components/electionresult.js';
const LivePolls = () => {
  return (
    <section>
      <ElectionResult />
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
        <section>
          <div>
            <div className={styles.pollitem}>
              <div className={styles.pollheader}>
                <p>President</p>
              </div>
              <div className={styles.pollcandidates}>
                <div className={styles.pollcandidateitem}>
                  <img src="vote3.jpeg" />
                  <div className={`${styles.details} ${styles.livepd}`}>
                    <p className={styles.candidatename}>Dominic ibolo .w</p>
                    <p className={styles.candidatevotes}>23,000</p>
                    <p>votes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
export default LivePolls;
