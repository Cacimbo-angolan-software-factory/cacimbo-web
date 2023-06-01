import React from 'react';

import { Wrapper } from './stylesSideBarLicence';

interface UsuariosProps {
  children: React.ReactNode;
  menuRef?: React.MutableRefObject<any>;
}

const SideBarLicence: React.FC<UsuariosProps> = ({ children, menuRef }) => {
  return <Wrapper ref={menuRef}>{children}</Wrapper>;
};

export default SideBarLicence;
