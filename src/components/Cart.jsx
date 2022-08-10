import React, { useEffect, useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartThunk } from "../store/slices/cart.slice";

const Cart = ({ show, handleClose }) => {
  const cart = useSelector((state) => state.cart);

  const navigate = useNavigate()

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartThunk());
  }, []);

//   console.log(cart);

  return (
    <>
      <Offcanvas show={show} placement="end" onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            
                {
                    cart.map(cartSide => (
                        <li key={cartSide.id} 
                        className="list-cart" 
                        >
                            <small>{cartSide.brand}</small>
                            <p 
                            className="p-cart"
                            style={{cursor: "pointer"}}
                            onClick={() => navigate(`/products/${cartSide.id}`)}
                            >{cartSide.title}</p>
                            <div className="cart-price-info">
                                <div className="quantity-cart">
                                    <b>{cartSide.productsInCart.quantity}</b>
                                </div>
                                <div>
                                    <small className="total-cart-item">Total: </small> <b>{cartSide.price}</b>
                                </div>
                            </div>

                        </li>
                    ))
                }
            


          </div>
        </Offcanvas.Body>
        <div className="footer-cart">
                <div className="total-cart">
                    <p>Total: </p> <b>$000</b>
                </div>
                <div className="d-grid gap-2">
                <Button
                    size="lg"
                >
                    Checkout
                </Button>
                </div>
            </div>
      </Offcanvas>
    </>
  );
};

export default Cart;
