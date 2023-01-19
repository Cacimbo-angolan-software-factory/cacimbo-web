import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  bottom: 8rem;
  right: 5rem;
  width: 20rem;
  height: 20rem;
  padding: 2rem 1rem;
  background-color: #cfcfcf;
  color: #1d1d1d;
  z-index: 999;
  border-radius: 1rem;
  border: 0.5px solid #3a3a3a;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
