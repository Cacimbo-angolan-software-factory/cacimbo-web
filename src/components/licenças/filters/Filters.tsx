import React, { useState } from 'react';
import { RiFilter3Fill } from 'react-icons/ri';

import { Container, SecondFilter } from './stylesFilter';

interface FiltersProps {
  fixedFilter: boolean;
  filtro: string;
  setFiltro: React.Dispatch<React.SetStateAction<string>>;
}

const Filters: React.FC<FiltersProps> = ({
  fixedFilter,
  filtro,
  setFiltro,
}) => {
  return (
    <Container className={fixedFilter ? 'filter fixed' : 'filter'}>
      <div>
        <h2
          className={filtro === 'all' ? 'active' : ''}
          onClick={() => setFiltro('all')}
        >
          Todos
        </h2>
        <h2
          className={filtro === 'parceiro' ? 'active' : ''}
          onClick={() => setFiltro('parceiro')}
        >
          Parceiro
        </h2>
        <span>
          <RiFilter3Fill />
        </span>
      </div>

      <SecondFilter>
        <h2 className={filtro === 'all' ? 'active' : ''}>Todas</h2>
        <h2>Activas</h2>
        <h2>Por renovar</h2>
      </SecondFilter>
    </Container>
  );
};

export default Filters;
