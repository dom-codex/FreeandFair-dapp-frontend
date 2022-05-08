export const livePollReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export const initialData = {
  polls: [
    {
      title: 'PRESIDENTIAL',
      candidates: [
        {
          name: 'Dominic',
          icon: 'xml',

          votes: 2492953,
        },
      ],
    },
  ],
  results: [
    {
      poll: 'PRESIDENTIAL',
      winner: {
        name: 'DOMINIC',
        icon: '',
        votes: 2345600,
      },
    },
  ],
  showResult: false,
  loading: false,
};
export const setLivePoll = 'SET_LIVE_POLL';
export const setResult = 'SET_ELECTION_RESULT';
