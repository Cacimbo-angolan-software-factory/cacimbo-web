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
  const [todos, setTodos] = useState(true);
  const [filtro, setFiltro] = useState(false);

  const itemsPerPage = 50;
  const endOffset = pageNumber + itemsPerPage;
  const currentItems = licences.slice(endOffset, endOffset + itemsPerPage);
  const pageCount = Math.ceil(licences.length / itemsPerPage);
  const selectedPartner = licences.filter(
    (licence) => licence.parceiro_id === 1
  );
  const SelectedPartnerPaginated = selectedPartner.slice(
    endOffset,
    endOffset + itemsPerPage
  );

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
        todos={todos}
        setTodos={setTodos}
        filtro={filtro}
        setFiltro={setFiltro}
        fixedFilter={fixedFilter}
      />

      <div>
        {todos
          ? currentItems.map((licence) => (
              <div key={licence.id}>
                <Licence licence={licence} />
              </div>
            ))
          : SelectedPartnerPaginated.map((licence) => (
              <div key={licence.id}>
                <Licence licence={licence} />
              </div>
            ))}
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
