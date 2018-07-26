/* globals window CustomEvent */
import React from 'react';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AppProvider from 'store/provider';
import { timeout, historyExitingEventType } from 'constants/transition';

// React Context in Browser
export const replaceRouterComponent = ({ history }) => {
  const ConnectedRouterWrapper = ({ children }) => (
    <AppProvider>
      <Router history={history}>{children}</Router>
    </AppProvider>
  );

  return ConnectedRouterWrapper;
};

// Page Transitions
const getUserConfirmation = (location, callback) => {
  const [pathname, action] = location.split('|');

  // Check if user wants to navigate to the same page.
  // If so, we don't want to trigger the page transitions.
  // We have to check the `action`, because the pathnames
  // are the same when going back in history 🤷‍
  if (pathname === window.location.pathname && action === 'PUSH') {
    callback(false);
    return;
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

  // `block` must return a string to conform.
  // We send both the pathname and action to `getUserConfirmation`.
  history.block((location, action) => `${location.pathname}|${action}`);
}

export let replaceHistory = () => history;
