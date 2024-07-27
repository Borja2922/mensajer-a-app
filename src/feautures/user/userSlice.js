import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        setUser: (state, action) => {
            return action.payload;
        },
        setChatUsers: (state, action) => {
            state.chatUsers = action.payload;
        },
        setDescription: (state, action) => {
            state.description = action.payload;
        },
        setProfileImage: (state, action) => {
            state.profileImage = action.payload;
        },
        clearUser: () => {
            return null;
        },
    },
})

export const { setUser, setDescription, setProfileImage, setChatUsers, clearUser } = userSlice.actions;

export default userSlice.reducer;