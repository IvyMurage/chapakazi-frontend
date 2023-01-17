import React from "react";


function ChatDetails({name, image}){
    return(
        <div>
             <div className="chat-user">
            <img alt="" className="user-image" src={image}  />
            <div className="users">
                <span className="user-name">{name}</span>
            </div>
        </div>
        </div>
    )
}

export default ChatDetails