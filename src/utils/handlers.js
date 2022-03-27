import { searching } from './constants.js';
import { searchForElection } from '../backendcalls/electionsearch.js';
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
export { searchClickHandler, tabBtnHandler };
