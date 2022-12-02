import React, { useState } from 'react';
import { RiFilter3Fill } from 'react-icons/ri';

import { Container, SecondFilter } from './stylesFilter';

interface FiltersProps {
  fixedFilter: boolean;
  todos: boolean;
  setTodos: React.Dispatch<React.SetStateAction<boolean>>;
  filtro: boolean;
  setFiltro: React.Dispatch<React.SetStateAction<boolean>>;
}

const Filters: React.FC<FiltersProps> = ({
  fixedFilter,
  todos,
  setTodos,
  filtro,
  setFiltro,
}) => {
  const handleFilterTodos = () => {
    setTodos(true);
    setFiltro(false);
  };

  const handleFilterPartner = () => {
    setTodos(false);
    setFiltro(true);
  };

  return (
    <Container className={fixedFilter ? 'filter fixed' : 'filter'}>
      <div>
        <h2 className={todos ? `active` : ''} onClick={handleFilterTodos}>
          Todos
        </h2>
        <h2 className={filtro ? `active` : ''} onClick={handleFilterPartner}>
          Parceiro
        </h2>
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
