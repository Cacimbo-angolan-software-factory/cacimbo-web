import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
`;

export const Section2 = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  margin-top: 2rem;

  & img {
    width: 40rem;
  }

  & p {
    font-size: 1.6rem;
    text-align: center;
  }
`;
