import { createSlice } from '@reduxjs/toolkit';

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    isLoadingEvents: false,
    isLoading: '',
    events: [],
    activeEvent: null,
    msgEvent: '',
    typeMsg: '',
  },
  reducers: {
    onActiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
    },
    onLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    onLoadingEvents: (state) => {
      state.isLoadingEvents = true;
      state.isLoading = '';
    },
    onLoadEvents: (state, { payload }) => {
      state.isLoading = '';
      state.isLoadingEvents = false;
      state.events = payload;
    },
    onAddNewEvent: (state, { payload }) => {
      state.isLoading = '';
      state.events.push( payload );
      state.activeEvent = null;
    },
    onUpdateEvent: (state, { payload }) => {
      state.isLoading = '';
      state.events = state.events.map( event => {
        if (event._id === payload._id) return payload;

        return event;
      });
      state.activeEvent = null;
    },
    onDeleteEvent: (state) => {
      state.isLoading = '';
      if (!state.activeEvent) return;

      state.events = state.events.filter( event => event._id !== state.activeEvent._id );
      state.activeEvent = null;
    },
    onLogoutCalendar: (state) => {
      state.isLoadingEvents = false;
      state.events = [];
      state.activeEvent = null;
    },
    onChangeMsgEvent: (state, { payload }) => {
      state.msgEvent = payload.msgEvent;
      state.typeMsg = payload.ok ? 'success' : 'error';
    }
  },
});

export const { 
  onActiveEvent,
  onLoading,
  onLoadingEvents,
  onLoadEvents,
  onAddNewEvent,
  onUpdateEvent,
  onDeleteEvent,
  onLogoutCalendar,
  onChangeMsgEvent,
} = calendarSlice.actions;