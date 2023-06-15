import styled from 'styled-components';

export const ModalRolesContainer = styled.div`
  display: none;
  position: fixed;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  max-width: 46.5rem;
  max-height: 65rem;
  overflow: auto;
  background-color: #1d1d1d;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 0.5rem;
  border: 1px solid #383838;

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
`;

export const Inputs = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  justify-content: space-between;
  width: 100%;
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  & p {
    font-size: 1.5rem;
    font-weight: 700;
  }

  & input {
    padding: 1rem;
    border: 1px solid #383838;
    border-radius: 0.5rem;
    background-color: #242424;
    color: #fff;
  }
`;

export const FooterDiv = styled.div`
  background-color: #242424;
  border-top: 1px solid #383838;
  padding: 1.5rem 2rem;
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;

  & button {
    padding: 0.8rem 2rem;
    font-size: 1.5rem;
    border-radius: 0.5rem;
    border: none;
    /* font-weight: 600; */
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
