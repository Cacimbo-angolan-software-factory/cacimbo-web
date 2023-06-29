import { apiCacimbo } from '../../service/Service.api';

const criarLoja = async (formData: any) => {
  const response = await apiCacimbo.post(`online-stores`, { ...formData });
  return response.data;
};

const getCompanyIdWithNif = async (nif: string) => {
  const response = await apiCacimbo.get(`docs_empresas/all-by-nif/${nif}`);
  return response.data;
};

export default {
  criarLoja,
  getCompanyIdWithNif,
};
