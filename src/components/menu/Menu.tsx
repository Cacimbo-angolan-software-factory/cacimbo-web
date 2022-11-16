import React, { useContext, useState } from 'react';
import { RiHome5Fill } from 'react-icons/ri';
import { RiServiceFill } from 'react-icons/ri';
import { RiFolderKeyholeFill } from 'react-icons/ri';
import { RiShieldCheckFill } from 'react-icons/ri';
import { RiWechatFill } from 'react-icons/ri';
import { RiNewspaperFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import { MenuContainer, MenuItem } from './styles';

const Menu: React.FC = () => {
  const [active, setActive] = useState(0);

  return (
    <MenuContainer>
      <Link to='/Admin'>
        <MenuItem>
          <span>
            <RiHome5Fill />
          </span>
          <p>Home</p>
        </MenuItem>
      </Link>

      <MenuItem>
        <span>
          <RiServiceFill />
        </span>
        <p>Empresa</p>
      </MenuItem>

      <Link to='/Admin/licenças'>
        <MenuItem>
          <span>
            <RiFolderKeyholeFill />
          </span>
          <p>Licenças</p>
        </MenuItem>
      </Link>

      <MenuItem>
        <span>
          <RiShieldCheckFill />
        </span>
        <p>Solicitações</p>
      </MenuItem>

      <MenuItem>
        <span>
          <RiWechatFill />
        </span>
        <p>Comunidade</p>
      </MenuItem>

      <MenuItem>
        <span>
          <RiNewspaperFill />
        </span>
        <p>Noticías</p>
      </MenuItem>
    </MenuContainer>
  );
};

export default Menu;
