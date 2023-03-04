import { createSlice } from '@reduxjs/toolkit';

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    isLoadingEvents: false,
    events: [],
    activeEvent: null,
  },
  reducers: {
    setActiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
    },
    setLoadingEvents: (state) => {
      state.isLoadingEvents = true;
    },
    setLoadEvents: (state, { payload }) => {
      state.isLoadingEvents = false;
      state.events = payload;
    },
    addNewEvent: (state, { payload }) => {
      state.events.push( payload );
      state.activeEvent = null;
    },
    setUpdateEvent: (state, { payload }) => {
      state.events = state.events.map( event => {
        if (event._id === payload._id) {
          return payload;
        }

        return event;
      });
      state.activeEvent = null;
    },
    setDeleteEvent: (state) => {
      if (!state.activeEvent) return;

      state.events = state.events.filter( event => event._id !== state.activeEvent._id );
      state.activeEvent = null;
    },
    setLogoutCalendar: (state) => {
      state.isLoadingEvents = false;
      state.events = [];
      state.activeEvent = null;
    },
  },
});

export const { 
  setActiveEvent,
  setLoadingEvents,
  setLoadEvents,
  addNewEvent,
  setUpdateEvent,
  setDeleteEvent,
  setLogoutCalendar,
} = calendarSlice.actions;