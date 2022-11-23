import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 35%;
  padding: 6rem 3rem 6rem 3rem;
  background-color: #1d1d1d;
  box-shadow: -16px 0px 37px -26px rgba(0, 0, 0, 0.47);
  border-left: 0.5px solid #3a3a3a;

  display: flex;
  justify-content: space-between;

  & span {
    font-size: 2.4rem;
    cursor: pointer;
    height: fit-content;
  }
`;
