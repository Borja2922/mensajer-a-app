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
    clearChatUsers: (state) => {
      state.chatUsers = [];
    },
    clearCurrentChat: (state) => {
      state.currentChat = null;
    },
  },
});

export const { setChatUsers, setCurrentChat, clearChatUsers, clearCurrentChat } = chatUsersSlice.actions;

export default chatUsersSlice.reducer;
