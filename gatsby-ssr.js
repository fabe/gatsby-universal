import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import AppProvider from 'store/provider';

export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  const ConnectedBody = () => <AppProvider>{bodyComponent}</AppProvider>;

  // Add styled-components SSR
  const sheet = new ServerStyleSheet();
  const bodyHTML = renderToString(sheet.collectStyles(<ConnectedBody />));
  const styleElement = sheet.getStyleElement();

  replaceBodyHTMLString(renderToString(<ConnectedBody />));
  setHeadComponents(styleElement);
};
