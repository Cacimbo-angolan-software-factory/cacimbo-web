import styled from 'styled-components';

export const Container = styled.table`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Wrapper = styled.div`
  min-width: 35rem;
  max-width: 35rem;
  margin-bottom: 2rem;
  padding: 2rem;
  background-color: #5555;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-between;

  & h3 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 10rem;
  }

  & div.companies {
    display: flex;
    justify-content: space-between;

    & div {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      & svg {
        font-size: 1.3rem;
      }
    }
  }

  & div.nif-status {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & p {
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  & p.date {
    color: #6c6c6c;
  }

  & span {
    border-radius: 0.5rem;
    font-size: 1.2rem;
    padding: 0.5rem 1.2rem;
    font-weight: 600;
  }

  & span.number {
    background-color: rgb(0, 150, 255, 0.2);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: fit-content;
  }

  & span.comum {
    background-color: RGBA(95, 108, 218, 0.2);
    color: #5f6cda;
  }

  & span.renovacao {
    background-color: RGBA(183, 28, 80, 0.2);
    color: #b71c50;
  }

  & span.padronizar {
    background-color: RGBA(0, 163, 0, 0.2);
    color: #00a300;
  }

  & button {
    padding: 0.8rem;
    border: none;
    border-radius: 1rem;
    font-size: 1.4rem;
    gap: 0.5rem;
    cursor: pointer;
    display: flex;
    background-color: #00a300;
    color: #ebebeb;
    display: flex;
    align-items: center;
    margin: 0;
    width: fit-content;
  }

  & button.interesse {
    background-color: #766868;
    color: #ebebeb;
  }

  /* div {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;

    & button {
      padding: 1rem;
      border: none;
      border-radius: 0.5rem;
      font-size: 1.6rem;
      cursor: pointer;
      display: flex;
      gap: 0.5rem;
      background-color: #00a300;
      color: #ebebeb;
      display: flex;
      align-items: center;
    }

    & button.interesse {
      background-color: #766868;
      color: #ebebeb;
    }
  } */
`;

export const SearchAndFilters = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InputSearch = styled.input`
  padding: 1.2rem;
  border-radius: 0.5rem;
  font-size: 1.6rem;
  border: 1px solid #fff;
  background-color: inherit;
  color: #fff;
  width: 25%;

  @media (max-width: 700px) {
    width: 80%;
  }

  @media (max-width: 560px) {
    width: 100%;
  }
`;

export const DivFilters = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  & span {
    background: rgba(56, 56, 56, 0.6);
    border-radius: 1rem;
    padding: 0.5rem 1.2rem;
    cursor: pointer;
    transition: all 0.2s;

    & h2:hover {
      color: #b71c50;
    }

    &.active {
      border: 0.5px solid #b71c50;
    }
  }

  & svg {
    font-size: 2rem;
    cursor: pointer;
  }
`;

export const EmptyDivState = styled.div`
  display: flex;
  margin-top: 5rem;
  justify-content: center;

  & p {
    font-size: 1.6rem;
  }
`;

export const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  gap: 2rem;
`;

export const Card = styled.div`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: #5555;
  padding: 1.5rem 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-size: 1.4rem;
  min-width: 40rem;

  & p.location {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  & button {
    padding: 1rem;
    border: none;
    border-radius: 0.5rem;
    font-size: 1.4rem;
    background-color: #33c4ff;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    width: 100%;
  }

  & p.id {
    display: flex;
    gap: 1rem;
    align-items: center;

    & div.modulos {
      display: flex;
      gap: 1rem;
    }
  }

  & span {
    height: 0.8rem;
    width: 0.8rem;
    border-radius: 50%;
    background: #33c4ff;
  }
`;
