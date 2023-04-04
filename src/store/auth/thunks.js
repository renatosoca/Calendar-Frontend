import { calendarApi } from "../../api";
import { onChangeMsgEvent, onLogoutCalendar } from "../calendar/calendarSlice";
import { onChecking, onClearMessage, onLoading, onLogin, onLogout, onResetPassword, onShowErrorMessage, onShowSuccessMessage } from "./authSlice";

export const startLogin = ({ email, password }) => {
  return async (dispatch) => {
    try {
      dispatch( onChecking() );

      const { data } = await calendarApi.post("/auth/login", { email, password });
      localStorage.setItem( "jwtCalentar", data.jwt );
      
      dispatch( onLogin( data.user ) );

    } catch (error) {
      dispatch( onLogout({ errorMessage: error.response.data.msg }) );
    }
  };
}

export const startRegister = ({ name, lastname, email, password }) => {
  return async (dispatch) => {
    try {
      dispatch( onChecking() );

      const { data } = await calendarApi.post("/auth/register", { name, lastname, email, password } );
      dispatch( onShowSuccessMessage( data.msg ) );

    } catch (error) {
      dispatch( onLogout({ errorMessage: error.response.data.msg }) );
    }
  };
}

export const startChecking = () => {
  return async (dispatch) => {
    const token = localStorage.getItem('jwtCalentar') || '';
    if ( !token ) return dispatch( onLogout() );

    try {
      const { data } = await calendarApi.get( "/auth/revalidateAuth" );
      localStorage.setItem( "jwtCalentar", data.jwt );
      
      dispatch( onLogin( data.user ) );
      
    } catch (error) {
      localStorage.removeItem( "jwtCalentar" );
      dispatch( onLogout() );  
    }
  }
}

export const startConfirmAccount = ({ token }) => {
  return async (dispatch) => {
    try {
      dispatch( onChecking() );
      
      const { data } = await calendarApi.get(`/auth/confirm-account/${ token }`);
      dispatch( onShowSuccessMessage( data.msg ) );

    } catch (error) {
      dispatch( onShowErrorMessage( error.response.data.msg ) );
    }
  }
}

export const startForgotPassword = ({ email }) => {
  return async (dispatch) => {
    try {
      dispatch( onChecking() );
      
      const { data } = await calendarApi.post("/auth/forgot-password", { email });
      dispatch( onShowSuccessMessage( data.msg ) );

    } catch (error) {
      dispatch( onShowErrorMessage( error.response.data.msg ) );
    }
  }
}

export const startResetPassword = ({ token, password }) => {
  return async (dispatch) => {
    try {
      dispatch( onChecking() );
      
      const { data } = await calendarApi.post(`/auth/reset-password/${ token }`, { password });
      localStorage.setItem( "jwtCalentar", data.jwt );

      dispatch( onResetPassword( data.user ) );

    } catch (error) {
      dispatch( onLogout({ errorMessage: error.response.data.msg }) );
    }
  }
}

export const startUpdateUserProfile = ({ _id, name, lastname, email, password }) => {
  return async (dispatch) => {
    try {
      dispatch( onLoading('loading') );
      
      await calendarApi.put(`/auth/user-profile/${_id}`, { name, lastname, email, password });
      dispatch( onLogin({ _id, name, lastname, email }) );
      dispatch( onChangeMsgEvent({ msgEvent: 'Usuario editado correctamente', ok: true }) );

    } catch (error) {
      dispatch( onChangeMsgEvent({ msgEvent: error.response.data.msg, ok: falso }) );
    } finally {
      dispatch( onLoading('') );
      setTimeout(() => {
        dispatch( onChangeMsgEvent({ msgEvent: '', ok: '' }) );
      }, 2500);
    }
  }
}

export const startUserResetPassword = ({ oldPassword, newPassword }) => {
  return async (dispatch, getState) => {
    const { user } = getState().auth;
    try {
      dispatch( onLoading('loading') );
      
      await calendarApi.put(`/auth/password-profile/${user._id}`, { oldPassword, newPassword } );
      dispatch( onChangeMsgEvent({ msgEvent: 'Contraseña editada correctamente', ok: true }) );

    } catch (error) {
      dispatch( onChangeMsgEvent({ msgEvent: error.response.data.msg, ok: false }) );
    } finally {
      dispatch( onLoading('') );
      setTimeout(() => {
        dispatch( onChangeMsgEvent({ msgEvent: '', ok: '' }) );
      }, 2500);
    }
  }
}

export const startClearMessages = () => {
  return (dispatch) => {
    dispatch( onClearMessage() );
  }
}

export const startLogout = () => {
  return (dispatch) => {
    localStorage.removeItem( "jwtCalentar" );
    dispatch( onLogout() );
    dispatch( onLogoutCalendar() );
  }
}