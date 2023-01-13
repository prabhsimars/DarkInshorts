import React from 'react'
import "../App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import API_KEY from "../request";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardComponent from "./CardComponent";

// base url
const baseURL = "https://newsapi.org/v2";


function SpecificChannels({currentchannel}) {

    // news state
  const [channelnews, channelsetnews] = useState([]);

  useEffect(() => {
    async function GetNews() {
      const response = await axios.get(
        `${baseURL}/everything?domains=${currentchannel}&apiKey=${API_KEY}`
      );
      channelsetnews(response);
    }
    GetNews();
  }, [currentchannel]);


  console.log(channelnews);

  
  const getColumnsForRow = () => {
    if (channelnews.length !== 0) {
      var count = 0;
      let items = channelnews.data.articles.map((item, idno) => {
        count++;

        return (
          <Col className="cardscol" key={idno}>
            <CardComponent
              count={count}
              idno={idno}
              urlToImage={item.urlToImage}
              title={item.title}
              description={item.description}
              publishedAt={item.publishedAt}
              url={item.url}
              source={item.source.name}
            />
          </Col>
        );
      });
      return items;
    }
  };

  return (
    <Container className="cardcontainer d-flex">
      <Row xs={1} md={3} style={{ display: "flex" }}>
        {getColumnsForRow()}
      </Row>
    </Container>
  );
}

export default SpecificChannels