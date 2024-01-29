import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
    background-color: #1d1d1d;
    padding: 3rem 6rem 3rem 6rem;
    border-bottom: 0.5px solid #3a3a3a;
    box-shadow: 0px 11px 11px -14px rgba(0, 0, 0, 0.75);
  }

  & section {
    display: flex;
    gap: 2rem;
  }

  & nav {
    display: flex;
    gap: 2rem;
  }

  & button {
    padding: 0.5rem 2rem;
    border-radius: 1rem;
    border: none;
    background-color: #5555;
    color: #fff;
    font-size: 1.6rem;
    font-weight: 700;
    cursor: pointer;
  }

  & button:hover {
    color: #b71c50;
  }

  & button.active {
    border: 1px solid #b71c50;
  }

  & input {
    padding: 1rem;
    border: 1px solid #383838;
    border-radius: 0.5rem;
    background-color: #242424;
    color: #fff;
    width: 25rem;
  }

  & div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    & p {
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: 1.4rem;
    }

    & span {
      width: 0.8rem;
      height: 0.8rem;
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
    }
  }
`;
