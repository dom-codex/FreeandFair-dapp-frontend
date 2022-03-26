import React from 'react';
import styles from "../styles/electoratetoken.module.css"
const ElectorateToken = () => {
  return (
    <section>
      <div className={styles.tokenscont}>
        <hr />
        <p className={`${styles.electionlabel} ${styles.tokentitle}`}>Tokens</p>
        <div className={styles.tokencard}>
          <div className={styles.tokenheader}>
            <p> Current balance </p>
            <p>VOTE TOKEN</p>
          </div>
          <div className={styles.tokenbalance}>
            <img src="vote3.jpeg" />
            <p>200,000 FnF</p>
          </div>
        </div>
        <div className={styles.tokenrequest}>
          <div>
            <label>Get Token(s)</label>
          </div>
          <div>
            <input type="number" placeholder="Enter amount" />
          </div>
          <div>
            <button>Request</button>
          </div>
        </div>
        <div className={styles.transfercont}>
          <div className={styles.line}>
            <hr />
          </div>
          <div>
            <div>
              <p className={`${styles.electionlabel} ${styles.tflabel}`}>Transfer Token </p>
            </div>
            <div>
              <label>To</label>
              <input type="text" placeholder="Wallet address" />
            </div>
            <div>
              <label>Amount</label>
              <input type="number" placeholder="token amount" />
            </div>
            <div>
              <label>Electorate</label>
              <input type="text" placeholder="wallet address" />
            </div>
            <div>
              <label>Election contract Address</label>
              <input type="text" placeholder="wallet address" />
            </div>
            <div>
              <button>Transfer</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ElectorateToken;
