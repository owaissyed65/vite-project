let Changestate = {};
export const params = (state = Changestate, { type, payload }) => {
  if (type === 'params') {
    state.params = payload;
    return state;
  } else return state;
};

