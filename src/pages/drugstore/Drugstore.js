import React, { useContext } from "react"; 
import { Button, Card, ThemeProvider, Container, Row, Col } from "react-bootstrap";
// import { Cart2, Cart3 } from 'react-bootstrap-icons';
// import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./Drugstore.css";
import { proto } from './data';
import ProductContextProvider from "./productContext";
import ProductItem from "./ProductItem";
import QuantityButton from "./QuantityButton";

// const { products } = useContext(ProductContext);
const Drugstore = () => { 
    const generateItem = () => {
        return proto.map((item) => 
            <ProductItem  drugItem={item} />
    );
    };
    return (
    <>
        <Navbar />
            <ProductContextProvider>
                <Row className="">
                <Col className="col-filter d-flex justify-content-center" lg="2">
                    <Card className="productItem " style={{ width: 250, height: 350}}>
                        <div>
                            <QuantityButton></QuantityButton>    
                        </div>
                         
                    </Card>
                </Col>
                <Col className="col-druglist" lg="10">
                    <Row className="drugDisplay">
                        {generateItem()}    
                    </Row>
                </Col>
                </Row>
            </ProductContextProvider>    
    </>
    );
}; 

export default Drugstore; 
