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

  @media (max-width: 900px) {
    width: 100%;
    z-index: 999999;
  }

  @media (min-width: 900px) {
    display: none;
    z-index: 0;
  }
`;

export const Menus = styled.ul`
  margin-top: 7rem;
  text-align: center;
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  gap: 2rem;

  & li {
    list-style: none;
    font-size: 3rem;
    padding: 1rem;
    cursor: pointer;
    width: 100%;
  }

  & li:hover {
    background-color: #5555;
  }
`;
