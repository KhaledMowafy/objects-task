import React, { useState } from "react";
import { Row, Col, Form, Card } from "react-bootstrap";
import { Outlet, useNavigate  } from "react-router-dom";
import logo from "../assets/objects.png";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import api from '../utils/api';
import "./styles/Nav.css";

const Nav = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState()

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const onSubmit = (dataForm) => {
    const formData = new FormData();

    formData.append("title", dataForm.title);
    formData.append("body", dataForm.body);
    formData.append("userId", 1);
 api
   .create(`https://jsonplaceholder.typicode.com/posts`, formData)
   .then((response) => {
     console.log(response)
     if (response.errors) {
        setError(response?.errors);
       
     } else if(response.id) {
      navigate(`/post/${response.id}`);
      closeModal();
     }
   })
   .catch((err) => console.log(err));
    console.log(dataForm);
  };
  return (
    <>
      <nav className="w-100 main-nav " id="desktop--nav">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="customStyles"
          contentLabel="Post Modal"
        >
          <Card className="w-100">
            <Card.Header className="d-flex justify-content-between">
              <h2>Post</h2>
              <span role="button" onClick={closeModal}> &#x2715;</span>
            </Card.Header>
            <Card.Body>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Row className="g-0 mb-3 d-flex justify-content-center align-items-center">
                <Col className="text-alternate">Title: </Col>
                <Col xl="12">
                  <Form.Control
                    type="text"
                    {...register("title", { required: true })}
                  />
                </Col>
              </Row>
              <Row className="g-0 mb-3 d-flex justify-content-center align-items-center">
                <Col className="text-alternate">Body: </Col>
                <Col xl="12">
                  <Form.Control
                    as="textarea"
                    rows={5}
                    {...register("body", { required: true })}
                  />
                </Col>
              </Row>
              <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-post">Submit</button>
              </div>
            </form>
            </Card.Body>
          </Card>
        </Modal>
        <div className="w-100 ps-3 d-flex h-100">
          <Row className="h-100 d-flex w-100">
            <Col xl="4" className="d-flex justify-content-center">
              <img src={logo} alt="logo" className="w-25 object-fit-contain" />
            </Col>
            <Col
              xl="4"
              className="d-flex justify-content-center align-items-center"
            >
              <h3>Social app</h3>
            </Col>
            <Col
              xl="4"
              className="d-flex align-items-center justify-content-end"
            >
              <button
                type="button"
                className="btn btn-post w-50"
                onClick={openModal}
              >
                Post
              </button>
            </Col>
          </Row>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Nav;
