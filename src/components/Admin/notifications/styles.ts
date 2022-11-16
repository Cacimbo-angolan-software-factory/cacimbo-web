import styled from 'styled-components';

export const NotificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  /* height: 35rem; */
  /* overflow-y: scroll; */
  width: 90%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const NotificationItem = styled.div`
  display: flex;
  padding: 3rem;
  background: linear-gradient(
    93.47deg,
    rgba(217, 217, 217, 0.16) 0%,
    rgba(217, 217, 217, 0.08) 124.89%
  );
  backdrop-filter: blur(50px);
  border-radius: 2rem;

  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-size: 1.6rem;

  &:hover {
    background: linear-gradient(
      93.47deg,
      rgba(217, 217, 217, 0.4) 35.9%,
      rgba(217, 217, 217, 0.08) 124.89%
    );
  }
`;
