import React, { useEffect } from 'react';
import { RiHome5Fill } from 'react-icons/ri';
import { RiServiceFill } from 'react-icons/ri';
import { RiFolderKeyholeFill } from 'react-icons/ri';
import { RiShieldCheckFill } from 'react-icons/ri';
import { RiWechatFill } from 'react-icons/ri';
import { RiNewspaperFill } from 'react-icons/ri';
import { RiUserFill } from 'react-icons/ri';
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
        <span>
          <RiHome5Fill />
        </span>
        <p>Home</p>
      </MenuItem>

      {user.user.tipo === 'Parceiro' ? null : (
        <MenuItem
          className={location.pathname === `/empresas` ? 'active' : 'inherit'}
          to='/empresas'
        >
          <span>
            <RiServiceFill />
          </span>
          <p>Empresa</p>
        </MenuItem>
      )}

      <MenuItem
        className={
          location.pathname === `/licen%C3%A7as` ? 'active' : 'inherit'
        }
        to='/licenças'
      >
        <span>
          <RiFolderKeyholeFill />
        </span>
        <p>Licenças</p>
      </MenuItem>

      <MenuItem
        className={
          location.pathname === `/solicita%C3%A7oes` ? 'active' : 'inherit'
        }
        to='/solicitaçoes'
      >
        <span>
          <RiShieldCheckFill />
        </span>
        <p>Solicitações</p>
      </MenuItem>

      <MenuItem
        className={location.pathname === `/Usuarios` ? 'active' : 'inherit'}
        to='/Usuarios'
      >
        <span>
          <RiUserFill />
        </span>
        <p>Usuários</p>
      </MenuItem>
    </MenuContainer>
  );
};

export default Menu;
