import styled from 'styled-components';

export const Dialog = styled.dialog`
  display: none;

  &::backdrop {
    opacity: 1;
    background: radial-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8));
  }

  &[open] {
    display: block;
  }
`;
