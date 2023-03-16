import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './userFeatures/usersSlice';
import { empresaSlice } from './empresaFeatures/empresaSlice';
import { solicSlice } from './solicitaçaoFeatures/solicSlice';
import { permissionSlice } from './permissionsFeatures/permissionSlice';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    empresa: empresaSlice.reducer,
    solicitaçao: solicSlice.reducer,
    Permission: permissionSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
