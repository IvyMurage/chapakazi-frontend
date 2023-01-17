import React, { useState, useEffect } from "react";
import Chat from "./Chat";
import "./Message.css";
import MessageForm from "./MessageForm";


function SideBar(){

    // const [texts, setTexts] = useState([])
    const [customer, setCustomer] = useState([])
    const [clicked, setClicked] = useState(false)
    
    const token = localStorage.getItem("handyman")
    const id = localStorage.getItem("profileId")

    useEffect(()=>{
        fetch(`customers/${id}`,{ headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "Application/json",
          },})
        .then((r)=>r.json())
        .then((user)=> setCustomer(user) ) 
    },[token, id]) 
    console.log(customer)
    // useEffect(()=>{
    //     fetch("messages")
    //     .then((r)=>r.json())
    //     .then((data)=> setTexts(data) ) 
    // },[])   
    // console.log(texts)
    console.log(localStorage.getItem("profileId"))
    if(clicked === true){ return(<MessageForm clicked={clicked} setClicked={setClicked}/>)}
   




    return(
            
            <div className="sidebar">
                <div className="sidebar-top">
                    <h1 className="sidebar-header">CHATS</h1>
                </div>
                <div onClick={()=>setClicked(!clicked)} className="chat-div">
                     <Chat />
               

                </div>
            </div>
    )
}

export default SideBar