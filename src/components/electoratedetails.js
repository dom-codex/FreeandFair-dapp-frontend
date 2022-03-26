import React from 'react';
import styles from "../styles/electoratedetails.module.css"
const ElectorateDetails = () => {
  return (
    <section>
      <div>
        <div className={styles.electimg}>
          <img src="vote3.jpeg" />
          <p className={styles.title}>FUPRE ISEC</p>
          <div className={styles.stats}>
            <div>
              <p>Created Elections</p>
              <p>10</p>
            </div>
            <div>
              <p>Conducted Elections</p>
              <p>06</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ElectorateDetails;
