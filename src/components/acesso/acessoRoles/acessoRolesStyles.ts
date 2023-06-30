import styled, { keyframes } from 'styled-components';

const animation = keyframes`
 0% {
        transform: scaleY(0)
    }
    80% {
        transform: scaleY(1.1)
    }
    100% {
        transform: scaleY(1)
    }
  
`;

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

export const Permissions = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 600px;
  justify-content: space-between;
  margin: 2.5rem 0 0 2.5rem;
  gap: 0.5rem;
`;

export const Permission = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & section {
    display: flex;
    align-items: center;
    padding: 0.5rem;

    &:hover {
      background-color: #3d3d3d;
    }

    &.active {
      background-color: #4f535f;
    }
  }

  & section.section-2 {
    & svg {
      color: #6c6c6c;
    }
  }

  & div.block {
    display: flex;
    gap: 0.5rem;
    min-width: 20.5rem;
    cursor: pointer;

    & p {
      color: #fff;
      margin-right: 1.6rem;
      font-size: 1.6rem;
    }
  }

  & svg {
    font-size: 2rem;
    cursor: pointer;
  }

  & div.small {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-left: 2.5rem;
    animation: ${animation} 400ms ease-in-out forwards;
    transform-origin: top center;

    &:hover {
      background-color: #3d3d3d;
    }

    & svg {
      color: #6c6c6c;
    }

    & p {
      font-size: 1.4rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: #fff;
    }
  }
`;

export const NoRoles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  text-align: center;
  justify-content: center;
  align-items: center;

  & img {
    width: 30rem;
  }

  & h1 {
    font-weight: 300;
  }
`;
