import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from './userService';

interface UserState {
  user: null;
  users: string[];
  perfis: string[];
  tarefas: string[];
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  message: string;
  allUsers: string[];
}

const initialState: UserState = {
  user: JSON.parse(localStorage.getItem('user') || 'null')
    ? JSON.parse(localStorage.getItem('user') || 'null')
    : null,
  users: [],
  perfis: [],
  tarefas: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: '',
  allUsers: [],
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

export const getAllUsers = createAsyncThunk('user/allUsers', async () => {
  try {
    const response = await userService.getAllUsers();
    return response;
  } catch (error: any) {
    return error;
  }
});

export const getPerfis = createAsyncThunk('user/getPerfis', async () => {
  try {
    const response = await userService.getPerfis();
    return response;
  } catch (error: any) {
    return error;
  }
});

export const getTarefas = createAsyncThunk(
  'user/getTarefas',
  async (user: any) => {
    try {
      const response = await userService.getTarefas(user);
      console.log(response);
      return response;
    } catch (error: any) {
      return error;
    }
  }
);

export const createTarefas = createAsyncThunk(
  'user/createTarefas',
  async (tarefaData: {
    id?: number;
    ref: string;
    tarefa: string;
    icon: string;
  }) => {
    try {
      const response = await userService.createTarefas(tarefaData);
      return response;
    } catch (error: any) {
      console.log(error.response.data);
      return error;
    }
  }
);

export const createUser = createAsyncThunk(
  'user/createUser',
  async (userData: {
    name: string;
    email: string;
    parceiro_id: string | number;
    tipo: string;
    id_perfil: string;
  }) => {
    try {
      const response = await userService.createUser(userData);
      return response;
    } catch (error: any) {
      console.log(error.response.data);
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

    // get perfis
    builder.addCase(getPerfis.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPerfis.fulfilled, (state, action) => {
      state.perfis = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(getPerfis.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
      state.message = 'Sem perfis cadastrados';
    });

    // get tarefas
    builder.addCase(getTarefas.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(getTarefas.fulfilled, (state, action) => {
        state.tarefas = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
      });
    builder.addCase(getTarefas.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
      state.message = 'Sem tarefas disponíveis';
    });

    // create tarefas
    builder.addCase(createTarefas.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createTarefas.fulfilled, (state, action) => {
      state.tarefas.push(action.payload);
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(createTarefas.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
      state.message = 'Erro ao criar tarefa';
    });

    // create user
    builder.addCase(createUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(createUser.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
      state.message = 'Erro ao criar usuário';
    });

    // get all users
    builder.addCase(getAllUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.allUsers = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(getAllUsers.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
      state.message = 'Erro ao buscar usuários';
    });
  },
});

export const { reset } = userSlice.actions;
