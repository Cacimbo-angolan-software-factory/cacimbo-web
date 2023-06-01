import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border: 0.5px solid #3a3a3a;
  padding: 1rem 0 1rem 0;
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #5555;

  border-radius: 5px;

  & div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  & button {
    background-color: inherit;
    border: 0.5px solid #3a3a3a;
    border-radius: 0.5rem;
    padding: 1rem;
    height: 3.5rem;
    font-size: 1.4rem;
    color: #ebebeb;
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;

    /* & svg {
      color: #b71c50;
    } */
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
