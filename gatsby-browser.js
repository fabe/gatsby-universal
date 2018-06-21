/* globals window CustomEvent */
import React from 'react';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import createStore from 'store/createStore';
import { timeout, historyExitingEventType } from 'constants/transition';

if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React);
}

// Redux
export const replaceRouterComponent = ({ history }) => {
  const store = createStore();

  const ConnectedRouterWrapper = ({ children }) => (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  );

  return ConnectedRouterWrapper;
};

// Page Transitions
const getUserConfirmation = (pathname, callback) => {
  // Check if user wants to navigate to the same page.
  // https://github.com/ReactTraining/history/pull/570
  if (pathname === window.location.pathname) {
    callback(false);
    return false;
  }

  const event = new CustomEvent(historyExitingEventType, {
    detail: { pathname },
  });
  window.dispatchEvent(event);
  setTimeout(() => {
    callback(true);
  }, timeout);
};

let history;
if (typeof document !== 'undefined') {
  history = createHistory({ getUserConfirmation });
  // block must return a string to conform
  history.block((location, action) => location.pathname);
}

export let replaceHistory = () => history;
