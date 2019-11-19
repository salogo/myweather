import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Form from "./components/Form";
import Weather from "./components/Weather";
import Title from "./components/Title"




const API_KEY="7db6c338235158e4090a44d4e05a565c";

 class App extends React.Component {
   state={
    temperature: undefined,
    city:undefined,
    country:undefined,
    humidity:undefined,
    description :undefined,
    error:undefined
   }  

getWeather = async (e)=>{
  e.preventDefault();
const city = e.target.elements.city.value;
const country = e.target.elements.country.value;
const callipi =  await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`)
const data = await callipi.json();
console.log(data);

if (city && country ) { 
this.setState({
  temperature: data.main.temp,
  city: data.name,
  country: data.sys.country,
  humidity: data.main.humidity,
  description: data.weather[0].description,
  error: ""
})
} else {
this.setState({
  temperature: undefined,
  city:undefined,
  country:undefined,
  humidity:undefined,
  description :undefined,
  error: "please enter your location"
})
 
}
  
}

 render() {
  return (
    <div>
      <Title />
      <Form getWeather={this.getWeather} />
      <Weather 
      temperature={this.state.temperature}
      city={this.state.city}
      country={this.state.country}
      humidity={this.state.humidity}
      description={this.state.description}
      error={this.state.error}
      />
    </div>
  );
}
};

export default App;
