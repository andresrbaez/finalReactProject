import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterProductThunk, getProductsThunk } from "../store/slices/products.slice";
import { useNavigate } from "react-router-dom";
import { Card, Col, Row, Button, Form, InputGroup } from 'react-bootstrap'

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ searchValue, setSearchValue ] = useState("");

//   const submit = () => {
//     dispatch(filterProductThunk(searchValue))
//   }

  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductsThunk());
    dispatch(filterProductThunk())
  }, []);

//   console.log(products);

  return (
    <div>
      <h1>Home</h1>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="What are you looking for?"
          aria-label="What are you looking for?"
          aria-describedby="basic-addon2"
          onChange={e => setSearchValue(e.target.value)}
          value={searchValue}
        />
        <Button 
        variant="outline-dark" 
        onClick={() => dispatch(filterProductThunk(searchValue))}
        id="button-addon1"
        style={{background: '#2c3e50', color: '#fff'}}
        >
          Search
        </Button>
      </InputGroup>
      <Row xs={1} md={3} className="g-4" >
        {products.map((product) => (
          <Col key={product.id}>
            <Card onClick={() => navigate(`/products/${product.id}`)} style={{cursor: "pointer", minHeight: "380px"}}>
              <Card.Img variant="top" src={product.productImgs} className='img-products'/>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  Price: ${product.price}
                </Card.Text>
                    <button className="add-cart-btn">
                        <i className='bx bxs-cart icon-nav' 
                        style={{color:'#ffffff'}}
                        ></i>
                    </button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
