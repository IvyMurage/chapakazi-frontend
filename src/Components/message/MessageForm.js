import React, { useState } from "react";
import "./Message.css";
import MessageInput from "./MessageInput";
import Messages from "./Messages";

function MessageForm() {
    const [message, setMessage] = useState("")
  return (
    
    <div className="chat">
      <div className="chatbar">
        <span className="chat-username">Christiano Ronaldo</span>
      </div>
        <div className="text-message">
          <div>
          <Messages />
          </div>
        </div>
        <MessageInput/>
    </div>
  );
}

export default MessageForm;
