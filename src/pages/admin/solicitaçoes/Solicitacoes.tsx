import React, { useContext } from 'react';
import AdminHeader from '../../../components/adminHeader/AdminHeader';
import BtnCreate from '../../../components/btnCreate/BtnCreate';
import HeaderMobile from '../../../components/headerMobile/HeaderMobile';
import ScrollTop from '../../../components/scrollTop/ScrollTop';
import CriarSolicitaçao from '../../../components/solicitacoes/criarSolicitaçao/CriarSolic';
import Solicitacao from '../../../components/solicitacoes/Solicitacao';
import Spinner from '../../../components/spinner/Spinner';
import { LicContext } from '../../../context';

import { Container } from './stylesSoli';

const Solicitaçoes: React.FC = () => {
  const { lic_requests, IsLoadingTheOrder } = useContext(LicContext);
  const [click, setClick] = React.useState(false);

  return (
    <>
      <AdminHeader />
      <HeaderMobile />

      <BtnCreate
        style={{
          display: click ? 'none' : 'flex',
        }}
        onClick={() => setClick(true)}
      >
        Nova Solicitação
      </BtnCreate>

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

      {IsLoadingTheOrder && <Spinner />}
      <ScrollTop />
    </>
  );
};

export default Solicitaçoes;
