import { api } from '../../service/Service.api';

const login = async (userData: {
  email: string;
  password: string;
  device_name: string;
}) => {
  const response = await api.post(`token`, { ...userData, device_name: 'web' });

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
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

const getTarefas = async (user: any) => {
  try {
    const response = await api.get(
      `task-textos?perfil=${user?.user.id_perfil}`
    );
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
  getTarefas,
  createTarefas,
  createUser,
  getAllUsers,
};

export default userService;
