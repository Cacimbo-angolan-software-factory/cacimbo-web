import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.5px solid #3a3a3a;
  padding: 1rem 0 1rem 0;
  width: 55%;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #5555;
  gap: 1rem;
  border-radius: 5px;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const Details = styled.div`
  display: flex;
  gap: 4rem;

  & p {
    font-size: 1.2rem;
    color: #8d8d8d;
  }
`;

export const FilterContainer = styled.div``;
