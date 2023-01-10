import React from "react";
import "./Message.css"

function Chat(){
    return(
        <div className="chat-user">
            <img className="user-image" src="https://img.a.transfermarkt.technology/portrait/big/8198-1668503200.jpg?lm=1" />
            <div className="users">
                <span>Christiano Ronaldo</span>
            </div>
        </div>
    )
}

export default Chat