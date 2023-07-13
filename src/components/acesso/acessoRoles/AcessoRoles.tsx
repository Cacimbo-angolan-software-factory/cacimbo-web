import React, { useEffect, useState } from 'react';

import { Container, Input, NoRoles, SpinnerDiv } from './acessoRolesStyles';
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
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(getRoles());
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

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
        <>
          {user.user.parceiro_id === 1 && (
            <Input
              onChange={handleSearch}
              value={search}
              type='text'
              placeholder='Pesquise pelo Id da empresa...'
            />
          )}
          <Container>
            {user.user.parceiro_id === 1
              ? rolesList
                  .filter((item: any) => {
                    if (search === '') {
                      return item;
                    } else if (
                      item.companyId
                        .toLowerCase()
                        .includes(search.toLowerCase())
                    ) {
                      return item;
                    }
                  })
                  .map((role: any) => <Role key={role.id} role={role} />)
              : handleUserRoles()}
          </Container>
        </>
      )}
    </>
  );
};

export default AcessoRoles;
