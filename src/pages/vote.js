import React, { useReducer, useState } from 'react';
import Nav from '../components/nav.js';
import styles from '../styles/vote.module.css';
import FeedBackModal from '../modals/feedback.js';
import { voteReducer, voteInitialValues } from '../store/vote.js';
import PollItem from '../components/pollitem.js';
import ConfirmationModal from '../modals/confirmation.js';
const Vote = () => {
  const [state, dispatch] = useReducer(voteReducer, voteInitialValues);
  const [showConfirmationModal, setConfirmationModal] = useState(t);
  const noHandler = () => {
    setConfirmationModal(false);
  };
  const yesHandler = () => {
    setConfirmationModal(true);
  };
  return (
    <section>
      {showConfirmationModal && <ConfirmationModal noHandler={noHandler} />}
      {false && <FeedBackModal />}
      <Nav />
      <div>
        <section>
          <div>
            <h2 className={styles.electiontitle}>{state.electionTitle}</h2>
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
            {state.polls.map((poll, i) => (
              <div className={styles.pollitem} key={i}>
                <div className={styles.pollheader}>
                  <p>{poll.title}</p>
                </div>
                <div className={styles.pollcandidates}>
                  {poll.candidates.map((candidate, i) => (
                    <PollItem {...candidate} key={i} />
                  ))}
                </div>
              </div>
            ))}
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
