import React from 'react';
import { Container, Header } from './usuariosStyles';
import { RiPencilFill } from 'react-icons/ri';
import { IoBusinessOutline } from 'react-icons/io5';

interface UserContainerProps {
  userSelected: any;
}

const UserContainer: React.FC<UserContainerProps> = ({ userSelected }) => {
  return (
    <Container>
      <Header>
        <div>
          <h1>{userSelected.name}</h1>
          <p>{userSelected.email}</p>
          <span>
            <p>{userSelected.tipo}</p>
          </span>
        </div>
        <RiPencilFill />
      </Header>

      <h2>
        <IoBusinessOutline />
        {userSelected.parceiro}
      </h2>

      <div></div>
    </Container>
  );
};

export default UserContainer;
