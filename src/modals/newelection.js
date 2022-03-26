import React from 'react';
import styles from "../styles/modal.module.css"
const NewElectionModal = () => {
  return <section>
    <div className={styles.modal}>
      <button className={`${styles.closebtn} material-icons `}>close</button>
      <div class={styles.newmodal}>
        <div className={styles.submodal}>
          <div>
            <label>Election Name </label>
            <input type="text" />
          </div>
          <div>
            <button>Create</button>
          </div>
        </div>
      </div>
    </div>
  </section>;
};
export default NewElectionModal;
