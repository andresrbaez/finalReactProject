import axios from "axios";
import React, { useState } from "react";
import { Card, Button, Form, Modal, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import denied from '../images/close.png'

const Login = () => {
  const { register, handleSubmit, reset } = useForm();

  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);

  const toggleIsVisible = () => setIsVisible(!isVisible);

  const [modalShow, setModalShow] = useState(false);

  const submit = (data) => {
    axios
      .post(
        `https://e-commerce-api.academlo.tech/api/v1/users/login`,
        data
      )
      .then((res) => {
        navigate("/");
        localStorage.setItem("token", res.data.data.token);
        console.log(res.data.data.token);
      })
      .catch((error) => {
        if (error.response.status === 404) {
          setModalShow(true)
        }
      });
    reset({
      email: "",
      password: "",
    });
  };

  return (
    <div className="login-card">
      <Card
        style={{
          width: "30rem",
          height: "auto",
          boxShadow: "0 2px 4px #2224261f,0 2px 10px #22242626",
        }}
      >
        <Card.Text style={{ padding: "30px 20px 0px 20px", fontSize: "26px" }}>
          <strong>Welcome! Enter your email and password to continue</strong>
        </Card.Text>
        <div className="test-data">
          <b className="b-data">Test data</b>
          <div className="field">
            <i className="bx bxs-envelope margin-icon"></i>
            mason@gmail.com
          </div>
          <div className="field">
            <i className="bx bxs-lock-alt margin-icon"></i>
            mason1234
          </div>
        </div>
        <Card.Body>
          <Form onSubmit={handleSubmit(submit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                {...register("email")}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  type={isVisible ? "text" : "password"}
                  placeholder="Password"
                  {...register("password")}
                />
                <InputGroup.Text
                  id="basic-addon2"
                  onClick={toggleIsVisible}
                  style={{
                    cursor: "pointer",
                    backgroundColor: "white",
                    color: "gray",
                  }}
                >
                  <div type="checkbox" className="toggle-password">
                    {isVisible === false ? (
                      <i className="bx bx-show icon-password"></i>
                    ) : (
                      <i className="bx bx-hide icon-password"></i>
                    )}
                  </div>
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
            >
              Login
            </Button>
          </Form>
          <Card.Text style={{ fontSize: "16px", marginTop: "10px" }}>
            Don't have an account?{"  "}
            <Card.Link href="/#/signup">Sign Up</Card.Link>
          </Card.Text>
        </Card.Body>
      </Card>

      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-modal">
            <div className="img-container">
              <img src={denied} className="img-modal" alt="" />
            </div>
            <h4>
              Invalid credentials! Try again.
            </h4>
          </div>
        </Modal.Body>
      </Modal>
    </div>
    // <div>
    //     <h1>Login</h1>

    // </div>
  );
};

export default Login;
