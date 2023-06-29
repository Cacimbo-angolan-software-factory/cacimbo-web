import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: none;
  position: fixed;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  max-width: 46.5rem;
  max-height: 65rem;
  background-color: #1d1d1d;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 0.5rem;
  border: 1px solid #383838;
  transition: all 0.2s ease-in;
  overflow: auto;

  &.open {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #242424;
  padding: 2rem;
  border-bottom: 1px solid #383838;

  & svg {
    cursor: pointer;
    font-size: 2rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  flex-grow: 1;
  overflow-y: auto;
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

export const InputDiv = styled.label`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  font-size: 1.5rem;
  font-weight: 700;
  & input {
    padding: 1rem;
    border: 1px solid #383838;
    border-radius: 0.5rem;
    background-color: #242424;
    color: #fff;
  }
`;
