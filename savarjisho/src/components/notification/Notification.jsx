import React from "react";
import "./notification.css"; 

function Notification(props){
    return(
        <div className = {`notification ${props.class}`}>

   <div className="notification-img">
    <img src={props.image} alt=""/>
    </div> 

    <div className="notification-text">
        <h1>{props.text}</h1>
        <p>Order Placed Successfully. You can check order <br/> delivery status.</p>
        
        </div>  
      
      
        </div>
    );
}

export default Notification;