import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 1.5rem;
  justify-content: space-between;
  background-color: #5555;
  border-radius: 0.5rem;
  width: 100%;
  cursor: pointer;

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
