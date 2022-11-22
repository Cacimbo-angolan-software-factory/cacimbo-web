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
`;
