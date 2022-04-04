import React, { useRef, useState } from 'react';
import styles from '../styles/modal.module.css';
const closeBtnStyle = {
  width: 22,
  height: 22,
  borderRadius: '50%',
  backgroundColor: 'var(--color-sub2)',
  position: 'absolute',
  top: -12,
  right: -8,
};
const NewCandidateModal = ({ handler, state }) => {
  const close = () => {
    handler(false);
  };
  const select = useRef(null);
  return (
    <section className={styles.newcandidate}>
      <div className={styles.modal}>
        <div className={styles.newmodal}>
          <div className={styles.submodal}>
            <button onClick={close} style={closeBtnStyle}>
              X
            </button>
            <div>
              <img src="sc.jpeg" />
              <p>Tap above to add candidate image</p>
              <p>New Candidate Details</p>
            </div>
            <div>
              <label>Name</label>
              <input type="text" />
            </div>
            <div>
              <label>Address</label>
              <input type="text" />
            </div>
            <div>
              <label>Office</label>
              <select ref={select}>
                <option></option>
                {state.createdpolls.map((poll, i) => (
                  <option key={i} value={poll.title}>
                    {poll.title}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label>Mandate</label>
              <input type="text" />
            </div>
            <div>
              <input type="file" accept="image/*" />
            </div>
            <div>
              <button>Register</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default NewCandidateModal;
