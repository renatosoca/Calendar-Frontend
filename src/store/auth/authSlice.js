import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: '',
    user: {},
    errorMessage: null,
  },
  reducers: {
    onChecking: (state) => {
      state.status = 'checking';
      state.user = {},
      state.errorMessage = null;
    },
    onLogin: ( state, { payload } ) => {
      state.status = 'authenticated';
      state.user = payload;
      state.errorMessage = null;
    },
    onClearMessageError: (state) => {
      state.errorMessage = null;
    },
    onLogout: (state, { payload }) => {
      state.status = 'not-authenticated';
      state.user = {};
      state.errorMessage = payload?.errorMessage || null;
    },
  },
});

export const { 
  onChecking,
  onLogin,
  onClearMessageError,
  onLogout,
} = authSlice.actions;