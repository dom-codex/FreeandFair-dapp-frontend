import React, { useState, useContext } from 'react';
import styles from '../styles/tab.module.css';
import NewVoter from '../modals/newvoter.js';
import { ElectionContext } from '../pages/election.js';
import { addVoter, ismanagingvoter, deleteVoter } from '../store/election.js';
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
  const handler = (data) => {
    dispatch({ type: deleteVoter, data: data });
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
        {state.registeredvoters.map((voter, i) => (
          <VoterItem {...voter} key={i} handler={handler} />
        ))}
      </div>
    </div>
  );
};
const VoterItem = ({
  name,
  address,
  uniqueId,
  icon,
  voted,
  voteToken,
  key,
  handler,
}) => {
  const deleteHandler = () => {
    const data = {
      address: address.toString(),
      id: uniqueId.toString(),
    };
    handler(data);
  };
  return (
    <div className={styles.candidatesitem} key={key}>
      <button onClick={deleteHandler} className={styles.deleteBtn}>
        <i className={'material-icons'}>delete</i>
      </button>
      <div>
        <img src={icon} />
      </div>
      <div>
        <div className={styles.candidatedetails}>
          <p className={styles.label}>Name:</p>
          <p>{name}</p>
        </div>
        <div className={styles.candidatedetails}>
          <p className={styles.label}>UniqueID:</p>
          <p>{uniqueId}</p>
        </div>
        <div className={styles.candidatedetails}>
          <p className={styles.label}>VoteTokens:</p>
          <p>{voteToken}</p>
        </div>
        <div className={styles.candidatedetails}>
          <p className={styles.label}>Address :</p>
          <p>{address}</p>
        </div>
        <div className={styles.candidatedetails}>
          <p className={styles.label}>Voted :</p>
          <p>{voted}</p>
        </div>
      </div>
    </div>
  );
};
export default Voters;
