import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 1.5rem;
  justify-content: space-between;
  background: rgba(56 56, 56, 0.6);
  border-radius: 0.5rem;

  & div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  & p {
    font-size: 1.3rem;
    color: #bababa;
  }

  & span {
    font-size: 2rem;
    cursor: pointer;
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 2rem;
`;

export const Button = styled.button`
  background-color: #b71c50;
  border: 0.5px solid #3a3a3a;
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  font-size: 1.6rem;
  color: #ebebeb;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 3rem;
  cursor: pointer;
  transition: all 0.2s;
  /* width: 100%; */

  &:hover {
    transform: translateY(-3px);
  }
`;
