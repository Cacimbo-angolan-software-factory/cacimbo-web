import React, { useEffect, useState } from 'react';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { RiMore2Fill } from 'react-icons/ri';

import { Div, Input } from './usuariosStyles';
import { useSelector } from 'react-redux';

interface Props {
  allUsers: any;
  users: any;
  setUserSelected: (user: any) => void;
  handleClick: () => void;
  parceiroId: number;
}

const UsersList: React.FC<Props> = ({
  allUsers,
  users,
  setUserSelected,
  handleClick,
  parceiroId,
}) => {
  const { user } = useSelector((state: any) => state.user);
  const [search, setSearch] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleAllUsers = () => {
    return (
      <>
        {allUsers.data &&
          allUsers.data
            .filter((item: any) => {
              if (search === '') {
                return item;
              } else if (
                item.name.toLowerCase().includes(search.toLowerCase()) ||
                item.email.toLowerCase().includes(search.toLowerCase())
              ) {
                return item;
              }
            })
            .map((user: any) => (
              <Div key={user.id}>
                <div>
                  <IoPersonCircleOutline size={50} />
                  <div>
                    <h1>{user.name}</h1>
                    <h3>{user.email}</h3>
                  </div>
                </div>

                <span
                  onClick={() => {
                    handleClick && handleClick();
                    setUserSelected && setUserSelected(user);
                  }}
                >
                  <RiMore2Fill />
                </span>
              </Div>
            ))}
      </>
    );
  };

  const handleUsers = () => {
    return (
      <>
        {users.data &&
          users.data
            .filter((item: any) => {
              if (search === '') {
                return item;
              } else if (
                item.name.toLowerCase().includes(search.toLowerCase()) ||
                item.email.toLowerCase().includes(search.toLowerCase())
              ) {
                return item;
              }
            })
            .map((user: any) => (
              <Div key={user.id}>
                <div>
                  <IoPersonCircleOutline size={50} />
                  <div>
                    <h1>{user.name}</h1>
                    <h3>{user.email}</h3>
                  </div>
                </div>

                <span
                  onClick={() => {
                    handleClick && handleClick();
                    setUserSelected && setUserSelected(user);
                  }}
                >
                  <RiMore2Fill />
                </span>
              </Div>
            ))}
      </>
    );
  };

  return (
    <div>
      <Input
        onChange={handleSearch}
        value={search}
        type='text'
        placeholder='Pesquise por nome ou email'
      />

      {user.user.tipo === 'Admin' ? handleAllUsers() : handleUsers()}
    </div>
  );
};

export default UsersList;
