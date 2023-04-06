import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  background: rgba(56 56, 56, 0.6);
  border-radius: 0.5rem;
  padding: 1.5rem;

  & > div {
    display: flex;
    gap: 2rem;
    align-items: center;
  }

  & span {
    font-size: 2rem;
    cursor: pointer;
  }

  & h3 {
    font-weight: 400;
    color: #bababa;
  }
`;

// PerfisList
export const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & div {
    display: flex;
    gap: 2rem;
    align-items: center;
  }

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

export const PerfisContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const PerfisListContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background: rgba(56 56, 56, 0.6);
  border-radius: 0.5rem;
  justify-content: space-between;

  & h1 {
    font-weight: 400;
  }

  & h3 {
    font-weight: 400;
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
