import { api, apiCacimbo } from '../../service/Service.api';

const criarEmpresa = async (empresaData: {
  nome: string;
  responsavel: string;
  email: string;
  telefone: string;
  nif: string;
  sede: string;
  tipo: string;
}) => {
  const response = await api.post(`parceiros`, { ...empresaData });
  return response.data;
};

const getEmpresasAssociadas = async () => {
  const response = await apiCacimbo.get(`docs_empresas`);
  return response.data.data;
};

export default {
  criarEmpresa,
  getEmpresasAssociadas,
};
