import { userInit } from "@/uti.js/init";

export const userReducer=(state = userInit,action)=>{
switch(action.type){
    case "USER":
        return{
            ...state,
            user:action.payload
        }
         default :
            return state
}
}