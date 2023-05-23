import React from 'react';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { RiMore2Fill } from 'react-icons/ri';

import { Div } from './usuariosStyles';
import { useSelector } from 'react-redux';

interface Props {
  users: any;
  setUserSelected: (user: any) => void;
  handleClick: () => void;
  parceiroId: number;
}

const UsersList: React.FC<Props> = ({
  users,
  setUserSelected,
  handleClick,
  parceiroId,
}) => {
  return (
    <div>
      {users.data &&
        users.data.map((user: any) => (
          <Div key={user.id}>
            <div>
              <IoPersonCircleOutline size={50} />
              <div>
                <h1>{user.name}</h1>
                <h3>{user.email}</h3>
              </div>
            </div>

            {parceiroId === 1 ? (
              <span
                onClick={() => {
                  handleClick && handleClick();
                  setUserSelected && setUserSelected(user);
                }}
              >
                <RiMore2Fill />
              </span>
            ) : null}
          </Div>
        ))}
    </div>
  );
};

export default UsersList;
