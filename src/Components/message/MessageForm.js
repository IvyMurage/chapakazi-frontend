import React from "react";
import "./Message.css";
import MessageInput from "./MessageInput";
import Messages from "./Messages";

function MessageForm({clicked, setClicked, handyName }) {
    // const [message, setMessage] = useState("")
    
  return (
    
    <div className="chat">
      <div className="chatbar">
        <button onClick={()=>setClicked(!clicked)} className="back-button">back</button>
        <span className="chat-username">{handyName}</span>
      </div>
        <div className="text-message">
          <div>
          <Messages  />
          </div>
        </div>
        <MessageInput/>
    </div>
  );
}

export default MessageForm;
