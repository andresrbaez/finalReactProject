import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsThunk } from "../store/slices/products.slice";
import {
  Button,
  Card,
  Carousel,
  Col,
  Row,
  ButtonGroup,
  Container,
} from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetail = () => {
  const allProducts = useSelector((state) => state.products);
  const [productDetail, setProductDetail] = useState({});
  const [suggestedProducts, setSuggestedProducts] = useState([]);

  const [ quantityCart, setQuantityCart ] = useState(1)

  const navigate = useNavigate();

  const { id } = useParams();

  const dispatch = useDispatch();

  const [counter, setCounter] = useState(1);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };

  const addToCart = () => {
    alert("Añadiendo a cart")
    const cart = {
      id: productDetail.id,
      quantity: quantityCart
    }
  }

  





  useEffect(() => {
    const productsFound = allProducts.find(
      (productItem) => productItem.id === Number(id)
    );
    setProductDetail(productsFound);

    const filteredProducts = allProducts.filter(
      (productItem) => productItem.category.id === productsFound.category.id
    );
    setSuggestedProducts(filteredProducts);
  }, [allProducts, id]);

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);

  return (
    <div>
      <Row>
        <Col lg={6}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={productDetail?.productImgs?.[0]}
                style={{ height: "400px", objectFit: "contain" }}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={productDetail?.productImgs?.[1]}
                style={{ height: "400px", objectFit: "contain" }}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={productDetail?.productImgs?.[2]}
                style={{ height: "400px", objectFit: "contain" }}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col>
          <h1>{productDetail?.title}</h1>
          <p style={{ textAlign: "justify" }}>{productDetail?.description}</p>
          <div className="container-price">
            <div>
              <small className="small-txt">Price: </small>
              <div>
                <strong>$ {productDetail?.price}</strong>
              </div>
            </div>
            <div className="quantity-btn">
              <small className="small-txt">Quantity</small>
              <div>
                <ButtonGroup size="sm">
                  <Button
                    disabled={counter === 1}
                    style={{ fontSize: "18px" }}
                    onClick={decrement}
                  >
                    <i className="bx bx-minus"></i>
                  </Button>
                  <div className="quantity-box">
                    <small>{counter}</small>
                  </div>
                  <Button style={{ fontSize: "18px" }} onClick={increment}>
                    <i className="bx bx-plus"></i>
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>


          <div className="d-grid gap-2 btn-add-product">
            <Button 
            onClick={addToCart} 
            size="lg" 
            style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "10px"}}
            >
              Add to Cart <i className='bx bxs-cart-add add-cart-icon'></i>
            </Button>
          </div>




        </Col>
      </Row>
      <div style={{ marginTop: "60px" }}>
        <div style={{ marginBottom: "20px" }}>
          <h4>Suggested Products</h4>
        </div>
        <div>
          <Row xs={1} md={3} className="g-4">
            {suggestedProducts.map((product) => (
              <Col key={product.id}>
                <Card
                  onClick={() => navigate(`/products/${product.id}`)}
                  style={{ cursor: "pointer", minHeight: "360px" }}
                >
                  <Card.Img
                    variant="top"
                    src={product.productImgs}
                    className="img-products"
                  />
                  <Card.Img
                    variant="top"
                    src={product.productImgs[1]}
                    className="img-products-hover"
                  />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>Price: ${product.price}</Card.Text>
                    <button className="add-cart-btn">
                      <i
                        className="bx bxs-cart icon-nav"
                        style={{ color: "#ffffff" }}
                      ></i>
                    </button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
