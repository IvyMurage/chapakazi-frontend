import React from "react";
import "./Message.css"
import MessageForm from "./MessageForm";
// import { Link } from "react-router-dom"


function Chat({name, image, clicked, chat}){

    
    return(
        <div>
            {/* <Link to="/"> */}
        <div className="chat-user">
            <img alt="" className="user-image" src={image} />
            <div className="users">
                <span className="user-name">{name}</span>
            </div>
        </div>
       
        {/* </Link> */}
        
        </div>
        

    )
}

export default Chat