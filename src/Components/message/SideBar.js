import React, { useState, useEffect } from "react";
import Chat from "./Chat";
import "./Message.css";
import MessageForm from "./MessageForm";


function SideBar(){

    const [friends, setFriends] = useState([])
    const [clicked, setClicked] = useState(false)
    useEffect(()=>{
        fetch("http://localhost:3000/allFriends")
        .then((r)=>r.json())
        .then((data)=> setFriends(data) ) 
    },[])   
    console.log(friends)
    
    if(clicked === true) return(<MessageForm />)





    return(
            
            <div className="sidebar">
                <div className="sidebar-top">
                    <h1 className="sidebar-header">CHATS</h1>
                </div>
                <div onClick={()=>setClicked(!clicked)} className="chat-div">
                {friends.map((friend)=>(
                <Chat name={friend.name} image={friend.picture}/>

                ))}
                </div>
            </div>
    )
}

export default SideBar