import axios from 'axios';

const calendarApi = axios.create({
  baseURL: `${import.meta.env.VITE_API_URI}/api`,
});

calendarApi.interceptors.request.use( config => {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${localStorage.getItem('jwtCalentar') || ''}`,
  }
  return config;
});

export default calendarApi;