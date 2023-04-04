import { onCloseModal, onCloseBtnDelete, onOpenModal, onOpenBtnDelete } from "./uiSlice";

export const startOpenModal = () => {
  return (dispatch) => dispatch( onOpenModal() );
}

export const startCloseModal = () => {
  return (dispatch) => dispatch( onCloseModal() );
}

export const startShowBtnDelete = () => {
  return (dispatch) => dispatch( onOpenBtnDelete() );
}

export const startHiddenBtnDelete = () => {
  return (dispatch) => dispatch( onCloseBtnDelete() );
}