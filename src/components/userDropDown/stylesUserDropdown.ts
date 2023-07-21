import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 1.6rem;
  border-radius: 0.5rem;
  height: 4rem;
  font-size: 1.4rem;
  color: #ebebeb;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  cursor: pointer;
  position: relative;

  @media (max-width: 630px) {
    display: none;
  }

  & ul {
    display: none;
    position: absolute;
    top: 4rem;
    left: 0;
    padding: 1rem 0;
    min-width: 200px;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }

  & li {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.8rem 1rem;
    width: 100%;

    &:hover {
      background-color: #2d2d2d;
    }
  }

  &:hover ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const DropDown = styled.ul``;
