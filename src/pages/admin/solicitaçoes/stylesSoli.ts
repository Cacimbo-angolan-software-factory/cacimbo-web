import styled from 'styled-components';

export const Container = styled.table`
  width: 100%;
  background-color: #5555;
  padding: 1.5rem;
  border-radius: 1rem;

  th {
    border-bottom: 1px solid #bebebe;
    /* border: 1px solid ; */
    padding: 0 1rem 1.5rem 1rem;
    text-align: left;
    font-size: 1.4rem;
  }

  td {
    padding: 1.5rem 1rem;
    font-size: 1.4rem;
    font-weight: 600;
  }
`;

export const ContainerHeader = styled.tr``;

export const Wrapper = styled.tr`
  & td.big-text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 10rem;
  }

  & td.data {
    font-weight: 400;
    color: #bebebe;
  }

  & td {
    & span {
      border-radius: 2rem;
      padding: 0.5rem 1.2rem;
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
    }

    & button.interesse {
      background-color: #766868;
      color: #ebebeb;
    }
  }

  div {
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
  }
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
