import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsThunk } from "../store/slices/products.slice";
import { Carousel, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const allProducts = useSelector((state) => state.products);
  const [productDetail, setProductDetail] = useState({});
  const [ suggestedProducts, setSuggestedProducts ] = useState([])

  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    const productsFound = allProducts.find(
      (productItem) => productItem.id === Number(id)
    );
    setProductDetail(productsFound);

    const filteredProducts = allProducts.filter(productItem => productItem.category.id === productsFound.category.id)
    setSuggestedProducts(suggestedProducts)
    
  }, [allProducts]);

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);

  console.log(productDetail);

  return (
    <div>
      {/* <h1>{productDetail?.title}</h1>
      <img src={productDetail?.productImgs} style={{ width: "200px" }} />
      <p>{productDetail?.description}</p> */}

      <Row>
        <Col lg={3}>
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
            <strong>Price: </strong>{productDetail?.price}
            <p>{productDetail?.description}</p>
            <ul>
              {
                suggestedProducts.map(products => (
                  <div>
                    {products.title}
                  </div>
                ))
              }
            </ul>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetail;
