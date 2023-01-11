import React from "react";

function MessageInput(){
    return(
        <div className="input">
            <div className="inputdiv">
                <form>
                    <input placeholder="Write a message" className="message-input"/>
                </form>
            </div>
        </div>
    )
}

export default MessageInput