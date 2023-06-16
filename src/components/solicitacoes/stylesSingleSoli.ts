import styled from 'styled-components';

export const Container = styled.div`
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
`;

export const Buttons = styled.div`
  display: flex;
  gap: 0.8rem;
  max-width: 15rem;

  & button:first-child {
    background-color: #b71c50;
    color: #ebebeb;
  }

  & button:last-child {
    background-color: #766868;
    color: #ebebeb;
  }
`;

export const SmallDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & ul {
    display: flex;
    gap: 0.2rem;
    transition: 0.2s all ease-in;

    &:hover {
      gap: 0.5rem;
    }

    & li {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 3rem;
      width: 3rem;
      border-radius: 50%;
      font-weight: 600;
      background-color: RGBA(183, 28, 80, 0.2);
      color: #bebebe;
    }
  }
`;
