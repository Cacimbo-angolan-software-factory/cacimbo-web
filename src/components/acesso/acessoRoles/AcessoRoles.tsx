import React, { useEffect, useState } from 'react';

import { Container, NoRoles, SpinnerDiv } from './acessoRolesStyles';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { getRoles } from '../../../redux/permissionsFeatures/permissionSlice';
import Spinner from '../../spinner/Spinner';
import Role from './Role';
import noAcess from '../../../assets/noAccess.svg';

interface Props {
  rolesDeEmpresas: any;
}

const AcessoRoles: React.FC<Props> = ({ rolesDeEmpresas }) => {
  const { rolesList, isError, isLoading } = useSelector(
    (state: any) => state.permission
  );
  const { user } = useSelector((state: any) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getRoles());
  }, []);

  const handleUserRoles = () => {
    return (
      <>
        {user.roles > 0 ? (
          user.roles.map((role: any) => <Role key={role.id} role={role} />)
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
                  <Role key={role.id} role={role} />
                ))
              : handleUserRoles()}
          </Container>
        </>
      )}
    </>
  );
};

export default AcessoRoles;
