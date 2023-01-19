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

export const userService = {
  login,
  logout,
};

export default userService;
