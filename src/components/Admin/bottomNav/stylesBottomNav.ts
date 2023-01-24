import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 3rem 0 3rem 0;
  display: flex;
  gap: 2rem;
  font-size: 2.4rem;
  color: #bababa;

  align-self: flex-end;

  & span {
    cursor: pointer;
    transition: all 0.2s;
  }

  & span:hover {
    color: #f5f5f5;
  }

  &.fixed {
    position: fixed;
    bottom: 0;
    z-index: 999;
    background-color: #1d1d1d;
    padding: 2rem 0 2rem 6rem;
    border-bottom: 0.5px solid #3a3a3a;
    box-shadow: 0px 11px 11px -14px rgba(0, 0, 0, 0.75);
  }
`;

export const ModalItem = styled.p`
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  padding-bottom: 1rem;
  border-bottom: 1px solid #bebebe;

  &:hover {
    color: #b71c50;
    transform: translateX(3px);
  }
`;
