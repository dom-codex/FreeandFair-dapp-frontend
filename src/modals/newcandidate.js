import React from 'react';
import styles from '../styles/modal.module.css';
const NewCandidateModal = () => {
  return (
    <section className={styles.newcandidate}>
      <div className={styles.modal}>
        <div className={styles.newmodal}>
          <div className={styles.submodal}>
            <div>
              <img src="sc.jpeg" />
              <p>Tap above to add candidate image</p>
              <p>New Candidate Details</p>
            </div>
            <div>
              <label>Name</label>
              <input type="text" />
            </div>
            <div>
              <label>Address</label>
              <input type="text" />
            </div>
            <div>
              <label>Office</label>
              <select>
                <option></option>
                <option>President</option>
                <option>Vice President </option>
              </select>
            </div>
            <div>
              <label>Mandate</label>
              <input type="text" />
            </div>
            <div>
              <input type="file" accept="image/*" />
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
export default NewCandidateModal;
