import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border: 0.5px solid #3a3a3a;
  background-color: #5555;
  border-radius: 0.5rem;
  font-size: 1.6rem;
  gap: 1rem;
  height: 100%;
  max-width: 50rem;
  justify-content: space-between;

  & p {
    color: #6c6c6c;
  }

  & h2.nif {
    font-weight: 400;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  & button {
    padding: 1rem;
    border: none;
    border-radius: 0.5rem;
    font-size: 1.6rem;
    cursor: pointer;
    display: flex;
    gap: 0.5rem;
  }

  & button:first-child {
    background-color: #b71c50;
    color: #ebebeb;
  }

  & button:last-child {
    background-color: #766868;
    color: #ebebeb;
  }
`;
