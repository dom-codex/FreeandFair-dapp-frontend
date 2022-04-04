import React, { useState } from 'react';
import styles from '../styles/tab.module.css';
import NewCandidateModal from '../modals/newcandidate.js';
const ElectionCandidates = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={styles.listsofcandidates}>
      {showModal && <NewCandidateModal />}
      <div className={styles.utilnav}>
        <div className={styles.candidatesearch}>
          <input type="text" placeholder="candidate name" />
          <button>
            <i class="material-icons">search</i>
          </button>
        </div>
        <div className={styles.addbtncont}>
          <button>
            <i class="material-icons">add</i>
          </button>
        </div>
      </div>
      <div className={styles.candidatescont}>
        <div className={styles.candidatesitem}>
          <div>
            <img src="vote.jpeg" />
          </div>
          <div>
            <div className={styles.candidatedetails}>
              <p className={styles.label}>Name:</p>
              <p>Dominic Ibolo .W</p>
            </div>
            <div className={styles.candidatedetails}>
              <p className={styles.label}>Office:</p>
              <p>President</p>
            </div>
            <div className={styles.candidatedetails}>
              <p className={styles.label}>Mandate:</p>
              <p>Vision 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ElectionCandidates;
