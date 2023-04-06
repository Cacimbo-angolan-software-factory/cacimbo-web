import styled from 'styled-components';

export const Block = styled.div`
  display: flex;
  justify-content: space-between;

  & span {
    font-size: 2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 50%;
    transition: all 0.2s;

    &:hover {
      background: rgba(56 56, 56, 0.6);
    }
  }
`;

export const Button = styled.button`
  background: rgba(56 56, 56, 0.6);
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;

  & svg {
    font-size: 2rem;
    color: #fff;
    transition: all 0.2s;
    text-align: center;

    &:hover {
      color: #b71c50;
      transform: translateX(-3px);
    }
  }
`;
