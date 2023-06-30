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

// User Container Sidebar
export const Container = styled.div`
  h2 {
    margin-top: 4rem;
    display: flex;
    gap: 1rem;
    align-items: center;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  & div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    & p {
      font-size: 1.2rem;
      color: #bababa;
    }
  }

  & svg {
    font-size: 2rem;
    cursor: pointer;

    &:hover {
      color: #acacac;
    }
  }

  span {
    padding: 0.5rem;
    border-radius: 0.25rem;
    background-color: rgba(183, 28, 80, 0.2);
    margin-top: 2rem;
    width: fit-content;

    p {
      font-weight: 600;
      font-size: 1.4rem;
      color: #b71c50;
    }
  }
`;

export const Companies = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-top: 2rem;

  & div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.2rem;
  }
`;

// Perfis Container Sidebar
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  & div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  & label {
    font-size: 1.4rem;
  }

  & input {
    padding: 0.5rem;
    border-radius: 0.5rem;
  }
`;

export const Button = styled.button`
  background-color: #b71c50;
  border: 0.5px solid #3a3a3a;
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  font-size: 1.6rem;
  color: #ebebeb;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 3rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-3px);
  }
`;
