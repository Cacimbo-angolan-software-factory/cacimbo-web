import React, { Dispatch, SetStateAction } from 'react';
import { Header } from './filtersStyles';

// import { Container } from './styles';

interface Props {
  filtro: string;
  setFiltro: (filtro: string) => void;
  fixedFilter: any;
  search: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  user: any;
  setOpenModalClients: Dispatch<any>;
  empresaSelected: any;
  childFiltro: string;
  setChildFiltro: Dispatch<SetStateAction<string>>;
}

const Filters: React.FC<Props> = ({
  filtro,
  setFiltro,
  fixedFilter,
  search,
  handleSearch,
  user,
  setOpenModalClients,
  empresaSelected,
  childFiltro,
  setChildFiltro,
}) => {
  const handleFilterUser = () => {
    setFiltro('user');
    setChildFiltro('todas');
  };

  const handleFilterClient = () => {
    setFiltro('cliente');
    setChildFiltro('clienteTodas');
  };

  return (
    <Header className={fixedFilter ? 'filter fixed' : 'filter'}>
      <section>
        <button
          className={filtro === 'user' ? 'active' : ''}
          onClick={handleFilterUser}
        >
          {user?.user?.name}
        </button>
        <button
          className={filtro === 'cliente' ? 'active' : ''}
          onClick={() => {
            setOpenModalClients(true);
            handleFilterClient;
          }}
        >
          {empresaSelected?.CompanyName
            ? empresaSelected?.CompanyName
            : 'Cliente'}
        </button>
      </section>
      <nav>
        {filtro === 'user' ? (
          <>
            <button
              className={childFiltro === 'todas' ? 'active' : ''}
              onClick={() => setChildFiltro('todas')}
            >
              Todas
            </button>
            <button
              className={childFiltro === 'pendentes' ? 'active' : ''}
              onClick={() => setChildFiltro('pendentes')}
            >
              Pendentes
            </button>
            <button
              className={childFiltro === 'concluidas' ? 'active' : ''}
              onClick={() => setChildFiltro('concluidas')}
            >
              Concluídas
            </button>{' '}
          </>
        ) : (
          <>
            {' '}
            <button
              className={childFiltro === 'clienteTodas' ? 'active' : ''}
              onClick={() => setChildFiltro('clienteTodas')}
            >
              Todas
            </button>
            <button
              className={childFiltro === 'clientePendentes' ? 'active' : ''}
              onClick={() => setChildFiltro('clientePendentes')}
            >
              Pendentes
            </button>
            <button
              className={childFiltro === 'clienteConcluidas' ? 'active' : ''}
              onClick={() => setChildFiltro('clienteConcluidas')}
            >
              Concluídas
            </button>{' '}
          </>
        )}
        <label>
          <input
            value={search}
            onChange={handleSearch}
            name='search'
            type='text'
            placeholder='Pesquise por id, título, cliente ou nif...'
          />
        </label>
      </nav>
      <div>
        <p>
          <span className='red'></span> Prioridade alta
        </p>
        <p>
          <span className='green'></span> Prioridade normal
        </p>
        <p>
          <span className='blue'></span> Prioridade baixa
        </p>
      </div>
    </Header>
  );
};

export default Filters;
