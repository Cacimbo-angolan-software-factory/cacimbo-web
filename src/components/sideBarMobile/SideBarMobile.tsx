import React from 'react';

import { Menus, Wrapper } from './SideBarMobileStyles';
import { Link } from 'react-router-dom';

interface SideBarMobileProps {
  showMenu: boolean;
}

const SideBarMobile: React.FC<SideBarMobileProps> = ({ showMenu }) => {
  return (
    <Wrapper>
      <Menus>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/empresas'>
          <li>Parceiros</li>
        </Link>
        <Link to='/licenças'>
          <li>Licenças</li>
        </Link>
        <Link to='/solicitaçoes'>
          <li>Solicitações</li>
        </Link>
        <Link to='/Usuarios'>
          <li>Usuários</li>
        </Link>
        <Link to='/Acesso'>
          <li>Acesso</li>
        </Link>
        <Link to='/Lojas'>
          <li>Lojas</li>
        </Link>
        <li>Mudar palavra passe</li>
        <li>termninar Sessão</li>
      </Menus>
    </Wrapper>
  );
};

export default SideBarMobile;
