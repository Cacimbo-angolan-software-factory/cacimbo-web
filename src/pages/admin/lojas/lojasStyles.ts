import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const BtnCreate = styled.button`
  padding: 0.8rem 2rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #b71c50;
  color: #fff;
  cursor: pointer;
  width: fit-content;

  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease-in;
  font-size: 1.6rem;

  & svg {
    font-size: 1.8rem;
  }

  &:hover {
    padding: 0.8rem 2.35rem;
  }
`;

export const EmptyStore = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;

  & img {
    width: 38.5rem;
  }
`;

export const SpinnerDiv = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-self: center;
`;

export const LojasContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

// Single loja
export const LojaContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background-color: #5555;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  width: 60%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  & img {
    width: fit-content;
    max-width: 9rem;
    height: 9rem;
    border-radius: 0.5rem;
    object-fit: contain;
  }

  & section {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  & div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    & h1 {
      font-weight: 400;
    }

    & p {
      font-size: 1.4rem;
      color: #bebebe;
    }

    & p:last-child {
      font-size: 1.2rem;
    }

    & svg {
      font-size: 1.8rem;
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        color: #bebebe;
      }
    }

    /* & div:nth-child(2) {
    } */
  }
`;

// delete Modal
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

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 9;
`;
