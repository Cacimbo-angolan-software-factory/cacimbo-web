import styled from 'styled-components';

export const Block = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 530px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const Input = styled.input`
  padding: 1rem;
  border: 1px solid #383838;
  border-radius: 0.5rem;
  background-color: #242424;
  color: #fff;
  width: 22rem;

  margin-bottom: 2rem;

  @media (max-width: 530px) {
    width: 100%;
  }
`;
