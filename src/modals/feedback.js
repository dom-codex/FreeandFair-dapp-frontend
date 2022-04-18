import React from 'react';
import styles from '../styles/vote.module.css';
const FeedBackModal = () => {
  return (
    <section className={styles.votedmodal}>
      <div className={styles.votedcontainer}>
        <div className={styles.modalcontents}>
          <div className={styles.confirmationimg}>
            <i class="material-icons">beenhere</i>
          </div>
          <div className={styles.modaldetails}>
            <p>Congratulations</p>
            <p>You vote has been casted successfully</p>
          </div>
          <div className={styles.livepbtn}>
            <button>Live poll</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FeedBackModal;
