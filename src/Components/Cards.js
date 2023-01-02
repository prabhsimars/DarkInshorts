import React from "react";
import "../App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import API_KEY from "../request";
import { convertMsToTime } from "./MilitoTime";


// base url
const baseURL="https://newsapi.org/v2";


function Cards() {
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
          <Col
            className="cardscol"
            key={idno}
            >
            <Card border="light" style={{ width: "25rem",backgroundImage: "linear-gradient(to top, #dfe9f3 0%, white 100%)" }} id={"cards"+count} className="h-100">
              <Card.Img className="cardimg" variant="top" src={item.urlToImage} alt={"Photo Not Available"}/>
              <Card.Body style={{height:"20.5rem"}}>
                <Card.Title style={{ fontWeight: "bolder" }}>
                  {item.title}
                </Card.Title>
                <Card.Text style={{textAlign:"end"}}><i>{item.source.name}</i></Card.Text>
                <Card.Text className="modernWay">{item.description}</Card.Text>
                <Card.Text className="author">
                  <span>
                    ● {convertMsToTime(new Date(Date.now())-new Date(item.publishedAt))}
                  </span>
                </Card.Text>
                <div className="cardbtns">
                  <a href={item.url}>
                    <Button id={idno} className="cardbtn" variant="dark">
                      Read More
                    </Button>
                  </a>
                  
                </div>
              </Card.Body>
            </Card>
          </Col>
        );
      });
      return items;
    }
  };

  return (
  <Container className="cardcontainer d-flex">
    
      <Row xs={1} md={3} style={{display:"flex"}}>
        {getColumnsForRow()}
      </Row>
    </Container>
  );
}

export default Cards;
