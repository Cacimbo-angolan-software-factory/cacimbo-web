import styled from 'styled-components';

export const Container = styled.div``;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  background: rgba(56 56, 56, 0.6);
  border-radius: 0.5rem;
  padding: 1.5rem;

  & > div {
    display: flex;
    gap: 2rem;
    align-items: center;
  }

  & span {
    font-size: 2rem;
    cursor: pointer;
  }

  & h3 {
    font-weight: 400;
    color: #bababa;
  }
`;
