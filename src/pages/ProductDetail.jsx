import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsThunk } from "../store/slices/products.slice";
import { Card, Carousel, Col, Row } from "react-bootstrap";
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

  // console.log(productDetail);

  return (
    <div>
      {/* <h1>{productDetail?.title}</h1>
      <img src={productDetail?.productImgs} style={{ width: "200px" }} />
      <p>{productDetail?.description}</p> */}

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
          <strong>Price: </strong>
          {productDetail?.price}
          <h4>Description</h4>
          <p>{productDetail?.description}</p>
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
