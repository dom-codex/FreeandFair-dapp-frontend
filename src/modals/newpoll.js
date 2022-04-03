import React from 'react';
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
const NewPollModal = ({ handler }) => {
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
              <input type="text" />
            </div>

            <div>
              <button>AD</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default NewPollModal;
