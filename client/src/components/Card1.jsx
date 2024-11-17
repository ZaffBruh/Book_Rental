import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import tw3 from "../pictures/midnight.jpeg";
import gtav from "../pictures/crowdads.jpeg";
import mw2 from "../pictures/educated.jpeg";
import fifa23 from "../pictures/silent.jpeg";
import hogleg from "../pictures/becoming.jpeg";
import mine from "../pictures/alchemist.jpeg";

const item = [
  {
    id: 1,
    caption: "The Midnight Library",
    des: "Nora Seed explores a magical library between life and death, where each book offers a chance to live a different life. She seeks the path that will truly bring her happiness.",
    img: tw3,
  },
  {
    id: 2,
    caption: "Where the Crawdads Sing",
    des: " In the swamps of North Carolina, reclusive Kya Clark is suspected of murder. Her story unfolds with mystery, romance, and a deep connection to nature.",
    img: gtav,
  },
  {
    id: 3,
    caption: "Educated",
    des: "Tara Westover’s memoir details her journey from growing up in a strict, survivalist family with no formal education to earning a PhD from Cambridge University.",
    img: mw2,
  },
  {
    id: 4,
    caption: "The Silent Patient",
    des: "Artist Alicia Berenson is convicted of murdering her husband but remains silent. Therapist Theo Faber seeks to uncover the truth behind her silence in this gripping psychological thriller.",
    img: fifa23,
  },
  {
    id: 5,
    caption: "Becoming",
    des: "Michelle Obama’s memoir chronicles her life from her Chicago upbringing to her time as First Lady, exploring her personal growth and experiences.",
    img: hogleg,
  },
  {
    id: 6,
    caption: "The Alchemist",
    des: "Santiago, a young shepherd, embarks on a journey to find treasure in Egypt, discovering profound truths about following dreams and listening to one's heart.",
    img: mine,
  },
];

const Card1 = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {item.map((value) => {
          return (
            <div style={{ padding: "30px" }}>
              <Card
                style={{
                  width: "18rem",
                  boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)",
                }}
              >
                <Card.Img variant="top" src={value.img} />
                <Card.Body style={{ height: "250px" }}>
                  <Card.Title>{value.caption}</Card.Title>
                  <Card.Text>{value.des}</Card.Text>
                  <Button variant="outline-success">See more</Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card1;
