import React, { useState, useContext, useEffect, useRef } from 'react';
import styles from '../styles/tab.module.css';
import NewCandidateModal from '../modals/newcandidate.js';
import { ElectionContext } from '../pages/election.js';
import FullScreenLoader from './fullloader.js';
import { setCandidateList, removeCandidate } from '../store/election.js';
const ElectionCandidates = () => {
  const searchInput = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const { state, dispatch } = useContext(ElectionContext);
  const openModal = () => {
    setShowModal(true);
  };
  const getCandidates = () => {
    const list = [];
    state.createdpolls.map((data, i) => {
      const candidates = data.candidates;
      for (const candidate of candidates) {
        list.push({
          ...candidate,
          office: data.title,
          pollIndex: i,
        });
      }
    });
    return list;
  };
  const searchHandler = (e) => {
    const originalList = getCandidates();
    const query = searchInput.current.value;
    if (!query.length) {
      dispatch({ type: setCandidateList, data: originalList });
      return;
    }
    const pattern = new RegExp(query);
    const filteredList = originalList.filter((candidate) =>
      pattern.test(candidate.name)
    );

    filteredList.length
      ? dispatch({ type: setCandidateList, data: filteredList })
      : dispatch({ type: setCandidateList, data: originalList });
  };
  const inputHandler = (e) => {
    if (!e.target.value.length) {
      dispatch({ type: setCandidateList, data: getCandidates() });
    }
  };
  const deletehandler = (pollIndex, address) => {
    dispatch({ type: removeCandidate, data: { pollIndex, address } });
  };
  useEffect(() => {
    const candidatelist = getCandidates();
    dispatch({ type: setCandidateList, data: candidatelist });
  }, []);
  return (
    <div className={styles.listsofcandidates}>
      {showModal && (
        <NewCandidateModal
          handler={setShowModal}
          state={state}
          dispatch={dispatch}
        />
      )}
      {state.registeringCandidate && <FullScreenLoader />}
      <div className={styles.utilnav}>
        <div className={styles.candidatesearch}>
          <input
            type="text"
            onChange={inputHandler}
            ref={searchInput}
            placeholder="candidate name"
          />
          <button onClick={searchHandler}>
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
        {state.candidates.map((data, i) => (
          <CandidateItem deleteHandler={deletehandler} data={data} key={i} />
        ))}
      </div>
    </div>
  );
};
const CandidateItem = ({
  data: { name, mandate, office, icon, pollIndex, addr },
  key,
  deleteHandler,
}) => {
  const remover = () => {
    deleteHandler(pollIndex, addr);
  };
  return (
    <div key={key} className={styles.candidatesitem}>
      <button onClick={remover} className={styles.deleteBtn}>
        <i className="material-icons">delete</i>
      </button>
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
