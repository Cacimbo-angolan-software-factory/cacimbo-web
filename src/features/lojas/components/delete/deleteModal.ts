import styled from 'styled-components';

export const DeleteWrapper = styled.div`
  display: none;
  position: fixed;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  max-width: 32.5rem;
  max-height: 38rem;
  padding: 2rem;
  background-color: #1d1d1d;
  border-radius: 1.5rem;
  border: 1px solid #383838;
  transition: all 0.2s ease-in;

  &.open {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  & img {
    width: 20rem;
    height: 20rem;
  }
`;

export const FooterDiv = styled.div`
  background-color: #242424;
  border-top: 1px solid #383838;
  padding: 1.5rem 2rem;
  width: 100%;
  position: fixed;
  bottom: 0;
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  border-radius: 0 0 1.5rem 1.5rem;

  & button {
    padding: 0.8rem 2rem;
    font-size: 1.5rem;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    color: #ebebeb;
  }

  & button:first-child {
    background-color: #bebebe;
    color: #242424;
  }

  & button:last-child {
    background-color: #b71c50;
  }
`;

export const SpinnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
