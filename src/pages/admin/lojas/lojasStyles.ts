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
  background: rgba(56 56, 56, 0.6);
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  width: 60%;

  & img {
    width: fit-content;
    max-width: 9rem;
    height: 9rem;
    border-radius: 0.5rem;
    object-fit: contain;
  }

  & div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    & h1 {
      font-weight: 400;
    }

    & p {
      font-size: 1.6rem;
    }
  }
`;
