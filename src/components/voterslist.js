import React from 'react';
import styles from '../styles/tab.module.css';
const Voters = () => {
  return (
    <div className={styles.voterslists}>
      <div className={styles.utilnav}>
        <div className={styles.candidatesearch}>
          <input type="text" placeholder="voter's address or Id" />
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
              <p className={styles.label}>UniqueID:</p>
              <p>3467/2017</p>
            </div>
            <div className={styles.candidatedetails}>
              <p className={styles.label}>VoteTokens:</p>
              <p>5</p>
            </div>
            <div className={styles.candidatedetails}>
              <p className={styles.label}>Address :</p>
              <p>0x2gb45</p>
            </div>
            <div className={styles.candidatedetails}>
              <p className={styles.label}>Voted :</p>
              <p>False</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Voters;
