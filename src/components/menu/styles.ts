import styled from 'styled-components';

export const MenuContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

export const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  cursor: pointer;
  background: rgba(56, 56, 56, 0.6);
  border-radius: 2rem;
  height: 10rem;
  width: 10rem;
  transition: all 0.2s ease-in-out;

  & span {
    font-size: 3.6rem;
  }

  & p {
    font-size: 1.6rem;
  }

  &:hover {
    color: #b71c50;
  }
`;
