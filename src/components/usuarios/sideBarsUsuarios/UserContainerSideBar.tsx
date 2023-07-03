import React, { useEffect } from 'react';
import {
  Companies,
  Container,
  Header,
  NoCompanies,
  Parceiro,
} from './stylesSideBars';
import { RiPencilFill } from 'react-icons/ri';
import { IoBusinessOutline, IoPeopleOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { getUsersEmpresas } from '../../../redux/userFeatures/usersSlice';
import Spinner from '../../spinner/Spinner';
import noCompanies from '../../../assets/noCompanies.svg';

interface UserContainerProps {
  userSelected: any;
}

const UserContainer: React.FC<UserContainerProps> = ({ userSelected }) => {
  const { userEmpresas, isLoading } = useSelector((state: any) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getUsersEmpresas(userSelected.id));
    console.log(userSelected);
  }, []);

  return (
    <Container>
      <Header>
        <div>
          <h1>{userSelected.name}</h1>
          <p>{userSelected.email}</p>

          <Parceiro>
            <span>
              <p>{userSelected.tipo}</p>
            </span>
            -<p>{userSelected.parceiro}</p>
          </Parceiro>
        </div>
        <RiPencilFill />
      </Header>

      <div>
        <h2>
          <IoPeopleOutline />
          Empresas associadas
        </h2>
        <Companies>
          {isLoading ? (
            <Spinner />
          ) : userEmpresas.length > 0 ? (
            userEmpresas.map((empresa: any, index: number) => (
              <div key={index}>
                <IoBusinessOutline />
                <p>{empresa.CompanyName}</p>
              </div>
            ))
          ) : (
            <NoCompanies>
              <img src={noCompanies} alt='Nenhuma empresa' />
              <p>Nenhuma empresa associada à este usuário.</p>
            </NoCompanies>
          )}
        </Companies>
      </div>

      <div></div>
    </Container>
  );
};

export default UserContainer;
