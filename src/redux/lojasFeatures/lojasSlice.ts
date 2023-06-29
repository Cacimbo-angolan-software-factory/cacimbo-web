import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import lojasService from './LojasService';

interface LojasState {
  loja: null;
  companyIds: any[];
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  message: string;
}

const initialState: LojasState = {
  loja: null,
  companyIds: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: '',
};

export const criarLoja = createAsyncThunk(
  'lojas/criar',
  async (formData: any, { rejectWithValue }) => {
    try {
      return await lojasService.criarLoja(formData);
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getCompanyIdWithNif = createAsyncThunk(
  'lojas/getCompanyIdWithNif',
  async (nif: string) => {
    try {
      const response = await lojasService.getCompanyIdWithNif(nif);
      return response.data.map((item: any) => item.CompanyID);
    } catch (error: any) {
      return error;
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
    builder.addCase(criarLoja.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = 'Erro ao criar loja, tente novamente mais tarde';
    });

    // getCompanyIdWithNif
    builder.addCase(getCompanyIdWithNif.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCompanyIdWithNif.fulfilled, (state, action) => {
      state.companyIds = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(getCompanyIdWithNif.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = 'Erro ao buscar empresa, tente novamente mais tarde';
    });
  },
});
