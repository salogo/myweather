import React from "react";


const Weather = props=>(

    <div>    
            {props.city && props.country &&  <p> Location : {props.city} , {props.country}</p> }
            {props.temperature && <p>temperature : {props.temperature}</p> }
            {props.humidity &&  <p> humidity: {props.humidity}</p> }
            {props.description &&   <p> descriptions : {props.description}</p>}
            {props.error && <p>{props.error} </p>  }      
     </div>
);

  
export default Weather;