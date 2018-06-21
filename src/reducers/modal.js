import { Map } from 'immutable';
import * as types from 'constants/actionTypes';

const initialState = Map({
  visible: false,
});

export default (state = initialState, { type }) => {
  switch (type) {
    case types.SHOW_MODAL:
      return state.merge({ visible: true });

    case types.HIDE_MODAL:
      return initialState;

    default:
      return state;
  }
};
