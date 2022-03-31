export const electionReducer = (state, action) => {
  switch (action.type) {
    case setStartTime:
      return { ...state, startTime: action.data };
    case setEndTime:
      return { ...state, endTime: action.data };
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
  endTime: Date.now() ,
};
export const init = 'INIT';
export const setStartTime = 'SET_START_TIME';
export const setEndTime = 'SET_END_TIME';
export const setLoading = 'LOADING';
