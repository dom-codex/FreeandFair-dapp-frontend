export const electionReducer = (state, action) => {
  switch (action.type) {
    case setStartTime:
      return { ...state, startTime: action.data };
    case setEndTime:
      return { ...state, endTime: action.data };
    case endCountDown:
      return {
        ...state,
        endCountDown: {
          days: action.data.days,
          hrs: action.data.hrs,
          min: action.data.min,
          sec: action.data.sec,
        },
      };
    case startCountDown:
      return {
        ...state,
        startCountDown: {
          days: action.data.days,
          hrs: action.data.hrs,
          min: action.data.min,
          sec: action.data.sec,
        },
      };
    case managinglection:
      return { ...state, managingElection: action.data };
    case createPoll:
      return {
        ...state,
        createdpolls: [
          ...state.createdpolls,
          { title: action.data, candidates: [] },
        ],
      };
    case regCandidate:
      const poll = state.createdpolls[action.data.pollIndex];
      poll.candidates.push({ ...action.data.candidate });

      return {
        ...state,
        candidates: [...state.candidates, action.data.candidate],
      };
    case registeringCandidate:
      return { ...state, registeringCandidate: action.data };
    case setCandidateList:
      return { ...state, candidates: [...action.data] };
    case removeCandidate:
      const { pollIndex, address } = action.data;
      const newList = state.createdpolls[pollIndex].candidates.filter(
        (candidate) => candidate.addr !== address
      );
      const newcandidateList = state.candidates.filter(
        (candidate) => candidate.addr !== address
      );
      state.createdpolls[pollIndex].candidates = newList;
      return { ...state, candidates: newcandidateList };
    case addVoter:
      state.registeredvoters.push(action.data);
      return { ...state };
    case ismanagingvoter:
      return {
        ...state,
        managingVoterState: action.data,
      };
    default:
      return state;
  }
};
export const initialData = {
  title: 'Fupre general election',
  address: '0x2djjskqq',
  polls: 2,
  voters: 100,
  status: 0,
  duration: 0,
  startTime: Date.now(),
  endTime: Date.now(),
  managingElection: false,
  registeringCandidate: false,
  managingVoterState: false,
  startCountDown: {
    days: 0,
    hrs: 0,
    min: 0,
    sec: 0,
  },
  endCountDown: {
    days: 0,
    hrs: 0,
    min: 0,
    sec: 0,
  },
  candidates: [],
  registeredvoters: [],
  createdpolls: [
    /*{
      title: 'PRESIDENTIAL',
      candidates: [
        { name: 'Dominic Ibolo W.', mandate: 'Together we can', icon: '' },
      ],
    },
    { title: 'governorship', candidates: [] },*/
  ],
};
export const init = 'INIT';
export const setStartTime = 'SET_START_TIME';
export const setEndTime = 'SET_END_TIME';
export const setLoading = 'LOADING';
export const startCountDown = 'START_COUNTDOWN';
export const endCountDown = 'END_COUNTDOWN';
export const managinglection = 'MANAGING_ELECTION';
export const createPoll = 'CREATE_NEW_POLL';
export const regCandidate = 'REGISTER CANDIDATE';
export const registeringCandidate = 'REGISTERING_CANDIDATE';
export const setCandidateList = 'SET_CANDIDATE_LIST';
export const removeCandidate = 'REMOVE_CANDIDATE';
export const addVoter = 'ADD_VOTER';
export const ismanagingvoter = 'MANAGING_VOTER_STATE';
