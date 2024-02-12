"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { userAction } from "@/action/userActions";
import { postAction } from "@/action/postActions";

export default function App() {
  const fnGetUser=()=>{
    userAction()
  }
  const fnGetPost=()=>{
    postAction()
  }
  return <div>
    
    <button onClick={fnGetUser}>GET USERS</button>
    <button onClick={fnGetPost}>GET POST</button>
  </div>
}
