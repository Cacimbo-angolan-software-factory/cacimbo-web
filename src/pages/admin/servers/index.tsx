import React, { useEffect, useState } from 'react';
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
  //const ws=new WebSocket("ws://45.93.138.188:8000")
  //const [isLoading, setIsLoading]=React.useState(false)
  //const [cli_servers, setCliServers]=React.useState<ICliServer[]>([])
  const [filtro, setFiltro] = useState('');
  const [provinciaSelected, setProvinciaSelected] = useState();
  const [versaoSelected, setVersaoSelected] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [openModalVersao, setOpenModalVersao] = useState(false);

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR<{ data: ICliServer[] }>(
    'https://cacimboerp.cacimboweb.com/api/socket-info',
    fetcher
  );

  async function getServersCli() {
    try {
      //setIsLoading(true)
      //const {data,status}=await apiCacimbo.get("socket-info")
      // if(status==200){
      //setCliServers(data.data)
      //}
      //setIsLoading(false)
    } catch (error: any) {
      //console.log(error)
      //console.info(error?.message)
      //setIsLoading(false)
    }
  }

  function data_sanitization(data: any) {
    try {
      if (typeof data !== 'undefined') {
        return JSON.parse(data);
      }
    } catch (error: any) {
      return {};
    }
  }

  function listenOnclose() {
    //ws.onclose=(event)=>{
    //    console.info(`[listenOnclose]:[${new Date().toLocaleTimeString()}]`,{event})
    //}
  }

  function connectionError() {
    //ws.onerror = (e) => {
    //    console.info(`[connectionError]:[${new Date().toLocaleTimeString()}]`,{e})
    //}
  }

  function listenOnmessage() {
    //ws.onmessage =(wsEvent) => {
    //const eventMessage= data_sanitization(wsEvent.data)
    //const isValid=!!eventMessage?.offline||!!eventMessage?.online
    //if(isValid){
    // console.info(`[new message]:[${new Date().toLocaleTimeString()}]`)
    // getServersCli()
    //}
    //}
  }

  /*React.useEffect(()=>{
    getServersCli()
    ws.onopen= (e) => {
        console.info(`[onopen]:${new Date().toLocaleTimeString()}`)
        listenOnmessage()   
    }
    connectionError()
    return ()=>{
        listenOnclose()
    }

},[])*/

  const showOnline = () => {
    if (filtro === 'online') {
      return (
        <Wrapper>
          {data?.data
            .filter((item: any) => item.estado === 'online')
            .map((cli: ICliServer, index: number) => (
              <ServerCli key={index} cli={cli} />
            ))}
        </Wrapper>
      );
    }
  };

  const showOffline = () => {
    if (filtro === 'offline') {
      return (
        <Wrapper>
          {data?.data
            .filter((item: any) => item.estado === 'offline')
            .map((cli: ICliServer, index: number) => (
              <ServerCli key={index} cli={cli} />
            ))}
        </Wrapper>
      );
    }
  };

  const showProvincia = () => {
    if (filtro === 'provincia') {
      return (
        <Wrapper>
          {data?.data
            .filter((item: any) => item.City === provinciaSelected)
            .map((cli: ICliServer, index: number) => (
              <ServerCli key={index} cli={cli} />
            ))}
        </Wrapper>
      );
    }
  };

  const showVersao = () => {
    if (filtro === 'versao') {
      return (
        <Wrapper>
          {data?.data
            .filter((item: any) => item.cacimbo_version === versaoSelected)
            .map((cli: ICliServer, index: number) => (
              <ServerCli key={index} cli={cli} />
            ))}
        </Wrapper>
      );
    }
  };

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
              setOpenModal={setOpenModal}
              filtro={filtro}
              setFiltro={setFiltro}
              provinciaSelected={provinciaSelected}
              setOpenModalVersao={setOpenModalVersao}
              versaoSelected={versaoSelected}
            />
            {showOnline && showOnline()}
            {showOffline && showOffline()}
            {showProvincia && showProvincia()}
            {showVersao && showVersao()}
            {filtro === '' && (
              <Wrapper>
                {data?.data.map((cli: ICliServer, index: number) => (
                  <ServerCli key={index} cli={cli} />
                ))}
              </Wrapper>
            )}
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
