import { api } from '../../service/Service.api';

const login = async (email: string, password: string) => {
  const response = await api.post('/login', { email, password });

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

const logout = async () => {
  localStorage.removeItem('user');
};

export const userService = {
  login,
  logout,
};

export default userService;
