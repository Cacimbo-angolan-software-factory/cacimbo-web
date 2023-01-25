import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './userFeatures/usersSlice';
import { empresaSlice } from './empresaFeatures/empresaSlice';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    empresa: empresaSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
