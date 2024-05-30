import React, { ChangeEvent, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';

import {
  Content,
  Div,
  ErrorMsg,
  FooterDiv,
  Header,
  InputDiv,
  Inputs,
  ModalRolesContainer,
  Overlay,
  PermissionsDiv,
  Section,
} from './modalRolesStyles';
import { IoCloseCircleOutline } from 'react-icons/io5';
import Spinner from '../../spinner/Spinner';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import {
  criarRole,
  editRole,
  getPermissions,
  getRoles,
  getSyncPermissions,
} from '../../../redux/permissionsFeatures/permissionSlice';
import PermissionsList from './PermissionsList';
import { Msg } from '../acessoRoles/acessoRolesStyles';
import { getCompanyIdWithNif } from '../../../redux/lojasFeatures/lojasSlice';
import { api } from '../../../service/Service.api';

interface ModalRolesProps {
  selectedEmpresa: any;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  showPermissions: boolean;
  list: any;
  isLoading: any;
  setSearchCompanyId: any;
  searchCompanyId: any;
  value: any;
  user: any;
  setValue: any;
  errorMsg: string;
  setErrorMsg: React.Dispatch<React.SetStateAction<string>>;
  roleSelected: any;
  setShowPermissions: React.Dispatch<React.SetStateAction<boolean>>;
  openEdit: boolean;
  setOpenEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalRoles: React.FC<ModalRolesProps> = ({
  selectedEmpresa,
  openModal,
  setOpenModal,
  handleChange,
  showPermissions,
  list,
  isLoading,
  setSearchCompanyId,
  searchCompanyId,
  value,
  user,
  setValue,
  setErrorMsg,
  errorMsg,
  roleSelected,
  setShowPermissions,
  openEdit,
  setOpenEdit,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [checkedPermissions, setCheckedPermissions] = React.useState<any>([]);
  const [loadingSync, setLoadingSync] = React.useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (value.name === '' || value.CompanyID === '') {
      setErrorMsg('Por favor preencha os campos vazios');
    } else {
      dispatch(
        criarRole({
          name: value.name,
          CompanyID: value.CompanyID,
          description: value.description,
          permissions: checkedPermissions,
        })
      ).then(() => {
        toast.success('Função criada com sucesso! 🎉', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      });

      setTimeout(() => {
        setValue({
          CompanyID: '',
          name: '',
          description: '',
        });
        setCheckedPermissions([]);
        setOpenModal(false);
        dispatch(getRoles());
      }, 2000);
    }
  };

  const onClose = () => {
    setValue({
      name: '',
      description: '',
    });
    setCheckedPermissions([]);
    setOpenModal(false);
  };

  const handleSyncPermissions = async (companyId: any) => {
    try {
      setLoadingSync(true);
      const response = await api.get(
        `sync-permissions-with-docs/empresa/${companyId}`
      );
      dispatch(getPermissions(selectedEmpresa.CompanyID));
      setLoadingSync(false);
      return response.data;
    } catch (err: any) {
      console.log(err.response);
      setLoadingSync(false);
    }
  };

  useEffect(() => {
    if (roleSelected) {
      setValue({
        name: roleSelected.name,
        description: roleSelected.description,
      });
      setCheckedPermissions(checkedPermissions);
    }
  }, [roleSelected]);

  const handleUpdate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(editRole(roleSelected.id)).then(() => {
      toast.success('Função editada com sucesso! 🎉', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    });

    dispatch(getRoles());
  };

  return (
    <>
      <ModalRolesContainer className={openModal ? 'open' : ''}>
        <Header>
          <h2>{openEdit ? 'Editar função' : 'Criar função'}</h2>
          <IoCloseCircleOutline onClick={() => setOpenModal(false)} />
        </Header>

        <form onSubmit={openEdit ? handleUpdate : handleSubmit}>
          <Content>
            {user.user.parceiro_id === 1 ? (
              <InputDiv>
                <p>Id da empresa</p>
                <input
                  // placeholder='Pesquise uma empresa...'
                  name='searchCompanyId'
                  value={selectedEmpresa.CompanyID}
                  // onChange={(e: any) => setSearchCompanyId(e.target.value)}
                  // type='text'
                  disabled
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
                <p>Descrição</p>
                <input
                  name='description'
                  value={value.description}
                  onChange={handleChange}
                  type='text'
                />
              </InputDiv>
            </Inputs>

            {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}

            {isLoading ? (
              <Spinner />
            ) : (
              <PermissionsDiv>
                {!!list.length && <h2>Permissões</h2>}
                {!!list.length ? (
                  <PermissionsList
                    checkedPermissions={checkedPermissions}
                    setCheckedPermissions={setCheckedPermissions}
                    list={list}
                  />
                ) : (
                  <Div>
                    <Msg>Empresa selecionada não contém permissões 🧐</Msg>
                    <button
                      onClick={() =>
                        handleSyncPermissions(selectedEmpresa.CompanyID)
                      }
                    >
                      {loadingSync
                        ? 'A sincronizar...'
                        : 'Sincronizar permissões'}
                    </button>
                  </Div>
                )}
              </PermissionsDiv>
            )}
          </Content>

          <FooterDiv
            className={showPermissions === false ? 'noPermission' : ''}
          >
            <button type='reset' onClick={() => setOpenModal(false)}>
              Cancelar
            </button>
            <button type='submit'>
              {openEdit ? 'Editar função' : 'Criar função'}
            </button>
          </FooterDiv>
        </form>
      </ModalRolesContainer>

      {openModal && <Overlay onClick={onClose} />}

      <ToastContainer />
    </>
  );
};

export default ModalRoles;
