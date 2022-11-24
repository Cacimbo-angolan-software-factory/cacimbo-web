import React, { useContext } from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { IoPersonOutline } from 'react-icons/io5';
import { IoBusinessOutline } from 'react-icons/io5';
import { IoIdCardOutline } from 'react-icons/io5';
import { IoMailOutline } from 'react-icons/io5';
import { IoCallOutline } from 'react-icons/io5';
import { IoLocationOutline } from 'react-icons/io5';
import { IoKeyOutline } from 'react-icons/io5';
import { IoFileTrayFullOutline } from 'react-icons/io5';
import { IoGlobeOutline } from 'react-icons/io5';
import { IoCreateOutline } from 'react-icons/io5';

import { Button, Div, Wrapper } from './sidebarStyles';

interface SidebarProps {
  handleClose?: () => void;
  empresaSelected: any;
}

const Sidebar: React.FC<SidebarProps> = ({ handleClose, empresaSelected }) => {
  const {
    Nome,
    Responsavel,
    email,
    id,
    ProvinciaSede,
    Nif,
    telefone,
    website,
  } = empresaSelected;

  return (
    <Wrapper>
      <div>
        <h1>
          <IoBusinessOutline />
          {Nome}
        </h1>
        <span onClick={handleClose}>
          <IoCloseCircleOutline />
        </span>
      </div>

      {id && (
        <p>
          <IoIdCardOutline />
          {id && id}
        </p>
      )}

      {Responsavel && (
        <p>
          <IoPersonOutline />
          {Responsavel && Responsavel}
        </p>
      )}

      {email && (
        <p>
          <IoMailOutline />
          {email}
        </p>
      )}

      {telefone && (
        <p>
          <IoCallOutline />
          {telefone}
        </p>
      )}

      {Nif && (
        <p>
          <IoFileTrayFullOutline />
          {Nif}
        </p>
      )}

      {ProvinciaSede && (
        <p>
          <IoLocationOutline />
          {ProvinciaSede}
        </p>
      )}

      {website && (
        <p>
          <IoGlobeOutline />
          {website}
        </p>
      )}

      <Div>
        <Button>
          <IoCreateOutline />
          Editar
        </Button>
        <Button>
          <IoKeyOutline />
          Licença
        </Button>
      </Div>
    </Wrapper>
  );
};

export default Sidebar;
