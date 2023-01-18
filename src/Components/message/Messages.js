import React from "react";
import Text from "./Text";

function Messages({message, setClicked, clicked}){
    return(
        
        <div className="text-veiw">
            {message.map((msg)=>(
                <Text message={msg.message} />

             ))}                 
        </div>
    )
}

export default Messages