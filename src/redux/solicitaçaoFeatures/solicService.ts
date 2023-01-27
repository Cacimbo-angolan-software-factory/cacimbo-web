import { api } from '../../service/Service.api';

const criarSolicitaçao = async (solicData: {
  nif: string;
  empresa: string;
  email: string;
  pais: string;
  província: string;
  endereço: string;
  cargo: string;
  responsável: string;
  licenceType: string;
  canal: string;
}) => {
  const response = await api.post(`solitacao/store`, { ...solicData });
  return response.data;
};

export default {
  criarSolicitaçao,
};
