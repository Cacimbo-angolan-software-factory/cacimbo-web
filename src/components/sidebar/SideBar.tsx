import React, { useContext } from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { LicContext } from '../../context';

import { Wrapper } from './sidebarStyles';

interface SidebarProps {
  handleClose?: () => void;
  empresaSelected: any;
}

const Sidebar: React.FC<SidebarProps> = ({ handleClose, empresaSelected }) => {
  const { empresas } = useContext(LicContext);

  console.log(empresaSelected);

  return (
    <Wrapper>
      <h1>{empresaSelected.Nome}</h1>
      <span onClick={handleClose}>
        <IoIosCloseCircleOutline />
      </span>
    </Wrapper>
  );
};

export default Sidebar;
