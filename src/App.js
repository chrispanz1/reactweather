import React from "react";
import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [temperature, setTemperature] = useState(null);
  const [windspeed, setWindspeed] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [timezone, setTimezone] = useState(null);
  axios
    .get(
      "https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current_weather=true"
    )
    .then((response) => {
      console.log(response.data); // Logs the parsed JSON data
      setTemperature(response.data.current_weather.temperature);
      setWindspeed(response.data.current_weather.windspeed);
      setLongitude(response.data.longitude);
      setLatitude(response.data.latitude);
      setTimezone(response.data.timezone);
    });

  return (
    <div className="myDiv">
      <p>this is my basic weather api</p>
      <h1>Here is the current look for Tokyo!</h1>

      <h2>here is the longitude {longitude}</h2>
      <h2>here is the latitude{latitude}</h2>
      <p>here is the timezone{timezone}</p>

      <p>Temperature:{temperature} celsius </p>
      <p>Windspeed{windspeed}</p>
    </div>
  );
}

export default App;
