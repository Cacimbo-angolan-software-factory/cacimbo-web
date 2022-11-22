import React, { useContext, useEffect } from 'react';
import Empresa from '../../../components/empresa/Empresa';
import { LicContext } from '../../../context';

import { Container } from './stylesEmpresas';

const Empresas: React.FC = () => {
  const { empresas } = useContext(LicContext);

  return (
    <Container>
      {empresas &&
        empresas.map((empresa: any) => (
          <Container key={empresa.id}>
            <Empresa empresa={empresa} />
          </Container>
        ))}
    </Container>
  );
};

export default Empresas;
