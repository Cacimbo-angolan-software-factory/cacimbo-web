import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import lojasService from './LojasService';

interface LojasState {
  loja: null;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  message: string;
}

const initialState: LojasState = {
  loja: null,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: '',
};

export const criarLoja = createAsyncThunk(
  'lojas/criar',
  async (
    lojaData: {
      CompanyID: string;
      StoreName: string;
      StoreLogoUrl: string;
      StoreSlogan: string;
    },
    { rejectWithValue }
  ) => {
    try {
      return await lojasService.criarLoja(lojaData);
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const lojasSlice = createSlice({
  name: 'lojas',
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
    builder.addCase(criarLoja.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(criarLoja.fulfilled, (state, action) => {
      state.loja = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
      state.message = 'Loja criada com sucesso';
    });
    builder.addCase(criarLoja.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = 'Erro ao criar loja, tente novamente mais tarde';
    });
  },
});
