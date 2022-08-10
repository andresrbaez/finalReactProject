import axios from "axios";
import React, { useState } from "react";
import { Card, Button, Form, Modal, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();

  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);

  const toggleIsVisible = () => setIsVisible(!isVisible);

  // const [modalShow, setModalShow] = React.useState(false);

  const submit = (data, props) => {
    // alert("Hice submit")
    // console.log(data);
    axios
      .post(
        `https://ecommerce-api-react.herokuapp.com/api/v1/users/login`,
        data
      )
      .then((res) => {
        navigate("/");
        localStorage.setItem("token", res.data.data.token);
        console.log(res.data.data.token);
      })
      .catch((error) => {
        if (error.response.status === 404) {
          alert("Credenciales inválidas");
          // return (
          //   <>
          //     <Modal
          //       {...props}
          //       size="lg"
          //       aria-labelledby="contained-modal-title-vcenter"
          //       centered
          //     >
          //       <Modal.Header closeButton>
          //         <Modal.Title id="contained-modal-title-vcenter">
          //           Modal heading
          //         </Modal.Title>
          //       </Modal.Header>
          //       <Modal.Body>
          //         <h4>Centered Modal</h4>
          //         <p>
          //           Cras mattis consectetur purus sit amet fermentum. Cras justo
          //           odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
          //           risus, porta ac consectetur ac, vestibulum at eros.
          //         </p>
          //       </Modal.Body>
          //       <Modal.Footer>
          //         <Button onClick={props.onHide}>Close</Button>
          //       </Modal.Footer>
          //     </Modal>
          //   </>
          // );
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
                style={{cursor: "pointer", backgroundColor: "white", color: "gray"}}
                >
                  <div
                    type="checkbox"
                    className="toggle-password"
                  >
                    {isVisible === false ? (
                      <i className="bx bx-show icon-password"></i>
                    ) : (
                      <i className="bx bx-hide icon-password"></i>
                    )}
                  </div>
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
          <Card.Text style={{ fontSize: "16px", marginTop: "10px" }}>
            Don't have an account?{"  "}
            <Card.Link href="/#/signup">Sign Up</Card.Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    // <div>
    //     <h1>Login</h1>

    // </div>
  );
};

export default Login;
