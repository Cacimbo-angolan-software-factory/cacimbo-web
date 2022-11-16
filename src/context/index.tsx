import React, { createContext, useState, useContext, useEffect } from 'react';
import { api } from '../service/Service.api';

interface IContext {
  children: React.ReactNode;
}

interface ICreateContext {
  lic_renovations: [];
  lic_requests: [];
  totalPedidos?: number;
  getLic?: () => Promise<void>;
  getLicRequest?: () => Promise<void>;
  getLicRenovations?: () => Promise<void>;
  IsLoadingTheOrder?: boolean;
  getLicRefresh?: (typeRefresh: string) => void;
  TotalLicenses?: number;
  setTotalLicenses?: (value: number) => void;
}

export const LicContext = createContext<ICreateContext>({
  lic_requests: [],
  lic_renovations: [],
});

export const LicProvider = ({ children }: IContext) => {
  const [lic_requests, setLicRequests] = useState<[]>([]);
  const [lic_renovations, setLicRenovations] = useState<[]>([]);
  const [totalPedidos, setTotalPedidos] = useState(0);
  const [TotalLicenses, setTotalLicenses] = useState(0);
  const [IsLoadingTheOrder, setIsLoadingTheOrder] = useState(false);
  const user = {
    id: 1,
    name: 'Arnaldo Domingos',
    email: 'arnaldo.cacimbo@gmail.com',
    email_verified_at: null,
    tipo: 'Admin',
    parceiro_id: 1,
    status: 1,
    notification_token: 'ExponentPushToken[J_FHCwJoP5rQ-jyDuHXxGn]',
    id_perfil: 1,
    created_at: '2021-02-12T05:56:14.000000Z',
    updated_at: '2022-06-28T23:16:08.000000Z',
  };

  let urlSolic = ``;
  let urlRenova = ``;
  let urlGeral = ``;
  if (!!user) {
    urlSolic =
      user.tipo === 'Admin'
        ? `solicitacaolist?lida=0&estado=aberto`
        : `solicitacaolist?lida=0&estado=aberto&parceiro=${user.parceiro_id}`;

    urlRenova =
      user.tipo === 'Admin'
        ? `solicitacaolist?lida=0&tipo=Renovação`
        : `solicitacaolist?lida=0&tipo=Renovação&parceiro=${user.parceiro_id}`;

    urlGeral =
      user.tipo === 'Admin'
        ? `licenca-geral`
        : `licenca-geral?parceiro=${user.parceiro_id}`;
  }

  async function getLicRequest() {
    try {
      setIsLoadingTheOrder(true);
      const res = await api.get(urlSolic);
      const TotalR = await (await api.get(urlRenova)).data.length;
      const TotalRenova = typeof TotalR === 'undefined' ? 0 : TotalR;
      setTotalPedidos(TotalRenova);
      if (res.status === 200 && res.data.length > 0) {
        const Total = TotalRenova + res.data.length;
        setTotalPedidos(Total);
        setLicRequests(res.data);
      }
      setIsLoadingTheOrder(false);
    } catch (err: any) {
      setIsLoadingTheOrder(false);
      if (err?.response.status === 'undefined') {
        console.error('Sem ligação à internet', 'error');
        return;
      }
      if (err?.response.status) {
        console.error('😭 Algo deu errado, Tente mais tarde', 'error');
        return;
      }
    }
  }
  async function getLicRenovations() {
    try {
      setIsLoadingTheOrder(true);
      const res = await api.get(urlRenova);
      if (res.status === 200 && res.data.length > 0) {
        setLicRenovations(res.data);
      }
      setIsLoadingTheOrder(false);
    } catch (err: any) {
      setIsLoadingTheOrder(false);
      if (err?.response.status === 'undefined') {
        console.error('Sem ligação à internet', 'error');
        return;
      }
      if (err?.response.status) {
        console.error('😭 Algo deu errado, Tente mais tarde', 'error');
        return;
      }
    }
  }
  async function getLic() {
    try {
      const { data } = await api.get(urlGeral);
      if (data.length > 0) {
        setTotalLicenses(data.length);
      }
    } catch (err: any) {
      if (err?.response.status === 'undefined') {
        console.error('Sem ligação à internet', 'error');
        return;
      }
      if (err?.response.status) {
        console.error('😭 Algo deu errado, Tente mais tarde', 'error');
        return;
      }
    }
  }
  function getLicRefresh(typeRefresh: string) {
    if (typeRefresh === 'getLicRequest') getLicRequest();
    if (typeRefresh === 'getLicRenovations') getLicRenovations();
  }

  useEffect(() => {
    if (!!user) {
      getLic();
      getLicRequest();
      getLicRenovations();
    }
  }, [user]);

  return (
    <LicContext.Provider
      value={{
        lic_requests,
        lic_renovations,
        totalPedidos,
        getLic,
        getLicRequest,
        getLicRenovations,
        IsLoadingTheOrder,
        getLicRefresh,
        TotalLicenses,
        setTotalLicenses,
      }}
    >
      {children}
    </LicContext.Provider>
  );
};
