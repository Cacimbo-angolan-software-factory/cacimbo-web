import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StatsContainer = styled.div`
  display: flex;
  gap: 3rem;

  @media (max-width: 630px) {
    margin-top: 6rem;
  }

  @media (max-width: 500px) {
    display: none;
  }
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
