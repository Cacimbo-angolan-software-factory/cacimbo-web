import React, { useEffect } from 'react';
import {
  Companies,
  Container,
  Div1,
  Header,
  NoCompanies,
  Parceiro,
} from './stylesSideBars';
import { RiCloseCircleLine, RiPencilFill } from 'react-icons/ri';
import {
  IoBagCheckOutline,
  IoBriefcaseOutline,
  IoBusinessOutline,
  IoPeopleOutline,
  IoPersonAddOutline,
} from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { getUsersEmpresas } from '../../../redux/userFeatures/usersSlice';
import Spinner from '../../spinner/Spinner';
import noCompanies from '../../../assets/noCompanies.svg';
import AssociarUser from '../associarUser/AssociarUser';
import { getUserRoles } from '../../../redux/permissionsFeatures/permissionSlice';
import AddRole from '../addRole/AddRole';

interface UserContainerProps {
  userSelected: any;
  menuRef?: React.MutableRefObject<any>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserContainer: React.FC<UserContainerProps> = ({
  userSelected,
  setOpen,
}) => {
  const { userEmpresas, isLoading } = useSelector((state: any) => state.user);
  const { userRoles, isLoadingUserRoles } = useSelector(
    (state: any) => state.permission
  );
  const [openAssociar, setOpenAssociar] = React.useState(false);
  const [openAddRole, setOpenAddRole] = React.useState(false);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getUsersEmpresas(userSelected.id));
    dispatch(getUserRoles(userSelected.id));
  }, []);

  const handleClick = () => {
    setOpenAssociar(true);
  };

  return (
    <>
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
          <RiCloseCircleLine onClick={() => setOpen(false)} />
        </Header>

        <div>
          <Div1>
            <h2>
              <IoPeopleOutline />
              Empresas associadas
            </h2>
            <p onClick={handleClick}>
              <IoPersonAddOutline />
            </p>
          </Div1>

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

        <div>
          <Div1>
            <h2>
              <IoBriefcaseOutline />
              Funções atribuídas
            </h2>
            <p onClick={() => setOpenAddRole(true)}>
              <IoPersonAddOutline />
            </p>
          </Div1>

          <Companies>
            {isLoadingUserRoles ? (
              <Spinner />
            ) : userRoles && userRoles.roles && userRoles.roles.length > 0 ? (
              userRoles.roles.map((role: any, index: number) => (
                <div key={index}>
                  <IoBagCheckOutline />
                  <p>{role.name}</p>
                </div>
              ))
            ) : (
              <NoCompanies>
                <img src={noCompanies} alt='Nenhuma função' />
                <p>Nenhuma função atribuída a este usuário</p>
              </NoCompanies>
            )}
          </Companies>
        </div>
      </Container>

      {openAssociar && (
        <AssociarUser
          openAssociar={openAssociar}
          setOpenAssociar={setOpenAssociar}
          userSelected={userSelected}
          // userId={userSelected.id}
        />
      )}

      {openAddRole && (
        <AddRole
          openAddRole={openAddRole}
          setOpenAddRole={setOpenAddRole}
          userSelected={userSelected}
          userEmpresas={userEmpresas}
        />
      )}
    </>
  );
};

export default UserContainer;
