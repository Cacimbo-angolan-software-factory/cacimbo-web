import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  width: 50%;

  & h1 {
    font-size: 2rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 768px) {
    width: 100%;
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
    height: 3.5rem;
    border-radius: 0.5rem;
  }
`;

export const Div = styled.span`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 2rem;

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

export const SpinnerDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 9;
`;
