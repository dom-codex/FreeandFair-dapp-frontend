import React from 'react';
import styles from '../styles/vote.module.css';
const PollItem = ({ name, icon, mandate, key }) => {
  return (
    <div className={styles.pollcandidateitem} key={key}>
      <img src={icon} />
      <div className={styles.details}>
        <p className={styles.candidatename}>{name}</p>
        <p className={styles.candidatemandate}>{mandate}</p>
      </div>
      <div>
        <small>tap to vote</small>
      </div>
    </div>
  );
};
export default PollItem;