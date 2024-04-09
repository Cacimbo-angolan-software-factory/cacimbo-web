import React, { ChangeEvent, useEffect } from 'react';
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
  getPermissions,
  getRoles,
} from '../../../redux/permissionsFeatures/permissionSlice';
import PermissionsList from './PermissionsList';
import { Msg } from '../acessoRoles/acessoRolesStyles';
import { getCompanyIdWithNif } from '../../../redux/lojasFeatures/lojasSlice';

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
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [checkedPermissions, setCheckedPermissions] = React.useState<any>([]);

  // useEffect(() => {
  //   if (roleSelected) {
  //     console.log(
  //       roleSelected.permissions.flatMap((permission: any) => [
  //         permission.name,
  //         ...permission.youCan,
  //       ])
  //     );
  //     const allPermissionsName = roleSelected.permissions.flatMap(
  //       (permission: any) => [permission.name, ...permission.youCan]
  //     );
  //     setValue({
  //       name: roleSelected?.name,
  //       CompanyID: roleSelected?.companyId,
  //       description: roleSelected?.description,
  //     });
  //     setCheckedPermissions(allPermissionsName);
  //     dispatch(getPermissions(roleSelected.companyId));
  //     setShowPermissions(true);
  //   }
  // }, [roleSelected]);

  // useEffect(() => {
  //   console.log(selectedEmpresa);
  // }, [selectedEmpresa]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (value.name === '' || value.CompanyID === '') {
      setErrorMsg('Por favor preencha os campos vazios');
    } else {
      // dispatch(
      //   criarRole({
      //     name: value.name,
      //     CompanyID: value.CompanyID,
      //     description: value.description,
      //     permissions: checkedPermissions,
      //   })
      // ).then(() => {
      //   toast.success('Função criada com sucesso! 🎉', {
      //     position: 'top-right',
      //     autoClose: 5000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //     theme: 'colored',
      //   });
      // });

      console.log(value);

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
                  <Msg>Empresa selecionada não contém permissões 🧐</Msg>
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
            <button type='submit'>Criar função</button>
          </FooterDiv>
        </form>
      </ModalRolesContainer>

      {openModal && <Overlay onClick={onClose} />}

      <ToastContainer />
    </>
  );
};

export default ModalRoles;
