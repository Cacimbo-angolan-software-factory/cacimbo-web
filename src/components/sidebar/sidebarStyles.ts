import styled, { keyframes } from 'styled-components';

const animation = keyframes`
from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0%);
    }
  
`;

export const Wrapper = styled.div`
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

  display: flex;
  flex-direction: column;

  & h1 {
    display: flex;
    align-items: center;
    gap: 1rem;

    & svg {
      font-size: 2rem;
    }
  }

  & div:first-child {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
  }

  & span {
    font-size: 2.4rem;
    cursor: pointer;
    height: fit-content;
  }

  & p {
    font-size: 1.6rem;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;
