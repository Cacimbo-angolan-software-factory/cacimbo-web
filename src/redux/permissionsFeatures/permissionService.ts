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

const getPermissions = async (CompanyID: any) => {
  const response = await api.get(`empresas/${CompanyID}/permissions`);

  return response.data;
};

const getRoles = async () => {
  const response = await api.get(`roles`);
  return response.data;
};

const createRole = async (roleData: {
  id?: number;
  name: string;
  CompanyID: string;
  description: string;
  permissions: [];
}) => {
  const response = await api.post(`roles`, { ...roleData });
  return response.data;
};

export default {
  createPermission,
  getPermissions,
  getRoles,
  createRole,
};
