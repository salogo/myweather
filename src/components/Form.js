import React from "react";


const Form = props=> (
    <form onSubmit={props.getWeather} >
    <input className="green" type="text" name="city" placeholder="City..." />
    <input className="green" type="text" name="country" placeholder="Country..." />
    <button className="btn btn-outline-success" > Click</button>
    </form>
);
  
export default Form;