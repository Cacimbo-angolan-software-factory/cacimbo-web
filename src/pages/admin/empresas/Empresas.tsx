import React, { useContext, useState, useRef, useEffect } from 'react';
import Empresa from '../../../components/empresa/Empresa';
import ScrollTop from '../../../components/scrollTop/ScrollTop';
import Sidebar from '../../../components/sidebar/SideBar';
import { LicContext } from '../../../context';

import { Button, Container } from './stylesEmpresas';

const Empresas: React.FC = () => {
  const { empresas, licences } = useContext(LicContext);
  const [open, setOpen] = useState(false);
  const [empresaSelected, setEmpresaSelected] = useState<any>();
  let menuRef = useRef<any>(null);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    let handler = (event: any) => {
      if (!menuRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

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
          menuRef={menuRef}
          licencas={licencasDeParceiro}
          empresaSelected={empresaSelected}
          handleClose={handleClose}
        />
      )}
      <ScrollTop />
    </>
  );
};

export default Empresas;
