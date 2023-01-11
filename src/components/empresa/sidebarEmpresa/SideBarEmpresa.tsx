import React, { useContext, useEffect } from 'react';
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

import { Container, Text, Button, Div } from './sidebarEmpresaStyles';

interface SideBarEmpresaProps {
  empresaSelected: any;
  handleClose?: () => void;
  setShowLicencas: React.Dispatch<React.SetStateAction<boolean>>;
  setShowEditar: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBarEmpresa: React.FC<SideBarEmpresaProps> = ({
  empresaSelected,
  handleClose,
  setShowLicencas,
  setShowEditar,
}) => {
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

  const handleClick = () => {
    setShowLicencas(true);
  };

  return (
    <>
      <Container>
        <h1>
          <IoBusinessOutline />
          {Nome}
        </h1>
        <span onClick={handleClose}>
          <IoCloseCircleOutline />
        </span>
      </Container>

      {id && (
        <Text>
          <IoIdCardOutline />
          {id && id}
        </Text>
      )}

      {Responsavel && (
        <Text>
          <IoPersonOutline />
          {Responsavel && Responsavel}
        </Text>
      )}

      {email && (
        <Text>
          <IoMailOutline />
          {email}
        </Text>
      )}

      {telefone && (
        <Text>
          <IoCallOutline />
          {telefone}
        </Text>
      )}

      {Nif && (
        <Text>
          <IoFileTrayFullOutline />
          {Nif}
        </Text>
      )}

      {ProvinciaSede && (
        <Text>
          <IoLocationOutline />
          {ProvinciaSede}
        </Text>
      )}

      {website && (
        <Text>
          <IoGlobeOutline />
          {website}
        </Text>
      )}

      <Div>
        <Button onClick={() => setShowEditar(true)}>
          <IoCreateOutline />
          Editar
        </Button>
        <Button onClick={handleClick}>
          <IoKeyOutline />
          Licenças
        </Button>
      </Div>
    </>
  );
};

export default SideBarEmpresa;
