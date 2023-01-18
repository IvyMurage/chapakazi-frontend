import React from "react";
import MessageForm from "./MessageForm";
import SideBar from "./SideBar";
import "./Message.css";


function MessageContainer() {
  return (
    <div className="message-container">
      <SideBar/>
    </div>
  );
}

export default MessageContainer;
