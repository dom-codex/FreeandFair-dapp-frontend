import React, { useState, useContext } from 'react';
import styles from '../styles/tab.module.css';
import NewVoter from '../modals/newvoter.js';
import { ElectionContext } from '../pages/election.js';
import { addVoter, ismanagingvoter } from '../store/election.js';
import FullScreenLoader from '../components/fullloader.js';
const Voters = () => {
  const { state, dispatch } = useContext(ElectionContext);
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const registerVoter = (data) => {
    dispatch({ type: addVoter, data: data });
    dispatch({ type: ismanagingvoter, data: true });
    setTimeout(() => {
      dispatch({ type: ismanagingvoter, data: false });
    }, 5000);
  };
  return (
    <div className={styles.voterslists}>
      {showModal && (
        <NewVoter handler={setShowModal} addVoterHandler={registerVoter} />
      )}
      {state.managingVoterState && <FullScreenLoader />}
      <div className={styles.utilnav}>
        <div className={styles.candidatesearch}>
          <input type="text" placeholder="voter's address or Id" />
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
