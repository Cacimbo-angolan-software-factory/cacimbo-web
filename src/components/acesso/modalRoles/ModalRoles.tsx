import React, { ChangeEvent, useCallback, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';

import {
  Content,
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
  getRoles,
} from '../../../redux/permissionsFeatures/permissionSlice';
import PermissionsList from './PermissionsList';

interface ModalRolesProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleBlur: () => Promise<void>;
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
}

const ModalRoles: React.FC<ModalRolesProps> = ({
  openModal,
  setOpenModal,
  handleBlur,
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
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [checkedPermissions, setCheckedPermissions] = React.useState<any>([]);

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

  return (
    <>
      <ModalRolesContainer className={openModal ? 'open' : ''}>
        <Header>
          <h2>Criar função</h2>
          <IoCloseCircleOutline onClick={() => setOpenModal(false)} />
        </Header>

        <form onSubmit={handleSubmit}>
          <Content>
            {user.user.parceiro_id === 1 ? (
              <InputDiv>
                <p>Id da empresa</p>
                <input
                  placeholder='Pesquise uma empresa...'
                  name='searchCompanyId'
                  value={searchCompanyId}
                  onChange={(e: any) => setSearchCompanyId(e.target.value)}
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
                {showPermissions && <h2>Permissões</h2>}
                {showPermissions && (
                  <PermissionsList
                    checkedPermissions={checkedPermissions}
                    setCheckedPermissions={setCheckedPermissions}
                    list={list}
                  />
                )}
              </PermissionsDiv>
            )}
          </Content>

          <FooterDiv
            className={showPermissions === false ? 'noPermission' : ''}
          >
            <button onClick={() => setOpenModal(false)}>Cancelar</button>
            <button type='submit'>Criar função</button>
          </FooterDiv>
        </form>
      </ModalRolesContainer>

      {openModal && <Overlay onClick={() => setOpenModal(false)} />}

      <ToastContainer />
    </>
  );
};

export default ModalRoles;
