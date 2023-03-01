import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isOpenModal: false,
  },
  reducers: {
    onOpenModal: (state) => {
      state.isOpenModal = true;
    },
    onCloseModal: (state) => {
      state.isOpenModal = false;
    }
  },
});

export const { onOpenModal, onCloseModal } = uiSlice.actions;