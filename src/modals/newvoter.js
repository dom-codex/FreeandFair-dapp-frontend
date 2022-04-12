import React, { useRef, useState } from 'react';
import styles from '../styles/modal.module.css';
const NewVoter = () => {
  const [pic, setPic] = useState(null);
  const fileInput = useRef(null);
  const selectPic = () => {
    fileInput.current.click();
  };
  const setPicHandler = (e) => {
    const file = e.target.files[0];
    setPic(file);
  };
  const displayPic = () => {
    const url = URL.createObjectURL(pic);
    return url;
  };
  return (
    <section className={styles.newvoter}>
      <div className={styles.modal}>
        <div className={styles.newmodal}>
          <div className={styles.submodal}>
            <div>
              <img src={pic ? displayPic() : ''} onClick={selectPic} />
              <p>Tap above to add voter image</p>
              <p>New Voter Details</p>
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
              <label>UniqueID</label>
              <input type="text" />
            </div>

            <div>
              <input
                type="file"
                accept="image/*"
                onChange={setPicHandler}
                style={{ display: 'none' }}
                ref={fileInput}
              />
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
export default NewVoter;
