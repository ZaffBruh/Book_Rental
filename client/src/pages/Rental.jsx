import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Card,
  Form,
  InputGroup,
  Navbar,
  Pagination,
} from "react-bootstrap";
import Axios from "axios";
import Navbar1 from "../components/Navbar1";
import Modal2 from "../components/Modal2";

const Rental = () => {
  const [review, setReview] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [modalShow, setModalShow] = useState(false);

  const itemsPerPage = 6;

  const getFilteredReviews = () => {
    return review.filter(
      (item) =>
        item.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.Genre.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    const totalPages = Math.ceil(getFilteredReviews().length / itemsPerPage);
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleFirst = () => setCurrentPage(1);

  const handleLast = () => {
    const totalPages = Math.ceil(getFilteredReviews().length / itemsPerPage);
    setCurrentPage(totalPages);
  };

  const handlePageClick = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = getFilteredReviews().slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  useEffect(() => {
    Axios.get("http://localhost:5000/reviews").then((response) => {
      setReview(response.data);
    });
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  return (
    <>
      <Navbar1 />
      <Navbar
        bg="transparent"
        expand="lg"
        variant="dark"
        className="shadow-lg"
        style={{
          background:
            "linear-gradient(to right, #ff9a9e, #fad0c4, #fbc2eb, #a18cd1)",
        }}
      >
        <Container fluid>
          <Navbar.Brand style={{ color: "#4b0082", fontWeight: "bold" }}>
            What do you want to buy?
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
              <InputGroup>
                <Form.Control
                  type="search"
                  placeholder="Search your game here"
                  className="me-2"
                  aria-label="Search"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  style={{
                    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)",
                    borderColor: "#ff9a9e",
                    backgroundColor: "#fff",
                    color: "#4b0082",
                  }}
                />
              </InputGroup>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Pagination
        className="justify-content-end"
        style={{
          paddingRight: "23px",
          paddingTop: "23px",
          background: "#fff",
          borderRadius: "10px",
        }}
      >
        <Pagination.First onClick={handleFirst} disabled={currentPage === 1} />
        <Pagination.Prev onClick={handlePrev} disabled={currentPage === 1} />
        {Array.from(
          { length: Math.ceil(getFilteredReviews().length / itemsPerPage) },
          (_, i) => i + 1
        ).map((pageNumber) => (
          <Pagination.Item
            key={pageNumber}
            active={pageNumber === currentPage}
            onClick={() => handlePageClick(pageNumber)}
            style={{
              backgroundColor: pageNumber === currentPage ? "#fbc2eb" : "",
              borderColor: "#fbc2eb",
              color: pageNumber === currentPage ? "#4b0082" : "#ff9a9e",
            }}
          >
            {pageNumber}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={handleNext}
          disabled={
            currentPage === Math.ceil(getFilteredReviews().length / itemsPerPage)
          }
        />
        <Pagination.Last
          onClick={handleLast}
          disabled={
            currentPage === Math.ceil(getFilteredReviews().length / itemsPerPage)
          }
        />
      </Pagination>

      <Container style={{ backgroundColor: "#fff", paddingBottom: "50px" }}>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {currentItems.map((item, index) => (
            <div className="col" key={index}>
              <Card
                className="d-flex h-100"
                style={{
                  boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)",
                  width: "100%",
                  border: "solid 3px #fad0c4",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  borderRadius: "12px",
                  backgroundColor: "#fff",
                }}
                onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
              >
                <Card.Body className="d-flex flex-column">
                  <div style={{ display: "flex" }}>
                    <img
                      src={item.Images}
                      style={{
                        height: "200px",
                        width: "60%",
                        borderRadius: "10px",
                      }}
                      alt=""
                    />
                    <div
                      style={{
                        paddingLeft: "5%",
                        width: "40%",
                        color: "#4b0082",
                      }}
                    >
                      <h4
                        style={{
                          textDecoration: "underline",
                          color: "#fbc2eb",
                          wordWrap: "break-word",
                        }}
                      >
                        {item.Name}
                      </h4>
                      <b style={{ wordWrap: "break-word" }}>{item.Genre}</b>
                      <p style={{ wordWrap: "break-word", color: "#4b0082" }}>
                        <span style={{ fontWeight: "bold" }}>
                          For One Week:{" "}
                        </span>
                        {item.Price1} Tk
                        <br />
                        <span style={{ fontWeight: "bold" }}>
                          For Two Weeks:{" "}
                        </span>
                        {item.Price2} Tk
                        <br />
                        <span style={{ fontWeight: "bold" }}>
                          For One Month:{" "}
                        </span>
                        {item.Price3} Tk
                        <br />
                        <span style={{ fontWeight: "bold" }}>
                          Buying Price:{" "}
                        </span>
                        {item.Price4} Tk
                      </p>
                    </div>
                  </div>
                  <div className="mt-auto"></div>
                  <Button
                    variant="outline-light"
                    onClick={() => setModalShow(true)}
                    style={{
                      background: "#fbc2eb",
                      borderColor: "#fbc2eb",
                      color: "#4b0082",
                      transition: "background-color 0.3s ease, color 0.3s ease",
                      borderRadius: "8px",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.background = "#ff9a9e")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.background = "#fbc2eb")
                    }
                  >
                    Buy or Rent This Game
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Container>
      <Modal2 show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default Rental;
