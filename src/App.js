import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios"
import MediaContainer from "./components/media/MediaContainer";
import ContentContainer from "./components/content/ContentContainer";

// Components


function App() {
  const [nasaData, setNasaData] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=" + apiKey)
      .then(res => {
        console.log("Response:", res);
        setNasaData(res.data);
      })
      .catch(err => console.log("Error:", err))
  }, []);
  
  return (
    <div className="App">
      <div>
        <MediaContainer mediaData={nasaData}/>
      </div>
      <div>
        <ContentContainer nasaData={nasaData}/>
      </div>
    </div>
  );
}

export default App;
