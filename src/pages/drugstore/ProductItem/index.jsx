import React from "react";
import { useContext } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { ProductContext } from "../productContext";
import "../Drugstore.css";

const ProductItem = (props) => {
    const { dispatch } = useContext(ProductContext);
    const item = props.drugItem;
    return  <Col>
                <Card className="productItem " style={{ width: 350, height: 500}}>
                    <Card.Body>
                        <div className="drugImage"/>
                        <Card.Title className="cardTitle">{item.drugName}</Card.Title>
                        <Card.Text>
                            {item.price}
                        </Card.Text>
                        <div className="drugCardbtn">
                            <Button className="buyBtn" 
                                onClick={ e => {
                                    e.preventDefault();
                                    const chosenItem = {
                                        id: item._id, 
                                        name: item.drugName, 
                                        price: item.price,
                                    };
                                    const actionCart = {
                                        actionType: 'ADD_PRODUCT_TO_CART',
                                        chosenItem,  
                                    };
                                    dispatch(actionCart);
                                }}    
                                    >    
                                    Buy Item
                            </Button>
                            <Button className="infoBtn">
                            More information
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>  
}
export default ProductItem;
