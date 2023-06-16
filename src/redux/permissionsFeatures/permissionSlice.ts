import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import permissionService, { Type } from './permissionService';

interface PermissionState {
  permissions: any[];
  roles: any[];
  list: any[];
  rolesList: any[];
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
}

const initialState: PermissionState = {
  permissions: [],
  roles: [],
  list: [],
  rolesList: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
};

export const criarPermission = createAsyncThunk(
  'permission/criarPermission',
  async (permissionData: {
    id?: number;
    source_id?: number;
    source_name?: string;
    name: string;
    slug?: string;
    description: string;
    type: Type;
  }) => {
    try {
      const response = await permissionService.createPermission(permissionData);
      return response;
    } catch (error: any) {
      return error;
    }
  }
);

export const getPermissions = createAsyncThunk(
  'permission/getPermissions',
  async () => {
    try {
      const response = await permissionService.getPermissions();
      return response;
    } catch (error: any) {
      return error;
    }
  }
);

export const getRoles = createAsyncThunk('permission/getRoles', async () => {
  try {
    const response = await permissionService.getRoles();
    return response;
  } catch (error: any) {
    return error;
  }
});

export const criarRole = createAsyncThunk(
  'permission/criarRole',
  async (roleData: {
    id?: number;
    name: string;
    CompanyID: string;
    description: string;
    permissions: [];
  }) => {
    try {
      const response = await permissionService.createRole(roleData);
      return response;
    } catch (error: any) {
      console.log(error.response);
      return error;
    }
  }
);

export const permissionSlice = createSlice({
  name: 'permission',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(criarPermission.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(criarPermission.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.permissions.push(action.payload);
    });
    builder.addCase(criarPermission.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    // get permissions
    builder.addCase(getPermissions.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPermissions.fulfilled, (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(getPermissions.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });

    // create role
    builder.addCase(criarRole.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(criarRole.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.roles.push(action.payload);
    });
    builder.addCase(criarRole.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });

    // get roles
    builder.addCase(getRoles.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getRoles.fulfilled, (state, action) => {
      state.rolesList = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(getRoles.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});
