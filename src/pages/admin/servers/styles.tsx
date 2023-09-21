import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

`;


export const Wrapper = styled.div`
 
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 560px) {
    min-width: 100%;
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

export const SpinnerDiv = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-self: center;
`;

export const LojasContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 9;
`;
