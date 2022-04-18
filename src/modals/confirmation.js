import React from 'react';
import styles from '../styles/confirmation.module.css';
const ConfirmationModal = ({ handler }) => {
  return (
    <section className={styles.mainSection}>
      <div className={styles.container}>
        <div className={styles.dialog}>
          <div className={styles.dialogHeader}>
            <span>Confirmation?</span>
          </div>
          <div className={styles.dialogBody}>
            <p>Do you want to cast your vote(s) now? </p>
          </div>
          <div className={styles.ctrlBtn}>
            <button>NO</button>
            <button>YES</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ConfirmationModal;
