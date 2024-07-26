import { configureStore } from "@reduxjs/toolkit";
import serviceDetailsReducer from "./Reducers/serviceDetails";

const store=configureStore({
    reducer:{
        serviceDetailsReducer,
    }
})

export default store;