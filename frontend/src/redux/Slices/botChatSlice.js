// botChatSlice.js
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = [];

const botChatSlice = createSlice({
  name: "botChat",
  initialState,
  reducers: {
    addBotChat(state, action) {
      const newBotChat = action.payload;
      return [...state, newBotChat];
    },
    setBotChats(state, action) {
      const newBotChats = action.payload.filter(
        (newBotChat) => !state.some((existingBotChat) => existingBotChat.id === newBotChat.id)
      );

      return [...state, ...newBotChats];
    },
  },
});

export const { addBotChat, setBotChats } = botChatSlice.actions;

export default botChatSlice.reducer;
