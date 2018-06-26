import styled from 'styled-components';

export const Dialog = styled.dialog`
  display: none;
  border: none;
  padding: 0;

  &[open] {
    display: block;
  }

  &::backdrop {
    background: rgba(0, 0, 0, 0.4);
    opacity: 1;
  }
`;

export const Button = styled.button`
  -webkit-appearance: none;
  background-color: #ccc;
  border-radius: 5px;
  border: none;
  color: #333;
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1rem 2rem;

  & + & {
    margin-left: 1rem;
  }
`;
