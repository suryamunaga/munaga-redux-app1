 import axios from "axios"

 export class API {
    static fnSendGetReq=(url)=>{
       return axios.get(url)
    }

    static fnSendPostReq=(url, data)=>{
        alert("post")
    }

    static fnSendPutReq=(url, data)=>{
        alert("put")
    }

    static fnSendDeleteReq=(url, data)=>{
        alert("delete")
    }
}