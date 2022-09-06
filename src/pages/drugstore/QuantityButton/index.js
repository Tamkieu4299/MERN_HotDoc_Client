import React, { useContext } from 'react';
import { Button, Card, ThemeProvider, Container, Row, Col } from "react-bootstrap";
import { ProductContext } from '../productContext';
import { Cart2, Cart3 } from 'react-bootstrap-icons';
import "../Drugstore.css";

const QuantityButton = () => {
    const { products } = useContext(ProductContext);
    const productsQuantity = products.length;
    return (
             <Button
                size='sm'
                variant='outline'
                style={{ width: 60, display: 'flex', justifyContent: 'space-between' }}
            >
                <Cart3 size={20} color='coral' />
                <strong style={{ color: 'coral' }}>{productsQuantity}</strong>
            </Button>
    );
};
export default QuantityButton;