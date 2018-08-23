import React from 'react';
import Transition from 'components/transition';
import AppProvider from 'store/provider';

// React Context in Browser
export const wrapRootElement = ({ element }) => {
  return <AppProvider>{element}</AppProvider>;
};

// Page Transitions
export const wrapPageElement = ({ element, props }) => {
  return <Transition {...props}>{element}</Transition>;
};
