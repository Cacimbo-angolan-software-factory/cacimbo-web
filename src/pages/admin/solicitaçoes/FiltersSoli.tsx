import React from 'react';

import { DivFilters } from './stylesSoli';
import { RiFilter3Fill } from 'react-icons/ri';
import { useSelector } from 'react-redux';

interface FiltersSoliProps {
  filtro: string;
  setFiltro: React.Dispatch<React.SetStateAction<string>>;
}

const FiltersSoli: React.FC<FiltersSoliProps> = ({ filtro, setFiltro }) => {
  const { user } = useSelector((state: any) => state.user);

  return (
    <DivFilters>
      {user.user.parceiro_id === 1 ? (
        <span
          className={filtro === 'porAprovar' ? 'active' : ''}
          onClick={() => setFiltro('porAprovar')}
        >
          <h2>Por aprovar</h2>
        </span>
      ) : null}

      <span
        className={filtro === 'leilao' ? 'active' : ''}
        onClick={() => setFiltro('leilao')}
      >
        <h2>Em leilão</h2>
      </span>

      {user.user.parceiro_id === 1 ? (
        <span
          className={filtro === 'pendentes' ? 'active' : ''}
          onClick={() => setFiltro('pendentes')}
        >
          <h2>Pendentes</h2>
        </span>
      ) : null}
      <RiFilter3Fill />
    </DivFilters>
  );
};

export default FiltersSoli;
