import React, { MutableRefObject } from 'react';

import { Main } from './SideBarAssistStyles';

interface IProps {
  assistSelected: any;
  menuRef: MutableRefObject<any>;
}

const SideBarAssist: React.FC<IProps> = ({ assistSelected, menuRef }) => {
  return (
    <Main ref={menuRef}>
      <h1>
        {assistSelected.titulo} - {assistSelected.id}
      </h1>
    </Main>
  );
};

export default SideBarAssist;
