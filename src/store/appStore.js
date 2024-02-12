import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "@/reducer/postReducer";
import { userReducer } from "@/reducer/userReducer";
import logger from "redux-logger";


export const appStore=configureStore({
    reducer:{
        postReducer,
        userReducer
    },
    middleware:()=>{
        return [logger]
    }
})