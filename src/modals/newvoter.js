import React, { useRef, useState } from 'react';
import styles from '../styles/modal.module.css';
const style = {
  width: 22,
  height: 22,
  borderRadius: '50%',
  backgroundColor: 'var(--color-sub2)',
  position: 'absolute',
  top: -8,
  right: -4,
};
const NewVoter = ({ handler, addVoterHandler }) => {
  const [pic, setPic] = useState(null);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [uniqueId, setUniqueId] = useState('');
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
  const close = () => {
    handler(false);
  };
  const registerVoter = () => {
    const data = {
      name,
      address,
      uniqueId,
      icon: displayPic(),
      voted: false.toString(),
      voteToken: 0,
    };
    addVoterHandler(data);
    close();
  };
  return (
    <section className={styles.newvoter}>
      <div className={styles.modal}>
        <div className={styles.newmodal}>
          <div className={styles.submodal}>
            <button onClick={close} style={style}>
              X
            </button>
            <div>
              <img src={pic ? displayPic() : ''} onClick={selectPic} />
              <p>Tap above to add voter image</p>
              <p>New Voter Details</p>
            </div>
            <div>
              <label>Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
              />
            </div>
            <div>
              <label>Address</label>
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
              />
            </div>
            <div>
              <label>UniqueID</label>
              <input
                value={uniqueId}
                onChange={(e) => setUniqueId(e.target.value)}
                type="text"
              />
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
              <button onClick={registerVoter}>Register</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default NewVoter;
