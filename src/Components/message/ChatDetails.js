import React, { useState } from "react";
import MessageForm from "./MessageForm";



function ChatDetails({name, image, clicked, setClicked, id, myText}){


    // const message = myText.filter(text=> text.customer_id === id)
    // console.log(message)
    
    const mymessages = []    
    const [thisMessage, setThisMessage] = useState([])

    function handleclick(id){
        // const message = 
        setClicked(!clicked)
        const message = mymessages.concat(myText.filter((text)=> text.customer_id === id))
        setThisMessage(message)
        console.log(clicked)
        // console.log(message)
    }

    console.log(thisMessage)
    if (clicked === true) {
        return <MessageForm message={thisMessage} name={name} setClicked={setClicked} clicked ={clicked}/>}

    return(
        <div onClick={()=>handleclick(id) }>
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