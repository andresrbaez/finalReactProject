import React, { useEffect, useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { buyCartThunk, deleteProductThunk, getCartThunk } from "../store/slices/cart.slice";

const Cart = ({ show, handleClose }) => {
  const cart = useSelector((state) => state.cart);

  const navigate = useNavigate()

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartThunk());
  }, []);

//   iteration to add product values
  const totalCart = () => {
    let total = 0
    for (let i=0; i<cart.length; i++){
        total += parseInt((cart[i].price)*(cart[i].productsInCart.quantity))
    }
    return total
  }

  const deleteFromCart = (productId) => {
    alert("Borraste el producto")
    dispatch(deleteProductThunk(productId))
  }

  

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
                            <div className="cart-delete">
                                <div>
                                    <small>{cartSide.brand}</small>
                                </div>
                                <div>
                                    <i className='bx bx-trash icon-cart' onClick={() => dispatch(deleteProductThunk(cartSide.id))}></i>
                                </div>
                            </div>

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
                                    <small className="total-cart-item">Total: </small> <b>{Number(cartSide.price)}</b>
                                </div>
                            </div>

                        </li>
                    ))
                }
            


          </div>
        </Offcanvas.Body>
        <div className="footer-cart">
                <div className="total-cart">
                    <p>Total: </p> <b>${totalCart()}</b>
                </div>
                <div className="d-grid gap-2">
                <Button size="lg"
                onClick={() => dispatch(buyCartThunk())}>
                    Checkout
                </Button>
                </div>
            </div>
      </Offcanvas>
    </>
  );
};

export default Cart;
