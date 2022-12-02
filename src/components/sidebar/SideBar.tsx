import React, { useState } from 'react';
import SideBarEmpresa from '../empresa/SideBarEmpresa';
import SideBarLicencas from '../empresa/SideBarLicencas';

import { Wrapper } from './sidebarStyles';

interface SidebarProps {
  handleClose?: () => void;
  empresaSelected: any;
  licencas: any;
}

const Sidebar: React.FC<SidebarProps> = ({
  handleClose,
  empresaSelected,
  licencas,
}) => {
  const [showLicencas, setShowLicencas] = useState(false);

  return (
    <Wrapper>
      {showLicencas === false ? (
        <SideBarEmpresa
          empresaSelected={empresaSelected}
          handleClose={handleClose}
          setShowLicencas={setShowLicencas}
        />
      ) : (
        <SideBarLicencas
          licencas={licencas}
          setShowLicencas={setShowLicencas}
        />
      )}
    </Wrapper>
  );
};

export default Sidebar;
