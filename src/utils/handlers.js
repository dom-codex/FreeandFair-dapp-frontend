import { searching } from './constants.js';
import { searchForElection } from '../backendcalls/electionsearch.js';
import {
  setStartTime,
  setEndTime,
  regCandidate,
  registeringCandidate,
} from '../store/election.js';
//HANDLER FOR ELECTION SEARCH
const searchClickHandler = (state, dispatch) => {
  if (!state.searchInput.length > 1) return null;
  dispatch({ type: searching, data: state.searchInput });
  //Call async function
  setTimeout(() => {
    searchForElection('', dispatch);
  }, 3000);
};
//HANDLER FOR SETTING SELECTED TAB IN ELECTION PAGE
const tabBtnHandler = (pos, setPos) => {
  setPos(pos);
};
//HANDLER TO SET START TIMER FOR ELECTION
export const setStartTimeHandler = (e, dispatch) => {
  const value = Date.parse(e.target.value);

  dispatch({ data: value, type: setStartTime });
};
//HANDLER FOR SETTING ENDTIMER FOR ELECTION
export const setEndTimeHandler = (e, dispatch) => {
  const value = Date.parse(e.target.value);

  dispatch({ data: value, type: setEndTime });
};
//HANDLER FOR REGISTERING NEW  CANDIDATE
export const registerNewCandidateHandler = (dispatch, data) => {
  dispatch({ type: regCandidate, data: data });
  setTimeout(() => {
    dispatch({ type: registeringCandidate, data: false });
  }, 5000);
};
export { searchClickHandler, tabBtnHandler };
