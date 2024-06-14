import { Link } from 'react-router-dom';
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

export const WrapperBtn = styled(Link)`
  width: 100%;
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
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9;
`;

// Register page

export const DivButtons = styled.div`
  display: flex;
  /* width: 100%; */
  gap: 2rem;

  & a {
    width: 100%;
  }

  & button:first-child {
    background-color: #ebebeb;
    color: #1d1d1d;
  }
`;

export const ErrorMsg = styled.h3`
  color: #b71c50;
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
`;

export const Button = styled.button`
  padding: 0.8rem 2rem;
  font-size: 1.6rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  width: 100%;
  background-color: #b71c50;
  color: #ebebeb;
`;

export const Modal = styled.div`
  position: fixed;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  max-width: 40.5rem;
  max-height: 32.5rem;
  background-color: #1d1d1d;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 0.5rem;
  border: 1px solid #383838;
  transition: all 0.2s ease-in;
  overflow: auto;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 3rem;

  & h3 {
    font-size: 1.6rem;
  }
`;

export const Form = styled.form`
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
`;
