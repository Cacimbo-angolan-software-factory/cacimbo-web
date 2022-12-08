import React from 'react';

import { Container, Form, Div } from './stylesCriarEmpresa';

interface CriarEmpresaProps {
  setCriarEmpresa: (value: boolean) => void;
}

const CriarEmpresa: React.FC<CriarEmpresaProps> = ({ setCriarEmpresa }) => {
  return (
    <Container>
      <h1>Parceiros</h1>

      <Form>
        <div>
          <label htmlFor='nome'>Nome</label>
          <input type='text' />
        </div>
        <div>
          <label htmlFor='responsavel'>Responsável</label>
          <input type='text' />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='text' />
        </div>
        <div>
          <label htmlFor='telefone'>Telefone</label>
          <input type='text' />
        </div>
        <div>
          <label htmlFor='nif'>Nif</label>
          <input type='text' />
        </div>
        <div>
          <label htmlFor='sede'>Provincia sede</label>
          <input type='text' />
        </div>
      </Form>

      <Div>
        <button onClick={() => setCriarEmpresa(false)}>Cancelar</button>
        <button>Criar empresa</button>
      </Div>
    </Container>
  );
};

export default CriarEmpresa;
