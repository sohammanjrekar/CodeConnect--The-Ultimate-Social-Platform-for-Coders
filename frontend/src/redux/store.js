import { configureStore } from "@reduxjs/toolkit";
import campaignSlice from "./Slices/campaignslice";
import authReducer from './Slices/authSlice';
import botChatReducer from "./Slices/botChatSlice";


const store=configureStore({
    reducer:{
   campaign:campaignSlice,
    auth:authReducer,
    botChat: botChatReducer,
   },
   });
   export default store;