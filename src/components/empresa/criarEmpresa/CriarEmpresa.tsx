import { MenuItem } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import SelectInput from '../../SelectTextField';
import { criarEmpresa } from '../../../redux/empresaFeatures/empresaSlice';
import { useDispatch, useSelector } from 'react-redux';

import {
  Container,
  Form,
  Div,
  SpinnerDiv,
  Overlay,
} from './stylesCriarEmpresa';
import { AppDispatch } from '../../../redux/store';
import ModalConcluido from '../../modalConcluido/ModalConcluido';
import { LicContext } from '../../../context';
import Spinner from '../../spinner/Spinner';

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
    tipo: '',
  });
  const dispatch = useDispatch<AppDispatch>();
  const { empresa, isError, isLoading } = useSelector(
    (state: any) => state.empresa
  );
  const [showModal, setShowModal] = React.useState(false);
  const { getNif, loadingNif } = useContext(LicContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(criarEmpresa(value));

    setValue({
      nome: '',
      responsavel: '',
      email: '',
      telefone: '',
      nif: '',
      sede: '',
      tipo: '',
    });
  };

  useEffect(() => {
    if (isError) {
      alert('Erro ao criar empresa');
    }

    if (empresa) {
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        setCriarEmpresa(false);
        window.location.reload();
      }, 2500);
    }
  }, [empresa, isError]);

  const handleGetNif = async () => {
    if (getNif === undefined) return;
    const empresa = await getNif(value.nif);
    if (empresa) {
      setValue({
        ...value,
        nome: empresa.nome,
        email: empresa.email,
        telefone: empresa.telefone,
        sede: empresa.provincia,
      });
    }
  };

  return (
    <>
      <Container>
        <h1>Parceiros</h1>

        <Form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='nif'>Nif</label>
            <input
              name='nif'
              value={value.nif}
              onChange={handleChange}
              type='text'
              onBlur={handleGetNif}
            />
          </div>
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
            <label htmlFor='sede'>Provincia sede</label>
            <input
              name='sede'
              value={value.sede}
              onChange={handleChange}
              type='text'
            />
          </div>

          <SelectInput
            value={value.tipo}
            labelName='tipo'
            handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValue({ ...value, tipo: e.target.value })
            }
          >
            <MenuItem value={'Silver'}>Silver</MenuItem>
            <MenuItem value={'Gold'}>Gold</MenuItem>
            <MenuItem value={'Platinum'}>Platinum</MenuItem>
            <MenuItem value={'Cliente'}>Cliente</MenuItem>
          </SelectInput>

          <Div className='buttons'>
            <button onClick={() => setCriarEmpresa(false)}>Cancelar</button>
            <button type='submit'>
              {isLoading ? 'Aguarde...' : 'Criar empresa'}
            </button>
          </Div>
        </Form>
      </Container>

      {showModal && (
        <ModalConcluido>
          <h2>Cadastro feito com sucesso! 🎉</h2>
        </ModalConcluido>
      )}

      {loadingNif && (
        <SpinnerDiv>
          <Spinner />
        </SpinnerDiv>
      )}

      {loadingNif && <Overlay />}
    </>
  );
};

export default CriarEmpresa;
