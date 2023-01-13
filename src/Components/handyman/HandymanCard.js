import React from "react";
import "./Handyman.css";


function HandymanCard(){

    return(
        <div className="container">

        <div className="handymancard">
            <div className="image">
                <img  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhhbmR5bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="profile" />
                <h1 className="name">John Doe</h1>
                <h2 className="occupation">Electrician</h2>
            </div>
            <div className="info">
                <div className="info-top">
                    <span className="location">Nairobi</span>
                    <span className="rating">Ratings: 4.8</span>
                    <span className="button-span">
                     more
                    </span>
                </div>
                <div className="info-bottom">
                    <h2 className="description-heading">Description</h2>
                    <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis leo nisi, cursus et aliquam et, porta a erat. Praesent sollicitudin bibendum erat, in efficitur sem volutpat vel. Nullam vel maximus eros. Vivamus pellentesque rhoncus dui at feugiat. Fusce ut dolor venenatis, iaculis lectus efficitur, pulvinar massa.</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default HandymanCard
