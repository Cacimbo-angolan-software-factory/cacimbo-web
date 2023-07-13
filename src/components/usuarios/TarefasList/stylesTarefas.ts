import styled from 'styled-components';

export const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & span {
    font-size: 2.5rem;
    margin-right: 1rem;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      color: #b71c50;
      font-size: 2.6rem;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ItemContainer = styled.div`
  display: flex;
  padding: 1rem;
  gap: 0.5rem;
  background-color: #5555;
  border-radius: 0.5rem;
  justify-content: space-between;

  & p {
    font-size: 1.2rem;
  }

  & p:last-child {
    color: #bababa;
  }

  & div:first-child {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  & div:last-child {
    display: flex;
    gap: 1.2rem;
    align-items: center;

    & svg {
      font-size: 2rem;
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        color: #b71c50;
      }
    }
  }
`;
