import styled from 'styled-components';

export const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: #1d1d1d;
  padding: 2rem 6rem;
  border-bottom: 0.5px solid #3a3a3a;
  box-shadow: 0px 11px 11px -14px rgba(0, 0, 0, 0.75);

  display: flex;
  align-items: center;
  justify-content: space-between;

  & span {
    font-size: 3.6rem;
    cursor: pointer;
    transition: 0.2s all;

    &:hover {
      color: #b71c50;
    }
  }

  @media (min-width: 630px) {
    display: none;
  }
`;

export const UserLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  background-color: #b71c50;
`;
