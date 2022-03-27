import React from 'react';
import styles from '../styles/tab.module.css';
const GeneralTab = () => {
  return (
    <div className={styles.general}>
      <div>
        <label>Title </label>
        <input type="text" />
      </div>
      <hr />
      <div>
        <p className={styles.heading}>Election timing</p>
        <div>
          <label>Start time</label>
          <input type="datetime-local" />
        </div>
        <div>
          <label>End time</label>
          <input type="datetime-local" />
        </div>
        <div>
          <label>Election duration</label>
          <input type="text" disabled />
        </div>
        <div className={styles.countdown}>
          <p className={styles.heading}>Countdown to election start</p>
          <div className={styles.countdowntimer}>
            <div>
              <p>00</p>
              <p>Day(s)</p>
            </div>
            <div>
              <p>00</p>
              <p>Hour(s)</p>
            </div>
            <div>
              <p>00</p>
              <p>Minute(s)</p>
            </div>
            <div>
              <p>00</p>
              <p>Second(s)</p>
            </div>
          </div>
        </div>
        <div className={styles.countdown}>
          <p className={styles.heading}>Countdown to election end</p>
          <div className={styles.countdowntimer}>
            <div>
              <p>00</p>
              <p>Day(s)</p>
            </div>
            <div>
              <p>00</p>
              <p>Hour(s)</p>
            </div>
            <div>
              <p>00</p>
              <p>Minute(s)</p>
            </div>
            <div>
              <p>00</p>
              <p>Second(s)</p>
            </div>
          </div>
        </div>
        <div>
          <hr />
          <p className={styles.heading}>Election Management</p>

          <div className={styles.controlbtns}>
            <button>Start Election</button>
            <button>End Election</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GeneralTab;
