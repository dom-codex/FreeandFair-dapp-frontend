import React, { useState, useReducer, createContext } from 'react';
import Nav from '../components/nav.js';
import ElectionDetails from '../components/electiondetails.js';
import styles from '../styles/electiondetails.module.css';
import GeneralTab from '../components/generaltab.js';
import { evaluateIndicatorPos } from '../utils/evaluator.js';
import { tabBtnHandler } from '../utils/handlers.js';
import { renderTabItem } from '../utils/renderer.js';
import {electionReducer,initialData} from '../store/election.js';
export const ElectionContext = createContext(null);
const Election = () => {
  const [pos, setIndicatorPos] = useState(1);
  const [state, dispatch] = useReducer(electionReducer, initialData);
  return (
    <section>
      <Nav />
      <ElectionDetails state={state} />
      <section>
        <div>
          <div className={styles.tabhead}>
            <div
              style={evaluateIndicatorPos(pos)}
              className={styles.indicator}
            ></div>
            <button
              onClick={() => tabBtnHandler(1, setIndicatorPos)}
              className={styles.active}
            >
              General
            </button>
            <button onClick={() => tabBtnHandler(2, setIndicatorPos)}>
              Polls
            </button>
            <button onClick={() => tabBtnHandler(3, setIndicatorPos)}>
              Candidates
            </button>
            <button onClick={() => tabBtnHandler(4, setIndicatorPos)}>
              Voters
            </button>
          </div>
        </div>
      </section>
      {/*tab body -->*/}
      <ElectionContext.Provider value={{ state, dispatch }}>
        <section>
          <div classNames="tab-body">{renderTabItem(pos)}</div>
        </section>
      </ElectionContext.Provider>
    </section>
  );
};
export default Election;
