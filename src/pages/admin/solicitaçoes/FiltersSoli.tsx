import React from 'react';

import { DivFilters } from './stylesSoli';
import { RiFilter3Fill } from 'react-icons/ri';

interface FiltersSoliProps {
  filtro: string;
  setFiltro: React.Dispatch<React.SetStateAction<string>>;
}

const FiltersSoli: React.FC<FiltersSoliProps> = ({ filtro, setFiltro }) => {
  return (
    <DivFilters>
      <span
        className={filtro === 'porAprovar' ? 'active' : ''}
        onClick={() => setFiltro('porAprovar')}
      >
        <h2>Por aprovar</h2>
      </span>
      <span
        className={filtro === 'leilao' ? 'active' : ''}
        onClick={() => setFiltro('leilao')}
      >
        <h2>Em leilão</h2>
      </span>
      <span
        className={filtro === 'pendentes' ? 'active' : ''}
        onClick={() => setFiltro('pendentes')}
      >
        <h2>Pendentes</h2>
      </span>
      <RiFilter3Fill />
    </DivFilters>
  );
};

export default FiltersSoli;
