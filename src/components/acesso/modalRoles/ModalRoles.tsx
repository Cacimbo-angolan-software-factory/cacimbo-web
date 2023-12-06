import React, { useCallback, useEffect, useState } from 'react';
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
import { SpinnerDiv } from '../acessoRoles/acessoRolesStyles';
import { ToastContainer } from 'react-toastify';

interface ModalRolesProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  useModalRoles: any;
}

const ModalRoles: React.FC<ModalRolesProps> = ({
  openModal,
  setOpenModal,
  useModalRoles: modalRolesFunctions,
}) => {
  const {
    handleBlur,
    handleChange,
    handleSubmit,
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
  } = useModalRoles();
  const [checkeds, setCheckeds] = useState<any>([]);

  useEffect(() => {
    setCheckeds(checkedPermissions);
  }, [checkedPermissions]);

  const renderPermissions = useCallback(
    ({ item, index }: { item: any; index: number }) => {
      return (
        <div>
          <input
            type='checkbox'
            value={item.id}
            name={item.id}
            onChange={(e) => handleSelect(e)}
            checked={(() => {
              return checkeds?.includes(String(item.id));
            })()}
          />
          <label htmlFor={item.id}>
            {item.description} - {item.source_name}
          </label>
        </div>
      );
    },
    [checkeds?.length]
  );

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

            <PermissionsDiv>
              {showPermissions && <h2>Permissões</h2>}
              {showPermissions &&
                list.map((permission: any, index: number) =>
                  renderPermissions({ item: permission, index: index })
                )}
            </PermissionsDiv>
          </Content>

          {/* {isLoading && <Spinner />} */}

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
