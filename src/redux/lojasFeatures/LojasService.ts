import { apiCacimbo } from '../../service/Service.api';

const criarLoja = async (formData: {
  CompanyID: string;
  StoreName: string;
  StoreLogoUrl: string;
  StoreSlogan: string;
}) => {
  const response = await apiCacimbo.post(`online-stores`, { ...formData });
  return response.data;
};

export default {
  criarLoja,
};
