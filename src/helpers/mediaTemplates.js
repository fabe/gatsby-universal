import { css } from 'styled-components';
import BREAKPOINTS from 'constants/breakpoints';

// This creates the media templates, which allows for simple
// breakpoint usage inside styled-components, e.g.:
//
// ${MEDIA.PHONE`
//   font-size: 1.6rem;
// `};
//
// ${MEDIA.MIN_TABLET`
//   display: flex;
// `};
//
// Edit or add breakpoints inside constants/breakpoints.js

const MEDIA = Object.keys(BREAKPOINTS).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${BREAKPOINTS[label] / 16}em) {
      ${css(...args)};
    }
  `;

  acc[`MIN_${label}`] = (...args) => css`
    @media (min-width: ${BREAKPOINTS[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

export default MEDIA;
