import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterCategoryThunk,
  filterProductThunk,
  getProductsThunk,
} from "../store/slices/products.slice";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Col,
  Row,
  Button,
  Form,
  InputGroup,
  ListGroup,
  Accordion,
} from "react-bootstrap";
import axios from "axios";
import { addProductsThunk } from "../store/slices/cart.slice";
import { setIsLoading } from "../store/slices/isLoading.slice";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [categories, setCategories] = useState([]);
  // const [productDetail, setProductDetail] = useState({});


  const products = useSelector((state) => state.products);

  const search = () => {
    dispatch(filterProductThunk(searchValue));
    setSearchValue("")
  }

  const addToCart = (id) => {
    const cart = {
      id: id,
      quantity: 1
    }
    dispatch(addProductsThunk(cart))
  }

  useEffect(() => {
    dispatch(getProductsThunk());
    dispatch(filterProductThunk());

    axios
      .get(
        "https://ecommerce-api-react.herokuapp.com/api/v1/products/categories"
      )
      .then((res) => setCategories(res.data.data.categories));
  }, []);


  const [fromInput, setFromInput] = useState("");
  const [toInput, setToInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    setFilteredProducts(products)
  }, [products]);


  const filterPriceProduct = () => {
    
    const filter = products.filter(product => product?.price >= parseInt(fromInput) && product?.price <= parseInt(toInput) )

    setFilteredProducts(filter)

  }

  // console.log(products[0]?.price);






  return (
    <div>
      <Row>
        <Col lg={3} className="accordions">



          <Accordion defaultActiveKey="0" style={{marginBottom: "10px"}}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Price</Accordion.Header>
              <Accordion.Body>
                <InputGroup className="mb-3">
                <Form.Label htmlFor="basic-url" style={{width: "50px"}}>From</Form.Label>
                  <InputGroup.Text className="hide-labels">$</InputGroup.Text>
                  <Form.Control 
                  aria-label="Amount (to the nearest dollar)" 
                  onChange={(e) => setFromInput(e.target.value)}
                  value={fromInput}
                  />
                  <InputGroup.Text className="hide-labels">.00</InputGroup.Text>
                </InputGroup>
                <InputGroup className="mb-3">
                <Form.Label htmlFor="basic-url" style={{width: "50px"}}>To</Form.Label>
                  <InputGroup.Text className="hide-labels">$</InputGroup.Text>
                  <Form.Control 
                  aria-label="Amount (to the nearest dollar)" 
                  onChange={(e) => setToInput(e.target.value)}
                  value={toInput}
                  />
                  <InputGroup.Text className="hide-labels">.00</InputGroup.Text>
                </InputGroup>
                <div className="filter-btn">
                  <button type="button" className="btn btn-primary" onClick={filterPriceProduct}>Filter price</button>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>




          <Accordion defaultActiveKey="0" className="categories-accordion">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Categories</Accordion.Header>
              <Accordion.Body>
                <ListGroup variant="flush">
                <ListGroup.Item
                      onClick={() => dispatch(getProductsThunk())}
                      style={{ cursor: "pointer" }}
                    >
                      All
                    </ListGroup.Item>
                  {categories.map((category) => (
                    <ListGroup.Item
                      key={category.id}
                      onClick={() => dispatch(filterCategoryThunk(category.id))}
                      style={{ cursor: "pointer" }}
                    >
                      {category.name}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>



        <Col>
          <InputGroup className="mb-3 input-search">
            <Form.Control
              placeholder="What are you looking for?"
              aria-label="What are you looking for?"
              aria-describedby="basic-addon2"
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
            />
            <Button
              variant="outline-dark"
              onClick={search}
              id="button-addon1"
              style={{ background: "#2c3e50", color: "#fff" }}
            >
              Search
            </Button>
          </InputGroup>




          <Row xs={1} md={3} className="g-4">
            {filteredProducts.map((product) => (
              <Col key={product.id}>
                <Card
                  style={{ minHeight: "360px" }}
                >
                  <Card.Img
                    onClick={() => navigate(`/products/${product.id}`)}
                    variant="top"
                    src={product.productImgs}
                    className="img-products"
                  />
                  <Card.Img
                    onClick={() => navigate(`/products/${product.id}`)}
                    variant="top"
                    src={product.productImgs[1]}
                    className="img-products-hover"
                  />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>Price: ${product.price}</Card.Text>
                    <button 
                    onClick={() => addToCart(product.id)}
              
                    className="add-cart-btn"
                    >
                      <i
                        className="bx bxs-cart icon-nav"
                        style={{ color: "#ffffff" }}
                      ></i>
                    </button>
                    <button 
                    onClick={() => addToCart(product.id)}
              
                    className="add-cart-btn-hover"
                    >
                      <i className='bx bx-cart-add icon-nav-hover' 
                        style={{ color: "#ffffff" }}
                      ></i>
                    </button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
