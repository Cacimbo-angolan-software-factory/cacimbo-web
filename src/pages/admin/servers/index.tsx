import React, { useState } from 'react';
import useSWR from 'swr';
import { EmptyStore, SpinnerDiv, Wrapper, Overlay } from './styles';
import AdminHeader from '../../../components/adminHeader/AdminHeader';
import HeaderMobile from '../../../components/headerMobile/HeaderMobile';

import emptyStore from '../../../assets/emptyStore.svg';
import Spinner from '../../../components/spinner/Spinner';

import { ServerCli } from '../../../components/serverCli';
import FiltersServer from '../../../components/serverCli/filtersServer';
import ModalProvincia from '../../../components/serverCli/modal/modalProvincia';
import ModalVersao from '../../../components/serverCli/modal/modalVersao';
//import { apiCacimbo } from '../../../service/Service.api';

export type ICliServer = {
  CompanyID: string;
  posto: string;
  estado: string;
  company_name: string;
  server: string;
  so_version: string;
  cacimbo_version: string;
  data: string;
  TaxRegistrationNumber: string;
  CompanyName: string;
  AddressDetail: string;
  City: string;
  Country: string;
  Telefone: string;
  Email: string;
  CurrencyCode: string;
  UserId: string;
  UserEmail: string;
  UserName: string;
  created_at: string;
  updated_at: string;
  hash_sinc: string;
};
const ServersCli: React.FC = () => {
  const [filtro, setFiltro] = useState('');
  const [onlineFilter, setOnlineFilter] = useState(false);
  const [offlineFilter, setOfflineFilter] = useState(false);
  const [provinciaSelected, setProvinciaSelected] = useState();
  const [versaoSelected, setVersaoSelected] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [openModalVersao, setOpenModalVersao] = useState(false);

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR<{ data: ICliServer[] }>(
    'https://cacimboerp.cacimboweb.com/api/socket-info',
    fetcher
  );

  const applyFilters = () => {
    return data?.data.filter((item) => {
      let matchesFilters = true;

      if (provinciaSelected && item.City !== provinciaSelected) {
        matchesFilters = false;
      }

      if (versaoSelected && item.cacimbo_version !== versaoSelected) {
        matchesFilters = false;
      }

      if (onlineFilter && item.estado !== 'online') {
        matchesFilters = false;
      }

      if (offlineFilter && item.estado !== 'offline') {
        matchesFilters = false;
      }

      return matchesFilters;
    });
  };

  const filteredData = applyFilters();

  return (
    <>
      <AdminHeader />
      <HeaderMobile />
      <>
        {isLoading ? (
          <SpinnerDiv>
            <Spinner />
          </SpinnerDiv>
        ) : data?.data && data?.data.length > 0 ? (
          <>
            <FiltersServer
              filtro={filtro}
              setFiltro={setFiltro}
              setOpenModal={setOpenModal}
              setOpenModalVersao={setOpenModalVersao}
              versaoSelected={versaoSelected}
              provinciaSelected={provinciaSelected}
              setVersaoSelected={setVersaoSelected}
              setProvinciaSelected={setProvinciaSelected}
              setOnlineFilter={setOnlineFilter}
              setOfflineFilter={setOfflineFilter}
            />
            {/* {showOnline && showOnline()}
            {showOffline && showOffline()}
            {showProvincia && showProvincia()}
            {showVersao && showVersao()}
            {filtro === '' && ( */}
            <Wrapper>
              {filteredData?.map((cli: ICliServer, index: number) => (
                <ServerCli key={index} cli={cli} />
              ))}
            </Wrapper>
          </>
        ) : (
          <EmptyStore>
            <img src={emptyStore} alt='empty' />
            <h2>Lista indisponível no momento.</h2>
          </EmptyStore>
        )}
      </>

      {openModal && (
        <ModalProvincia
          setProvinciaSelected={setProvinciaSelected}
          data={data?.data}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )}

      {openModalVersao && (
        <ModalVersao
          openModalVersao={openModalVersao}
          setOpenModalVersao={setOpenModalVersao}
          data={data?.data}
          setVersaoSelected={setVersaoSelected}
        />
      )}

      {openModal && <Overlay onClick={() => setOpenModal(false)} />}
      {openModalVersao && <Overlay onClick={() => setOpenModalVersao(false)} />}
    </>
  );
};

export { ServersCli };
