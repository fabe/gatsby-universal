import styled from 'helpers/agnosticStyled';
import MEDIA from 'helpers/mediaTemplates';

export const Text = styled`
  font-weight: bold;
  font-size: 2.5rem;
  line-height: 1.2;

  ${MEDIA.PHONE`
    font-size: 1.6rem;
  `};
`;
