import styled from 'styled-components';

export const LojaContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background-color: #5555;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  width: 60%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  @media (max-width: 630px) {
    width: 100%;
  }

  & img {
    width: fit-content;
    max-width: 9rem;
    height: 9rem;
    border-radius: 0.5rem;
    object-fit: contain;
    background-color: #fff;
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
      cursor: pointer;
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

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 9;
`;
