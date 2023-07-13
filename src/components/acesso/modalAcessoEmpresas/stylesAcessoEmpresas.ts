import styled from 'styled-components';

export const Wrapper = styled.div`
  display: none;
  position: fixed;
  z-index: 11;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  max-width: 40.5rem;
  max-height: 45.5rem;
  background-color: #1d1d1d;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 0.5rem;
  border: 1px solid #383838;
  transition: all 0.2s ease-in;
  overflow: auto;

  &.open {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  & h1 {
    padding: 2rem;
  }

  & ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & li {
      padding: 2rem;
      list-style: none;
      font-size: 1.4rem;
      background-color: #383838;
      cursor: pointer;
    }
  }
`;

export const Input = styled.input`
  padding: 1rem;
  border: 1px solid #383838;
  border-radius: 0.5rem;
  background-color: #242424;
  color: #fff;
  width: 22rem;

  margin: 0 0 2rem 2rem;
`;
