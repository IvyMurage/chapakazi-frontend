import React from "react";

function Text({own}){
    return(
        <div className="text-info">
            <div className={own? "text owner": "text"}>
                <p className={own? "text-content":"received-content"}>Hello John Doe. I'm looking for a plumber</p>
            </div>
        </div>
    )
}

export default Text