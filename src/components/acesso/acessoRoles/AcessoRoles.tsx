import React, { useEffect } from 'react';

import { Container, NoRoles, SpinnerDiv } from './acessoRolesStyles';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { getRoles } from '../../../redux/permissionsFeatures/permissionSlice';
import Spinner from '../../spinner/Spinner';
import Role from './Role';

const AcessoRoles: React.FC = () => {
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
            <img src='/src/assets/noAccess.svg' alt='empty' />
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
        <Container>
          {user.user.parceiro_id === 1
            ? rolesList.map((role: any) => <Role key={role.id} role={role} />)
            : handleUserRoles()}
        </Container>
      )}
    </>
  );
};

export default AcessoRoles;
