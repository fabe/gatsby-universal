import { createStore as reduxCreateStore } from 'redux';
import rootReducer from 'reducers/index';

const createStore = initialState =>
  reduxCreateStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default createStore;
