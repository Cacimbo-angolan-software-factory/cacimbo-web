import React from 'react';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import EmptyState from '../../emptyState/EmptyState';

import {
  Box,
  Header,
  Licenca,
  SemLicenca,
  LicencasDiv,
  SmallP,
  NameP,
} from './sidebarEmpresaStyles';

interface SideBarLicencasProps {
  licencas: any;
  setShowLicencas: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBarLicencas: React.FC<SideBarLicencasProps> = ({
  licencas,
  setShowLicencas,
}) => {
  const handleClick = () => {
    setShowLicencas(false);
  };

  return (
    <Box>
      <Header>
        <span onClick={handleClick}>
          <IoArrowBackCircleOutline />
        </span>
        <h1>Licenças</h1>
      </Header>

      <LicencasDiv>
        {licencas.length > 0 ? (
          licencas.map((licenca: any) => (
            <Licenca key={licenca.id}>
              <NameP>{licenca.cliente_nome}</NameP>
              <SmallP>{licenca.id}</SmallP>
              <SmallP>{licenca.data_validade}</SmallP>
            </Licenca>
          ))
        ) : (
          <EmptyState>
            <SemLicenca>Não existem licenças</SemLicenca>
          </EmptyState>
        )}
      </LicencasDiv>
    </Box>
  );
};

export default SideBarLicencas;
