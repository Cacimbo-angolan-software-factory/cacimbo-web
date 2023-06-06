import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
`;

export const SpinnerDiv = styled.div`
  display: flex;
  align-self: center;
  margin: 6rem 0;
`;

// Role
export const RoleContainer = styled.div`
  display: flex;
  flex-direction: column;

  & h2 {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;

    & svg {
      font-size: 2rem;
    }
  }

  & p {
    margin-left: 2.5rem;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #6c6c6c;
  }
`;
