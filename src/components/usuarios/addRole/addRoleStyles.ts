import styled from 'styled-components';

export const Container = styled.main`
  position: fixed;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  max-width: 40.5rem;
  max-height: 32.5rem;
  background-color: #1d1d1d;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 0.5rem;
  border: 1px solid #383838;
  transition: all 0.2s ease-in;
  overflow: auto;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;

  & svg {
    cursor: pointer;
    font-size: 2rem;
  }
`;

export const Form = styled.form`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Select = styled.select`
  padding: 1rem 0;
  border-radius: 0.5rem;
  border: 1px solid #383838;
  background-color: #242424;
  color: #fff;
  font-size: 1.2rem;
`;

export const SectionRoles = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
`;

export const FooterDiv = styled.div`
  padding: 0.5rem 2rem;
  bottom: 0;
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 3rem;

  & button {
    padding: 0.8rem 2rem;
    font-size: 1.5rem;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    color: #ebebeb;
  }

  & button:first-child {
    background-color: #bebebe;
    color: #242424;
  }

  & button:last-child {
    background-color: #b71c50;
  }
`;
