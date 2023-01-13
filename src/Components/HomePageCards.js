import React from "react";
import "../App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import API_KEY from "../request";
import CardComponent from "./CardComponent";

// base url
const baseURL = "https://newsapi.org/v2";

function HomePageCards() {
  // news state
  const [news, setnews] = useState([]);

  useEffect(() => {
    async function GetNews() {
      const response = await axios.get(
        `${baseURL}/top-headlines?country=in&pageSize=100&apiKey=${API_KEY}`
      );
      setnews(response);
    }
    GetNews();
  }, []);

  const getColumnsForRow = () => {
    if (news.length !== 0) {
      var count = 0;
      let items = news.data.articles.map((item, idno) => {
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

export default HomePageCards;
