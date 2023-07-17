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

  @media (max-width: 1000px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    padding: 6rem 1.5rem 6rem 1.5rem;
  }

  @media (max-width: 630px) {
    width: 100%;
    z-index: 1000;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & img {
    width: 20rem;
    background-color: #fff;
  }

  & h1,
  & h2 {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  & p {
    font-size: 1.5rem;
  }

  & ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  & li {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-left: 2.5rem;

    & svg {
      font-size: 1.5rem;
    }
  }
`;

export const DivEmpty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  gap: 1.5rem;

  & img.svg {
    width: 15rem;
    background: none;
  }
`;

export const DivButtons = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;

  & button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem 0;
    border-radius: 0.5rem;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }

  & button:nth-child(1) {
    background-color: #bebebe;
  }

  & button:nth-child(2) {
    background-color: #b71c50;
    color: #fff;
  }
`;
