import React, { useContext, useState } from 'react';
import Empresa from '../../../components/empresa/Empresa';
import Sidebar from '../../../components/sidebar/SideBar';
import { LicContext } from '../../../context';

import { Button, Container } from './stylesEmpresas';

const Empresas: React.FC = () => {
  const { empresas, licences } = useContext(LicContext);
  const [open, setOpen] = useState(false);
  const [empresaSelected, setEmpresaSelected] = useState<any>();

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const licencasDeParceiro = licences.filter((licence) => {
    return licence.parceiro_id === empresaSelected?.id;
  });

  return (
    <>
      <Button>Criar empresa</Button>
      <Container>
        {empresas &&
          empresas.map((empresa: any) => (
            <Container key={empresa.id}>
              <Empresa
                handleClick={handleClick}
                setEmpresaSelected={setEmpresaSelected}
                empresa={empresa}
              />
            </Container>
          ))}
      </Container>
      {open && (
        <Sidebar
          licencas={licencasDeParceiro}
          empresaSelected={empresaSelected}
          handleClose={handleClose}
        />
      )}
    </>
  );
};

export default Empresas;
