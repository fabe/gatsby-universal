import React from 'react';
import AppProvider from 'store/provider';
import wrapPageElementWithTransition from 'helpers/wrapPageElement';
import ResetCSS from 'reset.css.js';

// React Context in Browser
export const wrapRootElement = ({ element }) => {
  return (
    <AppProvider>
      <ResetCSS />
      {element}
    </AppProvider>
  );
};

// Page Transitions
export const wrapPageElement = wrapPageElementWithTransition;
