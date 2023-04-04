import { useDispatch, useSelector } from 'react-redux';

export const useAuth = () => {
  const dispatch = useDispatch();
  const authState = useSelector( state => state.auth );

  return {
    ...authState,

    dispatch,
  }
}