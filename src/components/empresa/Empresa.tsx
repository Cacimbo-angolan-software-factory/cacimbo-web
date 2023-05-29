import React from 'react';
import { Container } from './stylesEmpresa';

interface EmpresaProps {
  empresa: {
    id: number;
    Nome: string;
    email: string;
    Nif: string;
  };
  handleClick?: () => void;
  setEmpresaSelected?: (id: any) => void;
}

const Empresa: React.FC<EmpresaProps> = ({
  empresa,
  handleClick,
  setEmpresaSelected,
}) => {
  return (
    <Container
      onClick={() => {
        handleClick && handleClick();
        setEmpresaSelected && setEmpresaSelected(empresa);
      }}
    >
      <div>
        <h1>{empresa.Nome}</h1>
        <p>{empresa.email}</p>
        <p>{empresa.Nif}</p>
      </div>
    </Container>
  );
};

export default Empresa;
