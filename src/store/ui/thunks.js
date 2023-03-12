import { onCloseModal, onCloseModalEvent, onOpenModal, onOpenModalEvent } from "./uiSlice";

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

export const startModalEvent = () => {
  return (dispatch) => {
    dispatch( onOpenModalEvent() );
  }
}

export const startCloseModalEvent = () => {
  return (dispatch) => {
    dispatch( onCloseModalEvent() );
  }
}