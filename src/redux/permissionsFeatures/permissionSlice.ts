import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import permissionService, { Type } from './permissionService';

interface PermissionState {
  permissions: any[];
  syncPermissions: any[];
  list: any[];
  rolesList: any[];
  userRoles: any[];
  isError: boolean;
  isLoading: boolean;
  isLoadingUserRoles: boolean;
  isSuccess: boolean;
}

const initialState: PermissionState = {
  permissions: [],
  syncPermissions: [],
  list: [],
  rolesList: [],
  userRoles: [],
  isError: false,
  isLoading: false,
  isLoadingUserRoles: false,
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

export const getUserRoles = createAsyncThunk(
  'permission/getUserRoles',
  async (id: number) => {
    try {
      const response = await permissionService.getUserRoles(id);
      return response;
    } catch (error: any) {
      return error;
    }
  }
);

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

export const addRole = createAsyncThunk(
  'permission/addRole',
  async (roleData: any, id: any) => {
    try {
      const response = await permissionService.addRole(roleData, id);
      return response;
    } catch (error: any) {
      console.log(error.response);
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

export const getSyncPermissions = createAsyncThunk(
  'permission/getSyncPermissions',
  async (companyId: number) => {
    try {
      const response = await permissionService.getSyncPermissions(companyId);
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

    // get user roles
    builder.addCase(getUserRoles.pending, (state) => {
      state.isLoadingUserRoles = true;
    });
    builder.addCase(getUserRoles.fulfilled, (state, action) => {
      state.userRoles = action.payload;
      state.isLoadingUserRoles = false;
      state.isSuccess = true;
    });
    builder.addCase(getUserRoles.rejected, (state) => {
      state.isError = true;
      state.isLoadingUserRoles = false;
    });

    // add role
    builder.addCase(addRole.pending, (state) => {
      state.isLoadingUserRoles = true;
    });
    builder.addCase(addRole.fulfilled, (state, action) => {
      const newRole = action.payload;
      state.userRoles.push(newRole);
      state.isLoadingUserRoles = false;
      state.isSuccess = true;
    });
    builder.addCase(addRole.rejected, (state) => {
      state.isError = true;
      state.isLoadingUserRoles = false;
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
    // sync permissions
    builder.addCase(getSyncPermissions.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getSyncPermissions.fulfilled, (state, action) => {
      state.permissions = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(getSyncPermissions.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});
