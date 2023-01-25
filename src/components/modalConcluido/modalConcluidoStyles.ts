import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 40rem;
  background: #242424;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem;
  border-radius: 1rem;
  align-items: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  & img {
    width: 100%;
  }
`;
