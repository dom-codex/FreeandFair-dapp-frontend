import React from 'react';
import styles from '../styles/electiondetails.module.css';
import { evaluateStatus } from '../utils/evaluator.js';
const ElectionDetails = ({ state }) => {
  return (
    <section>
      <div className={styles.electiondetails}>
        <div>
          <img src="vote3.jpeg" />
        </div>
        <div className={styles.electioninfo}>
          <p className={styles.title}>{state.title}</p>
          <div>
            <p className={styles.addr}>{state.address}</p>
            <button>
              <i
                className="material-icons"
                style={{ color: 'var(--color-sub)' }}
              >
                content_copy
              </i>
            </button>
          </div>
        </div>
        <div className={styles.stats}>
          <div className={styles.statsitem}>
            <p>Polls</p>
            <p>{state.polls}</p>
          </div>
          <div className={styles.statsitem}>
            <p>Voters</p>
            <p>{state.voters}</p>
          </div>
          <div className={styles.statsitem}>
            <p>Status</p>
            <p>{evaluateStatus(state.status)}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ElectionDetails;
