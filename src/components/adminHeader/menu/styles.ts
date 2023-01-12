import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuContainer = styled.nav`
  display: flex;
  gap: 2rem;
`;

export const MenuItem = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  cursor: pointer;
  background: rgba(56 56, 56, 0.6);
  border-radius: 2rem;
  height: 10rem;
  min-width: 10rem;
  padding: 1.5rem;
  transition: all 0.2s ease-in-out;

  & span {
    font-size: 3.6rem;
  }

  & p {
    font-size: 1.3rem;
    font-weight: 300;
  }

  &:hover {
    color: #b71c50;
  }

  &.active {
    border: 1px solid #b71c50;
  }
`;
