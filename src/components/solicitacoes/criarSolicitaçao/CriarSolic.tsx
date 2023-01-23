import React from 'react';

import { Container, Form, Div, DivChild } from './stylesCriarSol';

interface CriarSolicitaçaoProps {
  setClick: (value: boolean) => void;
}

const CriarSolicitaçao: React.FC<CriarSolicitaçaoProps> = ({ setClick }) => {
  return (
    <Container>
      <h1>Solicitação</h1>

      <Form>
        <div>
          <label htmlFor='nif'>Nif</label>
          <input type='text' />
        </div>
        <div>
          <label htmlFor='empresa'>Empresa</label>
          <input type='text' />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' />
        </div>
        <div>
          <label htmlFor='pais'>País</label>
          <input type='text' />
        </div>
        <DivChild>
          <div>
            <label htmlFor='provincia'>Provincia</label>
            <input type='text' />
          </div>
          <div>
            <label htmlFor='address'>Endereço</label>
            <input type='address' />
          </div>
        </DivChild>
        <DivChild>
          <div>
            <label htmlFor='cargo'>Cargo</label>
            <input type='text' />
          </div>
          <div>
            <label htmlFor='responsavel'>Responsável</label>
            <input type='name' />
          </div>
        </DivChild>
        <DivChild>
          <div>
            <label htmlFor='licença'>Tipo de licença</label>
            <input type='text' />
          </div>
          <div>
            <label htmlFor='licenças'>Licenças</label>
            <input type='text' />
          </div>
          <div>
            <label htmlFor='Canl'>Canal</label>
            <input type='text' />
          </div>
        </DivChild>
      </Form>

      <Div>
        <button onClick={() => setClick(false)}>Cancelar</button>
        <button>Criar solicitação</button>
      </Div>
    </Container>
  );
};

export default CriarSolicitaçao;
