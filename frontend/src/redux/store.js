import { configureStore } from "@reduxjs/toolkit";
import campaignSlice from "./Slices/campaignslice";
import authReducer from './Slices/authSlice';




const store=configureStore({
    reducer:{
   campaign:campaignSlice,
    auth:authReducer,
   },
   });
   export default store;