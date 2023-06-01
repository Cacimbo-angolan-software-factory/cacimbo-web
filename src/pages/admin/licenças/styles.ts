import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export const Pagination = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  width: 55%;

  & li {
    list-style: none;
    font-size: 1.6rem;
    text-align: center;
    cursor: pointer;
    background-color: #5555;
    padding: 0.5rem;
    border-radius: 0.3rem;
  }

  .active {
    background-color: #b71c50;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InputSearch = styled.input`
  padding: 1.2rem;
  border-radius: 0.5rem;
  font-size: 1.4rem;
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
