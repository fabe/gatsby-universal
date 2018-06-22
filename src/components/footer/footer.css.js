import styled from 'styled-components';

export const Container = styled.footer`
  background-color: ${({ isVisible }) => (isVisible ? '#ccc' : '#fafafa')};
  transition: background-color 0.2s ease-in-out;
  padding: 2rem;
`;
