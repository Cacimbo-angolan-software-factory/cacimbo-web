import { api } from '../../service/Service.api';

const user = JSON.parse(localStorage.getItem('user') || 'null');

const getCanal = async () => {
  const response = await api.get(
    `solicitacoes/get-parceiros-canal/${user.user.parceiro_id}`
  );

  return response.data;
};

const getModulo = async () => {
  const response = await api.get(`modulos`);
  return response.data;
};

const getLicencaPorEmpresa = async (nif: string) => {
  const response = await api.get(`licencas/empresa/${nif}`);
  return response.data;
};

const criarSolicitaçao = async (solicData: {
  nif: string;
  empresa: string;
  telefone: string;
  email: string;
  responsavel: string;
  cargo: string;
  morada: string;
  localidade: string;
  provincia: string;
  pais: string;
  modulo: string[];
  tipo: string;
  parceiro_id: string;
  licencaId: string | number;
  canal_id: string;
  user_id: string;
}) => {
  console.log(solicData);
  const response = await api.post(`solicitacao/store`, { ...solicData });
  return response.data;
};

export default {
  criarSolicitaçao,
  getCanal,
  getModulo,
  getLicencaPorEmpresa,
};
