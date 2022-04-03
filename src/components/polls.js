import React, { useState } from 'react';
import styles from '../styles/tab.module.css';
import NewPollModal from '../modals/newpoll.js';
const Polls = (props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      {showModal && <NewPollModal handler={setShowModal} />}
      <div className={styles.newpoll}>
        <button onClick={() => setShowModal(true)}>New Poll</button>
      </div>
      <div className={styles.pollitems}>
        <div className={styles.pollitem}>
          <div className={styles.pollitemheading}>
            <p>Presidential</p>
            <div>
              <i class="material-icons">arrow_drop_down</i>
            </div>
          </div>
          <div className={styles.pollcandidate}>
            <div className={styles.candidateitem}>
              <img src="twi.jpg" />
              <p className={styles.candidatename}>Dominic Ibolo .W</p>
              <marquee scrollamount="2">Change 2022</marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Polls;
