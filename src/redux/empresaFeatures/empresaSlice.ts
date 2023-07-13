import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import empresaService from './empresaService';

interface EmpresaState {
  empresa: null;
  empresasAssociadas: any[];
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  message: string;
}

const initialState: EmpresaState = {
  empresa: null,
  empresasAssociadas: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: '',
};

export const criarEmpresa = createAsyncThunk(
  'empresa/criar',
  async (
    empresaData: {
      nome: string;
      responsavel: string;
      email: string;
      telefone: string;
      nif: string;
      sede: string;
      tipo: string;
    },
    { rejectWithValue }
  ) => {
    try {
      return await empresaService.criarEmpresa(empresaData);
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getEmpresasAssociadas = createAsyncThunk(
  'empresa/getEmpresasAssociadas',
  async () => {
    try {
      return await empresaService.getEmpresasAssociadas();
    } catch (err: any) {
      return err.response.data;
    }
  }
);

export const empresaSlice = createSlice({
  name: 'empresa',
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
    builder.addCase(criarEmpresa.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(criarEmpresa.fulfilled, (state, action) => {
      state.empresa = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(criarEmpresa.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
      state.message = 'Erro ao criar empresa';
    });

    // getEmpresasAssociadas
    builder.addCase(getEmpresasAssociadas.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getEmpresasAssociadas.fulfilled, (state, action) => {
      state.empresasAssociadas = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(getEmpresasAssociadas.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
      state.message = 'Erro ao buscar empresas associadas';
    });
  },
});

export const { reset } = empresaSlice.actions;
