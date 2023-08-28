import React from 'react';
import { Header } from './filtersStyles';

// import { Container } from './styles';

interface Props {
  filtro: string;
  setFiltro: (filtro: string) => void;
  fixedFilter: any;
}

const Filters: React.FC<Props> = ({ filtro, setFiltro, fixedFilter }) => {
  return (
    <Header className={fixedFilter ? 'filter fixed' : 'filter'}>
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
        <input type='text' placeholder='Pesquisar' />
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
