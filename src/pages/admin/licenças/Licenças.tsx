import React, { useContext, useEffect } from 'react';
import { LicContext } from '../../../context';
import Licence from '../../../components/licenças/Licence';

import { Container } from './styles';
import Filters from '../../../components/licenças/filters/Filters';

const Licenças: React.FC = () => {
  const { licences } = useContext(LicContext);

  return (
    <>
      <Filters />

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
