// src/feautures/chatUsers/chatUsersSlice.js
import { createSlice } from "@reduxjs/toolkit";

const chatUsersSlice = createSlice({
  name: 'chatUsers',
  initialState: {
    chatUsers: [], // Usuarios registrados para chat
    currentChat: null, // Usuario con el que se está chateando actualmente
  },
  reducers: {
    setChatUsers: (state, action) => {
      state.chatUsers = action.payload;
    },
    setCurrentChat: (state, action) => {
      state.currentChat = action.payload;
    },
    updateLastMessage: (state, action) => {
      const { userId, message } = action.payload;
      const user = state.chatUsers.find(user => user.id === userId);
      if (user) {
        user.lastMessage = message.text;
      }
    },
    clearChatUsers: (state) => {
      state.chatUsers = [];
    },
    clearCurrentChat: (state) => {
      state.currentChat = null;
    },
  },
});

export const { setChatUsers, setCurrentChat, updateLastMessage, clearChatUsers, clearCurrentChat } = chatUsersSlice.actions;

export default chatUsersSlice.reducer;
