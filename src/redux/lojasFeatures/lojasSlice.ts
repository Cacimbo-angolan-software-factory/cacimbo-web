import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import lojasService from './LojasService';

interface LojasState {
  loja: null;
  companyIds: any[];
  lojas: any[];
  isError: boolean;
  isErrorCriar: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  isSuccessCriar: boolean;
  message: string;
}

const initialState: LojasState = {
  loja: null,
  companyIds: [],
  lojas: [],
  isError: false,
  isErrorCriar: false,
  isSuccessCriar: false,
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

export const getLojas = createAsyncThunk('lojas/getLojas', async () => {
  try {
    return await lojasService.getLojas();
  } catch (error: any) {
    return error;
  }
});

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
      state.lojas.push(action.payload);
      state.loja = action.payload;
      state.isLoading = false;
      state.isSuccessCriar = true;
      state.message = 'Loja criada com sucesso! 🎉';
    });
    builder.addCase(criarLoja.rejected, (state) => {
      state.isErrorCriar = true;
      state.isLoading = false;
      state.isSuccessCriar = false;
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

    // getLojas
    builder.addCase(getLojas.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getLojas.fulfilled, (state, action) => {
      state.lojas = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(getLojas.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = 'Erro ao buscar lojas, tente novamente mais tarde';
    });
  },
});
