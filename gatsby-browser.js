/* globals window CustomEvent */
import React from 'react';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AppProvider from 'store/provider';
import { timeout, historyExitingEventType } from 'constants/transition';

export const replaceRouterComponent = ({ history }) => {
  const ConnectedRouterWrapper = ({ children }) => (
    <AppProvider>
      <Router history={history}>{children}</Router>
    </AppProvider>
  );

  return ConnectedRouterWrapper;
};

// Page Transitions
const getUserConfirmation = (pathname, callback) => {
  // TODO: Check if user wants to navigate to the same page.
  // https://github.com/ReactTraining/history/pull/570

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
