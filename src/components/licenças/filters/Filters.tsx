import React from 'react';
import { RiFilter3Fill } from 'react-icons/ri';

import { Container, SecondFilter } from './stylesFilter';

interface FiltersProps {
  fixedFilter: boolean;
  setFilterPartner: React.Dispatch<React.SetStateAction<boolean>>;
  filterPartner: boolean;
}

const Filters: React.FC<FiltersProps> = ({
  fixedFilter,
  setFilterPartner,
  filterPartner,
}) => {
  const handleFilterPartner = () => {
    setFilterPartner(true);
    console.log('filter partner');
  };

  const handleFilterTodos = () => {
    setFilterPartner(false);
    console.log('filter todos');
  };

  return (
    <Container className={fixedFilter ? 'filter fixed' : 'filter'}>
      <div>
        <h2
          className={filterPartner === false ? `active` : ''}
          onClick={handleFilterTodos}
        >
          Todos
        </h2>
        <h2
          className={filterPartner === true ? `active` : ''}
          onClick={handleFilterPartner}
        >
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
