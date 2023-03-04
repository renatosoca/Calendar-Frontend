import { calendarApi } from "../../api";
import { setLogoutCalendar } from "../calendar/calendarSlice";
import { onChecking, onLogin, onLogout } from "./authSlice";

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
      localStorage.setItem( "token", data.jwt );
      localStorage.setItem( "time-token-start", new Date().getTime() );
      
      //Falta implementar el mensage de revisar email.
      const { _id } = data;
      //dispatch( onLogin({ _id, name, email }) );

    } catch (error) {
      dispatch( onLogout({ errorMessage: error.response.data.msg }) );
    }
  };
}

export const startChecking = () => {
  return async (dispatch) => {
    const token = localStorage.getItem('token') || null;
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

export const startLogout = () => {
  return (dispatch) => {
    localStorage.removeItem( "token" );
    localStorage.removeItem( "time-token-start" );
    dispatch( onLogout() );
    dispatch( setLogoutCalendar() );
  }
}