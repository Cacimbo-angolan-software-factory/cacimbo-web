import React, { useEffect, useState } from 'react';
import { Main, Section, Section2 } from './tarefasStyles';
import AdminHeader from '../../../components/adminHeader/AdminHeader';
import HeaderMobile from '../../../components/headerMobile/HeaderMobile';
import { useTasks } from './useTasks';
import Filters from '../../../features/tasks/components/filters/Filters';
import tarefas from '../../../assets/tarefas.svg';
import Assistencia from '../../../features/tasks/components/task/Assistencia';
import ModalClients from '../../../features/tasks/components/modalClientsAssist/ModalClients';

const Assistencias: React.FC = () => {
  const {
    filtro,
    setfiltro,
    userAssistsFiltered,
    fixedFilter,
    search,
    handleSearch,
    assistSelected,
    setAssistSelected,
    user,
    empresaSelected,
    setEmpresaSelected,
    empresasAssociadas,
  } = useTasks();
  const [openModalClients, setOpenModalClients] = useState<boolean>(false);

  useEffect(() => {
    // console.log(assistSelected);
  }, []);

  return (
    <>
      <AdminHeader />
      <HeaderMobile />

      <Main>
        <Filters
          filtro={filtro}
          setFiltro={setfiltro}
          fixedFilter={fixedFilter}
          search={search}
          handleSearch={handleSearch}
          user={user}
          setOpenModalClients={setOpenModalClients}
        />
        <Section>
          {userAssistsFiltered.length > 0 ? (
            userAssistsFiltered.map((assist: any) => (
              <Assistencia
                key={assist.id}
                assist={assist}
                filtro={filtro}
                setAssistSelected={setAssistSelected}
                assistSelected={assistSelected}
              />
            ))
          ) : (
            <Section2>
              <img src={tarefas} alt='Nenhuma tarefa' />
              <p>Não existem tarefas</p>
            </Section2>
          )}
        </Section>
      </Main>

      {openModalClients && (
        <ModalClients
          empresasAssociadas={empresasAssociadas}
          setEmpresaSelected={setEmpresaSelected}
        />
      )}
    </>
  );
};

export default Assistencias;
