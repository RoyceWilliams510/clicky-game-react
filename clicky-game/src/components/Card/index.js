import React from "react";


function Card(prop) {
    return (
      <div className = "col-md-3 col-sm-6">
        <img src= {prop.imageUrl} className="img-fluid" 
        onClick = {prop.click} 
        data-value = {prop.name} 
        alt ="character"></img>        
      </div>
    );
  }
  
  export default Card;
  