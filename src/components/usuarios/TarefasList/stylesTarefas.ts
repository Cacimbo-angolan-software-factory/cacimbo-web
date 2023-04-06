import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 0.5rem;
  background: rgba(56 56, 56, 0.6);
  border-radius: 0.5rem;
  justify-content: space-between;

  & p {
    font-size: 1.2rem;
  }

  & p:last-child {
    color: #bababa;
  }
`;
