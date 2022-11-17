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

  const itemsPerPage = 50;
  const endOffset = pageNumber * itemsPerPage;
  const currentItems = licences.slice(endOffset, endOffset + itemsPerPage);
  const pageCount = Math.ceil(licences.length / itemsPerPage);

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
      <Filters fixedFilter={fixedFilter} />

      <div>
        {currentItems &&
          currentItems.map((licence) => {
            return <Licence licence={licence} />;
          })}
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
