import React from 'react';
import styles from '../styles/vote.module.css';
const selectStyle = {
  backgroundColor: 'var(--color-primary)',
};
const PollItem = ({
  name,
  icon,
  mandate,
  key,
  selectHandler,
  pollIndex,
  candidateIndex,
  data,
}) => {
  const isCandidateSelected = () => {
    const selectedCandidate = data.castedVotes[pollIndex];
    console.log(data.castedVotes);
    console.log(selectedCandidate);
    return selectedCandidate == candidateIndex ? true : false;
  };
  console.log(isCandidateSelected(), candidateIndex);
  return (
    <div
      className={styles.pollcandidateitem}
      key={key}
      onClick={selectHandler}
      style={isCandidateSelected() ? selectStyle : {}}
    >
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
