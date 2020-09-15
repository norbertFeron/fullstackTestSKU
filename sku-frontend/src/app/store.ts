import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import filterReducer from './filterSlice'

export const store = configureStore({
  reducer: { 
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
