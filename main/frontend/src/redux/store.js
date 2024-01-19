import { configureStore } from "@reduxjs/toolkit";
import campaignSlice from "./Slices/campaignslice";
const store=configureStore({
    reducer:{
   campaign:campaignSlice,
   },
   });
   export default store;