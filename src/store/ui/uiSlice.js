import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    ModalCalendar: false,
    btnDelete: false,
  },
  reducers: {
    onOpenModal: (state) => {
      state.ModalCalendar = true;
    },
    onCloseModal: (state) => {
      state.ModalCalendar = false;
    },
    onOpenBtnDelete: (state) => {
      state.btnDelete = true;
    },
    onCloseBtnDelete: (state) => {
      state.btnDelete = false;
    }
  },
});

export const { onOpenModal, onCloseModal, onOpenBtnDelete, onCloseBtnDelete } = uiSlice.actions;