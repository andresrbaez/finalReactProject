import React from "react";
import { Card, Button, Form } from "react-bootstrap";

const SignUp = () => {
  return (
    <div className="login-card">
      <Card style={{ width: "30rem", height: "auto", boxShadow: "0 2px 4px #2224261f,0 2px 10px #22242626"}}>
        <Card.Text style={{ padding: "30px 20px 0px 20px", fontSize: "26px" }}>
          <strong>Sign Up</strong>
        </Card.Text>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Phone (10 characters)</Form.Label>
              <Form.Control type="tel" placeholder="(123) 456-7890" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </Form>
          <Card.Text style={{ fontSize: "16px", marginTop: "10px" }}>
            Already have an account?{"  "}
            <Card.Link href="/#/login">Log in</Card.Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SignUp;
