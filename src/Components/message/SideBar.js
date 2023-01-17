import React, { useState, useEffect } from "react";
import Chat from "./Chat";
import "./Message.css";
import MessageForm from "./MessageForm";


function SideBar(){

    const [texts, setTexts] = useState([])
    const [handyman, setHandyman] = useState([])
    const [clicked, setClicked] = useState(false)
    
    const token = localStorage.getItem("handyman")
    const id = localStorage.getItem("profileId")

    useEffect(()=>{
        fetch(`handymen/${id}`,{ headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "Application/json",
          },})
        .then((r)=>r.json())
        .then((user)=> setHandyman(user) ) 
    },[token, id]) 
    console.log(handyman)
    useEffect(()=>{
        fetch("messages")
        .then((r)=>r.json())
        .then((data)=> setTexts(data) ) 
    },[])   
    console.log(texts)
    console.log(localStorage.getItem("profileId"))
    if(clicked === true){ return(<MessageForm handyName={handyman.name} clicked={clicked} setClicked={setClicked}/>)}
   

    const myText = texts.filter((txt)=>{
        return txt.handyman_id = id
    })
    const customers = [...new Set(texts.map(txt => txt.customer_id))]
    console.log(myText)
    console.log(customers)
     


    return(
            
            <div className="sidebar">
                <div className="sidebar-top">
                    <h1 className="sidebar-header">CHATS</h1>
                </div>
                <div onClick={()=>setClicked(!clicked)} className="chat-div">
                    
                     <Chat customers={customers} />
               

                </div>
            </div>
    )
}

export default SideBar