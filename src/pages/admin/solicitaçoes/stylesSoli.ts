import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  @media (max-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;
