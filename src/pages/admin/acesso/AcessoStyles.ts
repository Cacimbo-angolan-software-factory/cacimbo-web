import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background-color: #5555;
  border-radius: 0.5rem;

  & div.div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & button {
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      border: none;
      background-color: #b71c50;
      color: #fff;
      cursor: pointer;

      display: flex;
      align-items: center;
      gap: 0.5rem;
      transition: all 0.2s ease-in;

      & svg {
        font-size: 1.4rem;
      }

      &:hover {
        padding: 0.5rem 1.5rem;
      }
    }
  }
`;

export const Button = styled.button`
  width: fit-content;
  background-color: #242424;
  padding: 1rem 2rem;
  color: #fff;
  border-radius: 0.5rem;
  border: 1px solid #383838;
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 600;
  transition: all 0.2s ease-in;

  &:hover {
    transform: translateY(-3px);
  }
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
