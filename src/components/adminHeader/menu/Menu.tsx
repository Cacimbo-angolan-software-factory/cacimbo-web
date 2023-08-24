import React from 'react';
import {
  RiHome5Fill,
  RiServiceFill,
  RiShieldCheckFill,
  RiUserFill,
  RiFileList3Fill,
  RiSurveyFill,
  RiStore3Fill,
  RiTaskFill,
} from 'react-icons/ri';
import { useLocation } from 'react-router-dom';

import { MenuContainer, MenuItem } from './styles';
import { useSelector } from 'react-redux';

const Menu: React.FC = () => {
  const location = useLocation();
  const { user } = useSelector((state: any) => state.user);

  return (
    <MenuContainer>
      <MenuItem
        className={location.pathname === `/` ? 'active' : 'inherit'}
        to='/'
      >
        <span className={location.pathname === `/` ? 'active-text' : 'inherit'}>
          <RiHome5Fill />
        </span>
        <p className={location.pathname === `/` ? 'active-text' : 'inherit'}>
          Home
        </p>
      </MenuItem>

      {user.user.parceiro_id === 1 && user.user.tipo === 'Admin' ? (
        <MenuItem
          className={location.pathname === `/empresas` ? 'active' : 'inherit'}
          to='/empresas'
        >
          <span
            className={
              location.pathname === `/empresas` ? 'active-text' : 'inherit'
            }
          >
            <RiServiceFill />
          </span>
          <p
            className={
              location.pathname === `/empresas` ? 'active-text' : 'inherit'
            }
          >
            Parceiros
          </p>
        </MenuItem>
      ) : null}

      <MenuItem
        className={
          location.pathname === `/licen%C3%A7as` ? 'active' : 'inherit'
        }
        to='/licenças'
      >
        <span
          className={
            location.pathname === `/licen%C3%A7as` ? 'active-text' : 'inherit'
          }
        >
          <RiFileList3Fill />
        </span>
        <p
          className={
            location.pathname === `/licen%C3%A7as` ? 'active-text' : 'inherit'
          }
        >
          Licenças
        </p>
      </MenuItem>

      <MenuItem
        className={
          location.pathname === `/solicita%C3%A7oes` ? 'active' : 'inherit'
        }
        to='/solicitaçoes'
      >
        <span
          className={
            location.pathname === `/solicita%C3%A7oes`
              ? 'active-text'
              : 'inherit'
          }
        >
          <RiSurveyFill />
        </span>
        <p
          className={
            location.pathname === `/solicita%C3%A7oes`
              ? 'active-text'
              : 'inherit'
          }
        >
          Solicitações
        </p>
      </MenuItem>

      {user.user.tipo === 'Admin' || user.user.tipo === 'Parceiro' ? (
        <MenuItem
          className={location.pathname === `/Usuarios` ? 'active' : 'inherit'}
          to='/Usuarios'
        >
          <span
            className={
              location.pathname === `/Usuarios` ? 'active-text' : 'inherit'
            }
          >
            <RiUserFill />
          </span>
          <p
            className={
              location.pathname === `/Usuarios` ? 'active-text' : 'inherit'
            }
          >
            Usuários
          </p>
        </MenuItem>
      ) : null}

      <MenuItem
        className={location.pathname === `/tarefas` ? 'active' : 'inherit'}
        to='/tarefas'
      >
        <span
          className={
            location.pathname === `/tarefas` ? 'active-text' : 'inherit'
          }
        >
          <RiTaskFill />
        </span>
        <p
          className={
            location.pathname === `/tarefas` ? 'active-text' : 'inherit'
          }
        >
          Tarefas
        </p>
      </MenuItem>

      {user.user.lastCompanyIDUsed === null ||
      user.user.tipo === 'User' ? null : (
        <MenuItem
          className={location.pathname === `/acesso` ? 'active' : 'inherit'}
          to='/acesso'
        >
          <span
            className={
              location.pathname === `/acesso` ? 'active-text' : 'inherit'
            }
          >
            <RiShieldCheckFill />
          </span>
          <p
            className={
              location.pathname === `/acesso` ? 'active-text' : 'inherit'
            }
          >
            Acesso
          </p>
        </MenuItem>
      )}

      {user.user.parceiro_id === 1 && user.user.tipo === 'Admin' ? (
        <MenuItem
          className={location.pathname === `/lojas` ? 'active' : 'inherit'}
          to='/lojas'
        >
          <span
            className={
              location.pathname === `/lojas` ? 'active-text' : 'inherit'
            }
          >
            <RiStore3Fill />
          </span>
          <p
            className={
              location.pathname === `/lojas` ? 'active-text' : 'inherit'
            }
          >
            Lojas
          </p>
        </MenuItem>
      ) : null}
    </MenuContainer>
  );
};

export default Menu;
