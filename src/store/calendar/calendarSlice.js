import { createSlice } from '@reduxjs/toolkit';

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    isLoadingEvents: false,
    events: [],
    activeEvent: null,
  },
  reducers: {
    onActiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
    },
    onLoadingEvents: (state) => {
      state.isLoadingEvents = true;
    },
    onLoadEvents: (state, { payload }) => {
      state.isLoadingEvents = false;
      state.events = payload;
    },
    onAddNewEvent: (state, { payload }) => {
      state.events.push( payload );
      state.activeEvent = null;
    },
    onUpdateEvent: (state, { payload }) => {
      state.events = state.events.map( event => {
        if (event._id === payload._id) {
          return payload;
        }

        return event;
      });
      state.activeEvent = null;
    },
    onDeleteEvent: (state) => {
      if (!state.activeEvent) return;

      state.events = state.events.filter( event => event._id !== state.activeEvent._id );
      state.activeEvent = null;
    },
    onLogoutCalendar: (state) => {
      state.isLoadingEvents = false;
      state.events = [];
      state.activeEvent = null;
    },
  },
});

export const { 
  onActiveEvent,
  onLoadingEvents,
  onLoadEvents,
  onAddNewEvent,
  onUpdateEvent,
  onDeleteEvent,
  onLogoutCalendar,
} = calendarSlice.actions;