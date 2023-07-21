import React, { useContext, useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

import {
  Content,
  FooterDiv,
  Header,
  InputDiv,
  Inputs,
  ModalContainer,
  Overlay,
  RolesDiv,
} from './criarUsuarioStyles';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { LicContext } from '../../../context';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import {
  createUser,
  getAllUsers,
  getPerfis,
  getUsers,
} from '../../../redux/userFeatures/usersSlice';
import SelectInput from '../../SelectTextField';
import { MenuItem } from '@mui/material';
import {
  getPermissions,
  getRoles,
} from '../../../redux/permissionsFeatures/permissionSlice';
import RolesModal from './RolesModal';
import { apiCacimbo } from '../../../service/Service.api';
import { ToastContainer, toast } from 'react-toastify';

interface CriarUsuarioModalProps {
  criarUser: boolean;
  setCriarUser: React.Dispatch<React.SetStateAction<boolean>>;
}

const CriarUsuarioModal: React.FC<CriarUsuarioModalProps> = ({
  criarUser,
  setCriarUser,
}) => {
  const { perfis, isLoading, user } = useSelector((state: any) => state.user);
  const {
    rolesList,
    isError,
    permissions,
    isLoading: loadingRoles,
  } = useSelector((state: any) => state.permission);
  const [value, setValue] = useState({
    name: '',
    email: '',
    parceiro_id: '',
    tipo: '',
    id_perfil: '',
    roles: [] as any,
    companyId: user.user.parceiro_id === 1 ? '' : user.user.lastCompanyIDUsed,
    nif: '',
  });
  const { empresas } = useContext(LicContext);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getPerfis());
    dispatch(getRoles());
    dispatch(getPermissions());
  }, [dispatch]);
  const [showRoles, setShowRoles] = useState(false);
  const [filteredRoles, setFilteredRoles] = useState([]);

  const getPermissionDesc = (code: any) => {
    const description = permissions.find((permission: any) => {
      permission.name === code;
    });

    return description?.slug;
  };

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const handleBlur = async () => {
    try {
      const response = await apiCacimbo.get(`docs_empresas/${value.companyId}`);
      const companyData = response.data.data.CompanyID;

      if (companyData) {
        setFilteredRoles(
          rolesList.filter((role: any) => role.companyId === value.companyId)
        );
        setShowRoles(true);
      } else {
        setShowRoles(false);
      }
    } catch (error) {
      setShowRoles(false);
    }
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
        parceiro_id:
          user.user.parceiro_id === 1 ? parceiro_id : user.user.parceiro_id,
        tipo: value.tipo,
        id_perfil: id_perfil,
        roles: [],
        companyId: value.companyId,
        nif: value.nif,
      })
    ).then(() => {
      toast.success('Usuario criado com sucesso! 🎉', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });

      setTimeout(() => {
        dispatch(getAllUsers());
        dispatch(getUsers(user.user.parceiro_id));

        setValue({
          name: '',
          email: '',
          parceiro_id: '',
          tipo: '',
          id_perfil: '',
          roles: [],
          companyId: '',
          nif: '',
        });
        setCriarUser(false);
      }, 1000);
    });
  };

  return (
    <>
      <ModalContainer className={criarUser ? 'open' : ''}>
        <Header>
          <h2>Criar usuário</h2>
          <IoCloseCircleOutline onClick={() => setCriarUser(false)} />
        </Header>

        <form onSubmit={handleSubmit}>
          <Content>
            {user.user.parceiro_id === 1 ? (
              <InputDiv>
                <p>Id da empresa</p>
                <input
                  name='companyId'
                  value={value.companyId}
                  onChange={handleChange}
                  type='text'
                  onBlur={handleBlur}
                />
              </InputDiv>
            ) : null}
            <Inputs>
              <InputDiv>
                <p>Nome</p>
                <input
                  name='name'
                  value={value.name}
                  onChange={handleChange}
                  type='text'
                />
              </InputDiv>
              <InputDiv>
                <p>Email</p>
                <input
                  name='email'
                  value={value.email}
                  onChange={handleChange}
                  type='email'
                />
              </InputDiv>
            </Inputs>
            <InputDiv>
              <p>Nif</p>
              <input
                name='nif'
                value={value.nif}
                onChange={handleChange}
                type='text'
              />
            </InputDiv>

            <SelectInput
              value={value.parceiro_id}
              labelName='Parceiro'
              handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setValue({ ...value, parceiro_id: e.target.value })
              }
            >
              {user.user.parceiro_id === 1
                ? empresas.map((empresa) => (
                    <MenuItem key={empresa.id} value={empresa.Nome}>
                      {empresa.Nome}
                    </MenuItem>
                  ))
                : empresas
                    .filter(
                      (empresa: any) => empresa.id === user.user.parceiro_id
                    )
                    .map((empresa) => (
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

            <h2>Funções</h2>

            {showRoles && (
              <RolesDiv>
                {filteredRoles.map((role: any) => (
                  <RolesModal
                    key={role.id}
                    role={role}
                    value={value}
                    setValue={setValue}
                    loadingRoles={loadingRoles}
                    getDesc={getPermissionDesc}
                  />
                ))}
              </RolesDiv>
            )}
          </Content>

          <FooterDiv>
            <button onClick={() => setCriarUser(false)}>Cancelar</button>
            <button type='submit'>
              {' '}
              {isLoading ? 'Aguarde...' : 'Criar usuário'}
            </button>
          </FooterDiv>
        </form>
      </ModalContainer>

      {criarUser && <Overlay onClick={() => setCriarUser(false)} />}
      <ToastContainer />
    </>
  );
};

export default CriarUsuarioModal;
