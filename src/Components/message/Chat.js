import React from "react";
import "./Message.css"

function Chat(){
    return(
        <div className="chat-user">
            <img className="user-image" src="https://icdn.caughtoffside.com/wp-content/uploads/2019/10/ronaldo-insta.jpg" />
            <div className="users">
                <span className="user-name">Christiano Ronaldo</span>
                <p className="text-preview">Hello John Doe. I'm looking for a plumber</p>
            </div>
        </div>
    )
}

export default Chat