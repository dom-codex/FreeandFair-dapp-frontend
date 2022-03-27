import React from 'react';
import SearchIllustration from '../components/searchillustration.js';
import ElectionSearchItem from '../components/electionsearchitem.js';
import Loader from '../components/loader.js';
import Polls from '../components/polls.js';
import GeneralTab from '../components/generaltab.js';
import ElectionCandidates from '../components/electioncandidates.js';
const renderSearchComponentItem = (state, dispatch) => {
  if (
    !state.searchingElection &&
    !state.foundElection &&
    state.searchedElection == null
  ) {
    return <SearchIllustration />;
  } else if (
    !state.searching &&
    state.searchedElection != null &&
    state.foundElection
  ) {
    return <ElectionSearchItem />;
  } else if (state.searchingElection) {
    return <Loader />;
  }
};
const renderTabItem = (pos) => {
  switch (pos) {
    case 1:
      return <GeneralTab />;
    case 2:
      return <Polls />;
    case 3:
      return <ElectionCandidates />;
    case 4:
      return;
  }
};
const moveIndicator = (pos) => {
  switch (pos) {
    case 1:
      return { left: '0%' };
    case 2:
      return { left: '25%' };
    case 3:
      return { left: '50%' };
    case 4:
      return { left: '75%' };
  }
};
export { renderSearchComponentItem, moveIndicato, renderTabItem };
