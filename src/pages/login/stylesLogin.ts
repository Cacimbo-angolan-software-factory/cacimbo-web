import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 600px;
  width: 100%;
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 970px) {
    width: 80%;
  }

  & h1 {
    color: #b71c50;
    font-size: 5rem;
    margin-bottom: 4rem;
  }

  & form {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    & input {
      padding: 1rem;
      border: 1px solid #b71c50;
      width: 100%;
      font-size: 1.6rem;
      border-radius: 0.5rem;
    }

    & button.single-btn {
      padding: 1rem;
      background-color: #b71c50;
      font-size: 1.6rem;
      color: #fff;
      border: 1px solid #b71c50;
      cursor: pointer;
      transition: all 0.2s;
      border-radius: 0.5rem;
    }

    & button:hover {
      transform: translateY(-3px);
    }
  }

  & p {
    font-size: 1.4rem;
  }
  & a {
    color: #b71c50;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  & button {
    padding: 1.2rem 2rem;
    font-size: 1.6rem;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    width: 100%;
  }

  & button:nth-child(1) {
    background-color: #bebebe;
  }

  & button:nth-child(2) {
    background-color: #b71c50;
    color: #ebebeb;
  }
`;
