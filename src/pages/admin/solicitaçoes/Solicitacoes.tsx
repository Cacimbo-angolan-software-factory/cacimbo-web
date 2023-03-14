import React, { useContext, useEffect } from 'react';
import AdminHeader from '../../../components/adminHeader/AdminHeader';
import BtnCreate from '../../../components/btnCreate/BtnCreate';
import HeaderMobile from '../../../components/headerMobile/HeaderMobile';
import ScrollTop from '../../../components/scrollTop/ScrollTop';
import CriarSolicitaçao from '../../../components/solicitacoes/criarSolicitaçao/CriarSolic';
import Solicitacao from '../../../components/solicitacoes/Solicitacao';
import Spinner from '../../../components/spinner/Spinner';
import { LicContext } from '../../../context';

import { Container, InputSearch } from './stylesSoli';

const Solicitaçoes: React.FC = () => {
  const { lic_requests, IsLoadingTheOrder, sections } = useContext(LicContext);
  const [click, setClick] = React.useState(false);
  const [search, setSearch] = React.useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

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
        <>
          <InputSearch
            onChange={handleSearch}
            value={search}
            type='text'
            placeholder='Pesquise solicitação...'
          />
          <Container>
            {lic_requests
              .filter((item: any) => {
                if (search === '') {
                  return item;
                } else if (
                  item.cliente_nome
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  item.cliente_nif.toLowerCase().includes(search.toLowerCase())
                ) {
                  return item;
                }
              })
              .map((lic_request: any) => (
                <div key={lic_request.id}>
                  <Solicitacao lic_request={lic_request} />
                </div>
              ))}
          </Container>
          <Container>
            {/* {sections.map((section: any) => (
              <div key={section.id}>
                <Solicitacao lic_request={section} />
              </div>
            ))} */}
          </Container>
        </>
      )}

      {IsLoadingTheOrder && <Spinner />}
      <ScrollTop />
    </>
  );
};

export default Solicitaçoes;
