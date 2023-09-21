import styled from 'styled-components';



export const Container = styled.div`
  display: flex;
  height: 320px;
  width: 320px;
  flex-direction:column;
  align-items: center;
  border-radius: 0.5rem;
  border: 0.5px solid #3a3a3a;
  
  padding:1rem;
  background: rgba(205,200,200,0.1);  
`;
export const ContainerHeader = styled.div`
display: flex;
height: 30%;
width: 100%;
flex-direction:row;
align-items: center;
justify-content: flex-start;
& p{
  width: 80%;
  margin-left:12px;
  font-size: 1.4rem;
  font-weight: 500;

`;

export const Online=styled.div`
  display: flex;
  height: 42px;
  width: 42px;
  align-items: center;
  justify-content: center;
  border-radius: 21px;
  background: #32B768;
  & span{
    font-size: 18px;
    color:  #F0F0F0;
   
  }
`
export const Offline=styled.div`
  display: flex;
  height: 42px;
  width: 42px;
  align-items: center;
  justify-content: center;
  border-radius: 21px;
  background:  #D0254E;
  & span{
    
    font-size: 18px;
    color: #F0F0F0;
   
  }

`


export const ContainerDiv = styled.div`
  display: flex;
  height: 30%;
  width: 100%;
  flex-direction:row;
  align-items: center;
  justify-content: flex-start;
  & p{
    width: 80%;
    margin-left:12px;
    font-size: 1.4rem;
    font-weight: 400;

  }
  & div{
    
    display: flex;
    height: 42px;
    width: 42px;
    align-items: center;
    justify-content: center;
    border-radius: 21px;
    border: 0.5px solid #3a3a3a;
    & span{
      font-size: 18px;
      color:  #F0F0F0;
    }

  }
`;
export const Div=styled.div`
  
`


export const Buttons = styled.div`
  display: flex;
  gap: 0.8rem;
  max-width: 15rem;

  & button:first-child {
    background-color: #b71c50;
    color: #ebebeb;
  }

  & button:last-child {
    background-color: #766868;
    color: #ebebeb;
  }
`;

export const SmallDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & ul {
    display: flex;
    gap: 0.2rem;
    transition: 0.2s all ease-in;

    &:hover {
      gap: 0.5rem;
    }

    & li {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 3rem;
      width: 3rem;
      border-radius: 50%;
      font-weight: 600;
      background-color: RGBA(183, 28, 80, 0.2);
      color: #bebebe;
    }
  }
`;
