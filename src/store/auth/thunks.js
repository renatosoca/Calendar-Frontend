import { calendarApi } from "../../api";
import { onLogoutCalendar } from "../calendar/calendarSlice";
import { onChecking, onClearMessage, onLogin, onLogout, onResetPassword, onShowErrorMessage, onShowSuccessMessage } from "./authSlice";

export const startLogin = ({ email, password }) => {
  return async (dispatch) => {
    try {
      dispatch( onChecking() );

      const { data } = await calendarApi.post("/auth/login", { email, password });
      localStorage.setItem( "token", data.jwt );
      localStorage.setItem( "time-token-start", new Date().getTime() );
      
      const { _id, name } = data;
      dispatch( onLogin({ _id, name, email }) );

    } catch (error) {
      dispatch( onLogout({ errorMessage: error.response.data.msg }) );
    }
  };
}

export const startRegister = ({ email, password, name }) => {
  return async (dispatch) => {
    try {
      dispatch( onChecking() );

      const { data } = await calendarApi.post("/auth/register", { email, password, name });
      dispatch( onShowSuccessMessage( data.msg ) );

    } catch (error) {
      dispatch( onLogout({ errorMessage: error.response.data.msg }) );
    }
  };
}

export const startChecking = () => {
  return async (dispatch) => {
    const token = localStorage.getItem('token') || '';
    if ( !token ) dispatch( onLogout() );

    try {
      const { data } = await calendarApi.get( "/auth/renew" );
      localStorage.setItem( "token", data.jwt );
      localStorage.setItem( "time-token-start", new Date().getTime() );
      
      const { _id, name, email } = data;
      dispatch( onLogin({ _id, name, email }) );
      
    } catch (error) {
      localStorage.removeItem( "token" );
      dispatch( onLogout() );  
    }
  }
}

export const startConfirmAccount = ({ token }) => {
  return async (dispatch) => {
    try {
      dispatch( onChecking() );
      
      const { data } = await calendarApi.get(`/auth/confirm/${ token }`);
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
      
      const { data } = await calendarApi.post(`/auth/reset/${ token }`, { password });
      dispatch( onResetPassword({ email: data.email, name: data.name }) );
      localStorage.setItem( "token", data.jwt );

    } catch (error) {
      dispatch( onLogout({ errorMessage: error.response.data.msg }) );
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
    localStorage.removeItem( "token" );
    localStorage.removeItem( "time-token-start" );
    dispatch( onLogout() );
    dispatch( onLogoutCalendar() );
  }
}