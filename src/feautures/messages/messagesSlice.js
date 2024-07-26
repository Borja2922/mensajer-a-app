import { createSlice } from '@reduxjs/toolkit';

// Crea el slice de Redux para los mensajes
const messagesSlice = createSlice({
  name: 'messages',
  initialState: [],
  reducers: {
    addMessage: (state, action) => {
      const { userId, message } = action.payload;
      if (!state[userId]) {
        state[userId] = [];
      }
      // Crear una copia del estado actual y agregar el nuevo mensaje
      state[userId] = [...state[userId], message];
    },
    clearMessages: () => {
      return [];
    },
  },
});

export const { addMessage, clearMessages } = messagesSlice.actions;

export default messagesSlice.reducer;
