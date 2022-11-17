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
