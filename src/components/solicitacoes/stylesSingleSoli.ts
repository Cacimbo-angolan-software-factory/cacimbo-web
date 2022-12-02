import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border: 0.5px solid #3a3a3a;
  background-color: #5555;
  border-radius: 0.5rem;
  font-size: 1.6rem;
  gap: 1rem;
  height: 100%;
  max-width: 50rem;

  & p {
    color: #6c6c6c;
  }

  & h2.nif {
    font-weight: 400;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
