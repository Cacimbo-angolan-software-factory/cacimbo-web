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

const deletePermission = async (role: any, permission_id: any) => {
  const response = await api.post(`roles/${role}/permissions/remove/`, {
    permission_id,
  });
  return response.data;
};

const getPermissions = async (CompanyID: any) => {
  const response = await api.get(`empresas/${CompanyID}/permissions`);
  const data = Object.getOwnPropertyNames(response.data).map((value) => {
    if (value == '0') {
      return null;
    }
    const children = response.data[value].map((child: any) => ({
      id: child.id,
      name: child.name,
      isChecked: false,
      slug: child.slug,
      CompanyID: child.CompanyID,
      source_id: child.source_id,
    }));

    return {
      id: response.data[value][0].source_id,
      name: value,
      payload: children,
      isChecked: false,
    };
  });
  return data.filter((item) => item !== null);
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

const deleteRole = async (id: number) => {
  const response = await api.delete(`roles/${id}`);
  return response.data;
};

const editRole = async (id: number) => {
  const response = await api.put(`roles/${id}`);
  return response.data;
};

export default {
  createPermission,
  getPermissions,
  getRoles,
  createRole,
  deleteRole,
  deletePermission,
  editRole,
};
