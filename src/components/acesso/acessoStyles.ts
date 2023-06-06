import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;

  & h2 {
    border: 1px solid #b71c50;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }

  & h2.active {
    background: #b71c50;
  }

  & h2.inactive {
    color: #666666;
  }

  & h2:first-child {
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }

  & h2:last-child {
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
`;
