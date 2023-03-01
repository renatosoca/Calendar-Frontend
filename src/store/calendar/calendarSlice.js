import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvent = {
  title: 'Mi evento en el calendario',
  notes: 'Some notes',
  start: new Date(),
  end: addHours( new Date(), 8 ),
  user: {
    _id: '123',
    name: 'Jhon Doe'
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
    getEvents: (state, { payload }) => {
      state.events = payload;
    }
  },
});

export const { addCalendar } = calendarSlice.actions;