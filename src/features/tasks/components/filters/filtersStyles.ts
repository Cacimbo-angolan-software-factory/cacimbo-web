import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 2rem;

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
