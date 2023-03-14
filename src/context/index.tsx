import React, { createContext, useState, useEffect } from 'react';
import { api, baseUrlGetNif } from '../service/Service.api';

interface IContext {
  children: React.ReactNode;
}

interface ICreateContext {
  lic_renovations: [];
  lic_requests: [];
  licences: {
    id: number;
    cliente_nome: string;
    data_emissao: string;
    data_validade: string;
    parceiro_nome: string;
    parceiro_id: number;
  }[];
  totalPedidos?: number;
  getLic?: () => Promise<void>;
  getLicRequest?: () => Promise<void>;
  getLicRenovations?: () => Promise<void>;
  getNif?: (nif: string) => Promise<any>;
  IsLoadingTheOrder?: boolean;
  getLicRefresh?: (typeRefresh: string) => void;
  TotalLicenses?: number;
  setTotalLicenses?: (value: number) => void;
  editEmpresa?: (id: number, formData: any) => Promise<void | number>;
  setEditar?: (value: any) => void;
  loadingEditar: boolean;
  loadingEmpresas?: boolean;
  loadingLicenses?: boolean;
  editar: any;
  empresas: {
    id: number;
    Nome: string;
    email: string;
    Nif: string;
  }[];
  sections: any;
}

export const LicContext = createContext<ICreateContext>({
  lic_requests: [],
  lic_renovations: [],
  licences: [],
  empresas: [],
  editar: null,
  loadingEditar: false,
  sections: [],
});

export const LicProvider = ({ children }: IContext) => {
  const [lic_requests, setLicRequests] = useState<[]>([]);
  const [licences, setLicences] = useState<[]>([]);
  const [lic_renovations, setLicRenovations] = useState<[]>([]);
  const [empresas, setEmpresas] = useState<[]>([]);
  const [editar, setEditar] = useState<any>(null);
  const [loadingEditar, setLoadingEditar] = useState(false);
  const [totalPedidos, setTotalPedidos] = useState(0);
  const [TotalLicenses, setTotalLicenses] = useState(0);
  const [IsLoadingTheOrder, setIsLoadingTheOrder] = useState(false);
  const [loadingEmpresas, setLoadingEmpresas] = useState(false);
  const [loadingLicenses, setLoadingLicenses] = useState(false);
  const [loadingToApproveAndAuction, setLoadingToApproveAndAuction] =
    useState(false);
  const [sections, setSections] = useState<any>([]);

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
      setLoadingLicenses(true);
      const { data } = await api.get(urlGeral);
      if (data.length > 0) {
        setTotalLicenses(data.length);
        setLicences(data);
      }
      setLoadingLicenses(false);
    } catch (err: any) {
      setLoadingLicenses(false);
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
  async function getEmpresas() {
    try {
      setLoadingEmpresas(true);
      const { data } = await api.get(`parceiros`);
      if (data.data.length > 0) {
        setEmpresas(data.data);
      }
      setLoadingEmpresas(false);
    } catch (err: any) {
      setLoadingEmpresas(false);
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

  async function editEmpresa(
    parceiro: number,
    formData: any
  ): Promise<void | number> {
    try {
      setLoadingEditar(true);
      const { status } = await api.put(`parceiros/${parceiro}`, formData);
      setEditar({
        id: parceiro,
        Nome: formData.nome,
        Responsavel: formData.responsavel,
        email: formData.email,
        ProvinciaSede: formData.sede,
        Nif: formData.nif,
        telefone: formData.telefone,
      });
      setLoadingEditar(false);
      return status;
    } catch (err: any) {
      setLoadingEditar(false);
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

  async function getNif(nif: string) {
    try {
      const { data } = await baseUrlGetNif.get(`${nif}`);
      return data;
    } catch (err: any) {
      console.log(err);
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

  const SectionsRequestToApprove = [
    { title: 'Por aprovar', data: [] },
    { title: 'Em leilão', data: [] },
  ];

  async function getRequestToApproveAndAuctionRequests() {
    const user = JSON.parse(localStorage.getItem('user') || 'null');

    const urlGetAllRequestsToApprove = `solicitacoes/parceiro-canal/${user?.user.parceiro_id}/get-all`;
    const urlAuction = `solicitacoes/pendentes`;

    try {
      setLoadingToApproveAndAuction(true);
      const toApprovePromise = api.get(urlGetAllRequestsToApprove);
      const AuctionRequestPromise = api.get(urlAuction);

      Promise.all([toApprovePromise, AuctionRequestPromise]).then((res) => {
        SectionsRequestToApprove.map((section: any) => {
          if (section.title === 'Por aprovar') {
            section.data.push(...res[0].data);
          }
          if (section.title === 'Em leilão') {
            section.data.push(...res[1].data);
          } else {
            return null;
          }
        });
        setSections(SectionsRequestToApprove);
        console.log(SectionsRequestToApprove);
        setLoadingToApproveAndAuction(false);
      });
    } catch (err: any) {
      console.log(err);
      setLoadingToApproveAndAuction(false);
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

  useEffect(() => {
    getLic();
    getLicRequest();
    getLicRenovations();
    getEmpresas();
    getRequestToApproveAndAuctionRequests();
  }, []);

  return (
    <LicContext.Provider
      value={{
        licences,
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
        empresas,
        editEmpresa,
        editar,
        setEditar,
        loadingEditar,
        loadingEmpresas,
        loadingLicenses,
        getNif,
        sections,
      }}
    >
      {children}
    </LicContext.Provider>
  );
};
