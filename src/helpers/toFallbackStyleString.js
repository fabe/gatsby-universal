import { string as toStyleString } from 'to-style';

export default styleObject => {
  return toStyleString(styleObject)
    .replace(';', '!important;')
    .concat('!important');
};
