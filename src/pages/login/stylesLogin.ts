import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 50%;
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

    & button {
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
