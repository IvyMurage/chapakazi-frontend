import React from "react";
import "./Message.css";
import MessageInput from "./MessageInput";
import Messages from "./Messages";

function MessageForm({clicked, setClicked, message, name }) {
    // const [message, setMessage] = useState("")
    // const message = myText.filter(text=> text.customer_id === id)
    console.log(message)

    

  return (
    
    <div className="chat">
      <div className="chatbar">
        <button onClick={()=>setClicked(!clicked)} className="back-button">back</button>
        <span className="chat-username">{name}</span>
      </div>
        <div className="text-message">
          <div>
          
          <Messages message={message} />

          </div>
        </div>
        <MessageInput/>
    </div>
  );
}

export default MessageForm;
