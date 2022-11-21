import React, { useContext, useEffect, useState } from 'react';
import { LicContext } from '../../../context';
import Licence from '../../../components/licenças/Licence';
import ReactPaginate from 'react-paginate';

import { Pagination } from './styles';
import Filters from '../../../components/licenças/filters/Filters';

const Licenças: React.FC = () => {
  const { licences } = useContext(LicContext);
  const [fixedFilter, setFixedFilter] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [filterPartner, setFilterPartner] = useState(false);

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
        filterPartner={filterPartner}
        setFilterPartner={setFilterPartner}
        fixedFilter={fixedFilter}
      />

      <div>
        {filterPartner === false
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

      <Pagination
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        pageCount={pageCount}
        // marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        activeClassName={'active'}
      />
    </>
  );
};

export default Licenças;
