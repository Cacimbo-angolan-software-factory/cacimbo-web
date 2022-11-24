import React, { useContext } from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { LicContext } from '../../context';

import { Wrapper } from './sidebarStyles';

interface SidebarProps {
  handleClose?: () => void;
  empresaSelected: any;
}

const Sidebar: React.FC<SidebarProps> = ({ handleClose, empresaSelected }) => {
  console.log(empresaSelected);

  return (
    <Wrapper>
      <div>
        <h1>{empresaSelected.Nome}</h1>
        <span onClick={handleClose}>
          <IoIosCloseCircleOutline />
        </span>
      </div>
    </Wrapper>
  );
};

export default Sidebar;
