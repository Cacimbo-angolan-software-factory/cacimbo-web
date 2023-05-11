import React from 'react';

import { Wrapper } from './SideBarStylesSoli';

interface UsuariosProps {
  children: React.ReactNode;
  menuRef?: React.MutableRefObject<any>;
}

const SideBarSoli: React.FC<UsuariosProps> = ({ children, menuRef }) => {
  return <Wrapper ref={menuRef}>{children}</Wrapper>;
};

export default SideBarSoli;
