import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { Container, NoRoles, SpinnerDiv } from './acessoRolesStyles';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import {
  getPermissions,
  getRoles,
} from '../../../redux/permissionsFeatures/permissionSlice';
import Spinner from '../../spinner/Spinner';
import Role from './Role';
import noAcess from '../../../assets/noAccess.svg';

interface Props {
  rolesDeEmpresas: any;
  list: any;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  roleSelected: any;
  setRoleSelected: Dispatch<any>;
}

const AcessoRoles: React.FC<Props> = ({
  rolesDeEmpresas,
  list,
  setOpenModal,
  roleSelected,
  setRoleSelected,
}) => {
  const { isLoading } = useSelector((state: any) => state.permission);
  const { user } = useSelector((state: any) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getRoles());
    dispatch(getPermissions(user.user.lastCompanyIDUsed));
  }, []);

  const handleUserRoles = () => {
    return (
      <>
        {user.roles > 0 ? (
          user.roles.map((role: any) => (
            <Role
              list={list}
              roleSelected={roleSelected}
              setRoleSelected={setRoleSelected}
              key={role.id}
              role={role}
              user={user}
              setOpenModal={setOpenModal}
            />
          ))
        ) : (
          <NoRoles>
            <img src={noAcess} alt='empty' />
            <h1>Usuário não possui nenhuma função atribuída no momento.</h1>
          </NoRoles>
        )}
      </>
    );
  };

  return (
    <>
      {isLoading ? (
        <SpinnerDiv>
          <Spinner />
        </SpinnerDiv>
      ) : (
        <>
          <Container>
            {rolesDeEmpresas.length > 0
              ? rolesDeEmpresas.map((role: any) => (
                  <Role
                    list={list}
                    roleSelected={roleSelected}
                    setRoleSelected={setRoleSelected}
                    key={role.id}
                    role={role}
                    user={user}
                    setOpenModal={setOpenModal}
                  />
                ))
              : handleUserRoles()}
          </Container>
        </>
      )}
    </>
  );
};

export default AcessoRoles;
