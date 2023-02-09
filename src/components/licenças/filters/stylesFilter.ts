import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* transition: all 0.5s; */

  @media (max-width: 500px) {
    margin-top: 6rem;
  }

  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    background-color: #1d1d1d;
    padding: 3rem 6rem 3rem 6rem;
    border-bottom: 0.5px solid #3a3a3a;
    box-shadow: 0px 11px 11px -14px rgba(0, 0, 0, 0.75);
  }

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

  & h2.active {
    border: 0.5px solid #b71c50;
  }
`;

export const SecondFilter = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 2rem;
  cursor: pointer;
  align-items: center;
`;
