import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../pictures/icon.jpeg";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Image } from "react-bootstrap";

const Navbar1 = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="./home">
            <img
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />
            BookFiX
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="./home">Home</Nav.Link>
            <Nav.Link href="./rental">Buy/Rental</Nav.Link>
            <Nav.Link href="./review">Review</Nav.Link>
            <Nav.Link href="./discussion">Discussion</Nav.Link>
            {isAuthenticated && (
              <Nav.Item>
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip id="tooltip-bottom">{user.name}</Tooltip>}
                >
                  <Image
                    src={user.picture}
                    roundedCircle
                    //alt={user.name}
                    width="30"
                    height="30"
                    className="mt-2 me-2"
                  />
                </OverlayTrigger>
                {/* <span style={{ color: "white" }}>{user.name}</span> */}
              </Nav.Item>
            )}
            {isAuthenticated ? (
              <Button
                variant="outline-warning"
                onClick={() =>
                  logout({
                    logoutParams: { returnTo: window.location.origin },
                  })
                }
              >
                Logout
              </Button>
            ) : (
              <Button
                variant="outline-warning"
                onClick={() => loginWithRedirect()}
              >
                Login
              </Button>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbar1;
