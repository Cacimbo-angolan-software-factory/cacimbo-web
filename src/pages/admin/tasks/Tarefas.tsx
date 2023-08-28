import React, { useEffect } from 'react';
import { Main, Section, Section2 } from './tarefasStyles';
import AdminHeader from '../../../components/adminHeader/AdminHeader';
import HeaderMobile from '../../../components/headerMobile/HeaderMobile';
import { useTasks } from './useTasks';
import Tarefa from '../../../features/tasks/components/task/Tarefa';
import Filters from '../../../features/tasks/components/filters/Filters';
import tarefas from '../../../assets/tarefas.svg';

const Tarefas: React.FC = () => {
  const {
    filtro,
    setfiltro,
    userAssistsFiltered,
    fixedFilter,
    setFixedFilter,
  } = useTasks();

  return (
    <>
      <AdminHeader />
      <HeaderMobile />

      <Main>
        <Filters
          filtro={filtro}
          setFiltro={setfiltro}
          fixedFilter={fixedFilter}
        />
        <Section>
          {userAssistsFiltered.length > 0 ? (
            userAssistsFiltered.map((assist: any) => (
              <Tarefa key={assist.id} assist={assist} filtro={filtro} />
            ))
          ) : (
            <Section2>
              <img src={tarefas} alt='Nenhuma tarefa' />
              <p>Não existem tarefas</p>
            </Section2>
          )}
        </Section>
      </Main>
    </>
  );
};

export default Tarefas;
