import React from 'react';
import Nav from '../components/nav.js';
import styles from '../styles/vote.module.css';
import FeedBackModal from '../modals/feedback.js';

const Vote = () => {
  return (
    <section>
      {false && <FeedBackModal />}
      <Nav />
      <div>
        <section>
          <div>
            <h2 className={styles.electiontitle}>
              Fupre 2022 General Election
            </h2>
            <a href="">Live polls</a>
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
                  <div className={styles.details}>
                    <p className={styles.candidatename}>Dominic ibolo .w</p>
                    <p className={styles.candidatemandate}>vision 2022</p>
                  </div>
                  <div>
                    <small>tap to vote</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.votebtn}>
            <hr />
            <button>Vote now</button>
          </div>
        </section>
      </div>
    </section>
  );
};
export default Vote;
