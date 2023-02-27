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

export const InputSearch = styled.input`
  padding: 1.5rem;
  border-radius: 0.5rem;
  font-size: 1.6rem;
  border: 1px solid #fff;
  background-color: inherit;
  color: #fff;
`;
