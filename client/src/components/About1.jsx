import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import {
  FaAddressCard,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
const About1 = () => {
  const sectionStyle = {
    backgroundColor: "#f8f9fa",
    padding: "50px 0",
  };
  return (
    <>
      <div style={sectionStyle}>
        <Container className="text-center">
          <Row>
            <Col>
              <Container>
                <FaAddressCard size={50} />
                <h4>About Us</h4>
                <p>
                We are a company that specializes in renting and reviewing books. Discover great rental deals on a wide selection of books. You can also read reviews and see what others have to say about your favorite titles.
                </p>
              </Container>
            </Col>
            <Col>
              <Container>
                <FaEnvelope size={50} />
                <h4>Contact Us</h4>
                <p>
                  Need help? Contact us today to get started.
                  <br />
                  <b>Phone: +8801685793766</b>
                  <br />
                  <b>email: dummy@gmail.com</b>
                </p>
              </Container>
            </Col>
            <Col>
              <Container>
                <h4>Follow Us</h4>
                <a href="https://www.facebook.com">
                  <FaFacebook size={30} />
                </a>
                <a href="https://www.twitter.com">
                  <FaTwitter size={30} />
                </a>
                <a href="https://www.instagram.com">
                  <FaInstagram size={30} />
                </a>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default About1;
