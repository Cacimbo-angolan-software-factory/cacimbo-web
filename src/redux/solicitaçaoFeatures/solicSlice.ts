import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import solicService from './solicService';

interface SolicState {
  solic: null;
  canal: any[];
  moduloComum: any[];
  moduloPadronizar: any[];
  licencasDaEmpresa: any[];
  modulosList: any[];
  empresasList: any[];
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  message: string;
}

const initialState: SolicState = {
  solic: null,
  canal: [],
  moduloComum: [],
  moduloPadronizar: [],
  licencasDaEmpresa: [],
  modulosList: [],
  empresasList: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: '',
};

export const getCanal = createAsyncThunk('solic/getCanal', async () => {
  try {
    const response = await solicService.getCanal();
    return response;
  } catch (error: any) {
    return error;
  }
});

export const getModuloComum = createAsyncThunk('solic/getModulo', async () => {
  try {
    const response = await solicService.getModulo();
    console.log(response);
    return response.filter((item: any) => item.tipo === 1);
  } catch (error: any) {
    return error;
  }
});

export const getModuloPadronizar = createAsyncThunk(
  'solic/getModuloPadronizar',
  async () => {
    try {
      const response = await solicService.getModulo();
      console.log(response);
      return response.filter((item: any) => item.tipo === 0);
    } catch (error: any) {
      return error;
    }
  }
);

export const getLicencaPorEmpresa = createAsyncThunk(
  'solic/getLicencaPorEmpresa',
  async (nif: string) => {
    try {
      const response = await solicService.getLicencaPorEmpresa(nif);
      return response;
    } catch (error: any) {
      return error;
    }
  }
);

export const getModulo = createAsyncThunk('solic/getModuloList', async () => {
  try {
    const response = await solicService.getModulo();
    return response;
  } catch (error: any) {
    return error;
  }
});

export const getEmpresas = createAsyncThunk('solic/getEmpresas', async () => {
  try {
    const response = await solicService.getEmpresas();
    return response;
  } catch (error: any) {
    return error;
  }
});

export const criarSolic = createAsyncThunk(
  'solic/criar',
  async (
    solicData: {
      nif: string;
      empresa: string;
      telefone: string;
      email: string;
      responsavel: string;
      cargo: string;
      morada: string;
      localidade: string;
      provincia: string;
      pais: string;
      modulo: any[];
      tipo: string;
      parceiro_id: string;
      licencaId: string | number;
      canal_id: string;
      user_id: string;
    },
    { rejectWithValue }
  ) => {
    try {
      return await solicService.criarSolicitaçao(solicData);
    } catch (err: any) {
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);

export const solicSlice = createSlice({
  name: 'solicitaçao',
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = '';
    },
  },
  // criar solicitação
  extraReducers: (builder) => {
    builder.addCase(criarSolic.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(criarSolic.fulfilled, (state, action) => {
      state.solic = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(criarSolic.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
      state.message = 'Erro ao criar solicitação';
    });
    // get canal
    builder.addCase(getCanal.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCanal.fulfilled, (state, action) => {
      state.canal = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(getCanal.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
      state.message = 'Erro ao buscar canais';
    });
    // get modulo comum
    builder.addCase(getModuloComum.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getModuloComum.fulfilled, (state, action) => {
      state.moduloComum = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(getModuloComum.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
      state.message = 'Erro ao buscar módulos';
    });
    // get modulo padronizar
    builder.addCase(getModuloPadronizar.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getModuloPadronizar.fulfilled, (state, action) => {
      state.moduloPadronizar = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(getModuloPadronizar.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
      state.message = 'Erro ao buscar módulos';
    });
    // get Licenças da empresa
    builder.addCase(getLicencaPorEmpresa.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getLicencaPorEmpresa.fulfilled, (state, action) => {
      state.licencasDaEmpresa = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(getLicencaPorEmpresa.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
      state.message = 'Erro ao buscar licenças';
    });
    // get Modulos
    builder.addCase(getModulo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getModulo.fulfilled, (state, action) => {
      state.modulosList = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(getModulo.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
      state.message = 'Erro ao buscar módulos';
    });
    // get Empresas
    builder.addCase(getEmpresas.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getEmpresas.fulfilled, (state, action) => {
      state.empresasList = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(getEmpresas.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
      state.message = 'Erro ao buscar empresas';
    });
  },
});

export const { reset } = solicSlice.actions;
