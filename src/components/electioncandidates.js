import React, { useState, useContext } from 'react';
import styles from '../styles/tab.module.css';
import NewCandidateModal from '../modals/newcandidate.js';
import { ElectionContext } from '../pages/election.js';
const ElectionCandidates = () => {
  const [showModal, setShowModal] = useState(false);
  const { state, dispatch } = useContext(ElectionContext);
  const openModal = () => {
    setShowModal(true);
  };
  const getCandidates = () => {
    return state.createdpolls.map((data) => {
      const candidates = data.candidates;
      for (const candidate of candidates) {
        return candidate;
      }
    });
  };
  return (
    <div className={styles.listsofcandidates}>
      {showModal && (
        <NewCandidateModal
          handler={setShowModal}
          state={state}
          dispatch={dispatch}
        />
      )}
      <div className={styles.utilnav}>
        <div className={styles.candidatesearch}>
          <input type="text" placeholder="candidate name" />
          <button>
            <i class="material-icons">search</i>
          </button>
        </div>
        <div className={styles.addbtncont}>
          <button onClick={openModal}>
            <i class="material-icons">add</i>
          </button>
        </div>
      </div>
      <div className={styles.candidatescont}>
        {getCandidates().map((data, i) => (
          <div>
            <CandidateItem />
          </div>
        ))}
      </div>
    </div>
  );
};
const CandidateItem = ({}) => {
  return (
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
  );
};
export default ElectionCandidates;
