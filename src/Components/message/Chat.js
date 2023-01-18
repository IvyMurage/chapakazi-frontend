import React, { useEffect, useState } from "react";
import ChatDetails from "./ChatDetails";
import "./Message.css"
import MessageForm from "./MessageForm";
// import { Link } from "react-router-dom"


function Chat({customers, clicked, setClicked, myText}){

    console.log(customers)
    const [customer, setCustomer] = useState([])
    const token = localStorage.getItem("handyman")


    useEffect(()=>{
            fetch(`customers`,{ headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "Application/json",
              },})
            .then((r)=>r.json())
            .then((user)=> setCustomer(user) )
         
    },[token])

    console.log(customer)

    const data =customers.map((cust)=>{
        return customer.find(obj=> obj.id === cust)
    })
        
    
    console.log(myText)




    return(
        <div>
       {data.map((dt)=>(
        <ChatDetails key={dt.id} id={dt.id} myText={myText} name={dt.username} image={dt.image} clicked={clicked} setClicked={setClicked} />
       ))}
       
        
        </div>
        

    )
}

export default Chat