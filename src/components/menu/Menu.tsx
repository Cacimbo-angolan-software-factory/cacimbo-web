import React, { useContext, useState } from 'react';
import { RiHome5Fill } from 'react-icons/ri';
import { RiServiceFill } from 'react-icons/ri';
import { RiFolderKeyholeFill } from 'react-icons/ri';
import { RiShieldCheckFill } from 'react-icons/ri';
import { RiWechatFill } from 'react-icons/ri';
import { RiNewspaperFill } from 'react-icons/ri';
import { Link, NavLink, useLocation } from 'react-router-dom';

import { MenuContainer, MenuItem } from './styles';

const Menu: React.FC = () => {
  const [active, setActive] = useState();
  const location = useLocation();

  return (
    <MenuContainer>
      <MenuItem
        className={location.pathname === `/Admin` ? 'active' : 'inherit'}
        to='/Admin'
      >
        <span>
          <RiHome5Fill />
        </span>
        <p>Home</p>
      </MenuItem>

      <MenuItem to='/'>
        <span>
          <RiServiceFill />
        </span>
        <p>Empresa</p>
      </MenuItem>

      <MenuItem
        className={
          location.pathname === `/Admin/licen%C3%A7as` ? 'active' : 'inherit'
        }
        to='/Admin/licenças'
      >
        <span>
          <RiFolderKeyholeFill />
        </span>
        <p>Licenças</p>
      </MenuItem>

      <MenuItem
        className={
          location.pathname === `/Admin/solicita%C3%A7oes`
            ? 'active'
            : 'inherit'
        }
        to='/Admin/solicitaçoes'
      >
        <span>
          <RiShieldCheckFill />
        </span>
        <p>Solicitações</p>
      </MenuItem>

      <MenuItem to='/'>
        <span>
          <RiWechatFill />
        </span>
        <p>Comunidade</p>
      </MenuItem>

      <MenuItem to='/'>
        <span>
          <RiNewspaperFill />
        </span>
        <p>Noticías</p>
      </MenuItem>
    </MenuContainer>
  );
};

export default Menu;
