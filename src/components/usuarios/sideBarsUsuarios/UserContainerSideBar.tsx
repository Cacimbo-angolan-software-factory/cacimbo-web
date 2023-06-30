import React, { useEffect } from 'react';
import { Companies, Container, Header } from './stylesSideBars';
import { RiPencilFill } from 'react-icons/ri';
import { IoBusinessOutline, IoPeopleOutline } from 'react-icons/io5';

interface UserContainerProps {
  userSelected: any;
  empresas: any;
  userCompanies: any;
}

const UserContainer: React.FC<UserContainerProps> = ({
  userSelected,
  empresas,
  userCompanies,
}) => {
  useEffect(() => {}, [userSelected]);

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

      <div>
        <h2>
          <IoPeopleOutline />
          Empresas associadas
        </h2>
        {/* <Companies>
          {empresas.map((empresa: any) => (
            <div key={empresa.id}>
              <IoBusinessOutline />
              <p>{empresa.CompanyName}</p>
            </div>
          ))}
        </Companies> */}
      </div>

      <div></div>
    </Container>
  );
};

export default UserContainer;
