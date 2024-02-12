import { API } from "@/ajax/API"
import { appStore } from "@/store/appStore"
export const userAction= async()=>{
    alert("user")
   try{
  const res= await API.fnSendGetReq("https://jsonplaceholder.typicode.com/users")
appStore.dispatch({
        type:"USER",
        payload:res.data
})
   }catch(e){

   }finally{
    
   }
}