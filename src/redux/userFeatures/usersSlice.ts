import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from './userService';

// const user =

interface UserState {
  user: null;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  message: string;
}

const initialState: UserState = {
  user: JSON.parse(localStorage.getItem('user') || 'null')
    ? JSON.parse(localStorage.getItem('user') || 'null')
    : null,
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
  },
});

export const { reset } = userSlice.actions;
