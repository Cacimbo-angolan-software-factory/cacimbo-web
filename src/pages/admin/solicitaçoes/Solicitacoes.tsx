import React, { useContext } from 'react';
import Solicitacao from '../../../components/solicitacoes/Solicitacao';
import { LicContext } from '../../../context';

import { Container } from './stylesSoli';

const Solicitaçoes: React.FC = () => {
  const { lic_requests } = useContext(LicContext);

  console.log(lic_requests);

  return (
    <Container>
      {lic_requests.map((lic_request: any) => (
        <div key={lic_request.id}>
          <Solicitacao lic_request={lic_request} />
        </div>
      ))}
    </Container>
  );
};

export default Solicitaçoes;
