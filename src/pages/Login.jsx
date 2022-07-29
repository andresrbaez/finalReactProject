import React from "react";
import { Card, Button, Form } from "react-bootstrap";

const Login = () => {
  return (
    <div className="login-card">
      <Card style={{ width: "30rem", height: "auto", boxShadow: "0 2px 4px #2224261f,0 2px 10px #22242626" }}>
        <Card.Text style={{ padding: "30px 20px 0px 20px", fontSize: "26px" }}>
          <strong>Welcome! Enter your email and password to continue</strong>
        </Card.Text>
        <div className="test-data">
            <b className="b-data">Test data</b>
            <div className="field">
            <i className='bx bxs-envelope margin-icon'></i>
                example@example.com
            </div>
            <div className="field">
            <i className='bx bxs-lock-alt margin-icon'></i>
                example1234
            </div>

        </div>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
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
