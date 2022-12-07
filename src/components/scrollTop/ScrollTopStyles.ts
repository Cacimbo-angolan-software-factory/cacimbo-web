import styled from 'styled-components';

export const Button = styled.button`
  position: fixed;
  bottom: 5rem;
  left: 6rem;
  z-index: 10;
  background: #1d1d1d;
  padding: 1rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background: #0d0d0d;
    transform: translateY(-3px);
  }

  & svg {
    font-size: 2.5rem;
    color: #fff;
    transition: 0.5s;

    &:hover {
      color: #b71c50;
      transform: translateY(-3px);
    }
  }
`;
