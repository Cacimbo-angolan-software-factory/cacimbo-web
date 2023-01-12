import styled from 'styled-components';

export const StatsContainer = styled.div`
  display: flex;
  gap: 3rem;
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & h2 {
    font-size: 3.2rem;
    color: #b71c50;
  }

  & p {
    font-size: 3.2rem;
    font-weight: 300;
  }
`;
