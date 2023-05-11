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
  h2 {
    margin-top: 4rem;
    display: flex;
    gap: 1rem;
    align-items: center;
  }
`;

export const Tabs = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 4rem;
  margin-bottom: 4rem;

  & p {
    font-size: 1.6rem;
    cursor: pointer;
    padding-bottom: 0.5rem;
  }

  & p.active {
    border-bottom: 2px solid #b71c50;
    color: #b71c50;
    font-size: 1.65rem;
    transition: all 0.2s linear;
  }
`;

export const ScrollView = styled.div`
  overflow-y: scroll;
  height: 100vh;
`;

export const ParceiroDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  align-items: center;
  border-bottom: 1px solid #3a3a3a;
  padding-bottom: 1.5rem;

  & p {
    font-size: 1.3rem;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 30rem;
  }

  & button {
    background-color: #b71c50;
    color: #ebebeb;
    padding: 0.8rem;
    border: none;
    border-radius: 1rem;
    font-size: 1.3rem;
    gap: 0.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin: 0;
  }
`;
