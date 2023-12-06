import React, { useCallback, useEffect } from 'react';
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
} from './modalRolesStyles';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { useModalRoles } from './useModalRoles';
import Spinner from '../../spinner/Spinner';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import {
  criarRole,
  getRoles,
} from '../../../redux/permissionsFeatures/permissionSlice';

interface ModalRolesProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalRoles: React.FC<ModalRolesProps> = ({ openModal, setOpenModal }) => {
  const {
    handleBlur,
    handleChange,
    // handleSubmit,
    showPermissions,
    list,
    isLoading,
    setSearchCompanyId,
    searchCompanyId,
    value,
    checkedPermissions,
    setCheckedPermissions,
    handleSelect,
    errorMsg,
    user,
    setValue,
    setErrorMsg,
  } = useModalRoles();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    setCheckedPermissions(checkedPermissions);
  }, [checkedPermissions]);

  const renderPermissions = useCallback(
    ({ item, index }: { item: any; index: number }) => {
      return (
        <label>
          <input
            type='checkbox'
            value={item.id}
            name={item.id}
            onChange={(e) => handleSelect(e)}
            checked={(() => {
              return checkedPermissions?.includes(String(item.id));
            })()}
          />
          <p>
            {item.description} - {item.source_name}
          </p>
        </label>
      );
    },
    [checkedPermissions?.length]
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (value.name === '' || value.CompanyID === '') {
      setErrorMsg('Por favor preencha os campos vazios');
    } else {
      console.log(value, checkedPermissions);

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
        dispatch(getRoles);
        console.log('counting');
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
                {showPermissions &&
                  list.map((permission: any, index: number) =>
                    renderPermissions({ item: permission, index: index })
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
