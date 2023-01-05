import React from 'react'
import "../App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import API_KEY from "../request";
import CardComponent from "./CardComponent";

// base url
const baseURL = "https://newsapi.org/v2";

var newschannel = 'livemint.com'



function SpecificChannels() {

    // news state
  const [channelnews, channelsetnews] = useState([]);

  useEffect(() => {
    async function GetNews() {
      const response = await axios.get(
        `${baseURL}/everything?domains=${newschannel}&apiKey=${API_KEY}`
      );
      channelsetnews(response);
    }
    GetNews();
  }, []);


  return (
    <div>SpecificChannels</div>
  )
}

export default SpecificChannels