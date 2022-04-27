import React from 'react';
import styles from '../styles/livepoll.module.css';
import FullScreenLoader from '../components/fu';
const ElectionResult = ({ data, dispatch }) => {
  return (
    <section className={styles.electionresult}>
      {false && <FullScreenLoader />}
      <div className={styles.resultcontainer}>
        <div className={styles.results}>
          <h2 className={styles.winnerlabel}>Winners</h2>
          <div className={styles.resultitem}>
            <div className={styles.pollheader}>
              <p>President</p>
            </div>
          </div>

          <div className={styles.winner}>
            <img src="twi.jpg" />
            <div className={styles.polldetails}>
              <p>Dominic west</p>
              <p>Total Votes</p>
              <p>23,000</p>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.closebtn}>
        <i class="material-icons">cancel</i>
      </button>
    </section>
  );
};
export default ElectionResult;
