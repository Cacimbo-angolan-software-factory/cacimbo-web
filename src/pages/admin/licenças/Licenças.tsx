import React, { useContext, useEffect, useState } from 'react';
import { LicContext } from '../../../context';
import Licence from '../../../components/licenças/Licence';

import { Pagination } from './styles';
import Filters from '../../../components/licenças/filters/Filters';
import ScrollTop from '../../../components/scrollTop/ScrollTop';
import AdminHeader from '../../../components/adminHeader/AdminHeader';
import EmptyState from '../../../components/emptyState/EmptyState';
import Spinner from '../../../components/spinner/Spinner';

const Licenças: React.FC = () => {
  const { licences, loadingLicenses } = useContext(LicContext);
  const [fixedFilter, setFixedFilter] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [filtro, setFiltro] = useState('all');
  const [childFitro, setChildFiltro] = useState('todas');

  const itemsPerPage = 50;
  const endOffset = pageNumber + itemsPerPage;
  const currentItems = licences.slice(endOffset, endOffset + itemsPerPage);
  const pageCount = Math.ceil(licences.length / itemsPerPage);
  let today = new Date().toISOString().slice(0, 10);
  const todasActivas = licences.filter(
    (licence) => licence.data_validade > today
  );
  const todasActivasPaginated = todasActivas.slice(
    endOffset,
    endOffset + itemsPerPage
  );
  const porRenovar = licences.filter(
    (licence) => licence.data_validade < today
  );
  const porRenovarPaginated = porRenovar.slice(
    endOffset,
    endOffset + itemsPerPage
  );

  // filter by partner
  const selectedPartner = licences.filter(
    (licence) => licence.parceiro_id === 1
  );
  const SelectedPartnerPaginated = selectedPartner.slice(
    endOffset,
    endOffset + itemsPerPage
  );
  const activasParceiro = selectedPartner.filter(
    (licence) => licence.data_validade > today
  );
  const activasParceiroPaginated = activasParceiro.slice(
    endOffset,
    endOffset + itemsPerPage
  );
  const porRenovarParceiro = selectedPartner.filter(
    (licence) => licence.data_validade < today
  );
  const porRenovarParceiroPaginated = porRenovarParceiro.slice(
    endOffset,
    endOffset + itemsPerPage
  );

  // handling the filter
  const todos = () => {
    if (filtro === 'all' && childFitro === 'todas') {
      return (
        <div>
          {currentItems.length > 0 ? (
            currentItems.map((licence) => (
              <div key={licence.id}>
                <Licence licence={licence} />
              </div>
            ))
          ) : (
            <EmptyState>
              <h2>Não existem licenças</h2>
            </EmptyState>
          )}
        </div>
      );
    }
  };

  const handleTodasActivas = () => {
    if (filtro === 'all' && childFitro === 'activasAll') {
      return (
        <div>
          {todasActivasPaginated.length > 0 ? (
            todasActivasPaginated.map((licence) => (
              <div key={licence.id}>
                <Licence licence={licence} />
              </div>
            ))
          ) : (
            <EmptyState>
              <h2>Não existem licenças</h2>
            </EmptyState>
          )}
        </div>
      );
    }
  };

  const handlePorRenovar = () => {
    if (filtro === 'all' && childFitro === 'porRenovarAll') {
      return (
        <div>
          {porRenovarPaginated.length > 0 ? (
            porRenovarPaginated.map((licence) => (
              <div key={licence.id}>
                <Licence licence={licence} />
              </div>
            ))
          ) : (
            <EmptyState>
              <h2>Não existem licenças</h2>
            </EmptyState>
          )}
        </div>
      );
    }
  };

  // function to filter by partner
  const parceiro = () => {
    if (filtro === 'parceiro' && childFitro === 'parceiroTodas') {
      return (
        <div>
          {SelectedPartnerPaginated.length > 0 ? (
            SelectedPartnerPaginated.map((licence) => (
              <div key={licence.id}>
                <Licence licence={licence} />
              </div>
            ))
          ) : (
            <EmptyState>
              <h2>Não existem licenças</h2>
            </EmptyState>
          )}
        </div>
      );
    }
  };

  const handleActivasParceiro = () => {
    if (filtro === 'parceiro' && childFitro === 'activasParceiro') {
      return (
        <div>
          {activasParceiroPaginated.length > 0 ? (
            activasParceiroPaginated.map((licence) => (
              <div key={licence.id}>
                <Licence licence={licence} />
              </div>
            ))
          ) : (
            <EmptyState>
              <h2>Não existem licenças</h2>
            </EmptyState>
          )}
        </div>
      );
    }
  };

  const handlePorRenovarParceiro = () => {
    if (filtro === 'parceiro' && childFitro === 'porRenovarParceiro') {
      return (
        <div>
          {porRenovarParceiroPaginated.length > 0 ? (
            porRenovarParceiroPaginated.map((licence) => (
              <div key={licence.id}>
                <Licence licence={licence} />
              </div>
            ))
          ) : (
            <EmptyState>
              <h2>Não existem licenças</h2>
            </EmptyState>
          )}
        </div>
      );
    }
  };

  const handlePageClick = (event: any) => {
    const newOffset =
      ((event as any).selected * itemsPerPage) % licences.length;
    setPageNumber(newOffset);
  };

  function onScroll() {
    if (window.scrollY >= 300) {
      setFixedFilter(true);
    } else {
      setFixedFilter(false);
    }
  }
  window.addEventListener('scroll', onScroll);

  return (
    <>
      <AdminHeader />

      <Filters
        filtro={filtro}
        setFiltro={setFiltro}
        childFiltro={childFitro}
        setChildFiltro={setChildFiltro}
        fixedFilter={fixedFilter}
      />

      <div>
        {todos && todos()}
        {handleTodasActivas && handleTodasActivas()}
        {handlePorRenovar && handlePorRenovar()}
        {parceiro && parceiro()}
        {handleActivasParceiro && handleActivasParceiro()}
        {handlePorRenovarParceiro && handlePorRenovarParceiro()}
      </div>
      <ScrollTop />

      {loadingLicenses && <Spinner />}

      <Pagination
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        pageCount={pageCount}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        activeClassName={'active'}
      />
    </>
  );
};

export default Licenças;
