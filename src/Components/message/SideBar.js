import React, { useState, useEffect } from "react";
import Chat from "./Chat";
import "./Message.css";
import MessageForm from "./MessageForm";


function SideBar(){

    const [friends, setFriends] = useState([])
    const [chat, setChat] = useState([])
    const [clicked, setClicked] = useState(false)
    // useEffect(()=>{
    //     fetch("http://localhost:3000/friends")
    //     .then((r)=>r.json())
    //     .then((data)=> setFriends(data) ) 
    // },[])   
    // console.log(friends)

    if(clicked === true){ return(<MessageForm clicked={clicked} setClicked={setClicked}/>)}




    return(
            
            <div className="sidebar">
                <div className="sidebar-top">
                    <h1 className="sidebar-header">CHATS</h1>
                </div>
                <div onClick={()=>setClicked(!clicked)} className="chat-div">
                {friends.map((friend)=>(
                <Chat name={friend.name} image={friend.picture} chat={friends.chatlog} clicked={clicked}/>

                ))}
                </div>
            </div>
    )
}

export default SideBar