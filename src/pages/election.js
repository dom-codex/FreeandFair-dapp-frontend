import React,{useState} from 'react';
import Nav from '../components/nav.js';
import ElectionDetails from '../components/electiondetails.js';
import styles from '../styles/electiondetails.module.css';
import GeneralTab from '../components/generaltab.js';
const Election = () => {
  const [pos,setIndicatorPos]= useState(1)
  return (
    <section>
      <Nav />
      <ElectionDetails />
      <section>
        <div>
          <div className={styles.tabhead}>
            <div className={styles.indicator}></div>
            <button className={styles.active}>General</button>
            <button>Polls</button>
            <button>Candidates</button>
            <button>Voters</button>
          </div>
        </div>
      </section>
      {/*tab body -->*/}
      <section>
        <div classNames="tab-body">
          <GeneralTab />
        </div>
      </section>
    </section>
  );
};
export default Election;
