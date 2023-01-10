import React, { useState } from "react";
import "./Message.css";

function MessageForm() {
    const [message, setMessage] = useState("")
  return (
    <div className="chat">
      {/* <div className="conversation-veiw">

      </div>
      <div className="conversation">
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
          <li>Duis leo nisi, cursus et aliquam et, porta a erat. Praesent sollicitudin bibendum erat, in efficitur sem volutpat vel.</li>
          <li>Nullam vel maximus eros. Vivamus pellentesque rhoncus dui at feugiat. Fusce ut dolor venenatis, iaculis lectus efficitur, pulvinar massa</li>
          <li>Donec quis interdum ex, id posuere nibh. Aenean bibendum vitae ipsum sit amet congue.</li>
          <li>Pellentesque in urna eu tortor hendrerit blandit a in diam.</li>
        </ul>
      </div>
      <div className="message-input">
        <form id="message-form">
          <input type="text" placeholder="type message" />
          <button>send</button>
        </form>
      </div> */}
      <p>chat</p>
    </div>
  );
}

export default MessageForm;
