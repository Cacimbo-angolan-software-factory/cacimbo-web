import { api, apiCacimbo } from '../../service/Service.api';

const login = async (userData: {
  email: string;
  password: string;
  device_name: string;
}) => {
  try {
    const response = await apiCacimbo.post(`token`, {
      ...userData,
      device_name: 'web',
    });

    if (response.data) {
      const userDataStore = {
        user: response.data.user,
        roles: response.data.roles,
      };

      localStorage.setItem('user', JSON.stringify(userDataStore));
    }

    return response.data;
  } catch (err: any) {
    console.log(err);
  }
};

const logout = async () => {
  localStorage.removeItem('user');
};

const getUsers = async (companyId: string) => {
  try {
    const response = await api.get(`users?parceiro_id=${companyId}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

const getAllUsers = async () => {
  try {
    const response = await api.get(`users`);
    return response.data;
  } catch (error) {
    return error;
  }
};

const getUsersEmpresas = async (userId: any) => {
  try {
    const response = await apiCacimbo.get(`users/${userId}/empresas`);
    return response.data.empresas;
  } catch (error) {
    return error;
  }
};

const AssociarUser = async (companyId: any, user_id: any) => {
  try {
    const response = await apiCacimbo.post(`docs_empresas/associate-user`, {
      companyId,
      user_id,
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

const createUser = async (userData: {
  name: string;
  email: string;
  parceiro_id: number | string;
  tipo: string;
  id_perfil: string;
  roles: string[];
  companyId: string;
  nif: string;
}) => {
  try {
    const response = await api.post(`users`, { ...userData });
    return response.data;
  } catch (error: any) {
    console.log(error.response.data);
    return error;
  }
};

const getPerfis = async () => {
  try {
    const response = await api.get(`prefis`);
    return response.data;
  } catch (error) {
    return error;
  }
};

const getAssistsUsers = async (userId: any) => {
  try {
    const response = await api.get(`assistencias/user/${userId}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

const getCompanyAssists = async () => {
  try {
    const response = await api.get(`assistencias`);
    return response.data;
  } catch (error) {
    return error;
  }
};

const createTarefas = async (tarefaData: {
  id?: number;
  ref: string;
  tarefa: string;
  icon: string;
}) => {
  try {
    const response = await api.post(`task-textos`, { ...tarefaData });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const userService = {
  login,
  logout,
  getUsers,
  getPerfis,
  createTarefas,
  createUser,
  getAllUsers,
  getUsersEmpresas,
  AssociarUser,
  getAssistsUsers,
  getCompanyAssists,
};

export default userService;
