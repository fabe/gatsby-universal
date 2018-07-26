import { string as toStyleString } from 'to-style';

// This creates fallback styles for the page transitions.
// Without it, browsers without JavaScript enabled would
// hide the entire content. We have to add !important here.
export default styleObject => {
  return toStyleString(styleObject)
    .replace(';', '!important;')
    .concat('!important');
};
