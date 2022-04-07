import React, { useState, useContext } from 'react';
import styles from '../styles/tab.module.css';
import NewCandidateModal from '../modals/newcandidate.js';
import { ElectionContext } from '../pages/election.js';
import FullScreenLoader from './fullloader.js';
const ElectionCandidates = () => {
  const [showModal, setShowModal] = useState(false);
  const { state, dispatch } = useContext(ElectionContext);
  const openModal = () => {
    setShowModal(true);
  };
  const getCandidates = () => {
    const list = [];
    state.createdpolls.map((data) => {
      const candidates = data.candidates;
      for (const candidate of candidates) {
        list.push({
          ...candidate,
          office: data.title,
        });
      }
    });
    return list;
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
      {state.registeringCandidate && <FullScreenLoader/>}
      <div className={styles.utilnav}>
        <div className={styles.candidatesearch}>
          <input type="text" placeholder="candidate name" />
          <button>
            <i className="material-icons">search</i>
          </button>
        </div>
        <div className={styles.addbtncont}>
          <button onClick={openModal}>
            <i className="material-icons">add</i>
          </button>
        </div>
      </div>
      <div className={styles.candidatescont}>
        {getCandidates().map((data, i) => (
          
            <CandidateItem data={data} key={}/>
        
        ))}
      </div>
    </div>
  );
};
const CandidateItem = ({ data: { name, mandate, office, icon }, sn, size }) => {
  return (
    <div
      className={styles.candidatesitem}
    >
      <div>
        <img src={icon} alt={'candidate image'} />
      </div>
      <div>
        <div className={styles.candidatedetails}>
          <p className={styles.label}>Name:</p>
          <p>{name}</p>
        </div>
        <div className={styles.candidatedetails}>
          <p className={styles.label}>Office:</p>
          <p>{office}</p>
        </div>
        <div className={styles.candidatedetails}>
          <p className={styles.label}>Mandate:</p>
          <p>{mandate}</p>
        </div>
      </div>
    </div>
  );
};
export default ElectionCandidates;
