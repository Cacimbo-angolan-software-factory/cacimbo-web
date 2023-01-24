import { api } from '../../service/Service.api';

const criarEmpresa = async (empresaData: {
  nome: string;
  responsavel: string;
  email: string;
  telefone: string;
  nif: string;
  sede: string;
}) => {
  const response = await api.post(`empresas`, { ...empresaData });
  return response.data;
};
