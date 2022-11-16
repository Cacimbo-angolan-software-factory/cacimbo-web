import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  & div {
    cursor: pointer;
    display: flex;
    gap: 2rem;
    align-items: center;
  }

  & span {
    font-size: 2rem;
  }

  & h2 {
    background: rgba(56, 56, 56, 0.6);
    border-radius: 1rem;
    padding: 0.5rem 1.2rem;
  }

  & h2:hover {
    color: #b71c50;
  }
`;

export const SecondFilter = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 2rem;
  cursor: pointer;
  align-items: center;
`;
