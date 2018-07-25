import styled from 'styled-components';
import { accent } from 'constants/theme';
import MEDIA from 'helpers/mediaTemplates';

export const Dialog = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  border: none;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  overflow: hidden;
  padding: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;

  &[aria-hidden='true'] {
    display: none;
  }
`;

export const Button = styled.button`
  -webkit-appearance: none;
  background-color: ${accent};
  border-radius: 5px;
  border: none;
  color: #fff;
  cursor: pointer;
  font-family: inherit;
  font-size: 1.6rem;
  font-weight: 500;
  margin: 2rem 0;
  padding: 1rem 2rem;

  & + & {
    margin-left: 1rem;
  }

  ${MEDIA.PHONE`
    font-size: 1.4rem;
  `};
`;
