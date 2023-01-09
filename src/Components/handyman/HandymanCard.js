import React from "react";
import "./Handyman.css";


function HandymanCard(){

    return(
        <div>
            <div className="image">
                <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhhbmR5bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                <h1>John Doe</h1>
                <h2>Electrician</h2>
            </div>
            <div className="info">
                <span>Nairobi</span>
                <span>Ratings: 4.8</span>
                <button>more</button>
            </div>
            <div className="description">
                <h2>Description</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis leo nisi, cursus et aliquam et, porta a erat. Praesent sollicitudin bibendum erat, in efficitur sem volutpat vel. Nullam vel maximus eros. Vivamus pellentesque rhoncus dui at feugiat. Fusce ut dolor venenatis, iaculis lectus efficitur, pulvinar massa.</p>
            </div>
        </div>
    )
}

export default HandymanCard