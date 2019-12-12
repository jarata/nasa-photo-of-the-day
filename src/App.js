import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios"

// Components
import ContentContainer from "./components/content/ContentContainer";
import Image from "./components/image/Image";

function App() {
  const [nasaPics, setNasaPics] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=" + apiKey)
      .then(res => {
        console.log("Response:", res);
        setNasaPics([res.data.url, res.data.hdurl])
      })
      .catch(err => console.log("Error:", err))
  }, []);
  
  return (
    <div className="App">
      App
      <Image nasaPics={nasaPics}/>
      <ContentContainer/>
    </div>
  );
}

export default App;
