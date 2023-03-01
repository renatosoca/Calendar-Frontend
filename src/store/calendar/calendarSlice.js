import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvent = {
  _id: new Date().getTime(),
  title: 'evento de prueba',
  notes: 'Some notes',
  start: new Date(),
  end: addHours( new Date(), 8 ),
  user: {
    _id: '123',
    name: 'Renato'
  }
}

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    events: [
      tempEvent
    ],
    activeEvent: null,
  },
  reducers: {
    setActiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
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
      if (!state.activeEvent) {
        return;
      }
      state.events = state.events.filter( event => event._id !== state.activeEvent._id );
      state.activeEvent = null;
    },
  },
});

export const { 
  setActiveEvent,
  addNewEvent,
  setUpdateEvent,
  setDeleteEvent,
} = calendarSlice.actions;