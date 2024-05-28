import { apiCacimbo, api } from '../../service/Service.api';

const criarLoja = async (formData: any) => {
  const response = await apiCacimbo.post(`online-stores`, formData);
  return response.data;
};

const getCompanyIdWithNif = async (nif: string) => {
  const response = await apiCacimbo.get(`docs_empresas/all-by-nif/${nif}`);
  return response.data;
};

const getLojas = async () => {
  const response = await apiCacimbo.get(`online-stores`);
  return response.data.data;
};

const deleteLoja = async (id: any) => {
  const response = await apiCacimbo.delete(`online-stores/${id}`);
  return response.data;
};

const updateLoja = async (id: string) => {
  const response = await apiCacimbo.patch(`online-stores/${id}`);
  return response.data;
};

const getPaymentMethods = async () => {
  const response = await apiCacimbo.get(`config-payments-mechanism`);
  return response.data.data;
};

const getLojasAssociadas = async () => {
  const response = await apiCacimbo.get(`users-online-stores`);
  return response.data;
};

const associarLoja = async (data: any) => {
  const response = await apiCacimbo.post(`users-online-stores`, data);
  return response.data;
};

export default {
  criarLoja,
  getCompanyIdWithNif,
  getLojas,
  deleteLoja,
  updateLoja,
  getPaymentMethods,
  getLojasAssociadas,
  associarLoja,
};
