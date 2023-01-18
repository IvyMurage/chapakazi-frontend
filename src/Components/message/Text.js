import React from "react";

function Text({own}){
    return(
        <div className="text-info">
            <div className={own? "text owner": "text"}>
                <p className={own? "text-content":"received-content"}>hello john doe</p>
            </div>
        </div>
    )
}

export default Text