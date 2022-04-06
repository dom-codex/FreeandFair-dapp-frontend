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
  const [pic, setPic] = useState(null);
  const [pollIndex,setPollindex] = useState(0)
  const close = () => {
    handler(false);
  };
  const setImage = (e) => {
    setPic(e.target.files[0]);
  };
  const displayPic = () => {
    return URL.createObjectURL(pic);
  };
  const select = useRef(null);
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
              <input
                style={{ display: 'none' }}
                type="file"
                accept="image/*"
                ref={fileInput}
                onChange={setImage}
              />
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
