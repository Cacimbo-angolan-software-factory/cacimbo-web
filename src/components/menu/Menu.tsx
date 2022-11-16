import React, { useContext } from 'react';
import { RiHome5Fill } from 'react-icons/ri';
import { RiServiceFill } from 'react-icons/ri';
import { RiFolderKeyholeFill } from 'react-icons/ri';
import { RiShieldCheckFill } from 'react-icons/ri';
import { RiWechatFill } from 'react-icons/ri';
import { RiNewspaperFill } from 'react-icons/ri';

import { MenuContainer, MenuItem } from './styles';

const Menu: React.FC = () => {
  return (
    <MenuContainer>
      <MenuItem>
        <span>
          <RiHome5Fill />
        </span>
        <p>Home</p>
      </MenuItem>

      <MenuItem>
        <span>
          <RiServiceFill />
        </span>
        <p>Empresa</p>
      </MenuItem>

      <MenuItem>
        <span>
          <RiFolderKeyholeFill />
        </span>
        <p>Licenças</p>
      </MenuItem>

      <MenuItem>
        <span>
          <RiShieldCheckFill />
        </span>
        <p>Atribuições</p>
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
