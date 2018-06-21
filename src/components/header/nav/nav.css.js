import styled from 'styled-components';

export const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    font-size: 1.6rem;

    li + li {
      margin-left: 1rem;
    }
  }
`;
