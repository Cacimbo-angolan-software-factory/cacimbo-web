import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  bottom: 8rem;
  right: 5rem;
  width: 20rem;
  height: 20rem;
  padding-top: 1rem;
  background-color: #1e1e1e;
  color: #bebebe;
  z-index: 999;
  border-radius: 1rem;
  border: 0.5px solid #3a3a3a;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
