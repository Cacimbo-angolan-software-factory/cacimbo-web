import React, { useContext, useEffect, useState } from 'react';
import { LicContext } from '../../../context';
import Licence from '../../../components/licenças/Licence';

import { Container } from './styles';
import Filters from '../../../components/licenças/filters/Filters';

const Licenças: React.FC = () => {
  const { licences } = useContext(LicContext);
  const [fixedFilter, setFixedFilter] = useState(false);

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
        {licences &&
          licences.map((licence) => {
            return <Licence licence={licence} />;
          })}
      </div>
    </>
  );
};

export default Licenças;
