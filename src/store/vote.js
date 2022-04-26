export const voteReducer = (state, action) => {
  switch (action.type) {
    case castVote:
      state.castedVotes[`${action.data.poll}`] = action.data.candidate;

    default:
      return state;
  }
};
export const voteInitialValues = {
  electionTitle: 'Fupre Election 2021',
  castedVotes: {},
  polls: [
    {
      title: 'PRESIDENTIAL',
      candidates: [
        {
          name: 'Dominic ibolo .W',
          icon: '',
          mandate: 'together we can',
        },
      ],
    },
  ],
};
export const castVote = 'CAST_VOTEs';
