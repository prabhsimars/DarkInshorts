import React from "react";
import "../App.css";
import { Container, Row, Col, Button, Card, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import Shit from "../Components/shit";

// const API_KEY = "2daca2e4d20f4a079db5a74acb01527d";

function Cards() {
  // news state
  const [news, setnews] = useState([]);
  // modal state

  
  useEffect(() => {
    async function GetNews() {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?domains=ndtv.com&apiKey=2daca2e4d20f4a079db5a74acb01527d"
      );
      setnews(response);
    }
    GetNews();
  }, []);


  //button click handling
  // function readmorebutton(idno) {
  //   console.log(idno);
  //   console.log(news.data.articles[idno].content);
  // }



  // if (news.length !== 0) {
  //   console.log(news.data.articles);
  // }

  if (news.length !== 0) {
    return (
      <div>
        {news.data.articles.map((item, idno) => {
          return (
            <div id="cardscontainer">
              <Container fluid="md" id={idno}>
                <Row>
                  <Col
                    sm
                    md={{ span: 8, offset: 2 }}
                    className="cardscontainercol"
                  >
                    {/* another grid inside grid for images */}
                    <Row id="gridrow1">
                      <Col sm className="cardimgs">
                        <Card.Img variant="top" src={item.urlToImage} />
                      </Col>

                      <Col sm>
                        <Card id="gridgridcol2">
                          <Card.Body>
                            <Card.Title className="cardtitle">
                              {item.title}
                            </Card.Title>
                            <Card.Text>{item.description}</Card.Text>
                            <Card.Text className="author">
                              <span>
                                {" "}
                                Published At:-{" "}
                                {new Date(item.publishedAt).toDateString()}
                              </span>
                            </Card.Text>
                            <div className="cardbtns">
                              <a href={item.url}>
                              <Button
                                id={idno}
                                className="cardbtn"
                                variant="dark"
                              >
                                Read More
                                
                              </Button>
                              </a>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                    {/* insidegrid end */}
                  </Col>
                </Row>
              </Container>

              {/* <Shit
                show={show}
                hidemodal={handleClose}
                title={item.title}
                clickformodal={handleClose}
              ></Shit> */}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Cards;
