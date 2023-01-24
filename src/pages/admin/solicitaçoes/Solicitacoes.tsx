import React, { useContext } from 'react';
import AdminHeader from '../../../components/adminHeader/AdminHeader';
import ScrollTop from '../../../components/scrollTop/ScrollTop';
import CriarSolicitaçao from '../../../components/solicitacoes/criarSolicitaçao/CriarSolic';
import Solicitacao from '../../../components/solicitacoes/Solicitacao';
import { LicContext } from '../../../context';

import { Button, Container } from './stylesSoli';

const Solicitaçoes: React.FC = () => {
  const { lic_requests } = useContext(LicContext);
  const [click, setClick] = React.useState(false);

  return (
    <>
      <AdminHeader />

      <Button
        style={{
          display: click ? 'none' : 'flex',
        }}
        onClick={() => setClick(true)}
      >
        Nova Solicitação
      </Button>

      {click ? (
        <CriarSolicitaçao setClick={setClick} />
      ) : (
        <Container>
          {lic_requests.map((lic_request: any) => (
            <div key={lic_request.id}>
              <Solicitacao lic_request={lic_request} />
            </div>
          ))}
        </Container>
      )}
      <ScrollTop />
    </>
  );
};

export default Solicitaçoes;
