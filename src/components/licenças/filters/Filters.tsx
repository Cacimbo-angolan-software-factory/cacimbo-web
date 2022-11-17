import React from 'react';
import { RiFilter3Fill } from 'react-icons/ri';

import { Container, SecondFilter } from './stylesFilter';

interface FiltersProps {
  fixedFilter: boolean;
}

const Filters: React.FC<FiltersProps> = ({ fixedFilter }) => {
  return (
    <Container className={fixedFilter ? 'filter fixed' : 'filter'}>
      <div>
        <h2>Todos</h2>
        <h2>Parceiro</h2>
        <span>
          <RiFilter3Fill />
        </span>
      </div>

      <SecondFilter>
        <h2>Todas</h2>
        <h2>Activas</h2>
        <h2>Por renovar</h2>
      </SecondFilter>
    </Container>
  );
};

export default Filters;
