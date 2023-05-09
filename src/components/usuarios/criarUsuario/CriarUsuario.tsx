import React, { useState, useEffect, useContext } from 'react';

import { Container, Div, Form } from './criarUsuarioStyles';
import SelectInput from '../../SelectTextField';
import { MenuItem } from '@mui/material';
import { LicContext } from '../../../context';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { getPerfis, createUser } from '../../../redux/userFeatures/usersSlice';

interface CriarUsuarioProps {
  setCriarUser: (value: boolean) => void;
}

const CriarUsuario: React.FC<CriarUsuarioProps> = ({ setCriarUser }) => {
  const [value, setValue] = useState({
    name: '',
    email: '',
    parceiro_id: '',
    tipo: '',
    id_perfil: '',
  });
  const { empresas } = useContext(LicContext);
  const { perfis, users, isLoading, isError } = useSelector(
    (state: any) => state.user
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getPerfis());
    console.log(empresas);
    console.log(users.data);
  }, [dispatch]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !value.name ||
      !value.email ||
      !value.parceiro_id ||
      !value.tipo ||
      !value.id_perfil
    ) {
      alert('Preencha todos os campos');
      return;
    }

    let id_perfil = perfis.filter(
      (perfil: any) => perfil.perfil === value.id_perfil
    )[0].id;

    let parceiro_id = empresas.filter(
      (parceiro: any) => parceiro.Nome === value.parceiro_id
    )[0].id;

    dispatch(
      createUser({
        name: value.name,
        email: value.email,
        parceiro_id: parceiro_id,
        tipo: value.tipo,
        id_perfil: id_perfil,
      })
    );

    setValue({
      name: '',
      email: '',
      parceiro_id: '',
      tipo: '',
      id_perfil: '',
    });
    setCriarUser(false);
  };

  return (
    <Container>
      <h1>Criar Usuário</h1>

      <Form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='nome'>Nome</label>
          <input
            name='name'
            value={value.name}
            onChange={handleChange}
            type='text'
          />
        </div>
        <div>
          <label htmlFor='nome'>Email</label>
          <input
            name='email'
            value={value.email}
            onChange={handleChange}
            type='text'
          />
        </div>

        <SelectInput
          value={value.parceiro_id}
          labelName='Parceiro'
          handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue({ ...value, parceiro_id: e.target.value })
          }
        >
          {empresas.map((empresa) => (
            <MenuItem key={empresa.id} value={empresa.Nome}>
              {empresa.Nome}
            </MenuItem>
          ))}
        </SelectInput>

        <SelectInput
          value={value.tipo}
          labelName='Tipo'
          handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue({ ...value, tipo: e.target.value })
          }
        >
          <MenuItem value={'Admin'}>Admin</MenuItem>
          <MenuItem value={'Parceiro'}>Parceiro</MenuItem>
          <MenuItem value={'User'}>User</MenuItem>
          <MenuItem value={'Cacimbo Adm'}>Cacimbo Adm</MenuItem>
          <MenuItem value={'Cacimbo Ger'}>Cacimbo Ger</MenuItem>
          <MenuItem value={'Cacimbo Sup'}>Cacimbo Sup</MenuItem>
          <MenuItem value={'Cacimbo User'}>Cacimbo User</MenuItem>
        </SelectInput>

        <SelectInput
          value={value.id_perfil}
          labelName='Perfil'
          handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue({ ...value, id_perfil: e.target.value })
          }
        >
          {perfis.map((perfil: any) => (
            <MenuItem key={perfil.id} value={perfil.perfil}>
              {perfil.perfil}
            </MenuItem>
          ))}
        </SelectInput>

        <Div className='buttons'>
          <button onClick={() => setCriarUser(false)}>Cancelar</button>
          <button type='submit'>
            {isLoading ? 'Aguarde...' : 'Criar usuário'}
          </button>
        </Div>
      </Form>
    </Container>
  );
};

export default CriarUsuario;