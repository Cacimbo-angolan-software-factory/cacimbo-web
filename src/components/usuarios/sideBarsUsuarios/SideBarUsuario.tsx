import React from 'react';

import { Wrapper } from './stylesSideBars';

interface UsuariosProps {
  children: React.ReactNode;
  menuRef?: React.MutableRefObject<any>;
}

const SideBarUsuario: React.FC<UsuariosProps> = ({ children, menuRef }) => {
  return <Wrapper ref={menuRef}>{children}</Wrapper>;
};

export default SideBarUsuario;
