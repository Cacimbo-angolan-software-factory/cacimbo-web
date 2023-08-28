import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border: 0.5px solid #3a3a3a;
  background-color: #5555;
  border-radius: 0.5rem;
  font-size: 1.6rem;
  gap: 1rem;
  height: 100%;
  max-width: 50rem;
  justify-content: space-between;

  & p {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  & p.date {
    font-size: 1.4rem;
  }
`;

export const Span = styled.span`
  width: 5rem;
  height: 0.5rem;
  border-radius: 0.5rem;

  &.red {
    background-color: #c70039;
  }

  &.blue {
    background-color: #279eff;
  }

  &.green {
    background-color: #a8df8e;
  }
`;
