import { searching } from './constants.js';
import { searchForElection } from '../backendcalls/electionsearch.js';
import { setStartTime, setEndTime } from '../store/election.js';
const searchClickHandler = (state, dispatch) => {
  if (!state.searchInput.length > 1) return null;
  dispatch({ type: searching, data: state.searchInput });
  //Call async function
  setTimeout(() => {
    searchForElection('', dispatch);
  }, 3000);
};
const tabBtnHandler = (pos, setPos) => {
  setPos(pos);
};
export const setStartTimeHandler = (e, dispatch) => {
  const value = Date.parse(e.target.value);
  alert(value);
  dispatch({ data: value, type: setStartTime });
};
export const setEndTimeHandler = (e, dispatch) => {
  const value = Date.parse(e.target.value);
  alert(value);
  dispatch({ data: value, type: setEndTime });
};
export { searchClickHandler, tabBtnHandler };
