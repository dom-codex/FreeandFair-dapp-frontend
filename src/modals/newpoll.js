import React, { useState } from 'react';
import styles from '../styles/modal.module.css';
const style = {
  width: 22,
  height: 22,
  borderRadius: '50%',
  backgroundColor: 'var(--color-sub2)',
  position: 'absolute',
  top: -8,
  right: -4,
};
const NewPollModal = ({ handler, newPollHandler }) => {
  const [poll, setpoll] = useState('');
  const close = () => {
    handler(false);
  };
  return (
    <section className={styles.newpoll}>
      <div className={styles.modal}>
        <div className={styles.newmodal}>
          <div className={styles.submodal}>
            <button onClick={close} style={style}>
              X
            </button>
            <div>
              <label>Poll Title</label>
              <input
                type="text"
                value={poll}
                onChange={(e) => setpoll(e.target.value)}
              />
            </div>

            <div>
              <button
                onClick={() => {
                  newPollHandler(poll);
                  close();
                }}
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default NewPollModal;
