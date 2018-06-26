import styled from 'styled-components';

export const Container = styled.footer`
  background-color: ${({ isVisible }) => (isVisible ? '#bbb' : '#fafafa')};
  transition: background-color 0.2s ease-in-out;
  padding: 4rem;
`;
