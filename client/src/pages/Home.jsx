import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Navbar1 from "../components/Navbar1";
import About1 from "../components/About1";
import { Container, Row, Modal, Button, Form, Alert } from "react-bootstrap";
import pic1 from "../pictures/1984.jpg";
import pic2 from "../pictures/catcher_in_the_rye.jpg";
import pic3 from "../pictures/pride-and-prejudice-9781471134746_hr.jpg";
import pic4 from "../pictures/the-great-gatsby-9781982146702_xlg.jpg";
import pic5 from "../pictures/To_Kill_a_Mockingbird_(first_edition_cover).jpg";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    option: "Purchase",
    paymentMethod: "bKash",
  });
  const [purchaseStatus, setPurchaseStatus] = useState(""); // Track purchase status

  const books = [
    {
      title: "1984",
      description: "A dystopian social science fiction novel by George Orwell.",
      img: pic1,
    },
    {
      title: "The Catcher in the Rye",
      description: "A novel by J.D. Salinger, partially published in 1945-1946.",
      img: pic2,
    },
    {
      title: "Pride and Prejudice",
      description: "A romantic novel by Jane Austen published in 1813.",
      img: pic3,
    },
    {
      title: "The Great Gatsby",
      description: "A novel written by American author F. Scott Fitzgerald.",
      img: pic4,
    },
    {
      title: "To Kill a Mockingbird",
      description: "A novel by Harper Lee published in 1960.",
      img: pic5,
    },
  ];

  const handleShowModal = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedBook(null);
    setFormData({
      name: "",
      email: "",
      option: "Purchase",
      paymentMethod: "bKash",
    });
    setPurchaseStatus(""); // Reset the status
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePurchase = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (formData.name && formData.email && formData.option && formData.paymentMethod) {
      setPurchaseStatus("success");
    } else {
      setPurchaseStatus("error");
    }
  };

  const cardStyle = {
    width: "300px",
    borderRadius: "15px",
    overflow: "hidden",
    background: "linear-gradient(to right, #fbc2eb, #a6c1ee)",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
    margin: "15px",
    transition: "transform 0.3s ease-in-out",
    cursor: "pointer",
  };

  const cardHoverStyle = {
    transform: "scale(1.05)",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
  };

  const cardImageStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    transition: "transform 0.3s ease-in-out",
  };

  const cardContentStyle = {
    padding: "20px",
    color: "#333",
    textAlign: "center",
  };

  const buttonStyle = {
    backgroundColor: "#a18cd1",
    border: "none",
    marginTop: "10px",
    transition: "background-color 0.3s ease-in-out, transform 0.3s ease-in-out",
  };

  const buttonHoverStyle = {
    backgroundColor: "#ff758c",
    transform: "scale(1.1)",
  };

  return (
    <div
      style={{
        background: "linear-gradient(to right, #ff9a9e, #fad0c4, #fbc2eb, #a18cd1)",
        minHeight: "100vh",
        color: "#333",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Navbar */}
      <div>
        <Navbar1 />
      </div>

      {/* Carousel */}
      <div>
        <Carousel fade>
          {books.slice(0, 3).map((book, index) => (
            <Carousel.Item key={index} interval={2000}>
              <img
                className="d-block w-100"
                src={book.img}
                alt={book.title}
                style={{
                  height: "700px",
                  objectFit: "cover",
                  borderRadius: "15px",
                }}
              />
              <Carousel.Caption>
                <h3>{book.title}</h3>
                <p>{book.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* Cards Section */}
      <div
        style={{
          textAlign: "center",
          margin: "50px 0",
          padding: "20px",
          background: "linear-gradient(to right, #ff758c, #ff7eb3)",
          borderRadius: "15px",
          color: "#fff",
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
        }}
      >
        <h2 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "20px" }}>
          Favorite Choices
        </h2>
        <p style={{ fontSize: "18px", marginBottom: "30px" }}>
          Explore our top book selections carefully curated for avid readers.
        </p>
      </div>

      <Container>
        <Row className="d-flex justify-content-center">
          {books.map((book, index) => (
            <div
              key={index}
              style={cardStyle}
              onMouseEnter={(e) =>
                Object.assign(e.currentTarget.style, cardHoverStyle)
              }
              onMouseLeave={(e) =>
                Object.assign(e.currentTarget.style, {
                  transform: "scale(1)",
                  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
                })
              }
            >
              <img
                src={book.img}
                alt={book.title}
                style={cardImageStyle}
              />
              <div style={cardContentStyle}>
                <h3>{book.title}</h3>
                <p>{book.description}</p>
                <Button
                  variant="primary"
                  style={buttonStyle}
                  onMouseEnter={(e) => Object.assign(e.currentTarget.style, buttonHoverStyle)}
                  onMouseLeave={(e) =>
                    Object.assign(e.currentTarget.style, { backgroundColor: "#a18cd1", transform: "scale(1)" })
                  }
                  onClick={() => handleShowModal(book)}
                >
                  Show More
                </Button>
              </div>
            </div>
          ))}
        </Row>
      </Container>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedBook ? `${selectedBook.title} - Purchase or Rent` : ""}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedBook && (
            <Form onSubmit={handlePurchase}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formOption">
                <Form.Label>Choose an Option</Form.Label>
                <Form.Control
                  as="select"
                  name="option"
                  value={formData.option}
                  onChange={handleInputChange}
                >
                  <option>Purchase</option>
                  <option>Rent</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPaymentMethod">
                <Form.Label>Payment Method</Form.Label>
                <Form.Control
                  as="select"
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleInputChange}
                >
                  <option>bKash</option>
                  <option>Credit Card</option>
                </Form.Control>
              </Form.Group>

              {/* Success/Error Message */}
              {purchaseStatus && (
                <Alert variant={purchaseStatus === "success" ? "success" : "danger"}>
                  {purchaseStatus === "success" ? "Purchase successful!" : "Please fill all fields."}
                </Alert>
              )}

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          )}
        </Modal.Body>
      </Modal>

      {/* About Section */}
      <div>
        <About1 />
      </div>
    </div>
  );
};

export default Home;
