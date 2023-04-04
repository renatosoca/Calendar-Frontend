import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'init',
    loading: '',
    user: {},
    successMessage: null,
    errorMessage: null,
  },
  reducers: {
    onChecking: (state) => {
      state.status = 'checking';
      state.errorMessage = null;
      state.successMessage = null;
    },
    onLoading: (state, { payload }) => {
      state.loading = payload;
    },
    onLogin: ( state, { payload } ) => {
      state.status = 'authenticated';
      state.loading = '';
      state.user = payload;
      state.errorMessage = null;
      state.successMessage = null;
    },
    onResetPassword: (state, { payload }) => {
      state.status = 'authenticated';
      state.loading = '';
      state.user = payload;
      state.successMessage = null;
      state.errorMessage = null;
    },
    onShowErrorMessage: (state, { payload }) => {
      state.status = 'not-authenticated';
      state.loading = '';
      state.errorMessage = payload;
      state.successMessage = null;
    },
    onShowSuccessMessage: (state, { payload }) => {
      state.status = 'not-authenticated';
      state.loading = '';
      state.successMessage = payload;
      state.errorMessage = null;
    },
    onClearMessage: (state) => {
      state.errorMessage = null;
      state.successMessage = null;
    },
    onLogout: (state, { payload }) => {
      state.status = 'user-logout';
      state.loading = '';
      state.user = {};
      state.successMessage = null;
      state.errorMessage = payload?.errorMessage || null;
    },
  },
});

export const { 
  onChecking,
  onLoading,
  onLogin,
  onResetPassword,
  onShowErrorMessage,
  onShowSuccessMessage,
  onClearMessage,
  onLogout,
} = authSlice.actions;