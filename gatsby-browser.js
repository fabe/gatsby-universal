/* globals window CustomEvent */
import React from 'react';
import AppProvider from 'store/provider';
import { Location } from '@reach/router';
import posed, { PoseGroup } from 'react-pose';
import { timeout } from 'constants/transition';

// React Context in Browser
export const wrapRootElement = ({ element }) => {
  return <AppProvider>{element}</AppProvider>;
};

// Page Transitions
// Note: I would really like to use `replaceComponentRenderer`
// here, however it breaks all the GraphQL queries on build.
export const wrapPageElement = ({ element, props }) => {
  const RoutesContainer = posed.div({
    enter: { opacity: 1, delay: timeout, delayChildren: timeout },
    exit: { opacity: 0 },
  });

  // To enable page transitions on mount / initial load,
  // use the prop `animateOnMount={true}` on `PoseGroup`.
  return (
    <Location>
      {({ location }) => (
        <PoseGroup>
          <RoutesContainer key={location.pathname}>{element}</RoutesContainer>
        </PoseGroup>
      )}
    </Location>
  );
};
