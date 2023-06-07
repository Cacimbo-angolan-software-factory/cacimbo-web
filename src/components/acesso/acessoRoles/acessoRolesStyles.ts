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

export const Permissions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 2rem;
  margin: 2.5rem 0 0 2.5rem;
  gap: 1.5rem;
`;

export const Permission = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & div {
    background-color: #3d3d3d;
    padding: 0.8rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    min-width: 20.5rem;

    & span {
      display: flex;
      justify-content: center;
      align-items: center;

      & input {
        height: 0;
        width: 0;
        visibility: hidden;
      }

      & label {
        cursor: pointer;
        text-indent: -9999px;
        width: 4rem;
        height: 2rem;
        background: grey;
        display: block;
        border-radius: 1rem;
        position: relative;
      }

      & label:after {
        content: '';
        position: absolute;
        top: 0.1rem;
        left: 0.1rem;
        width: 1.8rem;
        height: 1.8rem;
        background: #fff;
        border-radius: 1rem;
        transition: 0.3s;
      }

      & input:checked + label {
        background: #b71c50;
      }

      & input:checked + label:after {
        left: calc(100% - 0.1rem);
        transform: translateX(-100%);
      }

      & label:active:after {
        width: 3rem;
      }
    }

    & p {
      color: #fff;
      margin-right: 1.6rem;
      font-size: 1.6rem;
    }

    & button {
      background: inherit;
      border: 1px solid #6c6c6c;
      padding: 0.5rem;
      border-radius: 0.5rem;
      color: #6c6c6c;
      cursor: pointer;
    }
  }

  & div.youCan {
    margin-left: 3rem;
  }

  & svg {
    font-size: 2rem;
    cursor: pointer;
  }
`;
