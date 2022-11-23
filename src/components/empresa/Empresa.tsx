import React from 'react';
import { RiMore2Fill } from 'react-icons/ri';

import { Container } from './stylesEmpresa';

interface EmpresaProps {
  empresa: {
    id: number;
    Nome: string;
    email: string;
    Nif: string;
  };
  handleOpen?: () => void;
}

const Empresa: React.FC<EmpresaProps> = ({ empresa, handleOpen }) => {
  console.log(empresa);

  return (
    <Container>
      <div>
        <h1>{empresa.Nome}</h1>
        <p>{empresa.email}</p>
        <p>{empresa.Nif}</p>
      </div>

      <span onClick={handleOpen}>
        <RiMore2Fill />
      </span>
    </Container>
  );
};

export default Empresa;
