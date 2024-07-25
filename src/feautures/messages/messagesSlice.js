import { createSlice } from '@reduxjs/toolkit';

// Crea el slice de Redux para los mensajes
const messagesSlice = createSlice({
  name: 'messages',
  initialState: [],
  reducers: {
    addMessage: (state, action) => {
      state.push(action.payload);
    },
    clearMessages: () => {
      return [];
    },
  },
});

export const { addMessage, clearMessages } = messagesSlice.actions;

export default messagesSlice.reducer;
