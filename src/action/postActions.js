import {API} from "@/ajax/API"
import { appStore } from "@/store/appStore"
export const postAction=()=>{
    alert("post")
    API.fnSendGetReq("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{
    appStore.dispatch({
        type:"POST",
        payload:res.data
    })
    })
    .catch(()=>{

    })
    .finally(()=>{

    })
}