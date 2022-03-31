import React, { useContext, useLayoutEffect } from 'react';
import styles from '../styles/tab.module.css';
import { ElectionContext } from '../pages/election.js';
import { setStartTimeHandler, setEndTimeHandler } from '../utils/handlers.js';
import { evaluateDuration, evaluateStatus } from '../utils/evaluator.js';
import { startCountDown, endCountDown } from '../store/election.js';
import { beginCountDown } from '../utils/timeHandler.js';
const GeneralTab = () => {
  const { state, dispatch } = useContext(ElectionContext);
  useLayoutEffect(() => {
    beginCountDown(startCountDown, state.startTime, dispatch);
  }, []);
  useLayoutEffect(() => {
    beginCountDown(endCountDown, state.endTime, dispatch);
  }, []);
  return (
    <div className={styles.general}>
      <div>
        <label>Title </label>
        <input type="text" value={state.title} disabled />
      </div>
      <hr />
      <div>
        <p className={styles.heading}>Election timing</p>
        <div>
          <label>Start time</label>
          <input
            type="datetime-local"
            onChange={(e) => setStartTimeHandler(e, dispatch)}
          />
        </div>
        <div className={styles.saveChanges}>
          <button
            onClick={() =>
              beginCountDown(startCountDown, state.startTime, dispatch)
            }
          >
            Save Changes
          </button>
        </div>
        <div>
          <label>End time</label>
          <input
            type="datetime-local"
            onChange={(e) => setEndTimeHandler(e, dispatch)}
          />
        </div>
        <div className={styles.saveChanges}>
          <button
            onClick={() =>
              beginCountDown(endCountDown, state.endTime, dispatch)
            }
          >
            Save Changes
          </button>
        </div>
        <div>
          <label>Election duration</label>
          <input
            type="text"
            value={evaluateDuration(
              state.endTime - state.startTime + Date.now()
            )}
            disabled
          />
        </div>

        <div className={styles.countdown}>
          <p className={styles.heading}>Countdown to election start</p>
          <div className={styles.countdowntimer}>
            <div>
              <p>{state.startCountDown.days}</p>
              <p>Day(s)</p>
            </div>
            <div>
              <p>{state.startCountDown.hrs}</p>
              <p>Hour(s)</p>
            </div>
            <div>
              <p>{state.startCountDown.min}</p>
              <p>Minute(s)</p>
            </div>
            <div>
              <p>{state.startCountDown.sec}</p>
              <p>Second(s)</p>
            </div>
          </div>
        </div>
        <div className={styles.countdown}>
          <p className={styles.heading}>Countdown to election end</p>
          <div className={styles.countdowntimer}>
            <div>
              <p>{state.endCountDown.days}</p>
              <p>Day(s)</p>
            </div>
            <div>
              <p>{state.endCountDown.hrs}</p>
              <p>Hour(s)</p>
            </div>
            <div>
              <p>{state.endCountDown.min}</p>
              <p>Minute(s)</p>
            </div>
            <div>
              <p>{state.endCountDown.sec}</p>
              <p>Second(s)</p>
            </div>
          </div>
        </div>
        <div>
          <hr />
          <p className={styles.heading}>Election Management</p>

          <div className={styles.controlbtns}>
            <button disabled={evaluateStatus(state.status) != 'NOT_STARTED'}>
              Start Election
            </button>
            <button disabled={evaluateStatus(state.status) != 'STARTED'}>
              End Election
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GeneralTab;
