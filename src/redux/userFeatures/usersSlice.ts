import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from './userService';

interface UserState {
  user: null;
  users: string[];
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  message: string;
}

const initialState: UserState = {
  user: JSON.parse(localStorage.getItem('user') || 'null')
    ? JSON.parse(localStorage.getItem('user') || 'null')
    : null,
  users: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: '',
};

export const login = createAsyncThunk(
  'user/login',
  async (user: any, { rejectWithValue }) => {
    try {
      return await userService.login(user);
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const logout = createAsyncThunk('user/logout', async () => {
  await userService.logout();
});

export const getUsers = createAsyncThunk(
  'user/getUsers',
  async (companyId: string) => {
    try {
      const response = await userService.getUsers(companyId);
      return response;
    } catch (error: any) {
      return error;
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
      state.message = 'Erro ao fazer login';
    });

    // get users by company
    builder.addCase(getUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
      state.message = 'Sem usuários cadastrados';
    });
  },
});

export const { reset } = userSlice.actions;
