import * as types from 'constants/actionTypes';

const initialState = {
  visible: false,
};

export default (state = initialState, { type }) => {
  switch (type) {
    case types.SHOW_MODAL:
      return {
        ...state, // optional here
        visible: true,
      };

    case types.HIDE_MODAL:
      return initialState;

    default:
      return state;
  }
};
