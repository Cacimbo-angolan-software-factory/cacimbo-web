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

  & div {
    display: flex;
    align-items: center;
  }

  & h2 {
    margin-bottom: 0.5rem;
    gap: 0.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;

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
    justify-content: space-between;

    & p {
      color: #fff;
      margin-right: 1.6rem;
      font-size: 1.6rem;
    }

    & svg.delete {
      color: #b71c50;
      font-size: 1.8rem;
    }
  }

  & svg {
    font-size: 2rem;
    cursor: pointer;
  }

  & svg.delete {
    color: #b71c50;
  }

  & div.small {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
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

    & svg.delete {
      color: #b71c50;
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

export const Span = styled.span`
  margin-left: 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.2s;
  font-size: 1.6rem;

  &:hover {
    background-color: #5a5a5a;
    padding: 0 0.3rem;
    border-radius: 0.5rem;
  }
`;

// Modal options

export const ModalOptions = styled.main`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 15rem;
  height: fit-content;
  padding: 1rem;
  border-radius: 1rem;
  background-color: #5a5a5a;
  position: absolute;
  top: 0;
  left: 0;

  & button {
    display: flex;
    /* align-items: center; */
    gap: 0.5rem;
    padding: 1rem;
    background-color: inherit;
    border: none;
    color: #fff;
    cursor: pointer;

    & svg {
      font-size: 1.4rem;
    }

    &:hover {
      background-color: #808080;
      border-radius: 0.8rem;
    }
  }

  & button:last-child {
    & svg {
      color: red;
    }
  }
`;

export const Msg = styled.h2`
  text-align: center;
  margin-top: 4rem;
`;

// Card message for delete role
export const Card = styled.main`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background-color: #5d5d5d;
  width: 40rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  gap: 2rem;
  font-size: 1.6rem;
  z-index: 10;

  & div {
    display: flex;
    gap: 1rem;

    & button {
      padding: 0.8rem 2rem;
      font-size: 1.5rem;
      border-radius: 0.5rem;
      border: none;
      cursor: pointer;
      color: #ebebeb;
    }

    & button:first-child {
      background-color: #bebebe;
      color: #242424;
    }

    & button:last-child {
      background-color: #b71c50;
    }
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9;
`;
