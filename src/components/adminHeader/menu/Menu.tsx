import React from 'react';
import {
  RiHome5Fill,
  RiServiceFill,
  RiShieldCheckFill,
  RiUserFill,
  RiFileList3Fill,
  RiSurveyFill,
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

      {user.user.tipo === 'Parceiro' ? null : (
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
            Empresa
          </p>
        </MenuItem>
      )}

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

      <MenuItem
        className={location.pathname === `/Acesso` ? 'active' : 'inherit'}
        to='/Acesso'
      >
        <span
          className={
            location.pathname === `/Acesso` ? 'active-text' : 'inherit'
          }
        >
          <RiShieldCheckFill />
        </span>
        <p
          className={
            location.pathname === `/Acesso` ? 'active-text' : 'inherit'
          }
        >
          Acesso
        </p>
      </MenuItem>
    </MenuContainer>
  );
};

export default Menu;
