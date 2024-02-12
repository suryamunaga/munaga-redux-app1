import { postInit } from "@/uti.js/init";

export const postReducer=(state = postInit,action)=>{
switch(action.type){
    case "POST":
        return{
            ...state,
            post:action.payload
        }
        default:
            return state
        
}
}