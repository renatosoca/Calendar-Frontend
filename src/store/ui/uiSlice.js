import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    ModalCalendar: false,
    ModalEvent: false,
  },
  reducers: {
    onOpenModal: (state) => {
      state.ModalCalendar = true;
    },
    onCloseModal: (state) => {
      state.ModalCalendar = false;
    },
    onOpenModalEvent: (state) => {
      state.ModalEvent = true;
    },
    onCloseModalEvent: (state) => {
      state.ModalEvent = false;
    }
  },
});

export const { onOpenModal, onCloseModal, onOpenModalEvent, onCloseModalEvent } = uiSlice.actions;