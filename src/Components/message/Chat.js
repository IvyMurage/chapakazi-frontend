import React from "react";
import "./Message.css"
// import MessageForm from "./MessageForm";
// import { Link } from "react-router-dom"


function Chat(){

    // console.log(handyman)
    return(
        <div>
            {/* <Link to="/"> */}
        <div className="chat-user">
            <img alt="" className="user-image"  />
            <div className="users">
                <span className="user-name">handyman</span>
            </div>
        </div>
       
        {/* </Link> */}
        
        </div>
        

    )
}

export default Chat