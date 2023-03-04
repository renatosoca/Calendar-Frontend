import { onCloseModal, onOpenModal } from "./uiSlice";

export const startOpenModal = () => {
  return (dispatch) => {
    dispatch( onOpenModal() );
  }
}

export const startCloseModal = () => {
  return (dispatch) => {
    dispatch( onCloseModal() );
  }
}