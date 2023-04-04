import { useDispatch, useSelector } from 'react-redux';

export const useUi = () => {
  const dispatch = useDispatch();
  const uiState = useSelector( state => state.ui );

  return {
    ...uiState,

    dispatch,
  }
}