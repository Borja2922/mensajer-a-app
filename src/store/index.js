import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from '../feautures/messages/messagesSlice';
import userReducer from '../feautures/user/userSlice';
import chatUsersReducer from '../feautures/chatUsers/chatUsersSlice';

// Creamos el store de Redux
const store = configureStore({
  reducer: {
    user: userReducer, // El reducer del usuario
    messages: messagesReducer, // El reducer de los mensajes
    chatUsers: chatUsersReducer
  },
});

export default store;
