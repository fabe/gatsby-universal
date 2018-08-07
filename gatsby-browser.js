/* globals window CustomEvent */
import React from 'react';
import AppProvider from 'store/provider';

// React Context in Browser
export const wrapRootComponent = ({ Root }) => {
  const ConnectedRootComponent = () => (
    <AppProvider>
      <Root />
    </AppProvider>
  );

  return ConnectedRootComponent;
};
