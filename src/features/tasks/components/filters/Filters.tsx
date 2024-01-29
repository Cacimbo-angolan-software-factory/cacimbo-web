import React, { Dispatch } from 'react';
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
}

const Filters: React.FC<Props> = ({
  filtro,
  setFiltro,
  fixedFilter,
  search,
  handleSearch,
  user,
  setOpenModalClients,
}) => {
  return (
    <Header className={fixedFilter ? 'filter fixed' : 'filter'}>
      <section>
        <button
          className={filtro === 'all' ? 'active' : ''}
          // onClick={() => setFiltro('all')}
        >
          {user?.user?.name}
        </button>
        <button
          className={filtro === 'pendentes' ? 'active' : ''}
          onClick={() => setOpenModalClients(true)}
        >
          Clientes
        </button>
      </section>
      <nav>
        <button
          className={filtro === 'all' ? 'active' : ''}
          onClick={() => setFiltro('all')}
        >
          Todas
        </button>
        <button
          className={filtro === 'pendentes' ? 'active' : ''}
          onClick={() => setFiltro('pendentes')}
        >
          Pendentes
        </button>
        <button
          className={filtro === 'concluidas' ? 'active' : ''}
          onClick={() => setFiltro('concluidas')}
        >
          Concluídas
        </button>
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
