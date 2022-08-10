import axios from "axios";
import React from "react";
import { Card, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const { register, handleSubmit } = useForm();



  const submit = (data) => {
    axios.post(`https://ecommerce-api-react.herokuapp.com/api/v1/users`, data)
      .then((res) => {
        navigate("/");
        localStorage.setItem("token", res.data.data.token);
        console.log(res.data.data.token);
      })
      .catch(error => console.error(error.response))

      // reset({
      //   email: "",
      //   text: "",
      //   password: "",
      //   tel: ""
      // });
    }


  return (
    <div className="login-card">
      <Card style={{ width: "30rem", height: "auto", boxShadow: "0 2px 4px #2224261f,0 2px 10px #22242626"}}>
        <Card.Text style={{ padding: "30px 20px 0px 20px", fontSize: "26px" }}>
          <strong>Sign Up</strong>
        </Card.Text>
        <Card.Body>
          <Form onSubmit={handleSubmit(submit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control 
              type="email" 
              {...register("email")}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" {...register("firstName")}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" {...register("lastName")}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" {...register("password")}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Phone (10 characters)</Form.Label>
              <Form.Control type="tel" placeholder="(123) 456-7890" {...register("phone")}/>
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
