import React, { useRef, useState } from 'react';
import { Main, Overlay, Section, Section2 } from './tarefasStyles';
import AdminHeader from '../../../components/adminHeader/AdminHeader';
import HeaderMobile from '../../../components/headerMobile/HeaderMobile';
import { useTasks } from './useTasks';
import Filters from '../../../features/tasks/components/filters/Filters';
import tarefas from '../../../assets/tarefas.svg';
import Assistencia from '../../../features/tasks/components/task/Assistencia';
import ModalClients from '../../../features/tasks/components/modalClientsAssist/ModalClients';
import SideBarAssist from '../../../features/tasks/components/sideBarAssist/SideBarAssist';

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
    childFiltro,
    setChildFiltro,
    companyAssistsFiltered,
    getSingleAssist,
    useClickOutside,
  } = useTasks();
  const [openModalClients, setOpenModalClients] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);
  let menuRef = useRef<any>(null);

  useClickOutside(menuRef, () => {
    setOpenSideBar(false);
  });

  return (
    <>
      <AdminHeader />
      <HeaderMobile />

      <Main>
        <Filters
          filtro={filtro}
          setFiltro={setfiltro}
          childFiltro={childFiltro}
          setChildFiltro={setChildFiltro}
          fixedFilter={fixedFilter}
          search={search}
          handleSearch={handleSearch}
          user={user}
          setOpenModalClients={setOpenModalClients}
          empresaSelected={empresaSelected}
        />
        <Section>
          {companyAssistsFiltered.length > 0 ? (
            companyAssistsFiltered.map((assist: any) => (
              <Assistencia
                key={assist.id}
                assist={assist}
                filtro={filtro}
                setAssistSelected={setAssistSelected}
                assistSelected={assistSelected}
                getSingleAssist={getSingleAssist}
                setOpenSideBar={setOpenSideBar}
              />
            ))
          ) : userAssistsFiltered.length > 0 ? (
            userAssistsFiltered.map((assist: any) => (
              <Assistencia
                key={assist.id}
                assist={assist}
                filtro={filtro}
                setAssistSelected={setAssistSelected}
                assistSelected={assistSelected}
                getSingleAssist={getSingleAssist}
                setOpenSideBar={setOpenSideBar}
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
          setOpenModalClients={setOpenModalClients}
          setFiltro={setfiltro}
          setChildFiltro={setChildFiltro}
        />
      )}

      {openModalClients && (
        <Overlay onClick={() => setOpenModalClients(false)} />
      )}

      {openSideBar && (
        <SideBarAssist menuRef={menuRef} assistSelected={assistSelected} />
      )}
    </>
  );
};

export default Assistencias;
