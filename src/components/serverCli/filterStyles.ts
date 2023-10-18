import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  gap: 2rem;
`;

export const Button = styled.button`
  background-color: rgba(56, 56, 56, 0.6);
  border-radius: 1rem;
  padding: 0.5rem 1.2rem;
  cursor: pointer;
  transition: all 0.2s;
  color: #ebebeb;
  font-weight: 600;
  font-size: 1.6rem;
  border: none;

  &:hover {
    color: #b71c50;
  }

  &.active {
    border: 0.5px solid #b71c50;
  }
`;
