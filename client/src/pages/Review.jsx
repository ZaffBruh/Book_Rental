import { React, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { Form, InputGroup } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Navbar1 from "../components/Navbar1";
import Pagination from "react-bootstrap/Pagination";
import Axios from "axios";

const Review = () => {
  const [review, setReview] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 6;

  const getFilteredReviews = () => {
    return review.filter(
      (item) =>
        item.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.Genre.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    const totalPages = Math.ceil(getFilteredReviews().length / itemsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handleFirst = () => {
    setCurrentPage(1);
  };

  const handleLast = () => {
    const totalPages = Math.ceil(getFilteredReviews().length / itemsPerPage);
    setCurrentPage(totalPages);
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = getFilteredReviews().slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const pageNumbers = [];
  const totalPages = Math.ceil(getFilteredReviews().length / itemsPerPage);
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    Axios.get("http://localhost:5000/reviews").then((response) => {
      setReview(response.data);
    });
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handleClearClick = () => {
    setSearchTerm("");
  };

  return (
    <>
      <Navbar1 />
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand>Know Your Books</Navbar.Brand>
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
                  style={{ boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)" }}
                />
              </InputGroup>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Pagination
        className="justify-content-end"
        style={{ paddingRight: "23px", paddingTop: "23px" }}
      >
        <Pagination.First onClick={handleFirst} disabled={currentPage === 1} />
        <Pagination.Prev onClick={handlePrev} disabled={currentPage === 1} />
        {pageNumbers.map((pageNumber) => {
          if (
            pageNumber === 1 ||
            pageNumber === totalPages ||
            (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
          ) {
            return (
              <Pagination.Item
                key={pageNumber}
                active={pageNumber === currentPage}
                onClick={() => handlePageClick(pageNumber)}
              >
                {pageNumber}
              </Pagination.Item>
            );
          } else if (
            pageNumber === currentPage - 2 ||
            pageNumber === currentPage + 2
          ) {
            return <Pagination.Ellipsis key={pageNumber} />;
          } else {
            return null;
          }
        })}
        <Pagination.Next
          onClick={handleNext}
          disabled={currentPage === Math.ceil(review.length / itemsPerPage)}
        />
        <Pagination.Last
          onClick={handleLast}
          disabled={currentPage === Math.ceil(review.length / itemsPerPage)}
        />
      </Pagination>
      <div>
        {currentItems.map((item, index) => (
          <div style={{ padding: "15px" }} key={index}>
            <Card style={{ boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)" }}>
              <Card.Body>
                <h4 style={{ textDecoration: "underline" }}>{item.Name}</h4>
                <img
                  src={item.Images}
                  style={{ height: "500px", width: "50%" }}
                />
                <div>
                  <b>{item.Genre}</b>
                </div>
                <b>Critic Scores : </b>
                <p style={{ display: "inline", marginRight: "10px" }}>
                  {item.Score1}
                </p>
                <p style={{ display: "inline", marginRight: "10px" }}>
                  {item.Score2}
                </p>
                <p style={{ display: "inline", marginRight: "10px" }}>
                  {item.Score3}
                </p>
                <p style={{ display: "inline", marginRight: "10px" }}>
                  {item.Score4}
                </p>
                <div>
                  <b>Critics :</b>
                  <p>{item.Critic1}</p>
                  <p>{item.Critic2}</p>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <Pagination
        className="justify-content-end"
        style={{ paddingRight: "23px" }}
      >
        <Pagination.First onClick={handleFirst} disabled={currentPage === 1} />
        <Pagination.Prev onClick={handlePrev} disabled={currentPage === 1} />
        {pageNumbers.map((pageNumber) => {
          if (
            pageNumber === 1 ||
            pageNumber === totalPages ||
            (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
          ) {
            return (
              <Pagination.Item
                key={pageNumber}
                active={pageNumber === currentPage}
                onClick={() => handlePageClick(pageNumber)}
              >
                {pageNumber}
              </Pagination.Item>
            );
          } else if (
            pageNumber === currentPage - 2 ||
            pageNumber === currentPage + 2
          ) {
            return <Pagination.Ellipsis key={pageNumber} />;
          } else {
            return null;
          }
        })}
        <Pagination.Next
          onClick={handleNext}
          disabled={currentPage === Math.ceil(review.length / itemsPerPage)}
        />
        <Pagination.Last
          onClick={handleLast}
          disabled={currentPage === Math.ceil(review.length / itemsPerPage)}
        />
      </Pagination>
    </>
  );
};

export default Review;
