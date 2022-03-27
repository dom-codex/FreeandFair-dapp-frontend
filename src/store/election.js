export const electionReducer = (state, action) => {
  switch (action.type) {
  }
};
export const initialData = {
  title: 'Fupre general election',
  address: '0xwwhfe8228wwdjdjvjskqq',
  polls: 2,
  voters: 100,
  status: 0,
  duration: 0,
  startTime: 0,
  endTime: 0,
};
export const init = 'INIT';
export const setStartTime = 'SET_START_TIME';
export const setEndTime = "SET_END_TIME";
export const setLoading = "LOADING"