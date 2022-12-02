import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  @media (max-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
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
