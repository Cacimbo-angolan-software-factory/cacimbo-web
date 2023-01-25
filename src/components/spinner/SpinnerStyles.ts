import styled from 'styled-components';

export const Container = styled.span`
  width: 48px;
  height: 48px;
  border: 5px solid #b71c50;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  margin: auto;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
