import { api } from '../../service/Service.api';

export enum Type {
  'geral',
}

const createPermission = async (permissionData: {
  id?: number;
  source_id?: number;
  source_name?: string;
  name: string;
  slug?: string;
  description: string;
  type: Type;
}) => {
  const response = await api.post(`permissions`, { ...permissionData });
  return response.data;
};

const getPermissions = async () => {
  const response = await api.get(`permissions`);
  return response.data;
};

export default {
  createPermission,
  getPermissions,
};
