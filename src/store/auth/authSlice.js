import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'init',
    user: {},
    successMessage: null,
    errorMessage: null,
  },
  reducers: {
    onChecking: (state) => {
      state.status = 'checking';
      state.user = {};
      state.errorMessage = null;
      state.successMessage = null;
    },
    onLogin: ( state, { payload } ) => {
      state.status = 'authenticated';
      state.user = payload;
      state.errorMessage = null;
      state.successMessage = null;
    },
    onResetPassword: (state, { payload }) => {
      state.status = 'authenticated';
      state.user = payload;
      state.successMessage = null;
      state.errorMessage = null;
    },
    onShowErrorMessage: (state, { payload }) => {
      state.errorMessage = payload;
      state.successMessage = null;
      state.status = 'not-authenticated';
    },
    onShowSuccessMessage: (state, { payload }) => {
      state.successMessage = payload;
      state.errorMessage = null;
      state.status = 'not-authenticated';
    },
    onClearMessage: (state) => {
      state.errorMessage = null;
      state.successMessage = null;
    },
    onLogout: (state, { payload }) => {
      state.status = 'user-logout';
      state.user = {};
      state.successMessage = null;
      state.errorMessage = payload?.errorMessage || null;
    },
  },
});

export const { 
  onChecking,
  onLogin,
  onResetPassword,
  onShowErrorMessage,
  onShowSuccessMessage,
  onClearMessage,
  onLogout,
} = authSlice.actions;