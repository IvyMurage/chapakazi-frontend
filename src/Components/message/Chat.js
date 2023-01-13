import React from "react";
import "./Message.css"

function Chat(){
    return(
        <div>
        <div className="chat-user">
            <img className="user-image" src="https://icdn.caughtoffside.com/wp-content/uploads/2019/10/ronaldo-insta.jpg" />
            <div className="users">
                <span className="user-name">Christiano Ronaldo</span>
                <p className="text-preview">Hello John Doe. I'm looking for a plumber</p>
            </div>
        </div>
        <div className="chat-user">
            <img className="user-image" src="https://img.a.transfermarkt.technology/portrait/big/258923-1565603308.png?lm=1" />
            <div className="users">
                <span className="user-name">Marcus Rashford</span>
                <p className="text-preview">Hello John Doe. I'm looking for a plumber</p>
            </div>
        </div>
        <div className="chat-user">
            <img className="user-image" src="https://img.a.transfermarkt.technology/portrait/big/28003-1671435885.jpg?lm=1" />
            <div className="users">
                <span className="user-name">Lionel Messi</span>
                <p className="text-preview">Hello John Doe. I'm looking for a plumber</p>
            </div>
        </div>
        <div className="chat-user">
            <img className="user-image" src="https://img.a.transfermarkt.technology/portrait/big/240306-1636537174.jpg?lm=1" />
            <div className="users">
                <span className="user-name">Bruno Fernandes</span>
                <p className="text-preview">Hello John Doe. I'm looking for a plumber</p>
            </div>
        </div>
        
        </div>
        

    )
}

export default Chat