import styled, { keyframes } from 'styled-components';

const animation = keyframes`
from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0%);
    }
  
`;

export const Main = styled.main`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 35%;
  padding: 6rem 3rem 6rem 3rem;
  background-color: #1d1d1d;
  box-shadow: -16px 0px 37px -26px rgba(0, 0, 0, 0.47);
  border-left: 0.5px solid #3a3a3a;
  animation: ${animation} 0.5s;
  z-index: 11;

  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 1rem;

  & p {
    font-size: 1.5rem;
    display: flex;
    gap: 1rem;
    align-items: center;
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

export const Estado = styled.p`
  font-weight: 600;
  /* margin-top: 1rem; */

  & svg {
    font-size: 2rem;

    &.toDo {
      color: #c7c8cc;
    }

    &.canceled {
      color: #d04848;
    }

    &.inProgress {
      color: #fde767;
    }

    &.done {
      color: #74e291;
    }
  }
`;

export const Tasks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & h1 {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  & div {
    padding: 0.5rem 1rem;
    background: #5555;
    border-radius: 0.5rem;
    display: flex;
    justify-content: space-between;

    & section {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
`;
