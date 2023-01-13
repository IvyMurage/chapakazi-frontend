import React from "react";
import Chat from "./Chat";
import "./Message.css";


function SideBar(){
    return(
            
            <div className="sidebar">
                <div className="sidebar-top">
                    <h1 className="sidebar-header">CHATS</h1>
                </div>
                <Chat/>
            </div>
    )
}

export default SideBar