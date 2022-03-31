import React from 'react';
import styles from ""
export default NewPollModal = () => {
  return (
    <section className={styles.newpoll}>
      <div className={styles.modal}>
        <div className={styles.newmodal}>
          <div className={styles.submodal}>
            <div>
              <label>Poll Title</label>
              <input type="text" />
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
