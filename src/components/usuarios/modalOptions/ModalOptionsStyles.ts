import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 42rem;
  right: 6rem;
  width: 20rem;
  height: 20rem;
  gap: 0.5rem;
  padding-top: 1rem;
  background-color: #1e1e1e;
  color: #1d1d1d;
  z-index: 999;
  border-radius: 1rem;
  border: 0.5px solid #3a3a3a;
  color: #bebebe;
  display: flex;
  flex-direction: column;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  & p {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    padding: 0.5rem 1.5rem;
    transition: 0.2s;
    &:hover {
      background: rgba(56 56, 56, 0.6);
    }
  }
`;
