import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;

  & h1 {
    display: flex;
    align-items: center;
    gap: 1rem;

    & svg {
      font-size: 2rem;
    }
  }

  & span {
    font-size: 2.4rem;
    cursor: pointer;
    height: fit-content;
  }
`;

export const Text = styled.p`
  font-size: 1.6rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Div = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 2rem;

  & button.cancel {
    background-color: #bebebe;
    color: #1d1d1d;
  }

  @media (max-width: 768px) {
    justify-content: space-between;
    gap: 1rem;

    & button {
      width: 100%;
    }
  }

  @media (max-width: 630px) {
    flex-direction: column;

    & button:nth-child(2) {
      margin-top: 0.5rem;
    }
  }
`;

export const Button = styled.button`
  background-color: #b71c50;
  border: 0.5px solid #3a3a3a;
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  font-size: 1.6rem;
  color: #ebebeb;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 3rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-3px);
  }
`;

// SideBarLicencas.tsx
export const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  margin-bottom: 3rem;
  gap: 2rem;

  & svg {
    font-size: 2.5rem;
    cursor: pointer;
  }

  & h1 {
    text-align: center;
  }
`;

export const LicencasDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  overflow-y: scroll;
  height: 100vh;
`;

export const Licenca = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  background: rgba(56 56, 56, 0.6);
  border-radius: 0.5rem;
`;

export const NameP = styled.p`
  font-size: 1.4rem;
  margin: 0;
`;

export const SmallP = styled.p`
  color: #bababa;
  font-size: 1.2rem;
`;

export const SemLicenca = styled.h2`
  text-align: center;
  font-size: 2rem;
`;
// sidebarEditar.tsx

export const H1 = styled.h1`
  margin-bottom: 3rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  & div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  & label {
    font-size: 1.4rem;
  }

  & input {
    padding: 0.5rem;
    border-radius: 0.5rem;
  }
`;
