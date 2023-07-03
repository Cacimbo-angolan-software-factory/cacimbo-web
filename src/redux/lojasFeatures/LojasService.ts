import { apiCacimbo, api } from '../../service/Service.api';

const criarLoja = async (formData: any) => {
  const response = await apiCacimbo.post(`online-stores`, { ...formData });
  return response.data;
};

const getCompanyIdWithNif = async (nif: string) => {
  const response = await api.get(`docs_empresas/all-by-nif/${nif}`);
  return response.data;
};

const getLojas = async () => {
  const response = await apiCacimbo.get(`online-stores`);
  return response.data;
};

export default {
  criarLoja,
  getCompanyIdWithNif,
  getLojas,
};
