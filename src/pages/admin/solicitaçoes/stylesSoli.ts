import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  @media (max-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

export const InputSearch = styled.input`
  padding: 1.5rem;
  border-radius: 0.5rem;
  font-size: 1.6rem;
  border: 1px solid #fff;
  background-color: inherit;
  color: #fff;
  width: 50%;

  @media (max-width: 700px) {
    width: 80%;
  }

  @media (max-width: 560px) {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border: 0.5px solid #3a3a3a;
  background-color: #5555;
  border-radius: 0.5rem;
  font-size: 1.6rem;
  gap: 1rem;
  height: 100%;
  max-width: 50rem;
  justify-content: space-between;

  & p {
    color: #6c6c6c;
  }

  & h2.nif {
    font-weight: 400;
  }

  @media (max-width: 768px) {
    width: 100%;
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
