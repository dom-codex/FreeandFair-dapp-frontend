import React, { useRef, useState } from 'react';
import styles from '../styles/modal.module.css';
import { registerNewCandidateHandler } from '../utils/handlers.js';
import { registeringCandidate } from '../store/election.js';
const closeBtnStyle = {
  width: 22,
  height: 22,
  borderRadius: '50%',
  backgroundColor: 'var(--color-sub2)',
  position: 'absolute',
  top: -12,
  right: -8,
};
const NewCandidateModal = ({ handler, state, dispatch }) => {
  const [pic, setPic] = useState(null);
  const [pollIndex, setPollindex] = useState(0);
  const [name, setName] = useState('');
  const [addr, setAddr] = useState('');
  const [mandate, setMandate] = useState('');
  const close = () => {
    handler(false);
  };
  const setImage = (e) => {
    setPic(e.target.files[0]);
  };
  const displayPic = () => {
    return URL.createObjectURL(pic);
  };
  const getSelectedPoll = (e) => {
    const index = e.target.options[e.target.selectedIndex].value;
    setPollindex(index);
  };
  const assignName = (e) => {
    setName(e.target.value);
  };
  const assignAddress = (e) => {
    setAddr(e.target.value);
  };
  const assignMandate = (e) => {
    setMandate(e.target.value);
  };
  const registerCandidate = () => {
    const data = {
      pollIndex: pollIndex,
      candidate: {
        name: name,
        mandate: mandate,
        icon: displayPic(),
      },
    };
    registerNewCandidateHandler(dispatch, data);
    dispatch({ type: registeringCandidate, data: true });
    close();
  };
  const fileInput = useRef(null);
  return (
    <section className={styles.newcandidate}>
      <div className={styles.modal}>
        <div className={styles.newmodal}>
          <div className={styles.submodal}>
            <button onClick={close} style={closeBtnStyle}>
              X
            </button>
            <div>
              <img
                src={pic ? displayPic() : 'some default pic'}
                onClick={() => fileInput.current.click()}
              />
              <p style={{ marginTop: 8, marginBottom: 12 }}>
                Tap above to add candidate image
              </p>
              <p>New Candidate Details</p>
            </div>
            <div>
              <label>Name</label>
              <input type="text" value={name} onChange={assignName} />
            </div>
            <div>
              <label>Address</label>
              <input type="text" value={addr} onChange={assignAddress} />
            </div>
            <div>
              <label>Office</label>
              <select onChange={getSelectedPoll}>
                <option></option>
                {state.createdpolls.map((poll, i) => (
                  <option key={i} value={i}>
                    {poll.title}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label>Mandate</label>
              <input type="text" valuue={mandate} onChange={assignMandate} />
            </div>
            <div>
              <input
                style={{ display: 'none' }}
                type="file"
                accept="image/*"
                ref={fileInput}
                onChange={setImage}
              />
            </div>
            <div>
              <button onClick={registerCandidate}>Register</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default NewCandidateModal;
