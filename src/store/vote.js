export const voteReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export const voteInitialValues = {
  electionTitle: 'Fupre Election 2021',
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
