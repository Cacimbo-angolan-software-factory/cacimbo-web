import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  width: 50%;

  & h1 {
    font-size: 2rem;
    margin-bottom: 3rem;
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
    border: none;
  }

  &.textField {
    border-color: #fff;
  }
`;

export const Div = styled.div`
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

export const DivChild = styled.span`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: space-between;

  & div {
    width: 100%;
  }
`;
