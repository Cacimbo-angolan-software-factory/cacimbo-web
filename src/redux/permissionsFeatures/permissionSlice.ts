import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import permissionService, { Type } from './permissionService';

interface PermissionState {
  permissions: any[];
  list: any[];
  rolesList: any[];
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
}

const initialState: PermissionState = {
  permissions: [],
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
  async (CompanyID: string) => {
    try {
      const response = await permissionService.getPermissions(CompanyID);
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

export const deleteRole = createAsyncThunk(
  'permission/deleteRole',
  async (id: number) => {
    try {
      const response = await permissionService.deleteRole(id);
      return response;
    } catch (err: any) {
      console.log(err.response);
      return err;
    }
  }
);

export const editRole = createAsyncThunk(
  'permission/editRole',
  async (id: number) => {
    try {
      const response = await permissionService.editRole(id);
      return response;
    } catch (err: any) {
      console.log(err.response);
      return err;
    }
  }
);

export const deletePermission = createAsyncThunk(
  'permission/deletePermission',
  async (role: any, permission_id) => {
    try {
      const response = await permissionService.deletePermission(
        role,
        permission_id
      );
      return response;
    } catch (err: any) {
      console.log(err.response);
      return err;
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
      const newRole = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
      state.rolesList.push(newRole);
      const filteredRoles = state.rolesList.filter(
        (role) => role.CompanyID === newRole.CompanyID
      );
      state.rolesList = filteredRoles;
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

    // delete role
    builder.addCase(deleteRole.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteRole.fulfilled, (state, action) => {
      state.rolesList.filter((role) => role !== action.payload);
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(deleteRole.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });

    // edit role
    builder.addCase(editRole.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(editRole.fulfilled, (state, action) => {
      state.rolesList.filter((role) => role !== action.payload);
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(editRole.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });

    // delete permission
    builder.addCase(deletePermission.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deletePermission.fulfilled, (state, action) => {
      state.rolesList = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(deletePermission.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});
