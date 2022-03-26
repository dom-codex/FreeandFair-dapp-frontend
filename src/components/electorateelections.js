import React from 'react';
import styles from "../styles/electorateelection.module.css"
const ElectorateElections = () => {
  return (
    <section>
      <div className={styles.elections}>
        <p className={styles.electionlabel}>Elections</p>
        <div className={styles.electiongrid}>
          <div className ={styles.addcont}>
            <div>
              <i class="material-icons">add</i>
            </div>
            <p>ADD</p>
          </div>
          <div className={styles.electionitem}>
            <div>
              <img src="vote2.jpeg" />
            </div>
            <p>Fupre General Election </p>
            <div className={styles.electionsub}>
              <p className={styles.createdlabel}>Created</p>
              <p className={styles  .date}>2022/03/03</p>
            </div>
          </div>
          
          
        </div>
      </div>
    </section>
  );
};
export default ElectorateElections;
