import React from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';

import { Wrapper } from './sidebarStyles';

interface SidebarProps {
  handleClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ handleClose }) => {
  return (
    <Wrapper>
      <h1>Hello world</h1>

      <span onClick={handleClose}>
        <IoIosCloseCircleOutline />
      </span>
    </Wrapper>
  );
};

export default Sidebar;
