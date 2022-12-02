import React from 'react';
import { IoArrowBackCircleOutline } from 'react-icons/io5';

import { Box, Header, Licenca, SemLicenca, LicencasDiv } from './stylesEmpresa';

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
              <p>{licenca.cliente_nome}</p>
              <p>{licenca.id}</p>
              <p>{licenca.data_validade}</p>
            </Licenca>
          ))
        ) : (
          <SemLicenca>Não existem licenças</SemLicenca>
        )}
      </LicencasDiv>
    </Box>
  );
};

export default SideBarLicencas;
