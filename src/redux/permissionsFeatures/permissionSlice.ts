import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import permissionService, { Type } from './permissionService';

interface PermissionState {
  permissions: any[];
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
}

const initialState: PermissionState = {
  permissions: [],
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
  },
});
