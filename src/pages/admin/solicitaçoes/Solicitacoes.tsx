import React, { useContext } from 'react';
import { LicContext } from '../../../context';

import { Container } from './stylesSoli';

const Solicitaçoes: React.FC = () => {
  const { lic_requests } = useContext(LicContext);

  console.log(lic_requests);

  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
};

export default Solicitaçoes;
