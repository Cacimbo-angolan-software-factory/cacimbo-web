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
    nome: '',
    email: '',
    parceiro: '',
    tipo: '',
    id_perfil: '',
  });
  const { empresas } = useContext(LicContext);
  const { perfis } = useSelector((state: any) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getPerfis());
  }, [dispatch]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {};

  return (
    <Container>
      <h1>Criar Usuário</h1>

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
          <label htmlFor='nome'>Email</label>
          <input
            name='nome'
            value={value.email}
            onChange={handleChange}
            type='text'
          />
        </div>

        <SelectInput
          value={value.parceiro}
          labelName='Parceiro'
          handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue({ ...value, parceiro: e.target.value })
          }
        >
          {empresas.map((empresa) => (
            <MenuItem value={empresa.Nome}>{empresa.Nome}</MenuItem>
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
            <MenuItem value={perfil.id}>{perfil.perfil}</MenuItem>
          ))}
        </SelectInput>

        <Div className='buttons'>
          <button onClick={() => setCriarUser(false)}>Cancelar</button>
          <button type='submit'>
            {/* {isLoading ? 'Aguarde...' : 'Criar empresa'} */}
            Criar usuário
          </button>
        </Div>
      </Form>
    </Container>
  );
};

export default CriarUsuario;
