import React, { useEffect } from 'react';

import { Container, SpinnerDiv } from './acessoRolesStyles';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { getRoles } from '../../../redux/permissionsFeatures/permissionSlice';
import Spinner from '../../spinner/Spinner';
import Role from './Role';

const AcessoRoles: React.FC = () => {
  const { rolesList, isError, isLoading } = useSelector(
    (state: any) => state.permission
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getRoles());
  }, []);

  return (
    <>
      {isLoading ? (
        <SpinnerDiv>
          <Spinner />
        </SpinnerDiv>
      ) : (
        <Container>
          {rolesList.map((role: any) => (
            <Role key={role.id} role={role} />
          ))}
        </Container>
      )}
    </>
  );
};

export default AcessoRoles;
