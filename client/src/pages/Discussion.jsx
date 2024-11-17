import { React, useState } from "react";
import Navbar1 from "../components/Navbar1";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal1 from "../components/Modal1";
import { Navbar, Container } from "react-bootstrap";
import { Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { faComment, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const Discussion = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <Navbar1 />

      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand>Know The Insights</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
              <InputGroup>
                <Form.Control
                  type="search"
                  placeholder="Search your here"
                  className="me-2"
                  aria-label="Search"
                  style={{ boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)" }}
                />
              </InputGroup>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Form style={{ fontFamily: "Poppins", padding: "100px" }}>
        <div className="mt-5">
          <h1>Recent Discussions</h1>
          <Card
            body
            style={{
              fontSize: "22px",
              height: "400px",
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Card.Title>The Midnight Library</Card.Title>
            <Card.Text>
            By BookLover21: I’m diving into "The Midnight Library" and looking to make the most out of Nora Seed’s journey through her many lives. For those who’ve read it, what are your thoughts on the most impactful choices Nora could make? How did you find the exploration of alternate lives affected the overall story? Share your insights and favorite moments from the book to help others get the best experience!
            </Card.Text>
            </Card>
        </div>

        <div className="mt-3">
          <Button
            variant="primary"
            type="submit"
            style={{
              marginRight: "10px",
              fontSize: "20px",
              backgroundColor: "green",
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)",
            }}
          >
            UpVote
            <FontAwesomeIcon
              icon={faThumbsUp}
              style={{ paddingLeft: "10px" }}
            />
          </Button>
          <Button
            variant="primary"
            type="submit"
            style={{
              marginRight: "10px",
              fontSize: "20px",
              backgroundColor: "red",
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)",
            }}
          >
            DownVote
            <FontAwesomeIcon
              icon={faThumbsDown}
              style={{ paddingLeft: "10px" }}
            />
          </Button>
          <Button
            variant="primary"
            type="submit"
            style={{
              fontSize: "20px",
              backgroundColor: "Orange",
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)",
            }}
          >
            Comment
            <FontAwesomeIcon icon={faComment} style={{ paddingLeft: "10px" }} />
          </Button>
        </div>
      </Form>

      <Form style={{ fontFamily: "Poppins", padding: "100px" }}>
        <div>
          <Card
            body
            style={{
              fontSize: "22px",
              height: "400px",
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)",
            }}
          >
           <Card.Title>Where the Crawdads Sing</Card.Title>
          <Card.Text>
          By NatureFan87: "Where the Crawdads Sing" is a fantastic blend of mystery and nature. For those who have read it, what are your theories on the true identity of the murderer? How do you think the setting influenced the plot and character development? Let’s discuss the clues and evidence that led to the reveal and share our thoughts on Kya’s survival instincts and the book’s emotional impact.
          </Card.Text>

          </Card>
        </div>

        <div className="mt-3">
          <Button
            variant="primary"
            type="submit"
            style={{
              marginRight: "10px",
              fontSize: "20px",
              backgroundColor: "green",
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)",
            }}
          >
            UpVote
            <FontAwesomeIcon
              icon={faThumbsUp}
              style={{ paddingLeft: "10px" }}
            />
          </Button>
          <Button
            variant="primary"
            type="submit"
            style={{
              marginRight: "10px",
              fontSize: "20px",
              backgroundColor: "red",
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)",
            }}
          >
            DownVote
            <FontAwesomeIcon
              icon={faThumbsDown}
              style={{ paddingLeft: "10px" }}
            />
          </Button>
          <Button
            variant="primary"
            type="submit"
            style={{
              fontSize: "20px",
              backgroundColor: "Orange",
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)",
            }}
          >
            Comment
            <FontAwesomeIcon icon={faComment} style={{ paddingLeft: "10px" }} />
          </Button>
        </div>
      </Form>

      <div>
        <Button
          variant="success"
          style={{
            position: "fixed",
            width: "50px",
            height: "50px",
            right: "20px",
            bottom: "30px",
            zIndex: "9999",
            borderRadius: "50%",
          }}
          onClick={() => setModalShow(true)}
        >
          {" "}
          <FontAwesomeIcon icon={faPenToSquare} />
        </Button>
      </div>
      <Modal1 show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default Discussion;
