import { createStore as reduxCreateStore } from 'redux';
import rootReducer from 'reducers/index';

const createStore = initialState => {
  const store = reduxCreateStore(
    rootReducer,
    initialState
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default createStore;
