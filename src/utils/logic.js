import { connect, disconnect, searching, stopSearching,updateTime } from './constants.js';
const reducer = (state, action) => {
  switch (action.type) {
    case connect:
      return { ...state, connected: true };
    case disconnect:
      return { ...state, connected: false };
    case searching:
      return { ...state, searchingElection: true };
    case stopSearching:
      if(action.data){
        return {...state, searchedElection:action.data,foundElection:true,searchInput:""}
      }
      return { ...state, searchingElection: false,foundElection:false,searchedElection:null};
      case updateTime:
        return {...state,searchedElection:{...state.searchedElection,time:{...action.data}}}
  }
};
const initialData = {
  connected: false,
  searchingElection: false,
  searchedElection: null,
  foundElection: false,
  searchInput: '',
};
export { reducer, initialData };
