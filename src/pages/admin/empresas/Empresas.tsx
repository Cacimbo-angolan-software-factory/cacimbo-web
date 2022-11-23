import React, { useContext, useState } from 'react';
import Empresa from '../../../components/empresa/Empresa';
import Sidebar from '../../../components/sidebar/SideBar';
import { LicContext } from '../../../context';

import { Container } from './stylesEmpresas';

const Empresas: React.FC = () => {
  const { empresas } = useContext(LicContext);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Container>
        {empresas &&
          empresas.map((empresa: any) => (
            <Container key={empresa.id}>
              <Empresa handleOpen={handleOpen} empresa={empresa} />
            </Container>
          ))}
      </Container>

      {open && <Sidebar handleClose={handleClose} />}
    </>
  );
};

export default Empresas;
