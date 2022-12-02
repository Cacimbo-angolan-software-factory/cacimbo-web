import React, { useContext } from 'react';
import Solicitacao from '../../../components/solicitacoes/Solicitacao';
import { LicContext } from '../../../context';

import { Button, Container } from './stylesSoli';

const Solicitaçoes: React.FC = () => {
  const { lic_requests } = useContext(LicContext);

  return (
    <>
      <Button>Nova Solicitação</Button>
      <Container>
        {lic_requests.map((lic_request: any) => (
          <div key={lic_request.id}>
            <Solicitacao lic_request={lic_request} />
          </div>
        ))}
      </Container>
    </>
  );
};

export default Solicitaçoes;
