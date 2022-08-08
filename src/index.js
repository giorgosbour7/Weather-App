import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const api= {
key: "06fe2242d1cc7f953b40161e659a13c4",
base: "https://api.openweathermap.org/data/2.5/"
}

function Search1(){
	
const [query,setQuery]=useState("");
const [weather,setWeather]=useState({});

const search= evt => {
if (evt.key=== "Enter"){
	
	fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
	.then (res => res.json())
	.then (result => setWeather(result));
	
	
	
	
  }
 }
	console.log(weather);

//Get The Full Date//
const dbuilder = (d) => {
let months = [ "January","February","March","April","May","June","July","August","September","October","November","December"];
let days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let date=d.getDate();
console.log(date);
let day =days[d.getDay()];
let month=months[d.getMonth()];
let year=d.getFullYear();

return `${day} ${date} ${month} ${year}`
}


	return (
		 <div className={(typeof weather.main !="undefined") ? ((weather.main.temp>16) ? "hot" : "cold") : "noth"}>
		 
		     <div className="enterv">
			 <input className="search"
			 type="search" 
			 size="60" 
			 type="text"
			 placeholder="Enter a City Name to see the weather.."
			 onChange={e => setQuery(e.target.value)}
			 value={query}
			 onKeyPress={search}
			 ></input>
			 
			 
			 
			 </div>
			 
			 {(typeof weather.main != "undefined") ?(
					 <div>
					 <div className="date"> {dbuilder(new Date())} </div>
					 <div className="cityname"> {weather.name},{weather.sys.country}</div>
					 <div className="temp"> {Math.round(weather.main.temp)}°C</div>
					 <div className="desc">  {weather.weather[0].main} </div>
					 </div> 
			 ) : ("")}
			 
			 
		  </div>
)	
}

const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(<Search1/>)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
