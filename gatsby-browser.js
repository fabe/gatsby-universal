import React from 'react';
import AppProvider from 'store/provider';
import wrapPageElementWithTransition from 'helpers/wrapPageElement';
import GlobalStyle from 'global.css.js';

// React Context in Browser
export const wrapRootElement = ({ element }) => {
  return (
    <AppProvider>
      <GlobalStyle />
      {element}
    </AppProvider>
  );
};

// Page Transitions
export const wrapPageElement = wrapPageElementWithTransition;
