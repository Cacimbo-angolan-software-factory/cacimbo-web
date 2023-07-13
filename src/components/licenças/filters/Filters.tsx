import React from 'react';
import { RiFilter3Fill } from 'react-icons/ri';

import { BtnParceiro, Container, SecondFilter } from './stylesFilter';
import { useSelector } from 'react-redux';

interface FiltersProps {
  fixedFilter: boolean;
  filtro: string;
  setFiltro: React.Dispatch<React.SetStateAction<string>>;
  childFiltro: string;
  setChildFiltro: React.Dispatch<React.SetStateAction<string>>;
  openModalParceiros: boolean;
  setOpenModalParceiros: React.Dispatch<React.SetStateAction<boolean>>;
  empresaSelected: any;
}

const Filters: React.FC<FiltersProps> = ({
  fixedFilter,
  filtro,
  setFiltro,
  childFiltro,
  setChildFiltro,
  setOpenModalParceiros,
  empresaSelected,
}) => {
  const { user } = useSelector((state: any) => state.user);

  const handleClickFiltro = () => {
    setFiltro('all');
    setChildFiltro('todas');
  };

  const handleClickFiltroParceiro = () => {
    setFiltro('parceiro');
    setChildFiltro('parceiroTodas');
    setOpenModalParceiros(true);
  };

  return (
    <Container className={fixedFilter ? 'filter fixed' : 'filter'}>
      {user.user.parceiro_id === 1 ? (
        <div>
          <h2
            className={filtro === 'all' ? 'active' : ''}
            onClick={handleClickFiltro}
          >
            Todos
          </h2>
          <BtnParceiro
            onClick={handleClickFiltroParceiro}
            className={filtro === 'parceiro' ? 'active' : ''}
          >
            {empresaSelected && filtro === 'parceiro'
              ? empresaSelected.Nome
              : 'Parceiro'}
          </BtnParceiro>
          <span>
            <RiFilter3Fill />
          </span>
        </div>
      ) : null}

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
