import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPurchasesThunk } from "../store/slices/purchases.slice";

const Purchases = () => {
  const dispatch = useDispatch();

  const purchases = useSelector((state) => state.purchases);


  useEffect(() => {
    dispatch(getPurchasesThunk());
  }, []);
  return (
    <div className="purchases-space">
        <div className="purchases-title">
            <small>Home <i className='bx bxs-circle circle-font'></i> Purchases</small>
        </div>
        <div className="purchases-title">
            <h3>My Purchases</h3>
        </div>
        <div className="purchases-cards">
            {purchases.map((purchase) => (
                    <Card key={purchase.id} style={{margin: "10px 0px"}}>
                    {/* <Card.Header as="h5">{purchase?.updatedAt}</Card.Header> */}
                    <Card.Header as="h5">{formatDate(purchase?.createdAt)}</Card.Header>
                    <Card.Body style={{padding: "15px"}}>
                            {/* <Card.Title>{purchase?.cart?.products[0]?.title}</Card.Title> */}
                            <div className="purchases-info">
                                <div style={{width: "65%", marginLeft: "85px"}}>
                                <Card.Text>
                                    {purchase?.cart?.products[0]?.title}
                                </Card.Text>
                                </div>
                                <div style={{width: "20%"}}>
                                    <Card style={{width: "45px", height: "45px", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                        <Card.Body>
                                            <Card.Text>
                                                {/* <b>Quantity: </b>  */}
                                                {purchase?.cart.products[0]?.productsInCart.quantity}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div style={{width: "15%"}}>
                                    <Card.Text>
                                        <b>$ {purchase?.cart.products[0]?.price}</b>
                                    </Card.Text>
                                </div>
                            </div>
                    </Card.Body>
                </Card>
            ))}
        </div>
    </div>
  );
};

export default Purchases;
