import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsThunk } from "../store/slices/products.slice";
import { Button, Card, Carousel, Col, Row, ButtonGroup } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";


const ProductDetail = () => {
  const allProducts = useSelector((state) => state.products);
  const [productDetail, setProductDetail] = useState({});
  const [suggestedProducts, setSuggestedProducts] = useState([]);

  const navigate = useNavigate();

  const { id } = useParams();

  const dispatch = useDispatch();

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
          {/* <h4>Description</h4> */}
          <p style={{textAlign: "justify"}}>{productDetail?.description}</p>
          <div className="container-price">
            <div>
              <small  className="small-txt">Price: </small>
              <div>
                $ {productDetail?.price}
              </div>
            </div>
            <div className="quantity-btn">
              <small className="small-txt">Quantity</small>
              <div>
                <ButtonGroup size="sm">
                  <Button style={{fontSize: "18px"}}> <i className='bx bx-minus'></i> </Button>
                  <div className="quantity-box">
                    <small>
                      1
                    </small>
                  </div>
                  <Button style={{fontSize: "18px"}}> <i className='bx bx-plus'></i> </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <div>
        <div>
          <h4>Suggested Products</h4>
        </div>
        <div>
        <Row xs={1} md={3} className="g-4">
            {suggestedProducts.map((product) => (
              <Col key={product.id}>
                <Card
                  onClick={() => navigate(`/products/${product.id}`)}
                  style={{ cursor: "pointer", minHeight: "360px"}}
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
