import React, { useState, useContext } from 'react';
import styles from '../styles/tab.module.css';
import NewPollModal from '../modals/newpoll.js';
import { ElectionContext } from '../pages/election.js';
import { createPoll } from '../store/election.js';
const Polls = (props) => {
  const [showModal, setShowModal] = useState(false);
  const { state, dispatch } = useContext(ElectionContext);
  const newPollHandler = (title) => {
    //DISPATCH ACTION
    dispatch({ data: title, type: createPoll });
  };
  return (
    <div>
      {showModal && (
        <NewPollModal handler={setShowModal} newPollHandler={newPollHandler} />
      )}
      <div className={styles.newpoll}>
        <button onClick={() => setShowModal(true)}>New Poll</button>
      </div>
      <div className={styles.pollitems}>
        {state.createdpolls.map((data, i) => (
          <div key={i}>
            <PollItem title={data.title} candidates={data.candidates} />
          </div>
        ))}
      </div>
    </div>
  );
};
const PollItem = ({ title, candidates }) => {
  return (
    <div className={styles.pollitem}>
      <div className={styles.pollitemheading}>
        <p>{title}</p>
        <div className={styles.polledit}>
          <i class="material-icons">arrow_drop_down</i>
        </div>
      </div>
      <div className={styles.pollcandidate}>
        {candidates.map(({ name, mandate }, i) => (
          <div className={styles.candidateitem} key={i}>
            <img src="twi.jpg" />
            <p className={styles.candidatename}>{name}</p>
            <marquee scrollamount="2">{mandate}</marquee>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Polls;
