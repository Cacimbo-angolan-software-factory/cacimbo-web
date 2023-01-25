import { api } from '../../service/Service.api';

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

export default {
  criarEmpresa,
};
