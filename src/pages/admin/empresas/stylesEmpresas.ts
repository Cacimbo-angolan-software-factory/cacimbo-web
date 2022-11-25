import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Button = styled.button`
  padding: 1.2rem 2rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #b71c50;
  width: 20rem;
  font-size: 1.6rem;
  color: #ebebeb;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-3px);
  }
`;
