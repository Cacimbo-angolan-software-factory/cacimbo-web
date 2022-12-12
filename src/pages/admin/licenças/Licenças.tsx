import React, { useContext, useEffect, useState } from 'react';
import { LicContext } from '../../../context';
import Licence from '../../../components/licenças/Licence';

import { Pagination } from './styles';
import Filters from '../../../components/licenças/filters/Filters';
import ScrollTop from '../../../components/scrollTop/ScrollTop';

const Licenças: React.FC = () => {
  const { licences } = useContext(LicContext);
  const [fixedFilter, setFixedFilter] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [filtro, setFiltro] = useState('all');

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
    return (
      filtro === 'all' && (
        <div>
          {currentItems.map((licence) => (
            <div key={licence.id}>
              <Licence licence={licence} />
            </div>
          ))}
        </div>
      )
    );
  };

  const handleTodasActivas = () => {
    return (
      filtro === 'activasAll' && (
        <div>
          {todasActivasPaginated.map((licence) => (
            <div key={licence.id}>
              <Licence licence={licence} />
            </div>
          ))}
        </div>
      )
    );
  };

  const handlePorRenovar = () => {
    return (
      filtro === 'porRenovar' && (
        <div>
          {porRenovarPaginated.map((licence) => (
            <div key={licence.id}>
              <Licence licence={licence} />
            </div>
          ))}
        </div>
      )
    );
  };

  // function to filter by partner
  const parceiro = () => {
    return (
      filtro === 'parceiro' && (
        <div>
          {SelectedPartnerPaginated.map((licence) => (
            <div key={licence.id}>
              <Licence licence={licence} />
            </div>
          ))}
        </div>
      )
    );
  };

  const handleActivasParceiro = () => {
    return (
      filtro === 'activasParceiro' && (
        <div>
          {activasParceiroPaginated.map((licence) => (
            <div key={licence.id}>
              <Licence licence={licence} />
            </div>
          ))}
        </div>
      )
    );
  };

  const handlePorRenovarParceiro = () => {
    return (
      filtro === 'porRenovarParceiro' && (
        <div>
          {porRenovarParceiroPaginated.map((licence) => (
            <div key={licence.id}>
              <Licence licence={licence} />
            </div>
          ))}
        </div>
      )
    );
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
      <Filters
        filtro={filtro}
        setFiltro={setFiltro}
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
