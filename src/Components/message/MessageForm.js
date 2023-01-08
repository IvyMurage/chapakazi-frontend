import React, { useState } from "react";

function MessageForm() {
    const [message, setMessage] = useState("")
  return (
    <div className="message-form">
      <form id="message-form">
        <input type="text" placeholder="type message" />
      </form>
    </div>
  );
}

export default MessageForm;
