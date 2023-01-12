import React from "react";
import "../App.css";
import { BsBookmarkPlus } from "react-icons/bs";
import Card from "react-bootstrap/Card";
import { convertMsToTime } from "./MilitoTime";
import {bookmarkarray} from "./Bookmarks"

function CardComponent({
  count,
  idno,
  urlToImage,
  title,
  description,
  publishedAt,
  url,
  source,
}) {
  return (
    <div>
      <Card
        border="light"
        style={{
          width: "25rem",
          backgroundImage: "linear-gradient(to top, #dfe9f3 0%, white 100%)",
        }}
        id={"cards" + count}
        className="h-100"
      >
        <div className="cardbookmarksdiv">
          <BsBookmarkPlus
            className="cardbookmarks"
            id={"bookmark" + idno}
            // onClick={arrayadd}
          ></BsBookmarkPlus>
        </div>
        <Card.Img
          className="cardimg"
          variant="top"
          src={urlToImage}
          alt={"Photo Not Available"}
        />
        <Card.Body style={{ height: "17rem" }}>
          <Card.Title style={{ fontWeight: "bolder" }}>{title}</Card.Title>
          {/* <Card.Text style={{textAlign:"end"}}><i>{item.source.name}</i></Card.Text> */}
          <Card.Text className="modernWay">{description}</Card.Text>
          <Card.Text className="author">
            <span>
              ● {convertMsToTime(new Date(Date.now()) - new Date(publishedAt))}
            </span>
          </Card.Text>
          <div className="cardbtns">
            <a className="itemurlp" href={url}>
              <p>read more from {source}</p>
            </a>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardComponent;
