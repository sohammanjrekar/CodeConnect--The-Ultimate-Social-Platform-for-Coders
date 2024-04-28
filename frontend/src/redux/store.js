import { configureStore } from "@reduxjs/toolkit";
import authReducer from './Slices/authSlice';
import botChatReducer from "./Slices/botChatSlice";


const store=configureStore({
    reducer:{

    auth:authReducer,
    botChat: botChatReducer,
   },
   });
   export default store;