import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    ModalCalendar: false,
  },
  reducers: {
    onOpenModal: (state) => {
      state.ModalCalendar = true;
    },
    onCloseModal: (state) => {
      state.ModalCalendar = false;
    }
  },
});

export const { onOpenModal, onCloseModal } = uiSlice.actions;