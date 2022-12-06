import React, { useState } from 'react';
import SideBarEmpresa from '../empresa/sidebarEmpresa/SideBarEmpresa';
import SideBarLicencas from '../empresa/sidebarEmpresa/SideBarLicencas';
import SideBarEditar from '../empresa/sidebarEmpresa/SideBarEditar';

import { Wrapper } from './sidebarStyles';

interface SidebarProps {
  handleClose?: () => void;
  empresaSelected: any;
  licencas: any;
  menuRef?: React.MutableRefObject<any>;
}

const Sidebar: React.FC<SidebarProps> = ({
  handleClose,
  empresaSelected,
  licencas,
  menuRef,
}) => {
  const [showLicencas, setShowLicencas] = useState(false);
  const [showEditar, setShowEditar] = useState(false);

  return (
    <Wrapper ref={menuRef}>
      {showLicencas ? (
        <SideBarLicencas
          licencas={licencas}
          setShowLicencas={setShowLicencas}
        />
      ) : showEditar ? (
        <SideBarEditar setShowEditar={setShowEditar} />
      ) : (
        <SideBarEmpresa
          handleClose={handleClose}
          empresaSelected={empresaSelected}
          setShowLicencas={setShowLicencas}
          setShowEditar={setShowEditar}
        />
      )}
    </Wrapper>
  );
};

export default Sidebar;
