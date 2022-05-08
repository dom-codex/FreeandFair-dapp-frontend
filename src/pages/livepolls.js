import React, { useReducer } from 'react';
import Nav from '../components/nav.js';
import styles from '../styles/livepoll.module.css';
import ElectionResult from '../components/electionresult.js';
import { livePollReducer, initialData } from '../store/livepolls.js';
import FullScreenLoader from '../components/fullloader.js';
const LivePolls = () => {
  const [state, dispatch] = useReducer(livePollReducer, initialData);
  return (
    //ADD DYNAMIC DATA LOA
    <section>
      {state.showResult && <ElectionResult />}
      {state.loading && <FullScreenLoader />}
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
            {state.polls.map((poll, i) => (
              <PollItem poll={poll} pos={i} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};
export default LivePolls;
const PollItem = ({ poll, pos }) => {
  return (
    <div className={styles.pollitem}>
      <div className={styles.pollheader}>
        <p>{poll.title}</p>
      </div>
      <div className={styles.pollcandidates}>
        {poll.candidates.map((candidate, i) => (
          <div className={styles.pollcandidateitem}>
            <img src={''} />
            <div className={`${styles.details} ${styles.livepd}`}>
              <p className={styles.candidatename}>{candidate.name}</p>
              <p className={styles.candidatevotes}>{candidate.votes}</p>
              <p>votes</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
