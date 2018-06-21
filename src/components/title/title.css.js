import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Text = styled.div`
  font-weight: bold;
  font-size: 2.5rem;

  ${MEDIA.PHONE`
    font-size: 1.5rem;
  `};
`;
