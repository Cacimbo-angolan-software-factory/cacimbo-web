import React from 'react';
import { RiFilter3Fill } from 'react-icons/ri';

import { Container, SecondFilter } from './stylesFilter';

interface FiltersProps {
  fixedFilter: boolean;
  filtro: string;
  setFiltro: React.Dispatch<React.SetStateAction<string>>;
  childFiltro: string;
  setChildFiltro: React.Dispatch<React.SetStateAction<string>>;
}

const Filters: React.FC<FiltersProps> = ({
  fixedFilter,
  filtro,
  setFiltro,
  childFiltro,
  setChildFiltro,
}) => {
  const handleClickFiltro = () => {
    setFiltro('all');
    setChildFiltro('todas');
  };

  const handleClickFiltroParceiro = () => {
    setFiltro('parceiro');
    setChildFiltro('parceiroTodas');
  };

  return (
    <Container className={fixedFilter ? 'filter fixed' : 'filter'}>
      <div>
        <h2
          className={filtro === 'all' ? 'active' : ''}
          onClick={handleClickFiltro}
        >
          Todos
        </h2>
        <h2
          className={filtro === 'parceiro' ? 'active' : ''}
          onClick={handleClickFiltroParceiro}
        >
          Parceiro
        </h2>
        <span>
          <RiFilter3Fill />
        </span>
      </div>

      {filtro === 'all' ? (
        <SecondFilter>
          <h2
            className={childFiltro === 'todas' ? 'active' : ''}
            onClick={() => setChildFiltro('todas')}
          >
            Todas
          </h2>
          <h2
            className={childFiltro === 'activasAll' ? 'active' : ''}
            onClick={() => setChildFiltro('activasAll')}
          >
            Activas
          </h2>
          <h2
            className={childFiltro === 'porRenovarAll' ? 'active' : ''}
            onClick={() => setChildFiltro('porRenovarAll')}
          >
            Por renovar
          </h2>
        </SecondFilter>
      ) : (
        <SecondFilter>
          <h2
            className={childFiltro === 'parceiroTodas' ? 'active' : ''}
            onClick={() => setChildFiltro('parceiroTodas')}
          >
            Todas
          </h2>
          <h2
            className={childFiltro === 'activasParceiro' ? 'active' : ''}
            onClick={() => setChildFiltro('activasParceiro')}
          >
            Activas
          </h2>
          <h2
            className={childFiltro === 'porRenovarParceiro' ? 'active' : ''}
            onClick={() => setChildFiltro('porRenovarParceiro')}
          >
            Por renovar
          </h2>
        </SecondFilter>
      )}
    </Container>
  );
};

export default Filters;
