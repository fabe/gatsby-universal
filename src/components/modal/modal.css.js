import styled from 'styled-components';

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
  background-color: #fff;
  border-radius: 5px;
  border: none;
  color: #757575;
  border: 1px solid #ddd;
  cursor: pointer;
  font-family: inherit;
  font-size: 1.3rem;
  font-weight: 500;
  margin: 4rem 0 2rem;
  padding: 1rem 2rem;
  text-transform: uppercase;
  transition: 0.2s background-color ease;

  &:active,
  &:focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.05);
    outline: none;
  }

  &:hover {
    background-color: #f9f9f9;
  }

  & + & {
    margin-left: 1rem;
  }
`;
