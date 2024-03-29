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

  @media (max-width: 940px) {
    flex-direction: column;
    gap: 2rem;
    align-items: flex-start;
  }
`;

export const InputSearch = styled.input`
  padding: 1.2rem;
  border-radius: 0.5rem;
  font-size: 1.4rem;
  border: 1px solid #fff;
  background-color: inherit;
  color: #fff;
  width: 25%;

  @media (max-width: 940px) {
    width: 80%;
  }

  @media (max-width: 560px) {
    width: 100%;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;
