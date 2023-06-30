import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const BtnCreate = styled.button`
  padding: 0.8rem 2rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #b71c50;
  color: #fff;
  cursor: pointer;
  width: fit-content;

  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease-in;
  font-size: 1.6rem;

  & svg {
    font-size: 1.8rem;
  }

  &:hover {
    padding: 0.8rem 2.35rem;
  }
`;

export const EmptyStore = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;

  & img {
    width: 38.5rem;
  }
`;
