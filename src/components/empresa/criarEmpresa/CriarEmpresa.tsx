import React from 'react';

import { Container, Form, Div } from './stylesCriarEmpresa';

interface CriarEmpresaProps {
  setCriarEmpresa: (value: boolean) => void;
}

const CriarEmpresa: React.FC<CriarEmpresaProps> = ({ setCriarEmpresa }) => {
  const [value, setValue] = React.useState({
    nome: '',
    responsavel: '',
    email: '',
    telefone: '',
    nif: '',
    sede: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  return (
    <Container>
      <h1>Parceiros</h1>

      <Form>
        <div>
          <label htmlFor='nome'>Nome</label>
          <input
            name='nome'
            value={value.nome}
            onChange={handleChange}
            type='text'
          />
        </div>
        <div>
          <label htmlFor='responsavel'>Responsável</label>
          <input
            name='responsavel'
            value={value.responsavel}
            onChange={handleChange}
            type='text'
          />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            name='email'
            value={value.email}
            onChange={handleChange}
            type='text'
          />
        </div>
        <div>
          <label htmlFor='telefone'>Telefone</label>
          <input
            name='telefone'
            value={value.telefone}
            onChange={handleChange}
            type='number'
          />
        </div>
        <div>
          <label htmlFor='nif'>Nif</label>
          <input
            name='nif'
            value={value.nif}
            onChange={handleChange}
            type='text'
          />
        </div>
        <div>
          <label htmlFor='sede'>Provincia sede</label>
          <input
            name='sede'
            value={value.sede}
            onChange={handleChange}
            type='text'
          />
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
