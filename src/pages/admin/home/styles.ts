import styled from 'styled-components';

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 0px;
  padding: '32px 6.5rem 0';
  margin: 0;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 500px) {
    margin-top: 6rem;
  }
  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
  @media screen and (max-width: 350px) {
    padding: 0;
  }
`;

export const Title = styled.p`
  font-size: 3rem;
  font-weight: 300;
  letter-spacing: 0.1rem;
`;

export const BtnsDiv = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  & button {
    padding: 1rem;
    border-radius: 0.5rem;
    border: none;
    font-size: 1.6rem;
    cursor: pointer;
    display: flex;
    /* align-items: center; */
    gap: 0.5rem;

    & svg {
      font-size: 1.8rem;
    }
  }

  & button.criar {
    background-color: #b71c50;
    color: #fff;
  }

  & button.aprovar {
    background-color: #55c743;
    color: #fff;
  }

  & button.ver {
    background-color: #585858;
    color: #fff;
  }
`;
