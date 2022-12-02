import React, { useContext } from 'react';
import SideBarEmpresa from '../empresa/SideBarEmpresa';

import { Wrapper } from './sidebarStyles';

interface SidebarProps {
  handleClose?: () => void;
  empresaSelected: any;
}

const Sidebar: React.FC<SidebarProps> = ({ handleClose, empresaSelected }) => {
  return (
    <Wrapper>
      <SideBarEmpresa
        empresaSelected={empresaSelected}
        handleClose={handleClose}
      />
    </Wrapper>
  );
};

export default Sidebar;
