import React, { useState, useEffect } from "react";
import axios from "axios"
import MediaContainer from "./components/media/MediaContainer";
import ContentContainer from "./components/content/ContentContainer";
import DateContainer from "./components/date/DateContainer";
import { AppDiv } from "./styles/GlobalStyle.styled";

function App() {
  const [nasaData, setNasaData] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;
  const [date, setDate] = useState('');

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=" + apiKey + "&date=" + date)
      .then(res => {
        console.log("Response:", res);
        setNasaData(res.data);
      })
      .catch(err => console.log("Error:", err))
  }, [date]);
  
  return (
    <AppDiv>
      <DateContainer setDate={setDate}/>
      <MediaContainer mediaData={nasaData}/>
      <ContentContainer nasaData={nasaData}/>
    </AppDiv>
  );
}

export default App;
